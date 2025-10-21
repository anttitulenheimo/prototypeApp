import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Alert from '@mui/material/Alert'
import Home from './components/Home'
import Info from './components/Info'
import Settings from './components/Settings'
import BottomNavBar from './components/BottomNavBar'
import './App.css' // Prevents the scroll bar


function App() {
  const [count, setCount] = useState(0)
  const [showAlert, setShowAlert] = useState(false)
  const [timeLeft, setTimeLeft] = useState(15)
  const [isEmptying, setIsEmptying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [batteryLevel, setBatteryLevel] = useState(85)
  const [isCharging, setIsCharging] = useState(false)
  const [isFull, setIsFull] = useState(false)

  // Everytime when the app is first rendered the timer is fixed
  useEffect(() => {
    let interval = null
    if (isEmptying && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1)
        setProgress(prevProgress => prevProgress + 100/15)
      }, 1000)
    } else if (timeLeft === 0) {
      setIsEmptying(false)
      setShowAlert(true)
      setTimeLeft(15)
      setProgress(0)
    }
    return () => clearInterval(interval);
  }, [isEmptying, timeLeft])

  const buttonHandler = () => {
    setCount(count + 1)
    setShowAlert(false)
    setIsEmptying(true)
    setTimeLeft(15)
    setProgress(0)
  }

  const warningComponent = () => (
    <Alert severity="warning">
      Säiliö tyhjentyy
    </Alert>
  )

  const containerIsFull = () => (
    <Alert severity="warning">
      Säiliö on täynnä ja se pitää tyhjentää
    </Alert>
  )

  const mockButtonHandler = () => {
    setIsFull(true)
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Home
            batteryLevel={batteryLevel}
            isCharging={isCharging}
            isFull={isFull}
            containerIsFull={containerIsFull}
            buttonHandler={buttonHandler}
            isEmptying={isEmptying}
            warningComponent={warningComponent}
            progress={progress}
            showAlert={showAlert}
            count={count}
            mockButtonHandler={mockButtonHandler}
          />
        } />
        <Route path="/info" element={<Info />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <BottomNavBar />
    </Router>
  )
}

export default App