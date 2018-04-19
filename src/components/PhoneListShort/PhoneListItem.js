import React from "react";
import { Link } from "react-router-dom";
import {
	Card, CardText, CardBody,
	CardTitle, CardSubtitle
} from 'reactstrap';
import StarRating from 'react-star-rating-component';

class PhoneListItem extends React.Component{
    render(){
		let { Model, Photo, Slug, Price, Grade } = this.props.data;

		return (
			<Card className="flex-row my-2">
				<Link to={"/phones/" + Slug} className="p-4"><img  src={Photo} alt="" /></Link>
				<CardBody>
					<CardTitle>
						<Link to={"/phones/" + Slug}>{Model}</Link>
					</CardTitle>
					<small className="text-muted"><StarRating editing={false} value={Grade}/></small>
					<CardSubtitle>${Price}</CardSubtitle>
					<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
				</CardBody>
			</Card>
		);
    }
}

export default PhoneListItem;