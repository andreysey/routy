import React, {JSXElementConstructor, ReactElement, ReactNodeArray, ReactPortal} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
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

interface ICardProps {
    name?: string;
    info?: any;
    to?: string | undefined;
    state?: any;
}

export default function SimpleCard(props: ICardProps) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Grid container
                  alignItems="center"
            >
                <Grid item xs>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {props.name || 'Card name'}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {props.info || 'Card info'}
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item>
                    <CardActions>
                        <IconButton
                            component={RouterLink} to={props.to || ''}
                            color="primary" aria-label="изменить">
                            <CreateRoundedIcon/>
                        </IconButton>
                    </CardActions>
                </Grid>
            </Grid>
        </Card>
    );
}
