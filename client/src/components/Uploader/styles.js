import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    uploaderMain: {
        margin: 'auto',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: '12px',
        boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
        width: '25.12rem',
        height: '29.31rem',
    },
    uploaderHeader: {
        fontFamily: 'Poppins sans-serif',
        color: '#4F4F4F',
        textAlign: 'center',
        fontSize: '1.13rem',
        fontWeight: 500,
    },
    dropBox: {
        width: '21.13rem',
        height: '13.9rem',
        paddingBottom: '2.4rem',
        backgroundColor: '#F6F8FB',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px dashed #97BEF4',
        borderRadius: '12px',
    },
    dropBoxOver: {
        backgroundColor: '#d9dbde',
    },
    extensionText: {
        fontFamily: 'Poppins sans-serif',
        color: '#828282',
        textAlign: 'center',
        fontSize: '.63rem',
        fontWeight: 500,
    },
    optionText: {
        fontFamily: 'Poppins sans-serif',
        color: '#828282',
        textAlign: 'center',
        fontSize: '.75rem',
        fontWeight: 500,
    },
    SVG: {
        margin: 'auto',
    },
    inputButton: {
        backgroundColor: '#2F80ED',
        borderRadius: '8px',
        color: '#FFF',
        '&:hover': {
            backgroundColor: '#2F80FF',
        },
        width: '6.3rem',
        height: '1.9rem',
        fontSize: '.75rem',
        padding: '.5rem 1rem',
        textTransform: 'none',
        fontFamily: 'Noto Sans',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 500,
    },
    realInput: {
        display: 'none',
    }
}))