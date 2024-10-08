import React from 'react'
import { BrowserRouter } from "react-router-dom";
import RouteList from "./routes/routeList";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className='bg-slate-50 min-h-screen'>
      <BrowserRouter>
        <RouteList />
      </BrowserRouter>
    </div>
  );
}

export default App;
