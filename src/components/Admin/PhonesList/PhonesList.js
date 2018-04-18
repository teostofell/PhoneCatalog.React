import React from "react";
import Phone from "../Phone/Phone";
import Spinner from "../../Spinner/Spinner";
import { CardDeck, CardGroup, ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

class PhonesList extends React.Component {
	constructor(props) {
		super(props);

		this.onScroll = this.onScroll.bind(this);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.onScroll, false);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll, false);
	}

	onScroll() {
		if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
			this.props.incrementPhonesList();
		}
	}

	render() {
		let {phones, onClick } = this.props

		if (phones == null)
			return <Spinner isSpinning={true} />

		return (
			<React.Fragment>
				<div>
					<Link to="/admin/phones/create">
						<Button>Create</Button>
					</Link>
				</div>
				<ListGroup>
					{phones.map((item) =>
						<Phone Model={item.Model} Photo={item.Photo} Id={item.Id} onClick={onClick} />
					)}
				</ListGroup>
			</React.Fragment>
		);
	}
}

export default PhonesList;