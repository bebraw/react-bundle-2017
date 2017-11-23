import React from "react";
import Timer from "react-countdown-now";

const Number = ({ label, children }) => (
    <div
        style={{ display: "inline-block", width: "45px" }}
        className="text-center"
    >
        <h3 style={{ margin: 0, marginBottom: "-7px" }}>
            <big>{children}</big>
        </h3>
        <small style={{ fontSize: "0.7em" }}>{label}</small>
    </div>
);
class Countdown extends React.Component {
    renderer = ({ days, hours, minutes, seconds, completed }) => {
        const { style } = this.props;

        if (completed) {
            return (
                <h3 style={{ marginTop: "10px", ...style }}>
                    <big>Sale's done</big>
                </h3>
            );
        } else {
            return (
                <div style={style}>
                    <Number label="days">{days}</Number>
                    <Number label="hours">{hours}</Number>
                    <Number label="mins">{minutes}</Number>
                    <Number label="secs">{seconds}</Number>
                </div>
            );
        }
    };

    render() {
        return (
            <Timer
                date={new Date("2017-12-01T17:00:00.000Z")}
                zeroPadLength={2}
                renderer={this.renderer}
            />
        );
    }
}

const RawBuyButton = ({ caption }) => (
    <a className="gumroad-button" href="https://gum.co/jWTRq">
        <strong style={{ color: "black" }}>
            {caption || "Level up my skills for $99 👏"}
        </strong>
    </a>
);

const BuyButton = ({ caption }) => (
    <div className="text-center">
        <RawBuyButton caption={caption} />
        <Countdown />
    </div>
);

export default BuyButton;
export { Countdown, RawBuyButton };
