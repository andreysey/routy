import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./features/MainPage";
import ShiftStartPage from "./features/shiftStart/ShiftStartPage";
import ShiftPage from "./features/shiftEvents/ShiftPage";
import LocomotiveStartPage from "./features/locomotiveStart/LocomotiveStartPage";
import PassengerPage from "./features/passenger/PassengerPage";
import TrainPage from "./features/train/TrainPage";
import ShiftEndPage from './features/shiftEnd/ShiftEndPage';
import LocomotiveEndPage from './features/locomotiveEnd/LocomotiveEndPage';
import ShiftListPage from "./features/shiftList/ShiftListPage";
import CssBaseline from '@mui/material/CssBaseline';
import AppBarMain from "./components/AppBarMain";
import {Container} from '@mui/material';

export enum UrlPath {
    Main = '/',
    ShiftEvents = '/shift-events',
    ShiftList = '/shift-list',
    ShiftStart = '/shift-start',
    ShiftEnd = '/shift-end',
    LocomotiveStart = '/locomotive-start',
    Passenger = '/passenger',
    Train = '/train',
    LocomotiveEnd = '/locomotive-end'
}

function App() {

    return (<>
        <CssBaseline/>
        <AppBarMain/>
        <Container maxWidth="sm">
            <Routes>
                <Route path={UrlPath.Main} element={
                    <MainPage/>}/>

                <Route path={UrlPath.ShiftEvents} element={
                    <ShiftPage/>}/>

                <Route path={UrlPath.ShiftList} element={
                    <ShiftListPage/>}/>

                <Route path={UrlPath.ShiftStart} element={
                    <ShiftStartPage/>}/>

                <Route path={UrlPath.LocomotiveStart} element={
                    <LocomotiveStartPage/>}/>

                <Route path={UrlPath.Passenger} element={
                    <PassengerPage/>}/>

                <Route path={UrlPath.Train} element={
                    <TrainPage/>}/>

                <Route path={UrlPath.LocomotiveEnd} element={
                    <LocomotiveEndPage/>}/>

                <Route path={UrlPath.ShiftEnd} element={
                    <ShiftEndPage/>}/>
            </Routes>
        </Container>
    </>)
}

export default App;
