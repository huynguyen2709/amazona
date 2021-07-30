import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'white',
    },
    middle: {
        flexGrow: 1,
    },
    middleInside: {
        width: '60%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    blankSpace: {
        height: '40px',
        width: '10%',
    },
    page: {
        color: 'white',
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
}));