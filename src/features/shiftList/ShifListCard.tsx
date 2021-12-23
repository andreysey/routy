import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CreateRounded} from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import {Link as RouterLink} from 'react-router-dom';
import {format, millisecondsToMinutes} from "date-fns";

interface ICardProps {
    start: number
    end: number
    to?: string | undefined
    state?: any
}

export default function ShiftListCard(props: ICardProps) {

    const hoursAndMinutes = (start: number, end: number) => {
        const duration = end - start
        const durationInMinutes = millisecondsToMinutes(duration)
        const hours = Math.floor(durationInMinutes / 60)
        const minutes = durationInMinutes % 60
        return (hours < 10 ? '0' + hours : hours) + `:` + (minutes < 10 ? '0' + minutes : minutes)
    }


    return (
        <Card>
            <Grid container
                  alignItems="center"
            >
                <Grid item xs>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            {`${format(props.start, "dd.MM HH:mm")} - ${format(props.end, "dd.MM HH:mm")}` || 'Card name'}
                        </Typography>
                        <Typography variant="h6" component="h2">
                            {hoursAndMinutes(props.start, props.end) || 'Card info'}
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
