import  AsyncStorage  from '@react-native-async-storage/async-storage';



getData = async (key, defaultValue) => {
  try {
    const value = await AsyncStorage.getItem(key);
    
    if (value === null) {
      return defaultValue;
    }
    return value;
  } catch (e) {
    console.error("Failed to get data", e.message);
  }
}

getObjectData = async (key, defaultValue) => {
    try {
      const value = await AsyncStorage.getItem(key);
      
      if (value === null) {
        return defaultValue;
      }
      return JSON.parse(value);
    } catch (e) {
      console.error("Failed to get data", e.message);
    }
}



module.exports = {
 getData,
 getObjectData
  
}