import React from "react";

const PaymentDetails = (props) => {

    const onPaymentChanged = () => {
        const now = new Date().toLocaleTimeString()
        props.emitter.emit("paymentChanged", now);
    }

    return (
        <div>
            <h3>Payment Details</h3>
            <ul>
                <li><i>payment method: </i>credit card</li>
                <li><a href="#" onClick={onPaymentChanged}>Change payment method to PayPal</a></li>
                <li><a href="#">View payments history</a></li>
            </ul>
        </div>
    );
}

export default PaymentDetails;
                