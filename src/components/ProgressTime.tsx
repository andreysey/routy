import React from 'react';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link as RouterLink} from 'react-router-dom';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            // margin: theme.spacing(1),
            // marginBottom: theme.spacing(5),
            // minWidth: 130,
            // width: '45ch',
        },
    }),
);

function CircularProgressWithLabel(props: CircularProgressProps & { value: number }) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
        <ButtonBase component={RouterLink} to={'/history'} >
        <Box position="relative" display="inline-flex">
            <CircularProgress
                thickness={5}
                color="secondary"
                size={200}
                variant="determinate"
                {...props} />
            <Box
                top={10}
                left={10}
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
                >{`${Math.round(props.value,)}`}</Typography>
            </Box>
        </Box>
        </ButtonBase>
        </div>
    );
}

export default function ProgressTime() {
    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 1500);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return <CircularProgressWithLabel value={progress} />;
}
