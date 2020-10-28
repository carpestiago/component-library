import React, { useEffect, useState, useRef } from 'react';
import Container, { IContainer } from './Container';

import "./ContainerSizeWatcher.scss";

export interface IContainerSizeWatcher extends IContainer  {
    devMode?: boolean
    iniClassName: string
    quebrasMaxWidth: number[]
}

export const ContainerSizeWatcher = (props: IContainerSizeWatcher) => {
    const containerRef = useRef();
    const [ containerWidth, setContainerWidth ] = useState(-1);
    const [ quebraClassName, setQuebraClassName ] = useState("");

    const windowResizeHandler = () => {
        const currentContainerWidth = (containerRef.current as unknown as HTMLDivElement).offsetWidth;

        if (containerWidth !== currentContainerWidth) {
            if (props.devMode)
                setContainerWidth(currentContainerWidth);

            let newQuebraClassName = "";
            props.quebrasMaxWidth.forEach(quebra => {
                if (currentContainerWidth < quebra) {
                    newQuebraClassName += ` ${props.iniClassName}-width-menor-${quebra}`
                }
            });
            setQuebraClassName(newQuebraClassName);
        }
    }

    useEffect(() => {
        // didMount
        window.addEventListener("resize", windowResizeHandler);
        windowResizeHandler();
    });
    useEffect(() => {
        // will unmount
        return () => {
            window.removeEventListener("resize", windowResizeHandler);
        }
    });

    const containerToRender = <Container ref={containerRef} { ...props } className={`${props.className} ${quebraClassName}`} />;

    return (
        props.devMode 
        ?
            <div className="container-size-watcher">
                <div className="width-watcher">
                    <div>{containerWidth}</div>
                    <div>{(quebraClassName ?? "").split(" ").map(quebra => <div>{quebra}</div>)}</div>
                </div>
                {containerToRender}
            </div>
        :
            containerToRender
    );
}

export default ContainerSizeWatcher;