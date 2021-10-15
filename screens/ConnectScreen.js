import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar,FlatList,SafeAreaView } from 'react-native';
import { Title,Paragraph,Card,Searchbar } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';

const ConnectScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();

  const ProductBlock = ({title,id}) => (
    <Card>      
      <Card.Cover style={{height:140}} source={{ uri: 'https://giftbasket.smartwinz.net/img/connect/'+id+'.jpg' }} />
      <Card.Content>
        <Title>{title} {id}</Title>
        
      </Card.Content>
      
    </Card>
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
              numColumns={3}
              
            />
        </SafeAreaView>     
      </View>
    );
};

export default ConnectScreen;

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
    backgroundColor:'#F00',
    margin:5,
    width:100,
    flex:1,
    
    
        
  }
});
