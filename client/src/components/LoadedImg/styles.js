import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    imageMain: {
        backgroundColor: '#FFF',
        margin: 'auto',
        padding: '.5rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: '12px',
        boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
        width: '25.12rem',
        height: '28.5rem',
    },
    doneIcon: {
        fontSize: '2.19rem',
        color: '#219653',
    },
    imageText: {
        fontFamily: 'Poppins',
        fontSize: '1.13rem',
        color: '#4F4F4F',
        fontWeight: 500,
    },
    image: {
        maxWidth: '21.12rem',
        maxHeight: '14rem',
        borderRadius: '12px',
    },
    linkBox: {
        width: '100%',
        border: '1px solid #E0E0E0',
        borderRadius: '8px',
        boxSizing: 'border-box',
        backgroundColor: '#F6F8FB',
        display: 'flex',
        alignItems: 'center',
        padding: '.12rem',
    },
    linkText: {
        overflow: 'auto',
        flexGrow: 1,
        textAlign: 'center',
        color: '#4F4F4F',
        fontFamily: 'Poppins',
        fontSize: '.7rem',
        fontWeight: 500,
    },
    linkButton: {
        width: '4.6rem',
        height: '1.8rem',
        color: '#FFF',
        fontFamily: 'Poppins',
        fontSize: '.5rem',
        fontWeight: 500,
        whiteSpace: 'nowrap',
        borderRadius: '8px',
        backgroundColor: '#2F80ED',
    }
}));