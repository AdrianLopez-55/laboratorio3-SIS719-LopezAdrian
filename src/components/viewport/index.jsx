import { useStyles } from "./viewport.css";
import { useEffect, useState } from "react";

const ViewPort = () => {
    const classes = useStyles();
    const [size, setSize] = useState({width: window.screen.width, height: window.screen.height});
    useEffect(() => {
        const updateWindow = () => {
            let {innerWidth, innerHeight} = window;
            setSize({width: innerWidth, height: innerHeight});
        }
        window.removeEventListener('resize', updateWindow);
    });
    return (
        <div className={classes.wrapper}>
            <h1 className={classes.h1}>
                Your ViewPort size is:
            </h1>
            <div className={classes.sizes}>
                {size.width}px  x  {size.height}px
            </div>
            <hr />
        </div>
    );
}

export default ViewPort;