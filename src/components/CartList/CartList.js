import React from "react";
import Spinner from "../Spinner/Spinner";
import { CardDeck, CardGroup, Table } from 'reactstrap';
import CartListItem from "./CartListItem";
import "./CartList.css";

function CartList(props) {
    let phones = props.items;
    let { removeItem, allowRemove  } = props;


    if (phones == null)
        return <Spinner isSpinning={true} />

    return (
        <Table className="cart-list borderless" >
            <thead>
                <tr>
                    <th>Qty</th>
                    <th></th>
                    <th>Model</th>
                    <th>Price</th>                    
                </tr>
            </thead>
            <tbody>
                {
                    phones.map((item) =>
                        <CartListItem key={item.Id} info={item.Phone}
                            id={item.Id} quantity={item.Quantity} removeItem={removeItem} allowRemove={allowRemove} />
                    )
                }
            </tbody>
        </Table>
    );
}

export default CartList;