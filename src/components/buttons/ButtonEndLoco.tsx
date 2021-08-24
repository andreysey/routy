import React from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import DirectionsRunRoundedIcon from '@material-ui/icons/DirectionsRunRounded';
import {Link as RouterLink} from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
            width: '30ch',
        },
    }),
);

export default function ButtonEndLoco() {
    const classes = useStyles();

    return (
        <div>
            <Button
                component={RouterLink} to={'/end-loco'}
                variant="contained"
                color="primary"
                // size="large"
                className={classes.button}
                startIcon={<DirectionsRunRoundedIcon/>}
            >
                Сдача
            </Button>
        </div>

    );
}
