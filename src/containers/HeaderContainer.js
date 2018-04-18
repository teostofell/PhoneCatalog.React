import React from "react";
import { connect } from "react-redux";
import LogInRow from "../components/Header/LogInRow";
import NavRow from "../components/Header/NavRow";
import { toggleLoginModal } from "../actions/loginActions";
import { fetchSearchList } from "../actions/searchActions";
import {withRouter} from 'react-router-dom';

class Header extends React.Component{
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    
    handleChange(searchString){
        this.props.history.push('/search')
        this.props.onChange(searchString);
    }

    onClick(){
        this.props.history.push('/search');
    }

    render(){
        let { onChange, searchString, isLogged, isAdmin, path, avatar } = this.props;

        return(
            <header>
                <LogInRow searchString={searchString} toggleModal={this.props.toggleModal} 
                    onChange={this.handleChange} isLogged={isLogged} isAdmin={isAdmin} onClick={this.onClick}
                    avatar={avatar} />
                <NavRow path={path}/>
            </header>
        );
    }
}


const mapStateToProps = state => {
	return {
        searchString: state.search.searchString,
        isLogged: state.login.isLogged,
        isAdmin: state.login.user.IsAdmin,
        avatar: state.login.user.Avatar
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
        toggleModal: () => dispatch(toggleLoginModal()),
        onChange: (searchString) => dispatch(fetchSearchList(searchString)),      
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));