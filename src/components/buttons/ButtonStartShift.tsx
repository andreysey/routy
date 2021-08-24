import React from 'react';
import Button from '@material-ui/core/Button';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import { Link as RouterLink} from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
            width: '30ch',
        },
    }),
);

export default function ButtonStartShift() {
    const classes = useStyles();

    return (
        <div>
            <Button
                component={RouterLink} to={'/start'}
                variant="contained"
                color="primary"
                // size="large"
                className={classes.button}
                startIcon={<PlayArrowRoundedIcon/>}
            >
                Начать смену
            </Button>
        </div>

    );
}
