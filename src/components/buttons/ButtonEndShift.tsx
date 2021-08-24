import React from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import LocalBarRoundedIcon from '@material-ui/icons/LocalBarRounded';
import {Link as RouterLink} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
            width: '30ch',
        },
    }),
);

export default function ButtonEndShift() {
    const classes = useStyles();

    return (
        <div>
            <Button
                component={RouterLink} to={'/end'}
                // fullWidth
                variant="contained"
                color="primary"
                // size="large"
                className={classes.button}
                startIcon={<LocalBarRoundedIcon/>}
            >
                Конец смены
            </Button>
        </div>

    );
}
