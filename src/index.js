import React from 'react';
import ReactDOM from 'react-dom/client';
//import { Provider } from 'react-redux';
//import { store } from './redux/store';
import { App } from 'components/App';
//import { persistor } from './redux/store';
//import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter basename="/Money-Guard">
      <App />
    </BrowserRouter>
    {/* </PersistGate>
    </Provider> */}
  </React.StrictMode>
);
