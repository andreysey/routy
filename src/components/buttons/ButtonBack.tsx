import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import { Link as RouterLink} from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                // margin: theme.spacing(0),
                marginBottom: 30,
            },
        },
    }),
);

export default function TextButtons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button
                component={RouterLink} to="/"
                // fullWidth
                startIcon={<ArrowBackIosRoundedIcon/>}
            >
                Назад</Button>
        </div>
    );
}
