import React from 'react';
import styles from './QueryButton.module.css'

function QueryText({symbolUpdateHandler, symbol} : any){
    
  
    const partialChangeHandler = symbolUpdateHandler.bind(null,symbol) 

    const handleSymbolChange = (event: any) => {
        console.log('handling symbol change');
        console.log(event.target.value);
        
        symbol = event.target.value
        console.log(symbol)
        symbolUpdateHandler(symbol)
        // 👇️ update textarea value
        //setSymbol(event.target.value);
        //console.log(event.target.value);
      };

    return (
        <textarea placeholder='input text here' className={[ "query-text", /*styles.error,*/ ].join(' ')}
        onChange={handleSymbolChange}
        ></textarea>
    )
}

export default QueryText