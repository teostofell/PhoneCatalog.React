import React from "react";
import "./Footer.css";
import Icon from 'react-icons-kit';
import { facebook2 } from 'react-icons-kit/icomoon/facebook2';
import { twitter } from 'react-icons-kit/icomoon/twitter';
import { vk } from 'react-icons-kit/icomoon/vk';
import { instagram } from 'react-icons-kit/icomoon/instagram';

class Footer extends React.Component {
    render() {
        return (
            <footer className="page-footer pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 py-5 d-flex justify-content-center">
                            <div className="mb-5 flex-center">
                                <a className="fb-ic ic mx-4">
                                    <Icon size={30} icon={facebook2} />
                                </a>
                                <a className="tw-ic ic mx-4">
                                    <Icon size={30} icon={twitter} />
                                </a>
                                <a className="vk-ic ic mx-4">
                                    <Icon size={30} icon={vk} />
                                </a>
                                <a className="ins-ic ic mx-4">
                                    <Icon size={30} icon={instagram} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright py-3 text-center">
                    <a href="https://www.itechart.by/">iTechArt</a>
                </div>
            </footer>
        )
    }
}

export default Footer;

