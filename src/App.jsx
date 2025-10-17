import { useState } from 'react'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

function App() {
  const [count, setCount] = useState(0)
  const [showAlert, setShowAlert] = useState(false)

  const [showTimer, setShowTimer] = useState(null)
  const [timer, setTimer] = useState(null)
  const [loading, setLoading] = useState(false)
  const [timeLeft, setTimeLeft] = useState(15)

  const [isEmptying, setIsEmptying] = useState(false)

  const buttonHandler = () => {
    setCount(count + 1)
    setShowAlert(true)
  }

  //const timerHandler = () => {}

  const timerComponent = () => {
    setIsEmptying(true)
    return (
        <CircularProgressWithLabel value={progress} /> // Should last 15 sec
    )
  }


  const warningComponent = () => {
      return (
          <Alert severity="warning">
              Säiliö tyhjentyy
            </Alert>
      )
  }


  //TODO: Akunvaraus, Tyhjennysmuistutus, Timeout tyhjennykselle (15s)

  return (
    <div>
      <Button
        variant="contained"
        onClick={buttonHandler}
      >
        Tyhjennä
      </Button>

      {warningComponent() && isEmptying}


      {showAlert && !isEmptying && (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="success">
              Säiliö tyhjennetty onnistuneesti
            </Alert>

            <Alert severity="info">
              Säiliö tyhjennetty {count} kertaa
            </Alert>
        </Stack>
      )}
    </div>
  )
}

export default App
