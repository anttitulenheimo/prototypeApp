import BatteryFullIcon from '@mui/icons-material/BatteryFull'
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull'
import Battery60Icon from '@mui/icons-material/Battery60'
import Battery20Icon from '@mui/icons-material/Battery20'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Battery = ({ level, charging }) => {
  //Battery icon is based on level and charging status
  const getBatteryIcon = () => {
    if (charging) return <BatteryChargingFullIcon />
    if (level > 70) return <BatteryFullIcon />
    if (level > 30) return <Battery60Icon />
    return <Battery20Icon />
  }

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 16,
        right: 16,
        display: 'flex',
        alignItems: 'center',
        gap: 0.5
      }}
    >
      {getBatteryIcon()}
      <Typography variant="body2">{level}%</Typography>
    </Box>
  )
}

export default Battery
