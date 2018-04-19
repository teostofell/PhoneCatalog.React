import React from "react";
import "./Phone.css";
import { Link } from "react-router-dom";
import {
	Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle
} from 'reactstrap';
import CartButton from "../CartButton/CartButton";
import StarRating from 'react-star-rating-component';

class Phone extends React.Component {
	
	render() {
		let { Model, Id, Photo, Slug, Price, Grade } = this.props.data;
		let OrderId = this.props.OrderId;	

		let addToCart = this.props.addToCart;
		let removeFromCart = this.props.removeFromCart;

		let item = { Model, Id, Photo, Slug, Price };

		return (
			<Card className="h-100">
				<Link to={"/phones/" + Slug} className="p-4"><CardImg top width="100%" src={Photo} alt="" /></Link>
				<CardBody>
					<CardTitle>
						<Link to={"/phones/" + Slug}>{Model}</Link>
					</CardTitle>
					<small className="text-muted"><StarRating editing={false} value={Grade}/></small>
					<CardSubtitle>${Price}</CardSubtitle>
					<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
				</CardBody>
				<CartButton item={item} onCheck={addToCart} onUncheck={removeFromCart} OrderId={OrderId}/>
			</Card>
		);
	}
}

export default Phone;