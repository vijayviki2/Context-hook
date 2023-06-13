import React, { createContext } from "react";

//intial  context
const DataContext = createContext();

// content provider component
function DataProvider(props) {
    const data ={}

    return (
        <DataContext.Provider value={data}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider