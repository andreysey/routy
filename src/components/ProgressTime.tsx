import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import ButtonBase from '@mui/material/ButtonBase';
import {Link as RouterLink} from 'react-router-dom';

export default function CircularProgressWithLabel() {

    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <>
            <ButtonBase component={RouterLink} to={'/history'} >
            <Box position={"relative"} display={"inline-flex"}>
                <CircularProgress variant="determinate" value={progress} size={300} color={"success"}/>
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography
                        variant="h3"
                        component="div"
                        color="textPrimary"
                        align="center"
                    >{`${Math.round(progress)}`}
                    </Typography>
                </Box>
            </Box>
            </ButtonBase>
        </>
    );
}
