import React from "react";
import { Table } from 'reactstrap';

class PhoneSpecs extends React.Component {
    render() {
        let specifications = this.props.specifications;
        return (
            <div className="phone-specifications py-2">
            <Table hover striped>
                <thead>
                    <tr>
                        <h5>Device Specifications</h5>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Brand</th>
                        <td>{specifications.BrandName}</td>
                    </tr>
                    <tr>
                        <th scope="row">Model</th>
                        <td>{specifications.Model}</td>
                    </tr>
                    <tr>
                        <th scope="row">Release</th>
                        <td>{specifications.ReleaseDate}</td>
                    </tr>
                    <tr>
                        <th scope="row">Operating System</th>
                        <td>{specifications.OSName}</td>
                    </tr>
                    <tr>
                        <th scope="row">Battery</th>
                        <td>{specifications.Battery}</td>
                    </tr>
                    <tr>
                        <th scope="row">Screen Size</th>
                        <td>{specifications.ScreenSize}</td>
                    </tr>
                    <tr>
                        <th scope="row">Screen Resolution</th>
                        <td>{specifications.ScreenResolutionHeight}x{specifications.ScreenResolutionWidth}({specifications.ScreenResolutionName})</td>
                    </tr>
                    <tr>
                        <th scope="row">Storage</th>
                        <td>{specifications.Storage} GB</td>
                    </tr>
                </tbody>
            </Table>
            </div>
        )
    }
}

export default PhoneSpecs;