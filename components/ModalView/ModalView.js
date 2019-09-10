import React, { Component } from 'react';
import {Modal,Text} from 'react-native'

class ModalView extends Component {
    render() { 
        return ( 
            <Modal
                transparent={true}
            >
                <Text>{this.props.children}</Text>
            </Modal>
         );
    }
}
 
export default ModalView;