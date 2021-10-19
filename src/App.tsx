import React, {useState} from 'react';
import {Route, Switch,} from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import StartShiftPage from "./components/pages/StartShiftPage";
import ShiftPage from "./components/pages/ShiftPage";
import StartLocoPage from "./components/pages/StartLocoPage";
import StartPassPage from "./components/pages/StartPassPage";
import StartTrainPage from "./components/pages/StartTrainPage";
import EndShiftPage from './components/pages/EndShiftPage';
import EndLocoPage from './components/pages/EndLocoPage';
import HistoryPage from "./components/pages/HistoryPage";
import TextFieldInput from "./components/TextFieldInput";
import SelectLoco from "./components/SelectLoco";
import {SaveAltRounded} from "@mui/icons-material";
import TextButton from "./components/TextButton";
import {ICards} from "./interfaces";
import CssBaseline from '@mui/material/CssBaseline';
import PickTime from './components/pickers/PickTime';

function App() {
    const cardsHandler = (title: string, info: Date | null | undefined | string) => {
        const newCard: ICards = {
            title: title,
            id: Date.now(),
            info: info
        }
        setCards(prevState => [...prevState, newCard])
    }

    const [lastAction, setLastAction] = useState('')

    const [cards, setCards] = useState<ICards[]>([]);

    const [startShiftToggle, setStartShiftToggle] = useState<boolean>(false);

    // Start shift page state
    const [route, setRoute] = useState('');
    const [startShiftTime, setStartShiftTime] = React.useState<Date | null>(new Date());
    // Pass state
    const [passTrain, setPassTrain] = useState('');
    const [passStationDeparture, setPassStationDeparture] = useState('');
    const [passTimeDeparture, setPassTimeDeparture] = React.useState<Date | null>(new Date());
    const [passStationArrival, setPassStationArrival] = useState('');
    const [passTimeArrival, setPassTimeArrival] = React.useState<Date | null>(new Date());
    // Start loco
    const [locoType, setLocoType] = useState('');
    const [locoNumber, setLocoNumber] = useState('');
    const [startEnergyA, setStartEnergyA] = useState('');
    const [startEnergyB, setStartEnergyB] = useState('');
    const [startRecupA, setStartRecupA] = useState('');
    const [startRecupB, setStartRecupB] = useState('');
    // Train state
    const [train, setTrain] = useState('');
    const [trainStationDeparture, setTrainStationDeparture] = useState('');
    const [trainTimeDeparture, setTrainTimeDeparture] = React.useState<Date | null>(new Date());
    const [trainStationArrival, setTrainStationArrival] = useState('');
    const [trainTimeArrival, setTrainTimeArrival] = React.useState<Date | null>(new Date());
    // End loco
    const [endEnergyA, setEndEnergyA] = useState('');
    const [endEnergyB, setEndEnergyB] = useState('');
    const [endRecupA, setEndRecupA] = useState('');
    const [endRecupB, setEndRecupB] = useState('');
    // End shift state
    const [endShiftTime, setEndShiftTime] = React.useState<Date | null>(new Date());


    return (
        <>
            <CssBaseline/>
                <Switch>
                    <Route path="/" exact>
                        <MainPage
                            startShiftToggle={startShiftToggle}/>
                    </Route>
                    <Route path="/start">
                        <StartShiftPage
                            time={<PickTime
                                id={'startShiftTime'}
                                state={startShiftTime}
                                setState={setStartShiftTime}/>}
                            routeInput={<TextFieldInput
                                id={'route'}
                                state={route}
                                setState={setRoute}
                                label={'Маршрут'}
                                placeholder={'Номер'}
                                type={'number'}/>}
                            saveButton={<TextButton
                                name={'Сохранить'}
                                to={'/shift'}
                                startIcon={<SaveAltRounded/>}
                                onClick={() => {
                                    setStartShiftToggle(true);
                                    cardsHandler('Явка', startShiftTime);
                                    setLastAction('Явка');
                                }}/>}/>
                    </Route>
                    <Route path="/shift">
                        <ShiftPage
                            cards={cards}
                            lastAction={lastAction}/>
                    </Route>
                    <Route path="/start-loco">
                        <StartLocoPage
                            locoType={<SelectLoco
                                id={'locoType'}
                                state={locoType}
                                setState={setLocoType}/>}
                            locoNumber={<TextFieldInput
                                id={'locoNumber'}
                                state={locoNumber}
                                setState={setLocoNumber}
                                label={'Номер'}
                                placeholder={'Локомотива'}
                                helperText={' '}
                                type={'number'}/>}
                            startEnergyA={<TextFieldInput
                                id={'startEnergyA'}
                                state={startEnergyA}
                                setState={setStartEnergyA}
                                label={'А'}
                                placeholder={'00-00-00'}
                                helperText={'Энергия'}
                                type={'number'}/>}
                            startEnergyB={<TextFieldInput
                                id={'startEnergyB'}
                                state={startEnergyB}
                                setState={setStartEnergyB}
                                label={'Б'}
                                placeholder={'00-00-00'}
                                helperText={'Энергия'}
                                type={'number'}/>}
                            startRecupA={<TextFieldInput
                                id={'startRecupA'}
                                state={startRecupA}
                                setState={setStartRecupA}
                                label={'А'}
                                placeholder={'00-00-00'}
                                helperText={'Рекуперация'}
                                type={'number'}/>}
                            startRecupB={<TextFieldInput
                                id={'startRecupB'}
                                state={startRecupB}
                                setState={setStartRecupB}
                                label={'Б'}
                                placeholder={'00-00-00'}
                                helperText={'Рекуперация'}
                                type={'number'}/>}
                            saveButton={<TextButton
                                name={'Сохранить'}
                                to={'/shift'}
                                startIcon={<SaveAltRounded/>}
                                onClick={() => {
                                    cardsHandler('Принят', locoNumber);
                                    setLastAction('Принят');
                                }}/>}/>
                    </Route>
                    <Route path="/start-pass">
                        <StartPassPage
                            passTrain={<TextFieldInput
                                id={'passTrain'}
                                label={'Поезд'}
                                placeholder={'Номер'}
                                state={passTrain}
                                setState={setPassTrain}
                                type={'number'}/>}
                            timeDeparture={<PickTime
                                id={'passTimeDeparture'}
                                state={passTimeDeparture}
                                setState={setPassTimeDeparture}/>}
                            passStationDeparture={<TextFieldInput
                                id={'passStationDeparture'}
                                label={'Станция оправления'}
                                state={passStationDeparture}
                                setState={setPassStationDeparture}/>}
                            timeArrival={<PickTime
                                id={'passTimeArrival'}
                                state={passTimeArrival}
                                setState={setPassTimeArrival}/>}
                            passStationArrival={<TextFieldInput
                                id={'passStationArrival'}
                                label={'Станция прибытия'}
                                state={passStationArrival}
                                setState={setPassStationArrival}/>}
                            saveButton={<TextButton
                                name={'Сохранить'}
                                to={'/shift'}
                                startIcon={<SaveAltRounded/>}
                                onClick={() => {
                                    cardsHandler('Пассажиром', passTimeDeparture);
                                    setLastAction('Пассажиром');
                                }}/>}/>
                    </Route>
                    <Route path="/start-train">
                        <StartTrainPage
                            train={<TextFieldInput
                                id={'train'}
                                label={'Поезд'}
                                placeholder={'Номер'}
                                state={train}
                                setState={setTrain}/>}
                            trainStationDeparture={<TextFieldInput
                                id={'trainStationDeparture'}
                                label={'Станция оправления'}
                                state={trainStationDeparture}
                                setState={setTrainStationDeparture}/>}
                            timeDeparture={<PickTime
                                id={'trainTimeDeparture'}
                                state={trainTimeDeparture}
                                setState={setTrainTimeDeparture}/>}
                            trainStationArrival={<TextFieldInput
                                id={'trainStationArrival'}
                                label={'Станция прибытия'}
                                state={trainStationArrival}
                                setState={setTrainStationArrival}/>}
                            timeArrival={<PickTime
                                id={'trainTimeArrival'}
                                state={trainTimeArrival}
                                setState={setTrainTimeArrival}/>}
                            saveButton={<TextButton
                                name={'Сохранить'}
                                to={'/shift'}
                                startIcon={<SaveAltRounded/>}
                                onClick={() => {
                                    cardsHandler('Поезд', train);
                                    setLastAction('Поезд');
                                }}/>}/>
                    </Route>
                    <Route path="/end-loco">
                        <EndLocoPage
                            endEnergyA={<TextFieldInput
                                id={'endEnergyA'}
                                state={endEnergyA}
                                setState={setEndEnergyA}
                                label={'А'}
                                placeholder={'00-00-00'}
                                helperText={'Энергия'}
                                type={'number'}/>}
                            endEnergyB={<TextFieldInput
                                id={'endEnergyB'}
                                state={endEnergyB}
                                setState={setEndEnergyB}
                                label={'Б'}
                                placeholder={'00-00-00'}
                                helperText={'Энергия'}
                                type={'number'}/>}
                            endRecupA={<TextFieldInput
                                id={'endRecupA'}
                                state={endRecupA}
                                setState={setEndRecupA}
                                label={'А'}
                                placeholder={'00-00-00'}
                                helperText={'Рекуперация'}
                                type={'number'}/>}
                            endRecupB={<TextFieldInput
                                id={'endRecupB'}
                                state={endRecupB}
                                setState={setEndRecupB}
                                label={'Б'}
                                placeholder={'00-00-00'}
                                helperText={'Рекуперация'}
                                type={'number'}/>}
                            saveButton={<TextButton
                                name={'Сохранить'}
                                to={'/shift'}
                                startIcon={<SaveAltRounded/>}
                                onClick={() => {
                                    cardsHandler('Сдан', locoNumber);
                                    setLastAction('Сдан');
                                }}/>}/>
                    </Route>
                    <Route path="/end">
                        <EndShiftPage
                            time={<PickTime
                                id={'endShiftTime'}
                                state={endShiftTime}
                                setState={setEndShiftTime}/>}
                            saveButton={<TextButton
                                name={'Сохранить'}
                                to={'/shift'}
                                startIcon={<SaveAltRounded/>}
                                onClick={() => {
                                    cardsHandler('Конец смены', endShiftTime);
                                    setLastAction('Конец смены');
                                }}/>}/>
                    </Route>
                    <Route path="/history">
                        <HistoryPage/>
                    </Route>
                </Switch>
        </>
    );
}

export default App;
