import React from "react"
import { connect } from "react-redux";
import SearchField from "../components/Search/SearchField";
import { fetchSearchList } from "../actions/searchActions";
import PhonesListShort from "../components/PhoneListShort/PhonesListShort";

class SearchContainer extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.history.goBack();
    }

    render() {
        let { items, onChange, searchString } = this.props;
        return (
            <div className="search-section">
                <SearchField searchString={searchString} onChange={onChange} onClick={this.onClick} />
                <PhonesListShort items={items} />
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        items: state.search.searchItems,
        searchString: state.search.searchString
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (searchString) => dispatch(fetchSearchList(searchString))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);

