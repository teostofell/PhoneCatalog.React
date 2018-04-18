import React from "react";
import { Label, Input, FormGroup, Button } from 'reactstrap';
import "./CartButton.css"

class CartButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = { quantity: 1 };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){
        this.setState({ quantity: e.target.value });
    }

    handleClick(e){
        let item = { Quantity: this.state.quantity };

        item.OrderId = this.props.OrderId;
        item.Phone = { Id: this.props.item.Id, Price: this.props.item.Price };

        this.props.onCheck(item);
    }

    render() {
        let { showQuantity } = this.props;
        return (
            <React.Fragment>
                {(showQuantity) ? <FormGroup>
                    <Label for="quantity">Quantity</Label>
                    <Input type="number" name="number" id="quantity" min={1} max={10} onChange={this.handleChange}/>
                </FormGroup> : null
                }
                <Button onClick={this.handleClick}>To cart</Button>
            </React.Fragment>
        );
    }
}

export default CartButton;