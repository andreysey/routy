import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import StartShiftPage from "./components/pages/StartShiftPage";
import ShiftPage from "./components/pages/ShiftPage";
import StartLocoPage from "./components/pages/StartLocoPage";
import StartPassPage from "./components/pages/StartPassPage";
import StartTrainPage from "./components/pages/StartTrainPage";
import EndShiftPage from './components/pages/EndShiftPage';
import EndLocoPage from './components/pages/EndLocoPage';
import HistoryPage from "./components/pages/HistoryPage";
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
                    <HistoryPage/>}/>

                <Route path="/start" element={
                    <StartShiftPage
                        setStartShiftToggle={setStartShiftToggle}
                        setLastAction={setLastAction}/>}/>

                <Route path="/start-loco" element={
                    <StartLocoPage
                        setLastAction={setLastAction}/>}/>

                <Route path="/start-pass" element={
                    <StartPassPage
                        setLastAction={setLastAction}/>}/>

                <Route path="/start-train" element={
                    <StartTrainPage
                        setLastAction={setLastAction}/>}/>

                <Route path="/end-loco" element={
                    <EndLocoPage
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
