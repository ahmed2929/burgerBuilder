import React, { Component } from 'react';
import { Route ,Redirect} from 'react-router-dom';
import {connect} from "react-redux"
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace( '/checkout/contact-data' );
    }

    render () {
        let summery =<Redirect to="/" />

        if(this.props.ing){
            summery=(
                <din>

                <CheckoutSummary
                ingredients={this.props.ing}
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinued={this.checkoutContinuedHandler} />
                <Route 
                path={this.props.match.path + '/contact-data'} 
                component={ContactData} />

                </din>
                
            )
        }

        return summery
          
               
        
    }
}



const mapStateToProps=state=>{
    return {
        ing:state.burgerReducer.ingredients,
        

    }
}


export default connect(mapStateToProps)(Checkout);