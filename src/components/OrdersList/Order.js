import React from "react";
import CartList from "../CartList/CartList";
import { ListGroupItem, Collapse } from "reactstrap";
import OverlappedImages from "../OverlappedImages/OverlappedImages";

class Order extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isListOpen: false };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({ isListOpen: !this.state.isListOpen });
    }


    render() {
        let { items, date, total } = this.props;
        date = new Date(Date.parse(date));
        let photos = items.map(p => p.Phone.Photo);

        return (
            <div className="orders-list">
                <ListGroupItem className="order-item" onClick={this.toggle}>
                    <OverlappedImages images={photos} />
                    <span className="order-date">{date.getFullYear()}-{date.getMonth()}-{date.getDate()}</span>
                    <span className="order-total">${total}</span>
                </ListGroupItem>
                <Collapse isOpen={this.state.isListOpen}>
                    <CartList items={items} />
                </Collapse>
            </div>
        );
    }
}

export default Order;