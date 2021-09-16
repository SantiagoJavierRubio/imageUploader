import React from 'react';
import useStyles from './styles';
import { LinearProgress, Box, Typography } from '@material-ui/core'

const Loader = () => {

    const classes = useStyles();

    return(
        <Box className={classes.loaderMain}>
            <Typography variant='h4' className={classes.loaderText}>Uploading...</Typography>
            <LinearProgress className={classes.loaderBar} />
        </Box>
    )
}

export default Loader;