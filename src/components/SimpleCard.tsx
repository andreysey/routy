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
    title?: string;
    info?: any;
    to?: string | undefined;
    state?: any;
}

export default function SimpleCard(props: ICardProps) {

    const addLeadingZero = (date: string) => {
        return (date.length === 1) ? '0' + date : date;
    }

    const timeHandler = (date: any) => {
        if(!date && typeof date !== 'object') return
        console.log(date)
        let hour = addLeadingZero(date.getHours().toString());
        let minutes = addLeadingZero(date.getMinutes().toString());
        return   hour + `:` + minutes
    }

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
                            {props.info.toString() || 'Card info'}
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
