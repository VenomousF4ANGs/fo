import React, { Component } from 'react';
import {Text,View,StyleSheet} from 'react-native';
import Foass from '../../services/Foass/Foass'

class TestApi extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading:true,
            operations:[]
        }
        Foass.allOperations()
        .then((resp) => {
            // console.log("Component")
            // console.log(resp);
            this.setState({
                loading:false,
                operations:JSON.stringify(resp,null,2)
            })
        })
    }

    render() { 
        return ( 
            <View>
                {this.state.loading && <Text>Loading</Text>}
                {!(this.state.loading) && <Text>{this.state.operations}</Text>}
            </View>
            
         );
    }
}


 
export default TestApi;