import React, {useEffect, useState} from 'react'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import CheckIcon from '@mui/icons-material/Check'
import ResponsiveAppBar from "./components/ResponsiveAppBar.jsx"
import Battery from "./components/Battery.jsx"
import CircularProgressWithLabel from "./components/CircularProgressWithLabel.jsx"
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/GridLegacy'
import './app.css'


function App() {
  const DURATION = 5

  const [count, setCount] = useState(0)
  const [showAlert, setShowAlert] = useState(false)
  const [timeLeft, setTimeLeft] = useState(DURATION)
  const [isEmptying, setIsEmptying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [batteryLevel, setBatteryLevel] = useState(85)
  const [isCharging, setIsCharging] = useState(false)
  const [isFull, setIsFull] = useState(false)
  const [name, setName] = useState("Oma ansa")
  const [isEditingName, setIsEditingName] = useState(false)
  const [tempName, setTempName] = useState(name)
  const [bugsInTrap, setBugsInTrap] = useState(0)
  const [lastEmptyDate, setLastEmptyDate] = useState("26.11.2026")
  const [emptyAmountMonth, setEmptyAmountMonth] = useState(0)
  const [emptyAmountYear, setEmptyAmountYear] = useState(0)

  // For timer
  useEffect(() => {
    if (!isEmptying) return

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval)
          setIsEmptying(false)
          setShowAlert(true)
          setProgress(0)


          setEmptyAmountMonth(prev => prev + 1)
          setEmptyAmountYear(prev => prev + 1)
          setBugsInTrap(0)

          return DURATION
        }
        return prev - 1
      })

      setProgress(prev => prev + 100 / DURATION)

    }, 1000)

    return () => clearInterval(interval)
  }, [isEmptying])

  const buttonHandler = () => {
    setCount(prev => prev + 1)
    setShowAlert(false)
    setIsEmptying(true)
    setTimeLeft(DURATION)
    setProgress(0)
  }

  const handleEditName = () => {
    setIsEditingName(true)
    setTempName(name)
  }

  const handleSaveName = () => {
    setName(tempName)
    setIsEditingName(false)
  }

  const warningComponent = () => (
    <Alert severity="warning">
      Säiliö tyhjentyy
    </Alert>
  )

  return (
      <>
        <ResponsiveAppBar />

        <Box sx={{ overflowY: 'auto', p: 2, bgcolor: 'grey.200', minHeight: '100vh' }}>

          <Paper
            elevation={2}
            sx={{
              borderRadius: 4,
              p: 2,
              mb: 2,
              bgcolor: 'white'
            }}
          >
            <Box display="flex" alignItems="center" mb={2}>
              {isEditingName ? (
                <>
                  <TextField
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    size="small"
                    sx={{ flexGrow: 1 }}
                  />
                  <IconButton onClick={handleSaveName} color="primary">
                    <CheckIcon />
                  </IconButton>
                </>
              ) : (
                <>
                  <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                    {name}
                  </Typography>
                  <IconButton onClick={handleEditName} size="small">
                    <EditIcon />
                  </IconButton>
                </>
              )}
            </Box>

            <Grid container spacing={2} alignItems="center">
              <Grid item xs={8}>
                <Stack spacing={1}>
                  <Battery level={batteryLevel} charging={isCharging} />

                  <Typography>
                    Tuoksukapselin vaihtoon 2 kuukautta
                  </Typography>

                  <Typography>Ansassa tällä hetkellä {bugsInTrap} ötökkää</Typography>
                </Stack>
              </Grid>

              <Grid item xs={4} display="flex" justifyContent="flex-end">
                <img
                  src="src/assets/ansa.jpg"
                  alt="Ansa"
                  style={{ width: 150, height: 'auto' }}
                />
              </Grid>

            </Grid>


            <Button
              variant="contained"
              fullWidth
              onClick={buttonHandler}
              disabled={isEmptying}
              sx={{ mt: 2 }}
            >
              Tyhjennä
            </Button>

            {isEmptying && (
              <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
                {warningComponent()}
                <Box display="flex" justifyContent="center" mt={2}>
                  <CircularProgressWithLabel
                    value={progress}
                    timeLeft={timeLeft}
                  />
                </Box>
              </Stack>

            )}

            {showAlert && !isEmptying && (
              <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
                <Alert severity="success">
                  Säiliö tyhjennetty onnistuneesti
                </Alert>

                <Alert severity="info">
                  Säiliö tyhjennetty {count} kertaa
                </Alert>
              </Stack>
            )}
          </Paper>

          <Paper
            elevation={1}
            sx={{
              borderRadius: 4,
              p: 2,
              bgcolor: 'white'
            }}
          >
            <Stack spacing={2}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Tilastot</Typography>
              <Typography>{name} tyhjennetty viimeksi: {lastEmptyDate}</Typography>
              <Typography>Tyhjennysten määrä tämä kuukausi: {emptyAmountMonth}</Typography>
              <Typography>Tyhjennysten määrä tämä vuosi: {emptyAmountYear}</Typography>
            </Stack>
          </Paper>
        </Box>
      </>
    )

}

export default App
