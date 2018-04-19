import React from "react";
import PhoneListItem from "./PhoneListItem";
import Spinner from "../Spinner/Spinner";
import "./PhoneListShort.css";

function PhonesListShort(props) {
	let phones = props.items;

	if (phones === null)
		return <Spinner isSpinning={true} />

	return (
        phones.map((item) =>
            <div className="phone-item">
                <PhoneListItem data={item} key={item.Id} />
            </div>
        )
	);
}

export default PhonesListShort;