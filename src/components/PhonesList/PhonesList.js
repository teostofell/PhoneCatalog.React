import React from "react";
import Phone from "../Phone/Phone";
import "./PhonesList.css";
import Spinner from "../Spinner/Spinner";
import { CardDeck, CardGroup } from 'reactstrap';

function PhonesList(props) {
	let phones = props.items;
	let { addToCart, removeFromCart, OrderId } = props;

	if (phones === null)
		return <Spinner isSpinning={true} />

	return (
		<div className="row">
			{
				phones.map((item) =>
					<div className="col-lg-3 col-md-4 mb-3">
						<Phone data={item} key={item.Id} addToCart={addToCart} removeFromCart={removeFromCart} OrderId={OrderId} />
					</div>
				)
			}
		</div>
	);
}

export default PhonesList;