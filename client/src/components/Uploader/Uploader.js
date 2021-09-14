import React, { useState } from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import useStyles from './styles';
import { ReactComponent as ImageLogo } from './image.svg';

const Uploader = () => {
    const classes = useStyles();

    const [isOver, setOver] = useState(false);

    const VALID_EXTENSIONS = ['.gif', '.png', '.jpg', '.jpeg'];

    const uploadFile = (file) => {
        console.log(file?.name);
    }

    const handleDrop = (e) => {
        e.preventDefault();
        setOver(false);
        const file = e.dataTransfer?.files?.[0];
        let fileExtension = file?.name?.substring(file?.name?.lastIndexOf('.'))
        if(VALID_EXTENSIONS.includes(fileExtension)){
            uploadFile(e.dataTransfer.files[0]);
        } else {
            alert('File extension not supported');
        }
    }

    const handleDragOver = (e) => {
        e.preventDefault();
        if(!isOver) setOver(true);
    }

    const handleDragExit = (e) => {
        e.preventDefault();
        if(isOver) setOver(false);
    }

    const handleFile = (e) => {
        e.preventDefault();
        uploadFile(e.target.files[0]);
    }

    return(
        <Box className={classes.uploaderMain}>
            <Typography variant='h2' className={classes.uploaderHeader}>Upload your image</Typography>
            <Typography variant='body2' className={classes.extraText}>File should be GIF, PNG or JPG</Typography>
            <Box id="drop_zone" className={`${classes.dropBox} ${isOver? classes.dropBoxOver : null}`} onDrop={e=>handleDrop(e)} onDragOver={handleDragOver} onDragLeave={handleDragExit}>
                <ImageLogo  className={classes.SVG} />
                <Typography variant="body1">Drag & drop your image here</Typography>
            </Box>
            <Typography variant="body2" className={classes.extraText}>Or</Typography>
            <Button component="label" htmlFor="file_input" variant='contained' className={classes.inputButton}>Choose a file</Button>
            <input type="file" id="file_input" accept='image/*' onChange={handleFile} className={classes.realInput}/>
        </Box>
    )
}

export default Uploader;