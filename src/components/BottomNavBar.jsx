import { useNavigate, useLocation } from 'react-router-dom'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import SettingsIcon from '@mui/icons-material/Settings'
import Paper from '@mui/material/Paper'

function BottomNavBar() {
  const navigate = useNavigate()
  const location = useLocation()
  
  const getPathValue = () => {
    if (location.pathname === '/info') return 1
    if (location.pathname === '/settings') return 2
    return 0 // Home is default
  };

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        value={getPathValue()}
        onChange={(event, newValue) => {
          switch (newValue) {
            case 0: navigate('/'); break
            case 1: navigate('/info'); break
            case 2: navigate('/settings'); break
            default: navigate('/')
          }
        }}
      >
        <BottomNavigationAction label="Koti" icon={<HomeIcon />} />
        <BottomNavigationAction label="Info" icon={<InfoIcon />} />
        <BottomNavigationAction label="Asetukset" icon={<SettingsIcon />} />
      </BottomNavigation>
    </Paper>
  )
}

export default BottomNavBar

//TODO: Reminders to empty the container
//TODO: Info tells how many bugs there are inside (a bug is inside)