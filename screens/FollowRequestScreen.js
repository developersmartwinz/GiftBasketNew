import * as React from 'react';
import { View, Text, StyleSheet, StatusBar,FlatList,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Title,Paragraph,Card,Searchbar,Avatar,Button } from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

function FollowRequestScreenContent() {
  return (
    <View style={styles.main}>
        <View style={styles.row}>
        <Searchbar 
          style={styles.searchbar}
          placeholder="Search"
        />
       </View>
       <SafeAreaView style={{flex:1}}>
       <FlatList
              data={DATA}
              renderItem={renderItem}
              numColumns={1}
              
            />
        </SafeAreaView> 
    </View>
  );
}
const ProductBlock = ({title,id,followtext}) => (
    <View style={{flexDirection:'row'}}>
       <View style={{flexDirection:'column'}}>
         <Avatar.Image size={54} source={{ uri: 'https://giftbasket.smartwinz.net/img/connect/'+id+'.jpg' }} />
        </View>
        <View style={{flexDirection:'column',alignSelf:'center',marginLeft:10,flex:1}}>
         <Title>{title}</Title>
        </View>
        <View style={{flexDirection:'column',alignSelf:'center',alignItems:'flex-end'}}>
        <View style={{flexDirection:'row'}}>   
        <Button icon="" mode="contained" onPress={() => console.log('Pressed')}>
            {followtext}
        </Button>                                 
        </View>
        </View>
    </View>
   );

   const DATA = [
    {
      id: '1',
      title: 'User',
      btn:'Follow',
      btn:'Unfollow'
    },
    {
      id: '2',
      title: 'User',
      btn:'Unfollow'
    },
    {
      id: '3',
      title: 'User',
      btn:'Follow'
    },
    {
      id: '4',
      title: 'User',
      btn:'Follow'
    },
    {
      id: '5',
      title: 'User',
      btn:'Unfollow'
    },
    {
      id: '6',
      title: 'User',
      btn:'Unfollow'
    },
    {
      id: '7',
      title: 'User',
      btn:'Follow'
    },
    {
      id: '8',
      title: 'User',
      btn:'Follow'
    },
    {
      id: '9',
      title: 'User',
      btn:'Unfollow'
    }
  ];
  const Item = ({ title,id,followtext }) => (
    <View style={styles.item}>
      <ProductBlock title={title} id={id} followtext={followtext}/>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item title={item.title} id={item.id} followtext={item.btn} />
  );


const FollowRequestScreen = ({navigation}) => {
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
          name="FollowRequest"
          component={FollowRequestScreenContent}
          options={{ title: 'Follow Requests',
          headerLeft: () => (
            <Icon.Button name="ios-arrow-back" size={25} color="#000" backgroundColor="#FFF" onPress={() => navigation.navigate('Home')}></Icon.Button>
        )
        
        }}
        />
      </Stack.Navigator>
   
    );
};

export default FollowRequestScreen;
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
      
      flexDirection:'row',
      flexWrap:'wrap',
      backgroundColor:'#FFF'
    },
    item:{
      backgroundColor:'#FFF',
      margin:5,   
      flex:1,
      
      
          
    }
  });