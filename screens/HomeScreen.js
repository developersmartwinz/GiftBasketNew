import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar,FlatList,SafeAreaView } from 'react-native';
import { Title,Paragraph,Card,Searchbar } from 'react-native-paper';



import{getObjectData} from '../storage';
import api from '../api';
import Icon from 'react-native-vector-icons/Ionicons';

export default class HomeScreen extends React.Component {
 
  state = {
		search: '',
    page:1,
		datasource:[],
    stores:[],
    loading:true
	};

  componentDidMount() {
    this.doSearch(this.state.page);
  }

  doSearch = async (page) => {
    const userdata = await getObjectData('userData');
    
    if(userdata != null){
      const userId = userdata.id;
      try{
      let retailStores = await api.getstores(userId,page);
      if(retailStores.status == 1){
        
        this.setState({datasource:[...this.state.datasource,...retailStores.data]})
      }
      }catch(err){
        //console.log(err);
      }
      
    }

  }

  onScrollHandler = () => {
    console.log('works')
    this.setState({
      page: this.state.page + 1
   }, () => {
      this.doSearch(this.state.page);
   });
  }





  render(){
    const Item = ({ title,id,imageurl }) => (
      <View style={styles.item}>
        <ProductBlock title={title} id={id}  imageurl={imageurl}/>
      </View>
    );
    const renderItem = ({ item }) => (
      
      <Item title={item.store_name} id={item.id} imageurl={item.thumbnail} />
    );
    const ProductBlock = ({title,id,imageurl}) => (
      <Card>      
        <Card.Cover style={{height:140}} source={{ uri: imageurl }} />
        <Card.Content>
          <Title>{title}</Title>
          
        </Card.Content>
        
      </Card>
    );
    const DATA = [
      {
        id: '1',
        title: 'Store',
      },
      {
        id: '2',
        title: 'Store',
      },
      {
        id: '3',
        title: 'Store',
      },
      {
        id: '4',
        title: 'Store',
      },
      {
        id: '5',
        title: 'Store',
      },
      {
        id: '6',
        title: 'Store',
      },
      {
        id: '7',
        title: 'Store',
      },
      {
        id: '8',
        title: 'Store',
      },
      {
        id: '9',
        title: 'Store',
      },
      {
        id: '10',
        title: 'Store',
      },
    ];
    return(
      <View style={styles.main}>
      <View style={styles.header}>
         <Title style={styles.title}>Retail Stores</Title>
         <View><Icon.Button name="ios-pencil-sharp" size={20} color="#000" backgroundColor="#FFF" onPress={() => this.props.navigation.navigate('AddRetailStore')}></Icon.Button></View>         
      </View>
      <View style={styles.row}>
       <Searchbar 
         style={styles.searchbar}
         placeholder="Search"
       />
      </View>
      <View style={styles.row}>
       <Title style={styles.subtitle}>Shop</Title>  
      </View>
      
      <SafeAreaView style={{flex:1}}>
      <FlatList
             data={this.state.datasource}
             renderItem={renderItem}
             numColumns={2}
             onEndReached={this.onScrollHandler}
             onEndReachedThreshold={0.5}
             
           />
       </SafeAreaView>    
     
    
     </View>
    )
  }
}

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
    width:100,
    flex:1,
    
    
        
  }
});