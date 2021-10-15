import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar,FlatList,SafeAreaView } from 'react-native';
import { Title,Paragraph,Card,Searchbar,Avatar } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MessagesScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();

  const ProductBlock = ({title,id}) => (
   <View style={{flexDirection:'row'}}>
      <View style={{flexDirection:'column'}}>
        <Avatar.Image size={54} source={{ uri: 'https://giftbasket.smartwinz.net/img/connect/'+id+'.jpg' }} />
       </View>
       <View style={{flexDirection:'column',alignSelf:'center',marginLeft:10,flex:1}}>
        <Title>{title}</Title>
       </View>
       <View style={{flexDirection:'column',alignSelf:'center',alignItems:'flex-end'}}>
       <View style={{flexDirection:'row'}}>   
        <View style={{flexDirection:'column',alignItems:'flex-end'}}><Text style={{fontSize:14}}>Hi Madam</Text></View>
        <View style={{flexDirection:'column',alignItems:'flex-end',marginLeft:5}}><Icon 
                name="greater-than" 
                color="#ccc"
                size={20}
                
                /></View> 
                                
       </View>
       </View>
   </View>
  );
  const DATA = [
    {
      id: '1',
      title: 'User',
    },
    {
      id: '2',
      title: 'User',
    },
    {
      id: '3',
      title: 'User',
    },
    {
      id: '4',
      title: 'User',
    },
    {
      id: '5',
      title: 'User',
    },
    {
      id: '6',
      title: 'User',
    },
    {
      id: '7',
      title: 'User',
    },
    {
      id: '8',
      title: 'User',
    },
    {
      id: '9',
      title: 'User',
    }
  ];
  const Item = ({ title,id }) => (
    <View style={styles.item}>
      <ProductBlock title={title} id={id}/>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item title={item.title} id={item.id} />
  );
    return (
      
      <View style={styles.main}>
       <View style={styles.header}>
          <Title style={styles.title}>Connect</Title>         
       </View>
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
};

export default MessagesScreen;

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
