import React from "react";

class CartListItem extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.props.removeItem(this.props.id);
	}

	render() {
		let { Model, Photo, Price } = this.props.info;
		let { quantity, allowRemove } = this.props;

		return (
			<React.Fragment>
				<tr className="cart-item">
					<th className="quantity" scope="row">{quantity}</th>
					<td><img className="cart-thumb" src={Photo} alt="thumbnail"/></td>
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