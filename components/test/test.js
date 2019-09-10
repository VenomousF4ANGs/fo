import React, { Component } from 'react';
import {Text,View,StyleSheet} from 'react-native';
import Foass from '../../services/Foass/Foass'

const styles = StyleSheet.create({
    card:{
        margin:10,
        height:100,
        width:"auto",
        backgroundColor:"#EEEEEE",
        borderColor:"#AAAAAA",
        borderWidth:1,
        borderRadius:2,
        padding:10
    },
    header:{
        borderBottomColor:"#AAAAAA",
        borderBottomWidth:1,
        paddingBottom:10
    }
})

class Test extends Component {
    render() { 
        return ( 
            <View style={styles.card}>
                <Text style={styles.header}>Fuck Off</Text>
                <Text>I have no more fucks to give</Text>
            </View>
            
         );
    }
}


 
export default Test;