import React, { CSSProperties } from "react";


export interface IRow {
    className?: string
    style?: CSSProperties
    children?: any
}

export const Row = ({
    className = "",
    style = null!,
    children = null
}: IRow) => (
<div 
    className={`row ${className || ""}`} 
    style={style} >
    {children}
</div>
);

export default Row;