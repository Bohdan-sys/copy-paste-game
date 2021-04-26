import React from 'react';


import { BrowserRouter, Route } from 'react-router-dom'


import { Header } from './components/Header';
import { LifeDisplay } from './components/LifeDisplay';
import { Settings } from './components/Settings';
import { Timer } from './components/Timer';
import { GridContextProvider } from './contexts/GridContext/GridProvider';
import { TimerContextProvider } from './contexts/TimerContext/TimerProvider';
import { CopyPage } from './pages/CopyPage'
import { PastePage } from './pages/PastePage'
import './sass/App.sass';


import SwipeableRoutes from "react-swipeable-routes";
import { LocalStorageContextProvider } from './contexts/LocalStorageContext/LocalStorageProvider';


function App() {

  return (


    <div className='App'>

      <GridContextProvider>
        <LocalStorageContextProvider>
          <TimerContextProvider>
            <BrowserRouter>
              <Header>
                <Settings />
              </Header>
              <LifeDisplay />
              <Timer />
              <SwipeableRoutes>
                <Route path={'/copy-paste-game'} exact component={CopyPage} />
                <Route path={'/pastepage'} component={PastePage} />
              </SwipeableRoutes>
            </BrowserRouter>
          </TimerContextProvider>
        </LocalStorageContextProvider>

      </GridContextProvider>




    </div >
  );
}

export default App;
