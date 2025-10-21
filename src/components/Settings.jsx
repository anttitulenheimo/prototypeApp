import React from 'react'
import Box from '@mui/material/Box'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import LogoutIcon from '@mui/icons-material/Logout'
import AddBoxIcon from '@mui/icons-material/AddBox'
import LanguageIcon from '@mui/icons-material/Language'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import Avatar from '@mui/material/Avatar'
import avatarImg from '../assets/aaltoAvatar.png'

const Settings = () => {
  return (
    <Box sx={{ p: 3, minHeight: 'calc(100vh - 56px)' }}>
        <Box>
            <Avatar alt="Test User" sx={{ width: 100, height: 100 }}
                    src={avatarImg} /> Kirjautuneena sisään käyttäjänä Test User
        </Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Kirjaudu ulos" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AddBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Lisää toinen laite" />
            </ListItemButton>
          </ListItem>
          <ListItemButton>
              <ListItemIcon>
                <NotificationsActiveIcon />
              </ListItemIcon>
              <ListItemText primary="Muistutukset" />
            </ListItemButton>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary="Vaihda kieli" />
            </ListItemButton>
          </ListItem>
        </List>
    </Box>
  )
}

export default Settings