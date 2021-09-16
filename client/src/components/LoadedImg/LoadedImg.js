import React, { useState } from "react";
import { Box, Typography, Button, Tooltip } from "@material-ui/core";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import useStyles from './styles';

const LoadedImg = (props) => {

    const classes = useStyles();

    const { imageData } =  props;
    const [tooltip, setTooltip] = useState(false);


    const handleCopy = () => {
        navigator.clipboard.writeText(`${process.env.REACT_APP_API_URI}/img/${imageData.id}`);
        setTooltip('Copied to clipboard');
    }

    return(
        <Box className={classes.imageMain}>
            <CheckCircleIcon className={classes.doneIcon}/>
            <Typography variant="h4" className={classes.imageText}>Uploaded Successfully!</Typography>
            <img src={`data:image/jpeg;base64,${imageData.binary}`}  className={classes.image} />
            <Box className={classes.linkBox}>
                <Typography variant="body1" className={classes.linkText}>{`${process.env.REACT_APP_API_URI}/img/${imageData.id}`}</Typography>
                {tooltip ? 
                    <Tooltip arrow title={tooltip}>
                        <Button variant="contained" className={classes.linkButton}>Copy Link</Button>
                    </Tooltip>
                    :
                    <Button variant="contained" className={classes.linkButton} onClick={handleCopy}>Copy Link</Button>
                }
            </Box>
        </Box>
    )
}

export default LoadedImg;