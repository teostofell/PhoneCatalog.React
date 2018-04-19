import React from "react";
import { connect } from "react-redux";
import CartList from "../components/CartList/CartList";
import { removeFromCart, getOrder } from "../actions/cartActions";
import { Button } from "reactstrap";
import { closeOrder } from "../actions/cartActions";
import SvgIcon from 'react-icons-kit';
import { creditCard } from 'react-icons-kit/icomoon/creditCard';

class CartContainer extends React.Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.getCart();
    }

    handleClick(){
        if(this.props.cart.Total !== 0)
        {
            this.props.makePurchase();
            this.props.history.push("/profile");
        }
        else
            window.alert("Cart is empty");
    }

    render() {
        let { cart, removeItem } = this.props;
        return (
            <div className="wrapper-center">
                <div className="container text-center cart-container">
                    <div className="row">
                        <div className="col-md-5 col-sm-12 cart-info">
                            <div className="cart-logo"><SvgIcon size={100} icon={creditCard} /></div>
                            <h1>Your shopping cart</h1>
                        </div>
                        <div className="col-md-7 col-sm-12 text-left">
                            <CartList removeItem={removeItem} items={cart.OrderItems} allowRemove={true} />
                            <div className="d-flex justify-content-between align-items-center py-3">
                                <h4>Total: <span className="total-price">${cart.Total}</span></h4>
                                <Button onClick={this.handleClick} className="close-order">Order</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCart: () => {
            dispatch(getOrder());
        },
        removeItem: (itemId) => {
            dispatch(removeFromCart(itemId));
        },
        makePurchase: () => {
            dispatch(closeOrder());
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);