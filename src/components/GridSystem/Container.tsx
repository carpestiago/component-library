import React, { CSSProperties } from "react";


export interface IContainer {
    fluid?: boolean
    className?: String
    style?: CSSProperties
    children?: any
    sm?: boolean
    md?: boolean
    lg?: boolean
    xl?: boolean
};

export const Container =  React.forwardRef(({
    fluid = false,
    className = "",
    style = null!,
    children = null,
    sm = false,
    md = false,
    lg = false,
    xl = false
}:IContainer, ref: any) => 
    <div ref={ref}
        className={
            `${
            (fluid && "container-fluid " ) 
            || (sm && "container-sm ")
            || (md && "container-md ")
            || (lg && "container-lg ")
            || (xl && "container-xl ")
            || "container "
            }`
            + `${className || ""}`
        }
        style={style} >
        {children}
    </div>
);
export default Container;