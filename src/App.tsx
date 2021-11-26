import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import ShiftStartPage from "./components/features/shiftStart/ShiftStartPage";
import ShiftPage from "./components/features/shift/ShiftPage";
import LocomotiveStartPage from "./components/features/locomotiveStart/LocomotiveStartPage";
import PassengerPage from "./components/features/passenger/PassengerPage";
import TrainPage from "./components/features/train/TrainPage";
import EndShiftPage from './components/features/shiftEnd/ShiftEndPage';
import LocomotiveEndPage from './components/features/locomotiveEnd/LocomotiveEndPage';
import ShiftListPage from "./components/features/shiftList/ShiftListPage";
import CssBaseline from '@mui/material/CssBaseline';

function App() {

    const [lastAction, setLastAction] = useState('')

    const [startShiftToggle, setStartShiftToggle] = useState<boolean>(false);

    const [locoNumber, setLocoNumber] = useState('');

    return (
        <>
            <CssBaseline/>
            <Routes>
                <Route path="/" element={
                    <MainPage
                        startShiftToggle={startShiftToggle}/>}/>

                <Route path="/shift" element={
                    <ShiftPage
                        lastAction={lastAction}/>}/>

                <Route path="/history" element={
                    <ShiftListPage/>}/>

                <Route path="/start" element={
                    <ShiftStartPage
                        setStartShiftToggle={setStartShiftToggle}
                        setLastAction={setLastAction}/>}/>

                <Route path="/start-loco" element={
                    <LocomotiveStartPage
                        setLastAction={setLastAction}/>}/>

                <Route path="/start-pass" element={
                    <PassengerPage
                        setLastAction={setLastAction}/>}/>

                <Route path="/start-train" element={
                    <TrainPage
                        setLastAction={setLastAction}/>}/>

                <Route path="/end-loco" element={
                    <LocomotiveEndPage
                        setLastAction={setLastAction}
                        locoNumber={locoNumber}/>}/>

                <Route path="/end" element={
                    <EndShiftPage
                        setLastAction={setLastAction}
                        locoNumber={locoNumber}/>}/>
            </Routes>
        </>
    );
}

export default App;
