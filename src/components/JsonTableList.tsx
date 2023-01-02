import React from 'react';

type datarow = { date: string, words: string[], scores: number[], id?: number[]  }

function JsonTableList({jsonTable}: {jsonTable: datarow[]} ){
    const jsonTable2 = jsonTable ?? []
    let compare = function ( a: datarow, b: datarow ) {
        if ( a.date < b.date ){
          return -1;
        }
        if ( a.date > b.date ){
          return 1;
        }
        return 0;
    }
    const jsonTableSorted = jsonTable2.sort(compare)

    const rows = jsonTableSorted.map((row: datarow, ind: number) => (
        <tr id={"entry"+ind.toString()+row['date']} key={"entry"+ind.toString()+row['date']}> 
            <td key={"entry"+ind.toString()+row['date']+"colDate"}
                style={{"borderRightColor": '#aaaaaa',
                "borderRightWidth": 1,  'borderRightStyle':'solid', 
                "borderBottomColor": '#aaaaaa',
                "borderBottomWidth": 1,  'borderBottomStyle':'solid', 
                width:"6rem"}}>
                <div >{row['date']}</div>
            </td>
            <td style={{width:"12rem"}} key={"entry"+ind.toString()+row['date']+"colWord"}>
                {row['words'].slice(0,-1).map((words: string, index: number)=>{
                    return <div key={index}>{words}</div>;
                })}
                <div style={{"borderBottomColor": '#aaaaaa',
                    "borderBottomWidth": 1,  'borderBottomStyle':'solid', }}>
                        {row['words'][-1]}
                </div>
                {/* <div>{row['words'][0]}</div>
                <div>{row['words'][1]}</div>
                <div>{row['words'][2]}</div>
                <div>{row['words'][3]}</div>
                <div style={{"borderBottomColor": '#aaaaaa',
                "borderBottomWidth": 1,  'borderBottomStyle':'solid', }}>
                    {row['words'][4]}
                </div> */}
            </td>
            <td style={{width:"12rem"}} key={"entry"+ind.toString()+row['date']+"colScore"}>
                {row['scores'].slice(0,-1).map((score: number, index: number)=>{
                    return <div key={index}>{score}</div>;
                })}
                <div style={{"borderBottomColor": '#aaaaaa',
                "borderBottomWidth": 1,  'borderBottomStyle':'solid', }}>
                    {row['scores'][-1]}
                </div>
                {/* <div>{row['scores'][0]}</div>
                <div>{row['scores'][1]}</div>
                <div>{row['scores'][2]}</div>
                <div>{row['scores'][3]}</div>
                <div style={{"borderBottomColor": '#aaaaaa',
                "borderBottomWidth": 1,  'borderBottomStyle':'solid', }}>
                    {row['scores'][4]}
                </div> */}
            </td>
        </tr>
        ))
    return (
        <table style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
            <tbody>
                <tr key="colnames" style={{color: "black", fontSize: "2rem", fontWeight: "bold",}}> 
                    <td key="colDate" style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>Date</td>
                    <td key="colWord"style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>Word</td> 
                    <td key="colScore" style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>Score</td>
                </tr>
                {rows}
            </tbody>
        </table>
    )
}


export default JsonTableList