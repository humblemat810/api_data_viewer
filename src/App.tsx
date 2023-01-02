import React from 'react';
import {useState} from 'react';
import './App.css';
import QueryButton from './components/QueryButton';
import QueryText from './components/QueryText';
import JsonTableList from './components/JsonTableList';
const api_host: string = "" // "e.g. 192.168.0.1:9000"
type datarow = { date: string, words: string[], scores: number[] }
function App() {
  const [querySymbol, setSymbol] = useState('');
  const [queryResponse, setQueryResponse]  = useState<datarow[]>([])
  
  return (
    <div>

        <QueryButton queryResponseHandler={setQueryResponse} symbol={querySymbol} host={api_host} />
        <br />
        <QueryText symbolUpdateHandler={setSymbol} symbol={querySymbol} />
        <br />
        <JsonTableList jsonTable={queryResponse} />
    </div>

  );
}

export default App;
