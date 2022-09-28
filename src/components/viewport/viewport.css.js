import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles( theme => ({
    wrapper: {
        margin: theme.spacing(5),
        padding: theme.spacing(1),
        flexDirection: '',
        justifyContent: 'center',
        textAlign: 'center',
    },
    h1: {
        color: theme.palette.tertiary.contrastText,
    },
    sizes: {
        fontSize: '2rem',
        color: theme.palette.tertiary.contrastText,
    }
}))