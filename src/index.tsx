import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
//import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
//import './index.css';
import './style.css';
import { useSelector, useDispatch } from 'react-redux'

const container = document.getElementById('root')!;
const root = createRoot(container);
const root_render = (
<React.StrictMode>
<Provider store={store}>
  <App />
</Provider>
</React.StrictMode>
)
async function getUrl(url:string){
  const response = await fetch(url);
  var data = await response.json();
  console.log(data)
}
//getUrl("http://127.0.0.1:9000/api/v1/company/NET/trend/")
root.render(
  root_render
);

//ReactDOM.render(root_render, document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
