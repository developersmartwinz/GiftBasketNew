import * as React from 'react';
import { View, Text } from '@react-navigation/native';
import { Title,Paragraph,Card,Searchbar,Button,Avatar } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

import AddRetailFormScreen from './AddRetailFormScreen';

const Stack = createNativeStackNavigator();



const AddRetailStoreScreen = ({navigation}) => {
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
          component={AddRetailFormScreen}
          options={{ title: 'Add Retail Store',
          headerLeft: () => (
            <Icon.Button name="ios-arrow-back" size={25} color="#000" backgroundColor="#FFF" onPress={() => navigation.navigate('Home')}></Icon.Button>
        )
        
        }}
        />
      </Stack.Navigator>
   
    );
};

export default AddRetailStoreScreen;