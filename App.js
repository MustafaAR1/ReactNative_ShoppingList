import React, {useState} from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import Header from './components/header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
//import { uuid } from 'uuidv4';
const App = () => {
  const [items,setItems] = useState([
    {id:12,title:"mango"},
    {id:32,title:"apple"},
    {id:45,title:"banana"},
    {id:56,title:"grapes"},
    
  ]);
  const deleteItem= (id) => {
    setItems(prevItem => {
   return prevItem.filter(item => item.id !=id);
    });
  }

  const addItems = (item) => {
    setItems(prevItem => {
      return [{id:34,text:item},  ...prevItem];
    });
  }

 
  return (
   
  <View style = {styles.container}>

  <Header />
  <AddItem AddItem={AddItems} />
  <FlatList 
  data={items}
  renderItem= {({item}) => <ListItem item={item} 
  deleteItem={deleteItem} />} 
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