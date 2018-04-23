import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import Icon from 'react-icons-kit';
import { exit } from 'react-icons-kit/icomoon/exit';
import "./Header.css";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <header className="admin-header">
                <Nav className="d-flex" tabs>
                    <NavItem>
                        <Link to={`/admin/phones`}><NavLink className={{ active: this.state.activeTab === '1' }} onClick={() => { this.toggle('1'); }}>Phones</NavLink></Link>
                    </NavItem>
                    <NavItem>
                        <Link to={`/admin/users`}><NavLink className={{ active: this.state.activeTab === '2' }} onClick={() => { this.toggle('2'); }}>Users</NavLink></Link>
                    </NavItem>
                    <NavItem className="back-button">
                        <Link to="/phones"><Icon className="icon" icon={exit} size={25} /></Link>
                    </NavItem>
                </Nav>
            </header>
        );
    }
}

export default Header;