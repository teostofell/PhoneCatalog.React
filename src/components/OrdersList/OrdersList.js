import React from "react";
import Spinner from "../Spinner/Spinner";
import Order from "./Order";
import "./OrdersList.css";

class OrdersList extends React.Component{
    render(){
        let { orders } = this.props;

        if(orders == null)
            return <Spinner isSpinning={true} />

        return (
            orders.map(o => (
                <Order items={o.OrderItems} date={o.OrderDate} total={o.Total} />
            ))
        );
    }
}

export default OrdersList;