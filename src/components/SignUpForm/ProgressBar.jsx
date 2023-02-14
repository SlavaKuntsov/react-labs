import React from "react";
import style from "./SignUpForm.module.scss"

function ProgressBar(props) {
    console.log(props.completed * 20);

    // const bar = {
    //     margin: "5px 0 0 0",
    //     height: "5px",
    //     background: "white",
    //     width: "100%",
    //     borderRadius: "20px",
    // };
    const progress = {
        height: "100%",
        width: `${props.completed * 20}%`,
        background: props.color,
        borderRadius: "20px",
    };

    return (
        <div className={style.bar}>
            <div style={progress}></div>
        </div>
        
    );
}

export default ProgressBar;
