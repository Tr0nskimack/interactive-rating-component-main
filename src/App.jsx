import React from 'react'

import { BrowserRouter, Route, Routes, createBrowserRouter } from 'react-router-dom'
import { Home } from './Pages/Home';
import { MsjSend } from './Pages/MsjSend';







const App = () => {
  return (
    // Or use plain objects
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/send" element={<MsjSend />} />
        </Routes>
    </BrowserRouter>
    
  )
}

export default App