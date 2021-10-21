import * as React from 'react';
import { View, Text } from '@react-navigation/native';
import { Title,Paragraph,Card,Searchbar,Button,Avatar } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

import ProfileScreenContent from './ProfileScreenContent';

const ProfileScreen = ({navigation}) => {
    return (
    
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
          name="Myprofile"
          component={ProfileScreenContent}
          options={{ title: 'Profile',
          headerLeft: () => (
            <Icon.Button name="ios-arrow-back" size={25} color="#000" backgroundColor="#FFF" onPress={() => navigation.navigate('Home')}></Icon.Button>
        ),
        headerRight: () => (
          <Icon.Button name="ios-pencil-sharp" size={25} color="#000" backgroundColor="#FFF" onPress={() => navigation.navigate('EditProfileScreen')}></Icon.Button>
      )
        
        }}
        />
      </Stack.Navigator>
   
    );
};

export default ProfileScreen;