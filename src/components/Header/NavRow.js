import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, NavItem, Nav, NavbarToggler, Collapse, NavbarBrand } from "reactstrap";

class NavRow extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        let { path } = this.props;
        return (
            <div class="nav-row">
                <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/" className="mr-auto navbar-right">{path}</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/">About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/phones">Phones</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavRow;