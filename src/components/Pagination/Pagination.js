import React from "react";
import PageItem from "./PageItem";

class Pagination extends React.Component {
    render() {
        let { total, changePage } = this.props;

        var pages = Array.from({ length: total }, (v, k) => k + 1);

        return (
            <ul className="pagination">
                {pages.map(p =>
                    <PageItem key={p} number={p} changePage={changePage} />
                )}
            </ul>
        );
    }
}

export default Pagination;