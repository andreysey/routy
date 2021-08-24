import React from 'react';
import {Switch, Route,} from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import StartShiftPage from "./components/pages/StartShiftPage";
import ShiftPage from "./components/pages/ShiftPage";
import StartLocoPage from "./components/pages/StartLocoPage";
import StartPassPage from "./components/pages/StartPassPage";
import StartTrainPage from "./components/pages/StartTrainPage";
import EndShiftPage from './components/pages/EndShiftPage';
import EndLocoPage from './components/pages/EndLocoPage';
import HistoryPage from "./components/pages/HistoryPage";

function App() {
    return (
            <div className={'container'}>
                <Switch>
                    <Route path="/" exact>
                        <MainPage/>
                    </Route>
                    <Route path="/start">
                        <StartShiftPage/>
                    </Route>
                    <Route path="/shift">
                        <ShiftPage/>
                    </Route>
                    <Route path="/start-loco">
                        <StartLocoPage/>
                    </Route>
                    <Route path="/start-pass">
                        <StartPassPage/>
                    </Route>
                    <Route path="/start-train">
                        <StartTrainPage/>
                    </Route>
                    <Route path="/end">
                        <EndShiftPage/>
                    </Route>
                    <Route path="/end-loco">
                        <EndLocoPage/>
                    </Route>
                    <Route path="/history">
                        <HistoryPage/>
                    </Route>
                </Switch>
            </div>
    );
}

export default App;
