import React from 'react';
import { View, Text, StyleSheet, StatusBar,FlatList,SafeAreaView,Button } from 'react-native';
import { Title,Paragraph,Card,Searchbar } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import SingleUserContent from './SingleUserContent';
const Stack = createNativeStackNavigator();

const SingleUserScreen = ({navigation}) => {

  const userdata = {id:11,name:'Rohan',bio:'hello'};

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
 
  const Item = ({ title,id }) => (
    <View style={styles.item}>
      <ProductBlock title={title} id={id}/>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item title={item.title} id={item.id} />
  );
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
              name="Editprofile"
              component={SingleUserContent}
              initialParams={userdata}
              options={{ title: 'Profile',
              headerLeft: () => (
                <Icon.Button name="ios-arrow-back" size={25} color="#000" backgroundColor="#FFF" onPress={() => navigation.navigate('ProfileScreen')}></Icon.Button>
            )
            
            }}
            />
          </Stack.Navigator>
    );
};

export default SingleUserScreen;

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