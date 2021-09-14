import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    uploaderMain: {
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '12px',
        boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
    },
    uploaderHeader: {
        fontSize: '2rem',
    },
    dropBox: {
        marginTop: '1rem',
        padding: '1rem 2rem',
        backgroundColor: '#F6F8FB',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'space-between',
        border: '1px dashed #97BEF4',
        borderRadius: '12px',
    },
    dropBoxOver: {
        backgroundColor: '#d9dbde',
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
        }
    },
    realInput: {
        display: 'none',
    }
}))