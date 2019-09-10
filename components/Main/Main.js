import React, { Component } from 'react';
import {View,Text} from 'react-native'
import CardList from '../CardList/CardList'
import ActionBar from 'react-native-action-bar'
import constants from '../../services/Constants/Constants'

class Main extends Component {
    state = {  }
    render() { 
        return ( 
            <View>
                <ActionBar
                    backgroundColor={constants.activityBarColor}
                    title={constants.activityBarText}
                />
                <CardList/>
            </View>
         );
    }
}
 
export default Main;