import React from "react"
import "./Header.css";
import { Link } from "react-router-dom";
import SearchField from "../Search/SearchField";
import LoginIcon from "react-icons/lib/io/log-in";
import RegistrationIcon from "react-icons/lib/io/ios-personadd-outline";
import CartIcon from "react-icons/lib/io/ios-cart-outline";
import Icon from 'react-icons-kit';
import { meter } from 'react-icons-kit/icomoon/meter';       


const ProfileIcon = (props) => {
    let { src } = props;

    return (
        <div className="icon" title="Profile">
            <img className="avatar-thumb rounded-circle user-avatar" alt="avatar" src={src}/>
        </div>
    )
}


class UnathorizedPanel extends React.Component {
    render(){
        let { toggleModal } = this.props;
        return (
            <React.Fragment>
                <LoginIcon className="icon" title="Log In" size={30} onClick={toggleModal}/>
                <Link to="/registration"><RegistrationIcon title="Registration" className="icon" size={30}/></Link>
            </React.Fragment>
        );
    }
}

class AuthorizedPanel extends React.Component {
    render(){
        let { isAdmin, avatar } = this.props;
        return (
            <React.Fragment>
                {(isAdmin) ? <Link to="/admin"><Icon className="icon admin-icon" title="Admin" icon={meter} size={30} /></Link> : null}
                <Link to="/profile"><ProfileIcon className="icon" src={avatar} /></Link>
                <Link to="/cart"><CartIcon className="icon" title="Cart" size={30}/></Link>
            </React.Fragment>
        );
    }
}



class LogInRow extends React.Component{
    render(){
        let {toggleModal, onChange, searchString, isLogged, isAdmin, onClick, avatar } = this.props;
        return (
            <div className="login-row px-4 d-flex justify-content-between">
                <div className="logo">
                    LOGO
                </div>
                <div className="panels d-flex">
                    <div className="search-panel">
                        <SearchField onChange={onChange} searchString={searchString} onClick={onClick} small={true} />
                    </div>
                    <div className="user-panel d-flex align-items-center">
                        {(isLogged) 
                            ? <AuthorizedPanel isAdmin={isAdmin} avatar={avatar}/>
                            : <UnathorizedPanel toggleModal={toggleModal}  />}
                    </div>
                </div>
            </div>
        );
    }
}

export default LogInRow;