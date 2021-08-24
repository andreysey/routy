import React from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import EmojiPeopleRoundedIcon from '@material-ui/icons/EmojiPeopleRounded';
import {Link as RouterLink} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
            width: '30ch',
        },
    }),
);

export default function ButtonPassenger() {
    const classes = useStyles();

    return (
        <div>
            <Button
                component={RouterLink} to={'/start-pass'}
                variant="contained"
                color="primary"
                // size="large"
                className={classes.button}
                startIcon={<EmojiPeopleRoundedIcon/>}
            >
                Пассажиром
            </Button>
        </div>

    );
}
