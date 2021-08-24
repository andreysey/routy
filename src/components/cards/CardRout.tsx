import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import IconButton from "@material-ui/core/IconButton";
import Grid from '@material-ui/core/Grid';
import { Link as RouterLink} from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginBottom: 12,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function CardRout() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Grid container
                  alignItems="center"
            >
                <Grid item xs>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            24.08.21  2002/4004
                        </Typography>
                        <Typography variant="h5" component="h2">
                            15:30 - 17:29 - 11:45
                        </Typography>
                        {/*<Typography className={classes.pos} color="textSecondary">*/}
                        {/*    2002/4004*/}
                        {/*</Typography>*/}
                        {/*<Typography variant="body2" component="p">*/}
                        {/*    10:59*/}
                        {/*</Typography>*/}
                    </CardContent>
                </Grid>
                <Grid item>
                    <CardActions>
                        <IconButton
                            component={RouterLink} to={'/shift'}
                            color="primary" aria-label="изменить">
                            <CreateRoundedIcon/>
                        </IconButton>
                    </CardActions>
                </Grid>
            </Grid>
        </Card>
    );
}
