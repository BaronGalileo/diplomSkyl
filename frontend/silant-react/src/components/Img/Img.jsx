import React from "react";
import classNames from "classnames";
import "./styles.css"

function Img({ className, clear, src = "defaultNoData.png", alt = "testImg", ...restProps }){

    const classes = classNames(
        !clear? 'img' : null,
        className,
    )

    return <img className={classes}
                src={src} 
                alt={alt} 
                {...restProps} 
                loading={"lazy"}/>
};

export {Img}
