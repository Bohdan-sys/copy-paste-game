import React from 'react';
import './sass/App.sass';
import { BrowserRouter, Route } from 'react-router-dom'
import { Header } from './components/Header';
import { LifeDisplay } from './components/LifeDisplay';
import { Settings } from './components/Settings';
// import { Timer } from './components/Timer';
import { GridContextProvider } from './contexts/GridContext/GridProvider';
import { TimerContextProvider } from './contexts/TimerContext/TimerProvider';
import { CopyPage } from './pages/CopyPage'
import { PastePage } from './pages/PastePage'
import SwipeableRoutes from 'react-swipeable-routes';
import { LocalStorageContextProvider } from './contexts/LocalStorageContext/LocalStorageProvider';
import { RefreshBtn } from './components/RefreshBtn';


function App() {

  return (


    <div className='App'>
      <LocalStorageContextProvider>
        <GridContextProvider>
          <TimerContextProvider>
            <BrowserRouter>
              <Header>
                <Settings />
              </Header>
              <LifeDisplay />
              {/* <Timer /> */}
              <SwipeableRoutes>
                <Route path={'/copy-paste-game'} exact component={CopyPage} />
                <Route path={'/pastepage'} component={PastePage} />
              </SwipeableRoutes>
              <RefreshBtn />
            </BrowserRouter>
          </TimerContextProvider>
        </GridContextProvider>
      </LocalStorageContextProvider>



    </div >
  );
}

export default App;
