import React from "react";
import { connect } from "react-redux";
import PhoneFeatures from "../components/PhoneDetail/PhoneFeatures";
import PhoneSpecs from "../components/PhoneDetail/PhoneSpecs";
import { fetchPhoneDetails } from "../actions/phoneDetailActions";
import Spinner from "../components/Spinner/Spinner";
import { addToCart } from "../actions/cartActions";
import Api from "../utils/Api";
import CommentBlock from "../components/Comment/CommentBlock";
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

class PhoneDetailContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { comments: null, activeTab: "1" };

        this.onSubmit = this.onSubmit.bind(this);
        this.getComments = this.getComments.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onClick(item){
        this.props.addToCart(item);

        this.props.history.push("/cart");
    }

    componentDidMount() {
        let slug = this.props.match.params.phoneSlug;

        this.props.fetchPhoneDetails(slug)
            .then((response) => {
                this.getComments();
            })
    }

    onSubmit(comment) {
        comment.UserId = this.props.userId;
        comment.PhoneId = this.props.details.Id;

        Api.addComment(comment).then((response) => {
            this.getComments();
        })
    }

    getComments() {
        Api.getComments(this.props.details.Id)
            .then(response => {
                this.setState({ comments: response.data });
            });
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        if (this.props.details === null)
            return <Spinner isSpinning={true} />

        let { addToCart, orderId, isLogged } = this.props;

        let { Model, Slug, Id, Photo, Price, Storage, ReleaseDate, ScreenSize, Battery,
            Fingerprint, Brand: { Name: BrandName }, OS: { Name: OSName }, ScreenResolution: { Name: ScreenResolutionName, Width: ScreenResolutionWidth, Height: ScreenResolutionHeight } } = this.props.details;

        let { Photos } = this.props.details;


        let specifications = {
            Model, Storage, ReleaseDate, ScreenSize, Battery,
            Fingerprint, BrandName, OSName, ScreenResolutionName, ScreenResolutionWidth, ScreenResolutionHeight
        }

        let item = { Model, Id, Photo, Slug, Price };


        return (
            <div className="container-fluid">
                <PhoneFeatures item={item} photos={Photos} model={Model} addToCart={this.onClick} orderId={orderId} />
                <div>
                    <Nav tabs className="mb-2">
                        <NavItem>
                            <NavLink
                                className={this.state.activeTab === '1' ? "active" : ""}
                                onClick={() => { this.toggle('1'); }}>
                                Specs
                        </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={this.state.activeTab === '2' ? "active" : ""}
                                onClick={() => { this.toggle('2'); }}>
                                Comments
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <PhoneSpecs specifications={specifications} />
                        </TabPane>
                        <TabPane tabId="2">
                            <CommentBlock comments={this.state.comments} onSubmit={this.onSubmit} isLogged={isLogged} />
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        details: state.phone.details,
        orderId: state.cart.Id,
        userId: state.login.user.Id,
        isLogged: state.login.isLogged
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPhoneDetails: (slug) => dispatch(fetchPhoneDetails(slug)),
        addToCart: (item) => {
            dispatch(addToCart(item));
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(PhoneDetailContainer);