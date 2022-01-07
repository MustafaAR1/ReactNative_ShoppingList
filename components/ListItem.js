

import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item,deleteItem}) => {
  return (
     <TouchableOpacity style ={styles.ListItem}>
    <View style={styles.listItemView}>
    <Text style ={styles.listItemText}>{item.title}</Text>
    <Icon name='remove' size={20} 
    onPress={() => deleteItem(item.id)}  />
  
    </View> 
        </TouchableOpacity>
  );
};
// Header.defaultProps = {
//     title: "Shopping List"
// }
const styles = StyleSheet.create({

ListItem:{
    padding: 15,
   // backgroundColor:'lightgrey',
    borderBottomWidth:1,
    borderColor:'purple',
},
listItemView:{
flexDirection: 'row',
justifyContent:'space-between',
alignItems:'center'
},
listItemText:{
    fontSize:20,
    color:'purple'
}
// header:{
//     height:90,
//     padding: 15,
//     backgroundColor: 'lightblue',

//  },
//  text: {
//      color:'black',
//      fontSize:28,
//      textAlign: 'center'
//  },

});
export default ListItem;