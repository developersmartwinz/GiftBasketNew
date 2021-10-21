import React, { useState, useEffect,Alert } from 'react';
import { View, Text,  StyleSheet, StatusBar,FlatList,SafeAreaView,Image,Platform  } from 'react-native';
import { Title,Paragraph,Card,Searchbar,TextInput,Button } from 'react-native-paper';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { useTheme } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import api from '../api';
import axios from 'axios';
import mime from "mime";
import {getObjectData} from '../storage';
import * as Animatable from 'react-native-animatable';

const EditProfileFormScreen = ({navigation}) => {
    const [data, setData] = React.useState([]);
    const [savedetail, setSavedetail] = React.useState({
        first_name: "",
        last_name: "",
        bio:"",
        isprocessing:false
    });

    

    const readData = async () => {
        const userdata = await getObjectData('userData');
        if(userdata !=null){
            setData(userdata);
            setSavedetail({
                first_name: userdata.first_name,
                last_name: userdata.last_name,
                bio: userdata.bio

            });
        }
    }
    useEffect(() => {
        readData();        
    });
 
    const textFirstNameChange = (val) => { 
               
        setSavedetail({
            ...savedetail,
            first_name: val,
            
        });
         
    }

    const textLastNameChange = (val) => {        
        setSavedetail({
            ...savedetail,
            last_name: val,
            
        });       
    }

    const textBioChange = (val) => {        
        setSavedetail({
            ...savedetail,
            bio: val,
            
        });
         
    }
    const editUserProfile = async () =>{
        var savedata = new FormData();
        setSavedetail({
            ...savedetail,
            isprocessing: true,
            
        }); 
        
        

        savedata.append('first_name',savedetail.first_name);
        savedata.append('last_name',savedetail.last_name);
        savedata.append('bio',savedetail.bio); 
        savedata.append('id',data.id); 

        try{
            let usersaved = await api.updateProfile(savedata);
            if(usersaved.status == 1){
                await AsyncStorage.setItem('userData', JSON.stringify(usersaved.data));                
                console.log("works");
                setSavedetail({
                    ...savedetail,
                    isprocessing: false,
                    
                }); 
                Alert.alert("Profile updated","Profile saved succefully");
            }
            }catch(err){
                setSavedetail({
                    ...savedetail,
                    isprocessing: true,
                    
                }); 
                //console.log(err);
            }

    }
    return(
        <View style={styles.main}>
            {savedetail.isprocessing ? 
            <View style={styles.row}><Text style={styles.errorMsg}>Processing</Text></View>     
            : null }       
            <View style={styles.row}>
                <TextInput
                    mode="outlined"
                    label="First Name"
                    placeholder="Type something"
                    value={savedetail ? savedetail.first_name : ''}
                    onChangeText={(val) => textFirstNameChange(val)}
                   
                />
            </View>
            <View style={styles.row}>
                <TextInput
                    mode="outlined"
                    label="Last Name"
                    placeholder="Type something"
                    value={savedetail ? savedetail.last_name : ''}
                    
                    onChangeText={(val) => textLastNameChange(val)}
                   
                />
            </View>
            <View style={styles.row}>
                <TextInput
                    mode="outlined"
                    label="Bio"
                    placeholder="Type something"
                    value={savedetail ? savedetail.bio : ''}
                   
                    multiline={true}
                    onChangeText={(val) => textBioChange(val)}
                   
                />
            </View>
            <View style={styles.row}>
                <Button title="Update" disabled={savedetail.isprocessing} mode="contained" onPress={editUserProfile} >Update</Button>
            </View>
        </View>
    )
}
export default EditProfileFormScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
      
    },
    header:{
      
      flexDirection:'row',
      paddingBottom:10
      
    },
    main:{
      flex:1,
      backgroundColor:'#FFF',
      paddingLeft:10,
      paddingRight:10
    },
    title:{
      fontSize:24
    },
    subtitle:{
      fontSize:18
    },
    searchbar:{
      flex:1,
      marginBottom:10
    },
    row:{
      
      
      marginBottom:10
    },
    item:{
      backgroundColor:'#F00',
      margin:5,
      width:100,
      flex:1,          
    },
    errorMsg: {
      color: '#FF0000',
      fontSize: 14,
    }
  });