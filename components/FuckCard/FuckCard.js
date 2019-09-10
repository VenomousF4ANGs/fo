import React, { Component } from 'react';
import {View,Text,StyleSheet,TouchableHighlight} from 'react-native'
import fuckStyles from './FuckcardStyle'
import Badge from '../Badge/Badge'


class FuckCard extends Component {

    handlePress = () =>{
        this.props.onPress(this.props.op)
    }

    render() { 
        return ( 
            <TouchableHighlight onPress={this.handlePress}>
                <View style={fuckStyles.card}>
                    <Text style={fuckStyles.header}>{this.props.op.name}</Text>
                    <View style={{flexDirection: 'row'}}>
                        {this.props.op.fields.map(((field) => {return <Badge key={fuckStyles.header + field.name}>{field.name}</Badge>}))}
                    </View>
                </View>
            </TouchableHighlight>
         );
    }
}
 
export default FuckCard;