import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CreateRounded} from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import {Link as RouterLink} from 'react-router-dom';
import {format} from "date-fns";


interface ShiftEndCardProps {
    title?: string | number | Date | null;
    info?: number | Date;
    to?: string | undefined;
    state?: any;
}

export default function ShiftEndCard(props: ShiftEndCardProps) {

    const type = props.state.type
    const timeEnd = props.state.timeEnd

    return (
        <Card>
            <Grid container
                  alignItems="center"
            >
                <Grid item xs>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            {`${type}  ${format(timeEnd, "dd.MM")}` || 'Card name'}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {format(timeEnd, "HH:mm") || 'Card info'}
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
