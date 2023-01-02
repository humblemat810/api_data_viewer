import React from 'react';
const partial = (func: any, ...args: any[])  => (...rest: any[]) => func(...args, ...rest);
async function getUrl(url:string, timeoutId: NodeJS.Timeout){


    const response = await fetch(url);
    var data = await response.json();
    clearTimeout(timeoutId);
    console.log(data)
    console.log("stringified\n")
    console.log(JSON.stringify(data))
    return data
}
function QueryButton({symbol, queryResponseHandler, host}: any){
    
    function clickhandler(symbol: string, queryResponseHandler : (a: object) => void  ){
        console.log(symbol);
        const url2get = `http://${host}/api/v1/company/${symbol.toUpperCase()}/trend/`
        console.log(url2get)
        const controller = new AbortController();

        const timeoutId = setTimeout(() => controller.abort(), 40000);
        getUrl(url2get, timeoutId).then(
            (value) => queryResponseHandler(value)
        )
        
    }
    const partialClickHandler = partial(clickhandler, symbol, queryResponseHandler, host)
    
    return (
        <button className = 'query-button' onClick={partialClickHandler} > click to query stock symbol</button>
    )
}

export default QueryButton