import React, {useReducer, useState} from 'react';
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
import {ContextApp, initialState, reducer} from "./reduser";
import TextFieldInput from "./components/TextFieldInput";
import PickDates from "./components/pickers/PickDates";
import PickTimes from "./components/pickers/PickTimes";
import SelectLoco from "./components/SelectLoco";

function App() {

    // Инициализируем reducer и получаем state + dispatch для записи
    // const [state, dispatch] = useReducer(reducer, initialState);

    // Start shift page state
    const [route, setRoute] = useState('');
    const [startShiftDate, setStartShiftDate] = React.useState<Date | null>(new Date());
    const [startShiftTime, setStartShiftTime] = React.useState<Date | null>(new Date());
    // Pass state
    const [passTrain, setPassTrain] = useState('');
    const [passStationDeparture, setPassStationDeparture] = useState('');
    const [passDateDeparture, setPassDateDeparture] = React.useState<Date | null>(new Date());
    const [passTimeDeparture, setPassTimeDeparture] = React.useState<Date | null>(new Date());
    const [passStationArrival, setPassStationArrival] = useState('');
    const [passDateArrival, setPassDateArrival] = React.useState<Date | null>(new Date());
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
    const [trainDateDeparture, setTrainDateDeparture] = React.useState<Date | null>(new Date());
    const [trainTimeDeparture, setTrainTimeDeparture] = React.useState<Date | null>(new Date());
    const [trainStationArrival, setTrainStationArrival] = useState('');
    const [trainDateArrival, setTrainDateArrival] = React.useState<Date | null>(new Date());
    const [trainTimeArrival, setTrainTimeArrival] = React.useState<Date | null>(new Date());
    // End loco
    const [endEnergyA, setEndEnergyA] = useState('');
    const [endEnergyB, setEndEnergyB] = useState('');
    const [endRecupA, setEndRecupA] = useState('');
    const [endRecupB, setEndRecupB] = useState('');
    // End shift state
    const [endShiftDate, setEndShiftDate] = React.useState<Date | null>(new Date());
    const [endShiftTime, setEndShiftTime] = React.useState<Date | null>(new Date());


    return (
        // <ContextApp.Provider value={{dispatch, state}}>
        <div className={'container'}>
            <Switch>
                <Route path="/" exact>
                    <MainPage/>
                </Route>
                <Route path="/start">
                    <StartShiftPage
                        date={
                            <PickDates
                                state={startShiftDate}
                                setState={setStartShiftDate}
                            />
                        }
                        time={
                            <PickTimes
                                state={startShiftTime}
                                setState={setStartShiftTime}
                            />
                        }
                        routeInput={
                            <TextFieldInput
                                id={'route'}
                                state={route}
                                setState={setRoute}
                                label={'Маршрут'}
                                placeholder={'Номер'}
                                type={'number'}
                            />
                        }
                    />
                </Route>
                <Route path="/shift">
                    <ShiftPage
                        startShiftDate={startShiftDate}
                        startShiftTime={startShiftTime}
                    />
                </Route>
                <Route path="/start-loco">
                    <StartLocoPage
                        locoType={
                            <SelectLoco
                                state={locoType}
                                setState={setLocoType}
                            />
                        }
                        locoNumber={
                            <TextFieldInput
                                state={locoNumber}
                                setState={setLocoNumber}
                                label={'Номер'}
                                placeholder={'Локомотива'}
                                helperText={' '}
                                type={'number'}
                            />
                        }
                        startEnergyA={
                            <TextFieldInput
                                state={startEnergyA}
                                setState={setStartEnergyA}
                                label={'А'}
                                placeholder={'00-00-00'}
                                helperText={'Энергия'}
                                type={'number'}
                            />
                        }
                        startEnergyB={
                            <TextFieldInput
                                state={startEnergyB}
                                setState={setStartEnergyB}
                                label={'Б'}
                                placeholder={'00-00-00'}
                                helperText={'Энергия'}
                                type={'number'}
                            />
                        }
                        startRecupA={
                            <TextFieldInput
                                state={startRecupA}
                                setState={setStartRecupA}
                                label={'А'}
                                placeholder={'00-00-00'}
                                helperText={'Рекуперация'}
                                type={'number'}
                            />
                        }
                        startRecupB={
                            <TextFieldInput
                                state={startRecupB}
                                setState={setStartRecupB}
                                label={'Б'}
                                placeholder={'00-00-00'}
                                helperText={'Рекуперация'}
                                type={'number'}
                            />
                        }
                    />
                </Route>
                <Route path="/start-pass">
                    <StartPassPage
                        passTrain={
                            <TextFieldInput
                                id={'passTrain'}
                                label={'Поезд'}
                                placeholder={'Номер'}
                                type={'number'}
                                state={passTrain}
                                setState={setPassTrain}
                            />
                        }
                        passStationDeparture={
                            <TextFieldInput
                                id={'passStationDeparture'}
                                label={'Станция оправления'}
                                state={passStationDeparture}
                                setState={setPassStationDeparture}
                            />
                        }
                        dateDeparture={
                            <PickDates
                                state={passDateDeparture}
                                setState={setPassDateDeparture}
                            />
                        }
                        timeDeparture={
                            <PickTimes
                                state={passTimeDeparture}
                                setState={setPassTimeDeparture}
                            />
                        }
                        passStationArrival={
                            <TextFieldInput
                                id={'passStationArrival'}
                                label={'Станция прибытия'}
                                state={passStationArrival}
                                setState={setPassStationArrival}
                            />}
                        dateArrival={
                            <PickDates
                                state={passDateArrival}
                                setState={setPassDateArrival}
                            />
                        }
                        timeArrival={
                            <PickTimes
                                state={passTimeArrival}
                                setState={setPassTimeArrival}
                            />
                        }
                    />
                </Route>
                <Route path="/start-train">
                    <StartTrainPage
                        train={
                            <TextFieldInput
                                label={'Поезд'}
                                placeholder={'Номер'}
                                type={'number'}
                                state={train}
                                setState={setTrain}
                            />
                        }
                        trainStationDeparture={
                            <TextFieldInput
                                id={'trainStationDeparture'}
                                label={'Станция оправления'}
                                state={trainStationDeparture}
                                setState={setTrainStationDeparture}
                            />
                        }
                        dateDeparture={
                            <PickDates
                                state={trainDateDeparture}
                                setState={setTrainDateDeparture}
                            />
                        }
                        timeDeparture={
                            <PickTimes
                                state={trainTimeDeparture}
                                setState={setTrainTimeDeparture}
                            />
                        }
                        trainStationArrival={
                            <TextFieldInput
                                id={'trainStationArrival'}
                                label={'Станция прибытия'}
                                state={trainStationArrival}
                                setState={setTrainStationArrival}
                            />}
                        dateArrival={
                            <PickDates
                                state={trainDateArrival}
                                setState={setTrainDateArrival}
                            />
                        }
                        timeArrival={
                            <PickTimes
                                state={trainTimeArrival}
                                setState={setTrainTimeArrival}
                            />
                        }
                    />
                </Route>
                <Route path="/end-loco">
                    <EndLocoPage
                        endEnergyA={
                            <TextFieldInput
                                state={endEnergyA}
                                setState={setEndEnergyA}
                                label={'А'}
                                placeholder={'00-00-00'}
                                helperText={'Энергия'}
                                type={'number'}
                            />
                        }
                        endEnergyB={
                            <TextFieldInput
                                state={endEnergyB}
                                setState={setEndEnergyB}
                                label={'Б'}
                                placeholder={'00-00-00'}
                                helperText={'Энергия'}
                                type={'number'}
                            />
                        }
                        endRecupA={
                            <TextFieldInput
                                state={endRecupA}
                                setState={setEndRecupA}
                                label={'А'}
                                placeholder={'00-00-00'}
                                helperText={'Рекуперация'}
                                type={'number'}
                            />
                        }
                        endRecupB={
                            <TextFieldInput
                                state={endRecupB}
                                setState={setEndRecupB}
                                label={'Б'}
                                placeholder={'00-00-00'}
                                helperText={'Рекуперация'}
                                type={'number'}
                            />
                        }
                    />
                </Route>
                <Route path="/end">
                    <EndShiftPage
                        date={
                            <PickDates
                                state={endShiftDate}
                                setState={setEndShiftDate}
                            />
                        }
                        time={
                            <PickTimes
                                state={endShiftTime}
                                setState={setEndShiftTime}
                            />
                        }
                    />
                </Route>
                <Route path="/history">
                    <HistoryPage/>
                </Route>
            </Switch>
        </div>
        // </ContextApp.Provider>
    );
}

export default App;
