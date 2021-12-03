import React from 'react';
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

    return (<>
        <CssBaseline/>
        <Routes>
            <Route path="/" element={
                <MainPage/>}/>

            <Route path="/shift" element={
                <ShiftPage/>}/>

            <Route path="/shift-list" element={
                <ShiftListPage/>}/>

            <Route path="/start" element={
                <ShiftStartPage/>}/>

            <Route path="/start-loco" element={
                <LocomotiveStartPage/>}/>

            <Route path="/start-pass" element={
                <PassengerPage/>}/>

            <Route path="/start-train" element={
                <TrainPage/>}/>

            <Route path="/end-loco" element={
                <LocomotiveEndPage/>}/>

            <Route path="/end" element={
                <EndShiftPage/>}/>
        </Routes>
    </>)
}

export default App;
