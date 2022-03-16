import React, { useState } from 'react';

import { Navbar } from '../../components/noodlSearch/Navbar';
import { Routes } from '../../components/noodlSearch/Routes';
import Topbar from "../../components/topbar/Topbar";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div>
      <div>
      <Topbar />
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Routes />
      </div>
    </div>

  );
};

export default App;