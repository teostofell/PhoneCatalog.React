import React from "react";
import { ListGroupItem, Badge, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Icon from 'react-icons-kit';
import { image } from 'react-icons-kit/icomoon/image';        
import { cross } from 'react-icons-kit/icomoon/cross';
import { pencil } from 'react-icons-kit/icomoon/pencil';        
import "./Phone.css";

class Phone extends React.Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.onClick(this.props.Id);
    }

    render() {
        let { Model, Photo, Id } = this.props;
        return (
            <ListGroupItem className="my-2 justify-content-between d-flex align-items-center phone-item">
                <div className="phone-block d-flex align-items-center">
                    <img className="phone-thumb" src={Photo} />
                    <div className="phone-title pl-3">{Model}</div>
                </div>
                <div className="buttons-block">
                    <Link to={`/admin/photos/${Id}`}><Button className="phone-photos"><Icon icon={image} /></Button></Link>
                    <Link to={`/admin/phones/${Id}`}><Button className="phone-update"><Icon icon={pencil} /></Button></Link>
                    <Button className="phone-remove" onClick={this.handleClick}><Icon icon={cross} /></Button>
                </div>
            </ListGroupItem>
        );
    }
}


export default Phone;