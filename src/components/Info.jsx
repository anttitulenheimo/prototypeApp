import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
  { field: 'id', headerName: 'Säiliö', width: 90 },
  { field: 'firstArg', headerName: 'Säiliössä sisällä', width: 150 }
]

const rows = [
  { id: 1, firstArg: 3 },
  { id: 2, firstArg: 2 },
  { id: 3, firstArg: 4 },
]

const Info = () => {
    const totalInsects = rows.reduce((sum, row) => sum + row.firstArg, 0)

  return (
    <>
      <Box sx={{ p: 3, minHeight: 'calc(100vh - 56px)' }}>

          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            Säiliöiden tilanne
          </Typography>

            <DataGrid
              rows={rows}
              columns={columns}
              pageSizeOptions={[5]}
            />

            <Typography variant="h6" sx={{ mt: 2 }}>
                Yhteensä kiinniotettujen hyönteisten määrä: {totalInsects}
          </Typography>
      </Box>
    </>
  )
}

export default Info
