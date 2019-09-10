import React, { Component } from 'react';
import {View,Text,ScrollView} from 'react-native';
import FuckCard from '../FuckCard/FuckCard'
import Loadingcard from '../LoadingCard/LoadingCard'
import Foass from '../../services/Foass/Foass'
import ModalView from '../ModalView/ModalView'

class CardList extends Component {
    constructor(props){
        super(props)
        this.state = {
            modal:false,
            modalOp:null,
            loading:true,
            operations:[]
        };
        Foass.allOperations()
        .then((resp) => {
            this.setState({
                loading:false,
                operations:resp
            })
        })
    }

    handleCardPress = (op) => {
        Foass.operation(op.url,{"from":"nag"})
        .then((resp) => {
            console.log(JSON.stringify(resp))
            this.setState({
                modal:true,
                modalOp:JSON.stringify(resp)
            })
        })
    }

    render() { 
        return ( 
            <View>
                <ScrollView>
                    {this.state.loading && <Loadingcard/>}
                    {!this.state.loading && (this.state.operations.map((op) => {
                            return (
                                    <FuckCard 
                                        key={op.name} 
                                        op={op}
                                        onPress={this.handleCardPress}
                                        />
                                );
                        }))}
                    
                </ScrollView>
            </View>
        );
    }
}
 
export default CardList;