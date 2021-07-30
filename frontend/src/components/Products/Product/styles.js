import { makeStyles } from "@material-ui/core";
import { red } from '@material-ui/core/colors';


export default makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    btnAddToCart: {
        color: 'white',
        backgroundColor: '#f73471',
        borderRadius: '30px',
    },
}));
