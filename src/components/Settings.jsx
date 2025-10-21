import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import LogoutIcon from '@mui/icons-material/Logout'
import AddBoxIcon from '@mui/icons-material/AddBox'
import LanguageIcon from '@mui/icons-material/Language'

const Settings = () => {
  return (
    <Box sx={{ p: 3, minHeight: 'calc(100vh - 56px)' }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Log out" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AddBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Add another device" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary="Change language" />
            </ListItemButton>
          </ListItem>
        </List>
    </Box>
  )
}

export default Settings