import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar,FlatList,SafeAreaView } from 'react-native';
import { Title,Paragraph,Card,Searchbar } from 'react-native-paper';



import{getObjectData} from '../storage';
import api from '../api';
import LoadingBlock from '../components/LoadingBlock';
import SingleUserScreen from './SingleUserScreen';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ConnectScreen extends React.Component {
 
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
      let retailUsers = await api.getusers(userId,page,this.state.search);
      if(retailUsers.status == 1){
        
        this.setState({datasource:[...this.state.datasource,...retailUsers.data]});
        this.setState({loading:false});

      }
      }catch(err){
        //console.log(err);
      }
      
    }

  }
  doFilterSearch = async (page) => {
    const userdata = await getObjectData('userData');
    
    if(userdata != null){
      const userId = userdata.id;
      try{
      let retailUsers = await api.getusers(userId,page,this.state.search);
      if(retailUsers.status == 1){
        
        this.setState({datasource:retailUsers.data});
        this.setState({loading:false});

      }else{
        this.setState({datasource:retailUsers.data});
        this.setState({loading:false});
      }
      }catch(err){
        //console.log(err);
      }
      
    }

  }

  displayProfile = () => {
    alert("new code");
  }

  onScrollHandler = () => {
    
    this.setState({
      page: this.state.page + 1
   }, () => {
      this.doSearch(this.state.page);
   });
  }

  onChangeSearch = async (query) => {
    this.setState({search:query});
    const search = query;
    if(search.length >= 3){
      this.setState({page:1,loading:true});
      this.doFilterSearch(this.state.page);
    }else{
      this.setState({page:1,loading:false});
    }

  }







  render(){
    const Item = ({ title,id,imageurl }) => (
      <View style={styles.item}>
        <ProductBlock title={title} id={id}  imageurl={imageurl}/>
      </View>
    );
    const renderItem = ({ item }) => (
      
      <Item title={item.name} id={item.id} imageurl={item.thumbnail} />
    );
    const ProductBlock = ({title,id,imageurl}) => (
      <Card onPress={() => 
        this.props.navigation.navigate('SingleUserScreen',{title : title})}>      
        <Card.Cover style={{height:140}} source={{ uri: imageurl }} />
        <Card.Content>
          <Title>{title}</Title>
          
        </Card.Content>
        
      </Card>
    );

    return(
      <View style={styles.main}>
      <View style={styles.header}>
         <Title style={styles.title}>Connect</Title>         
      </View>
      
      <View style={styles.row}>
       <Searchbar 
         style={styles.searchbar}
         placeholder="Search"
         onChangeText={this.onChangeSearch}
         value={this.state.search}
       />
      </View>
      
      {this.state.loading ? <LoadingBlock/> : 
      <SafeAreaView style={{flex:1}}>
      <FlatList
             data={this.state.datasource}
             renderItem={renderItem}
             numColumns={3}
             onEndReached={this.onScrollHandler}
             onEndReachedThreshold={0.5}
             
           />
       </SafeAreaView>    
     }
    
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