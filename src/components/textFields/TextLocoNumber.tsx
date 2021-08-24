import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                // margin: theme.spacing(1),
                marginBottom: theme.spacing(5)
                // width: '17ch',
            },
        },
    }),
);

export default function TextLocoNumber() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                fullWidth
                // id="outlined-basic"
                label="Номер"
                placeholder="Локомотива"
                helperText=" "
                variant="outlined"
                color="primary"
            />
        </form>
    );
}
