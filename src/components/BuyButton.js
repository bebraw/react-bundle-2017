import React from "react";
import Countdown from "react-countdown-now";

const BuyButton = () => (
    <div className="text-center">
        <a className="gumroad-button" href="https://gum.co/jWTRq">
            <strong style={{ color: "black" }}>I want this!</strong>
        </a>
        <h3 style={{ marginTop: "10px" }}>
            <big>
                <Countdown
                    date={new Date("2017-12-01T17:00:00.000Z")}
                    zeroPadLength={2}
                />
            </big>
        </h3>
    </div>
);

export default BuyButton;
