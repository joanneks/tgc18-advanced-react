// import React from 'react';

// const StudentContext = React.createContext({});

// alternatively
// if data can change, it will normally be done in the Provider.
import {createContext} from 'react';

const StudentContext = createContext({});

export default StudentContext;