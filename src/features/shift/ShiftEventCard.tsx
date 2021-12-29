import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CreateRounded} from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import { Link as RouterLink} from 'react-router-dom';
import {format} from "date-fns";
import {EventType} from "./types";

interface ICardProps {
    title?: string | number | Date | null;
    info?: number | Date;
    to?: string | undefined;
    state?: any;
}

export default function ShiftEventCard(props: ICardProps) {

    const info = props.state.timeStart || 0
    const title = props.state.type || 0

   switch (props.state.type) {
        case EventType.ShiftStart:
            return (<><Card>
                <Grid container
                      alignItems="center"
                >
                    <Grid item xs>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                {`${title}  ${format(info, "dd.MM")}` || 'Card name'}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {info ? format(info, "HH:mm") : 'Card info'}
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
            </Card></>)
       default: return (<></>)
       break
    }

}
//
// import React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import {CreateRounded} from "@mui/icons-material";
// import IconButton from '@mui/material/IconButton';
// import Grid from '@mui/material/Grid';
// import { Link as RouterLink} from 'react-router-dom';
// import {format} from "date-fns";
//
//
// interface ShiftStartCardProps {
//     title?: string | number | Date | null;
//     info?: number | Date;
//     to?: string | undefined;
//     state?: any;
// }
//
// export default function ShiftStartCard(props: ShiftStartCardProps) {
//
//     const info = props.state.timeStart || 0
//     const title = props.state.type || 0
//
//     return (
//         <Card>
//             <Grid container
//                   alignItems="center"
//             >
//                 <Grid item xs>
//                     <CardContent>
//                         <Typography color="textSecondary" gutterBottom>
//                             {`${title}  ${format(info, "dd.MM")}` || 'Card name'}
//                         </Typography>
//                         <Typography variant="h5" component="h2">
//                             {props.info ? format(props.info, "HH:mm") : 'Card info'}
//                         </Typography>
//                     </CardContent>
//                 </Grid>
//                 <Grid item>
//                     <CardActions>
//                         <IconButton
//                             component={RouterLink} to={props.to || ''}
//                             color="primary" aria-label="изменить">
//                             <CreateRounded/>
//                         </IconButton>
//                     </CardActions>
//                 </Grid>
//             </Grid>
//         </Card>
//     );
// }
