import React from "react";
import { Link } from "react-router-dom";
import {
	Card, CardImg, CardText, CardBody,
	CardTitle, CardFooter, CardSubtitle, Button
} from 'reactstrap';

class CartListItem extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		console.log(this);
		this.props.removeItem(this.props.id);
	}

	render() {
		let { Model, Id, Photo, Slug, Price } = this.props.info;
		let { quantity, allowRemove } = this.props;

		return (
			<React.Fragment>
				<tr className="cart-item">
					<th className="quantity" scope="row">{quantity}</th>
					<td><img className="cart-thumb" src={Photo} /></td>
					<td className="model">{Model}</td>
					<td className="price">${Price}</td>
					{allowRemove ?
						<button className="close delete-cart-item" aria-label="Close" onClick={this.handleClick}>
							<span aria-hidden="true">&times;</span>
						</button> : 
						null}
				</tr>
				<tr className="spacer"></tr>
			</React.Fragment>
		);
	}
}

export default CartListItem;