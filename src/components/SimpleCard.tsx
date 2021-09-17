import React from 'react';
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

    const addLeadingZero = (date: string) => {
        return (date.length === 1) ? '0' + date : date;
    }

    const timeHandler = (date: any) => {
        console.log(date)
        let hour = addLeadingZero(date.getHours().toString());
        let minutes = addLeadingZero(date.getMinutes().toString());
        return   hour + `:` + minutes
    }

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
                            {timeHandler(props.info) || 'Card info'}
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
