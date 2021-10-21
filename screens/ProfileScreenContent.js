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

const ProfileScreenContent = ({navigation}) => {

    const [data, setData] = React.useState([]);

    const readData = async () => {
        const userdata = await getObjectData('userData');
        if(userdata !=null){
            setData(userdata)
        }
    }
    useEffect(() => {
        readData();        
    });
    return(
    <View style={styles.fullwidth}>
            <View style={styles.row}>
            <Card>            
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />    
            </Card>
            </View>
            <View style={styles.main}>
              <View style={styles.row}>
                  <Text>{data.username}</Text>

              </View>
            </View>
    </View>
    );        
}

export default ProfileScreenContent;

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
    fullwidth:{
        flex:1

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