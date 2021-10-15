import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, StatusBar,FlatList,SafeAreaView,Image,Platform  } from 'react-native';
import { Title,Paragraph,Card,Searchbar,TextInput } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import api from '../api';
import axios from 'axios';
import mime from "mime";
import{getObjectData} from '../storage';
import * as Animatable from 'react-native-animatable';

const AddRetailFormScreen = ({navigation}) => {

    const [image, setImage] = useState(null);

    const [data, setData] = React.useState({
       storeName: "",
       storeUrl: "",
       isValidUrl:true
    });

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);

      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };
      const addStore = async () =>{
        const userdata = await getObjectData('userData');
        var savedata = new FormData();

        if(image){
          const imageUri = image;
          
          savedata.append('photo', {
              name: imageUri.split("/").pop(),
              type: mime.getType(imageUri),
              uri: Platform.OS === 'ios' ? image.replace('file://', '') : imageUri,
            }); 
        }

        savedata.append('store_url',data.storeUrl);
        savedata.append('store_name',data.storeName);
        savedata.append('user_id',userdata.id);        

       var storedata = await axios.post('https://giftbasket.smartwinz.net/webservices/addnewstore',savedata,{
        headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',            
        }

       });
       alert(storedata.data.status);
        if(storedata.data.status == 1){
            navigation.navigate('Home')

        }else{
        }

      };

    const textStoreNameChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                storeName: val,
                
            });
        } else {
            setData({
                ...data,
                storeName: val,
                
            });
        }
    }

    const textStoreUrlChange = (val) => {
      var pattern = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
        if( val.length !== 0 && pattern.test(val) ) {
            setData({
                ...data,
                storeUrl: val,
                isValidUrl:true
                
            });
        } else {
            setData({
                ...data,
                storeUrl: val,
                isValidUrl:false
                
            });
        }
    }
    
    return(
        <View style={styles.main}>
            <View style={styles.row}>
                <TextInput
                    mode="outlined"
                    label="Store Name"
                    placeholder="Type something"
                    onChangeText={(val) => textStoreNameChange(val)}
                   
                />
            </View>
            <View style={styles.row}>
                <TextInput
                    mode="outlined"
                    label="Store Url"
                    placeholder="Type something"
                    onChangeText={(val) => textStoreUrlChange(val)}
                   
                />
            </View>
            { data.isValidUrl ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Enter valid url (http://example.com).</Text>
            </Animatable.View>
            }
            <View style={styles.row}>
            <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>

            <View style={styles.row}>
            <Button title="Add Store" onPress={addStore} />
      
            </View>
            
        </View>
        
        
    );
}

export default AddRetailFormScreen;
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