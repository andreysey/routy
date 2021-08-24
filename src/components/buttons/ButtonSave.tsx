import React from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SaveAltRoundedIcon from '@material-ui/icons/SaveAltRounded';
import {Link as RouterLink} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
            width: '30ch',
        },
    }),
);

export default function ButtonSave() {
    const classes = useStyles();

    return (
        <div>
            <Button
                component={RouterLink} to={'/shift'}
                variant="contained"
                color="primary"
                // size="large"
                // fullWidth
                className={classes.button}
                startIcon={<SaveAltRoundedIcon/>}
            >
                Сохранить
            </Button>
        </div>

    );
}
