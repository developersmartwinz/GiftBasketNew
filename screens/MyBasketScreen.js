import React from 'react';
import { View, Text, StyleSheet, StatusBar,FlatList,SafeAreaView,Button } from 'react-native';
import { Title,Paragraph,Card,Searchbar } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';

const MyBasketScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();

  const ProductBlock = ({title,id}) => (
    <Card>      
      <Card.Cover style={{height:140}} source={{ uri: 'https://giftbasket.smartwinz.net/img/retail-stores/'+id+'.jpg' }} />
      <Card.Content>
        <Title>{title} {id}</Title>
        
      </Card.Content>
      
    </Card>
  );
  const DATA = [
    {
      id: '1',
      title: 'Basket',
    },
    {
      id: '2',
      title: 'Basket',
    },
    {
      id: '3',
      title: 'Basket',
    },
    {
      id: '4',
      title: 'Basket',
    },
    {
      id: '5',
      title: 'Basket',
    },
    {
      id: '6',
      title: 'Basket',
    },
    {
      id: '7',
      title: 'Basket',
    },
    {
      id: '8',
      title: 'Basket',
    },
    {
      id: '9',
      title: 'Basket',
    },
    {
      id: '10',
      title: 'Basket',
    },
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
          <Title style={styles.title}>My Basket</Title>         
       </View>
       <View style={styles.row}>
        <Searchbar 
          style={styles.searchbar}
          placeholder="Search"
        />
       </View>
       <View style={styles.row}>
           <View style={styles.col}>
           <Button
                
                title="Add basket"
                color="#000"
                accessibilityLabel="Learn more about this purple button"
                />
           </View>
           <View style={styles.col}>            
           <Button
                
                title="Create Gift Registry"
                color="#000"
                accessibilityLabel="Learn more about this purple button"
                />
            </View>

       </View>
       <View style={styles.row}>
        <Title style={styles.subtitle}>My Wishlist</Title>  
       </View>
       
       <SafeAreaView style={{flex:1}}>
       <FlatList
              data={DATA}
              renderItem={renderItem}
              numColumns={2}
              
            />
        </SafeAreaView>    
      
     
      </View>
    );
};

export default MyBasketScreen;

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
  col:{
      flexDirection:'column',
      flex:1,
      marginRight:3
      
  },
  item:{
    backgroundColor:'#FFF',
    margin:5,
    width:100,
    flex:1,
    
    
        
  }
});