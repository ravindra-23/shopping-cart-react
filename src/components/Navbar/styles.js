import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    appBar: {
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },

    logo: {
        marginRight: '20px',
    },

    title: {
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
    },

    grow: {
        flexGrow: 1,
    },
}))