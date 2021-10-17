import React,{useState} from 'react'
import Display from './Display';

function Search() {
    const [q,qs]=useState("");
    const inputevent =(event)=>{
const data=event.target.value;
qs(data);
    }
    return (
        <>
          <input className="searchbox" type="text" name="search" id="search" value={q} onChange={inputevent} placeholder="Search Image Here" />  
        {q ===""?null:<Display name={q}/>}
        </>
    )
}

export default Search
