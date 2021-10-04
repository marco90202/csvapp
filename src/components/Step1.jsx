import { createTheme, ThemeProvider } from '@mui/material/styles'
import Autocomplete from '@mui/material/Autocomplete'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import data from '../dataCatalog/data.json'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

const Step1 = ({submitForm, handleInputChange, error, formValues}) => {
    
    return (
    <ThemeProvider theme={createTheme()}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={5} sm={5} md={5}
            sx={{
              backgroundImage: 'url(https://source.unsplash.com/random)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid 
            item xs={7} sm={7} md={7}>
            <Box
                sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
                >
                        <Box
                            sx={{
                            pr: '20rem',
                            pl: '20rem'
                            }}
                            >
                            <Stack direction="row">
                                <Typography component="h1" variant="h4" sx={{mt: 3, mb: 3}}>
                                        Déjanos tus datos
                                    </Typography>
                            </Stack>
                            <Stack direction="row">
                                <Autocomplete
                                    id="tipoDoc"
                                    name="tipoDoc"
                                    value={formValues.tipoDoc}
                                    options={data.typeID}
                                    onChange={handleInputChange}
                                    renderInput={(params) => <TextField {...params} label="Tipo" />}
                                />
                                <TextField 
                                    fullWidth
                                    error={formValues.numDoc === '' ? error.valid : false} 
                                    helperText={formValues.numDoc === '' ? error.text : ""}
                                    value={formValues.numDoc}
                                    id="numDoc"
                                    label="Nro de Documento"
                                    name="numDoc"
                                    onChange={handleInputChange}
                                />
                            </Stack> 
                            <Stack direction="row">
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    error={formValues.Celular === '' ? error.valid : false} 
                                    helperText={formValues.Celular === '' ? error.text : ""}
                                    value={formValues.Celular }
                                    id="Celular"
                                    label="Celular"
                                    name="Celular"
                                    onChange={handleInputChange}
                                />
                            </Stack>
                            <Stack direction="row">
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    error={formValues.Placa === '' ? error.valid : false} 
                                    helperText={formValues.Placa === '' ? error.text : ""}
                                    value={formValues.Placa}
                                    id="Placa"
                                    label="Placa"
                                    name="Placa"
                                    onChange={handleInputChange}
                                />
                            </Stack>
                            <Stack direction="row">
                                <Checkbox 
                                    margin="normal" 
                                    id="Terms" 
                                    name="Terms" 
                                    checked={formValues.Terms}
                                    color="success" 
                                    onChange={handleInputChange}/>
                                <p>Acepto la <a href="https://www.youtube.com">Politica de Protección de Datos Personales</a> y los <a href="https://www.youtube.com">Términos y Condiciones.</a></p>
                            </Stack>
                            <Stack direction="row">
                                    <Button
                                    type="submit"
                                    fullWidth
                                    onClick={submitForm}
                                    variant="contained"
                                    color="error"
                                    sx={{ mt: 3, mb: 2, width: 230, height: 50  }}
                                    >
                                        COTIZALO
                                    </Button>
                            </Stack>
                        </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    )
}
export default Step1