import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { Link, withRouter } from "react-router-dom";

import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';

class Sidebar extends React.Component {
    render() {
        return (
            <div style={{ background: '#2c3e50', color: '#FFF', width: 220 }}>
                <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='sales'>
                    <Nav id='dashboard'>
                        <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio} /></NavIcon>
                        <NavText></NavText>
                    </Nav>
                    <Nav id='sales'>
                        <NavIcon><SvgIcon size={20} icon={ic_business} /></NavIcon>
                        <NavText><Link to={`/admin/users`}>Users</Link></NavText>
                    </Nav>
                </SideNav>
            </div>
        );
    }
}

export default withRouter(Sidebar);