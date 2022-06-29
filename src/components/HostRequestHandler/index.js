import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

import socket from "../../actions/socket";

const HostRequestHandler = () => {


    let resultsAreIn = false

    let results

    console.log("now it's true")
    results = useSelector((state) => state.results)
    console.log(results)


    if(results.length !== 0){

        console.log("Now the results are in")
        console.log(results)

        resultsAreIn = true


    }
    

    return(
        
        <div>Working on it... {resultsAreIn ? 'done' : 'not done'}</div>

        
    )
}


export default HostRequestHandler
