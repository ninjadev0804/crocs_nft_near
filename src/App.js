
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { keyStores } from 'near-api-js';
import * as buffer from "buffer"
import WalletProvider from './contexts/wallet';
import Navbar from './Components/Navbar';
import Header from './Components/Header';

function App() {
  const [keyStore, setKeyStore] = useState();
  useEffect(() => {
    window.Buffer = buffer.Buffer
    const keyStore = new keyStores.BrowserLocalStorageKeyStore();
    setKeyStore(keyStore);
  }, [])

  return (
    <div style={{ height: '100vh' }} className="App">
      <BrowserRouter>
        <WalletProvider keyStore={keyStore}>
          <Switch>
            <Route exact path='/'>
              <Navbar />
              <Header />
            </Route>
          </Switch>
        </WalletProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
