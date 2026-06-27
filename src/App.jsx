
import {   Routes , Route } from 'react-router-dom'
import './App.css'
import Survey from './assets/SurveyForm.jsx'

function App() {
  return(
  <Routes>
    <Route path='/' element={<Survey />} />
  </Routes>
  )
  
}

export default App
