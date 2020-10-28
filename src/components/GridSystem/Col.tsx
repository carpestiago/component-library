import React, { CSSProperties } from 'react';

export interface ICol {
    className?: string
    style?: CSSProperties
    children?: any
    xs?: number | string
    sm?: number | string
    md?: number | string
    lg?: number | string
    xl?: number | string
}

export const Col =  (props: ICol) => 
<div 
    className={ 
          `${props.xs ? `col-xs-${props.xs} ` : ""}`
        + `${props.sm ? `col-sm-${props.sm} ` : ""}`
        + `${props.md ? `col-md-${props.md} ` : ""}`
        + `${props.lg ? `col-lg-${props.lg} ` : ""}`
        + `${props.xl ? `col-xl-${props.xl} ` : ""}`
        + `${(props.xs || props.sm || props.md || props.lg || props.xl) ? "" : "col "}`
        + `${props.className || ""}`
    }
    style={props.style} >
    {props.children}
    
</div>

export default Col;