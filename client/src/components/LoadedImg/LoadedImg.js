import React from "react";

const LoadedImg = (props) => {

    const { imageData } =  props;
    return(
        <img src={`data:image/jpeg;base64,${imageData.binary}`} />
    )
}

export default LoadedImg;