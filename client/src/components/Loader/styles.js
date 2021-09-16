import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    loaderMain: {
        backgroundColor: '#FFF',
        margin: 'auto',
        padding: '.5rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        borderRadius: '12px',
        boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
        width: '25.12rem',
        height: '9rem',
    },
    loaderText: {
        fontFamily: 'Poppins sans-serif',
        alignSelf: 'flex-start',
        fontSize: '1.13rem',
        color: '#4F4F4F',
        fontWeight: 500,
    },
    loaderBar: {
        width: '100%',
        borderRadius: '8px',
        backgroundColor: '#F2F2F2',
        color: '#2F80ED',
    },
}));

