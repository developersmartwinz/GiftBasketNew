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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import profileFormScreen from './profileFormScreen';

const Stack = createNativeStackNavigator();

const EditProfileScreen = ({navigation}) => {
   
    return(
        <Stack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#FFF',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
            fontWeight: 'bold'
            },
            headerShadowVisible:false
            }}>
            <Stack.Screen
              name="Editprofile"
              component={profileFormScreen}
              options={{ title: 'Edit Profile',
              headerLeft: () => (
                <Icon.Button name="ios-arrow-back" size={25} color="#000" backgroundColor="#FFF" onPress={() => navigation.navigate('ProfileScreen')}></Icon.Button>
            )
            
            }}
            />
          </Stack.Navigator>
    )
}
export default EditProfileScreen;

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