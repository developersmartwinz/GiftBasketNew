import * as React from 'react';

import {  View, Text } from '@react-navigation/native';
import { Title,Paragraph,Card,Searchbar,Button,Avatar } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

function AboutScreenContent() {
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  return (
    <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />    
  </Card>
  );
}

const AboutScreen = ({navigation}) => {
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
          name="AboutUs"
          component={AboutScreenContent}
          options={{ title: 'About',
          headerLeft: () => (
            <Icon.Button name="ios-arrow-back" size={25} color="#000" backgroundColor="#FFF" onPress={() => navigation.navigate('Home')}></Icon.Button>
        )
        
        }}
        />
      </Stack.Navigator>
   
    );
};

export default AboutScreen;