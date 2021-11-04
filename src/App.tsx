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
import {ICards} from "./interfaces";
import CssBaseline from '@mui/material/CssBaseline';

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

    const [locoNumber, setLocoNumber] = useState('');

    return (
        <>
            <CssBaseline/>
            <Switch>
                <Route path="/" exact>
                    <MainPage
                        startShiftToggle={startShiftToggle}/>
                </Route>
                <Route path="/shift">
                    <ShiftPage
                        cards={cards}
                        lastAction={lastAction}/>
                </Route>
                <Route path="/history">
                    <HistoryPage/>
                </Route>
                <Route path="/start">
                    <StartShiftPage
                        setStartShiftToggle={setStartShiftToggle}
                        setLastAction={setLastAction}
                    />
                </Route>
                <Route path="/start-loco">
                    <StartLocoPage
                        setLastAction={setLastAction}
                    />
                </Route>
                <Route path="/start-pass">
                    <StartPassPage
                        setLastAction={setLastAction}
                    />
                </Route>
                <Route path="/start-train">
                    <StartTrainPage
                        setLastAction={setLastAction}
                    />
                </Route>
                <Route path="/end-loco">
                    <EndLocoPage
                        setLastAction={setLastAction}
                        locoNumber={locoNumber}/>
                </Route>
                <Route path="/end">
                    <EndShiftPage
                        setLastAction={setLastAction}
                        locoNumber={locoNumber}
                    />
                </Route>
            </Switch>
        </>
    );
}

export default App;
