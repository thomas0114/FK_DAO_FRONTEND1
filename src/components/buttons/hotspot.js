import React from "react";
import '../../App.scss';

const Btn_hotstop = ({ posx, posy }) => {
    return (
        <>
            <button style={{
                'top': posy,
                'left': posx,
            }} className="tip-button" ><img src="../../icon-tip-button.svg" alt="tip button icon" /></button>
        </>
    );
};

export default Btn_hotstop;