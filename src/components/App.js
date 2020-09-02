import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './nav/Nav'
import Content from './content/Content'
import './main.scss'

function App() {
    return (
        <>
            <Nav />
            <Content />
        </>
    );
}

export default App;