import React,{useEffect,useState} from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import{ AuthContext } from '../components/context';

import{getObjectData} from '../storage';

export function DrawerContent(props) {

    const paperTheme = useTheme();

    const { signOut } = React.useContext(AuthContext);

    let userdetail = {name: "", email: ""};

    const [username, setUsername] = useState('');
    const [useremail, setUseremail] = useState('');

    const readData = async () => {
        const userdata = await getObjectData('userData');
        
        if(userdata != null){                       
           setUsername(userdata.username);
           setUseremail(userdata.email);
        }
    }

    useEffect(() => {
        readData();        
    });

    

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://cdn.pixabay.com/photo/2021/02/04/12/03/superhero-5981125_960_720.png'
                                }}
                                size={50}
                            />
                            
                        </View>
                        <View style={{marginTop:10, flexDirection:'row'}}>
                                <Title style={styles.title}>{username}</Title>
                                
                                
                        </View>
                        <View style={{marginTop:2, flexDirection:'row'}}>
                            <Title style={styles.caption}>{useremail}</Title>
                        </View>
                        
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-box" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('ProfileScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="page-layout-sidebar-right" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Follow Request"
                            onPress={() => {props.navigation.navigate('FollowRequestScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="file-account" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="About"
                            onPress={() => {props.navigation.navigate('AboutScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="exit-to-app" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Sign Out"
                            onPress={() => {signOut()}}
                        />
                       
                    </Drawer.Section>
                   
                </View>
            </DrawerContentScrollView>
            
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
