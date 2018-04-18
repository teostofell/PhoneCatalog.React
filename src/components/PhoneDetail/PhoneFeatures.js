import React from "react";
import CartButton from "../CartButton/CartButton";
import PhotoSlider from "./PhotoSlider";
import "./PhoneDetail.css";

class PhoneFeatures extends React.Component{
    render(){
        let { photos, model, addToCart, item, orderId } = this.props;
        return (
            <div className="row features justify-content-center py-5">
                <div className="col-sm-4">
                    <div className="phone-title">
                        <h1>{model}</h1>
                    </div>
                    <CartButton item={item} onCheck={addToCart} showQuantity={true} OrderId={orderId} />
                </div>
                <div className="col-sm-5">
                    <PhotoSlider photos={photos}/>
                </div>
            </div>            
        )
    }
}

export default PhoneFeatures;