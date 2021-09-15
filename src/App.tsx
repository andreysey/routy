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
import PickDates from "./components/pickers/PickDates";
import PickTimes from "./components/pickers/PickTimes";
import SelectLoco from "./components/SelectLoco";
import SaveAltRoundedIcon from "@material-ui/icons/SaveAltRounded";
import TextButton from "./components/TextButton";

function App() {
    // const storage = () => {
    //     let current = {
    //         route: route,
    //         startShiftDate: startShiftDate,
    //         startShiftTime: startShiftTime,
    //         passTrain: passTrain,
    //         passStationDeparture: passStationDeparture,
    //         passDateDeparture: passDateDeparture,
    //         passTimeDeparture: passTimeDeparture,
    //         passStationArrival: passStationArrival,
    //         passDateArrival: passDateArrival,
    //         passTimeArrival: passTimeArrival,
    //     }
    //
    //     // let serialStartShift = JSON.stringify(startShift)
    //
    //     // @ts-ignore
    //     localStorage.setItem(new Date(), JSON.stringify(current))
    // }


    // Инициализируем reducer и получаем state + dispatch для записи
    // const [state, dispatch] = useReducer(reducer, initialState);

    const [startShiftToggle, setStartShiftToggle] = useState<boolean>(false);

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
                    <MainPage
                        startShiftToggle={startShiftToggle}
                    />
                </Route>
                <Route path="/start">
                    <StartShiftPage
                        date={
                            <PickDates
                                id={'startShiftDate'}
                                state={startShiftDate}
                                setState={setStartShiftDate}
                            />
                        }
                        time={
                            <PickTimes
                                id={'startShiftTime'}
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
                        saveButton={
                            <TextButton
                                name={'Сохранить'}
                                to={'/shift'}
                                startIcon={<SaveAltRoundedIcon/>}
                                onClick={() => setStartShiftToggle(true)}
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
                                id={'locoType'}
                                state={locoType}
                                setState={setLocoType}
                            />
                        }
                        locoNumber={
                            <TextFieldInput
                                id={'locoNumber'}
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
                                id={'startEnergyA'}
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
                                id={'startEnergyB'}
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
                                id={'startRecupA'}
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
                                id={'startRecupB'}
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
                                state={passTrain}
                                setState={setPassTrain}
                                type={'number'}
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
                                id={'passDateDeparture'}
                                state={passDateDeparture}
                                setState={setPassDateDeparture}
                            />
                        }
                        timeDeparture={
                            <PickTimes
                                id={'passTimeDeparture'}
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
                                id={'passDateArrival'}
                                state={passDateArrival}
                                setState={setPassDateArrival}
                            />
                        }
                        timeArrival={
                            <PickTimes
                                id={'passTimeArrival'}
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
                                id={'train'}
                                label={'Поезд'}
                                placeholder={'Номер'}
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
                                id={'trainDateDeparture'}
                                state={trainDateDeparture}
                                setState={setTrainDateDeparture}
                            />
                        }
                        timeDeparture={
                            <PickTimes
                                id={'trainTimeDeparture'}
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
                                id={'trainDateArrival'}
                                state={trainDateArrival}
                                setState={setTrainDateArrival}
                            />
                        }
                        timeArrival={
                            <PickTimes
                                id={'trainTimeArrival'}
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
                                id={'endEnergyA'}
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
                                id={'endEnergyB'}
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
                                id={'endRecupA'}
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
                                id={'endRecupB'}
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
                                id={'endShiftDate'}
                                state={endShiftDate}
                                setState={setEndShiftDate}
                            />
                        }
                        time={
                            <PickTimes
                                id={'endShiftTime'}
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
