import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import MyBasketScreen from './MyBasketScreen';
import GiftRegistryScreen from './GiftRegistryScreen';
import MessagesScreen from './MessagesScreen';
import AddRetailStoreScreen from './AddRetailStoreScreen';
import ConnectScreen from './ConnectScreen';

const HomeStack = createNativeStackNavigator();
const MyBasketStack = createNativeStackNavigator();
const GiftRegistryStack = createNativeStackNavigator();
const ConnectStack = createNativeStackNavigator();
const MessagesStack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#000"
      inactiveColor="#CCC"
      barStyle={{ backgroundColor: '#FFF', borderTopColor: '#000', borderStyle: 'solid' }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Retail Stores',
          tabBarColor: '#FFF',
          tabBarIcon: ({ color }) => (
            <Icon name="laptop-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={MyBasketStackScreen}
        options={{
          tabBarLabel: 'My Basket',
          tabBarColor: '#FFF',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-cart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={GiftRegistryStackScreen}
        options={{
          tabBarLabel: 'Gift Registry',
          tabBarColor: '#FFF',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-gift" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ConnectStackScreen}
        options={{
          tabBarLabel: 'Connect',
          tabBarColor: '#FFF',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-people" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ExploreC"
        component={MessagesStackScreen}
        options={{
          tabBarLabel: 'Messages',
          tabBarColor: '#FFF',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-chatbox" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#FFF',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
        fontWeight: 'bold'
        },
        headerShadowVisible:false
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} color="#000" backgroundColor="#FFF" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
        <HomeStack.Screen name="AddRetailStore" component={AddRetailStoreScreen} options={{
        title:'',
        headerMode: 'none',
        headerShown:false
        }} />
</HomeStack.Navigator>
);

const MyBasketStackScreen = ({navigation}) => (
<MyBasketStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#FFF',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
        fontWeight: 'bold'
        },
        headerShadowVisible:false
    }}>
        <MyBasketStack.Screen name="Details" component={MyBasketScreen} options={{
        title: '',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} color="#000" backgroundColor="#FFF" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</MyBasketStack.Navigator>
);

const GiftRegistryStackScreen = ({navigation}) => (
  <GiftRegistryStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
          fontWeight: 'bold'
          },
          headerShadowVisible:false
      }}>
          <GiftRegistryStack.Screen name="GiftRegistry" component={GiftRegistryScreen} options={{
          title: '',
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} color="#000" backgroundColor="#FFF" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  </GiftRegistryStack.Navigator>
  );
  const ConnectStackScreen = ({navigation}) => (
    <ConnectStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#FFF',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
            fontWeight: 'bold'
            },
            headerShadowVisible:false
        }}>
            <ConnectStack.Screen name="Connect" component={ConnectScreen} options={{
            title: '',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} color="#000" backgroundColor="#FFF" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </ConnectStack.Navigator>
    );
    const MessagesStackScreen = ({navigation}) => (
      <MessagesStack.Navigator screenOptions={{
              headerStyle: {
              backgroundColor: '#FFF',
              },
              headerTintColor: '#000',
              headerTitleStyle: {
              fontWeight: 'bold'
              },
              headerShadowVisible:false
          }}>
              <MessagesStack.Screen name="Messages" component={MessagesScreen} options={{
              title: '',
              headerLeft: () => (
                  <Icon.Button name="ios-menu" size={25} color="#000" backgroundColor="#FFF" onPress={() => navigation.openDrawer()}></Icon.Button>
              )
              }} />
      </MessagesStack.Navigator>
      );