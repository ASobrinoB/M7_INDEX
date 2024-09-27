import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import './PaypalButton.css';

export default class PaypalButton extends React.Component {
    render() {
        const createOrder = (data, actions) => {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        currency_code: "USD",
                        value: this.props.valor,
                    },
                }],
                application_context: {
                    shipping_preference: "NO_SHIPPING",
                },
            }).then(orderID => {
                return orderID;
            });
        };

        const onApprove = payment => {
            console.log("El pago fue exitoso!", payment);
        };

        const options = {
            "client-id": "Aei3AmuWpWCHmUGKMCVeblvp3sWP6ckcX7i2zWECj1QR7WYRnZZuDQb9nfJMK6PHNfe5UYqgVaC59yaO"
        };

        return (
            <PayPalScriptProvider options={options}>
                <div className="paypal-button-container">
                    <PayPalButtons
                        onApprove={onApprove}
                        createOrder={createOrder}
                    />
                </div>
            </PayPalScriptProvider>
        );
    }
}
