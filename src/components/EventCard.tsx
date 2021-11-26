import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CreateRounded} from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import { Link as RouterLink} from 'react-router-dom';

interface ICardProps {
    title?: string | number | Date | null;
    info?: any;
    to?: string | undefined;
    state?: any;
}

export default function EventCard(props: ICardProps) {

    const addLeadingZero = (date: string) => {
        return (date.length === 1) ? '0' + date : date;
    }

    const timeHandler = (timeStamp: any) => {
        if(typeof timeStamp === 'number') {
            let dateObj = new Date(timeStamp)
            let hour = addLeadingZero(dateObj.getHours().toString());
            let minutes = addLeadingZero(dateObj.getMinutes().toString());
            return   hour + `:` + minutes
        } else {
            return timeStamp?.toString()
        }
    }
    // props.info.toString()
    return (
        <Card>
            <Grid container
                  alignItems="center"
            >
                <Grid item xs>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            {props.title || 'Card name'}
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
                            <CreateRounded/>
                        </IconButton>
                    </CardActions>
                </Grid>
            </Grid>
        </Card>
    );
}
