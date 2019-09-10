import React, { Component } from 'react';
import {Text} from 'react-native'
import badgeStyles from'./BadgeStyle'

class Badge extends Component {
    render() { 
        return ( 
            <Text style = {badgeStyles.card}>{this.props.children}</Text>
         );
    }
}
 
export default Badge;