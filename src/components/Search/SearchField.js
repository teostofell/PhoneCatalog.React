import React from "react";
import Icon from 'react-icons-kit';
import { search } from 'react-icons-kit/icomoon/search';
import { cross } from 'react-icons-kit/icomoon/cross';       

class SearchField extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onChange(event.target.value);
    }

    componentDidMount(){
        if(!this.props.small){
            this.field.focus();
        }
    }

    render() {
        let { searchString, small, onClick } = this.props;
        return (
            <div className="input-group search-field">
                <input type="text" className="form-control" placeholder="Search..."
                    aria-label="Search string" onChange={this.handleChange} 
                    value={searchString} ref={(item) => {this.field = item;}} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={onClick}>
                        {
                            (small) ? <Icon icon={search} /> : <Icon icon={cross} />
                        }                        
                    </button>
                </div>
            </div>
        );
    }
}

export default SearchField;

