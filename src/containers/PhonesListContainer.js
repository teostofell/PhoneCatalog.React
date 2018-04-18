import React from "react";
import { connect } from "react-redux";
import { fetchPhonesList, fetchFiltersList, checkFilter, uncheckFilter, changePhonesPage, rangeChanged } from "../actions/phonesListActions";
import Filter from "../components/Filter/Filter";
import PhonesList from "../components/PhonesList/PhonesList";
import Spinner from "../components/Spinner/Spinner";
import Pagination from "../components/Pagination/Pagination";
import { addToCart, removeFromCart } from "../actions/cartActions";


class PhonesListContainer extends React.Component {
	constructor(props){
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	onClick(item){
		this.props.addToCart(item);

		this.props.history.push("/cart");
	}

	componentDidMount() {
		this.props.fetchFilters();				
		this.props.fetchPhones();
	}

	componentWillUnmount(){
		//this.props.clearItems();
	}

	render(){
		let totalItems = this.props.data.total;
		let { items } = this.props.data;
		let { onChecked, onUnchecked, changePage, addToCart, removeFromCart, OrderId, onChanged } = this.props;
		let { total } = this.props.data.page;
		return (
			<div className="container my-3">				
				<div className="row">
					<div className="col-lg-3">
						<Filter total={totalItems} data={this.props.data.filter} handlers={{ onChecked, onUnchecked, onChanged }}/>
					</div>
					<div className="col-lg-9">
						<PhonesList items={items} addToCart={this.onClick} removeFromCart={removeFromCart} OrderId={OrderId} />
						<Pagination total={total} changePage={changePage}/>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		data: state.phonesList,
		OrderId: state.cart.Id,		
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchPhones: () => {
			dispatch(fetchPhonesList());
		},
		fetchFilters: () => {
			dispatch(fetchFiltersList());
		},
		onChecked: (group, name) => {
			dispatch(checkFilter(group, name));
			dispatch(fetchPhonesList());
		},
		onUnchecked: (group, name) => {
			dispatch(uncheckFilter(group, name));
			dispatch(fetchPhonesList());
		},
		changePage: (number) => {
			dispatch(changePhonesPage(number));
			dispatch(fetchPhonesList());
		},
		addToCart: (item) => {
			dispatch(addToCart(item));
		},
		removeFromCart: (item) => {
			dispatch(removeFromCart(item));
		},
		onChanged: (group, field, value) => {
			dispatch(rangeChanged(group, field, value));
			dispatch(fetchPhonesList());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PhonesListContainer);