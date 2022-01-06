import React, {useState} from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import Header from './components/header';
//import { uuid } from 'uuidv4';
const App = () => {
  const [items,setItems] = useState([
    {id:12,title:"mango"},
    {id:32,title:"apple"},
    {id:45,title:"banana"},
    {id:56,title:"grapes"},
    
  ]);
  return (
    <View style = {styles.container}>
  <Header />
  <FlatList 
  data={items}
  renderItem= {({item}) => <Text style={styles.container} >{item.title}</Text>} 
  />
    </View> 
  );
};

const styles = StyleSheet.create({
  container : {
    flex:1,
    fontSize:28,
    
  //  paddingTop:50,
    color:"red"
  },
});
export default App;