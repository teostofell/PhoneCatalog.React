import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";

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
            <div>
                <Nav tabs>
                    <NavItem>
                        <Link to={`/admin/phones`}><NavLink className={{ active: this.state.activeTab === '1' }} onClick={() => { this.toggle('1'); }}>Phones</NavLink></Link>
                    </NavItem>
                    <NavItem>
                        <Link to={`/admin/users`}><NavLink className={{ active: this.state.activeTab === '2' }} onClick={() => { this.toggle('2'); }}>Users</NavLink></Link>
                    </NavItem>
                </Nav>
                <TabContent>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <h4>Tab 1 Contents</h4>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default Header;