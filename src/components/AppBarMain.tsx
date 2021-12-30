import * as React from 'react';
import {useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {useLocation} from "react-router-dom";
import {UrlPath} from "../App";

export default function AppBarMain() {

    const [title, setTitle] = React.useState<string>('');

    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case UrlPath.Main:
                setTitle('Норма TODO');
                break;
            case UrlPath.ShiftEvents:
                setTitle('Смена');
                break;
            case UrlPath.ShiftList:
                setTitle('Маршруты');
                break;
            case UrlPath.ShiftStart:
                setTitle('Начать смену');
                break;
            case UrlPath.ShiftEnd:
                setTitle('Конец смены');
                break;
            case UrlPath.LocomotiveStart:
                setTitle('Приемка локомотива');
                break;
            case UrlPath.Passenger:
                setTitle('Пассажиром');
                break;
            case UrlPath.Train:
                setTitle('Поезд');
                break;
            case UrlPath.LocomotiveEnd:
                setTitle('Сдача локомотива');
                break;
            default:
                break;
        }
    }, [location.pathname]);

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
