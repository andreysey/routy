import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                // margin: theme.spacing(2),
                // width: '34ch',
            },
        },
    }),
);

export default function TextRouteNumber() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                fullWidth
                // id="outlined-basic"
                label="Поезд"
                placeholder="Номер"
                // helperText="Номер"
                variant="outlined"
                color="primary"
            />
        </form>
    );
}
