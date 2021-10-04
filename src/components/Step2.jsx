import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import LinearProgress from '@mui/material/LinearProgress'
import InputAdornment from '@mui/material/InputAdornment'
import CssBaseline from '@mui/material/CssBaseline'
import ButtonGroup from '@mui/material/ButtonGroup'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import StepLabel from '@mui/material/StepLabel'
import data from '../dataCatalog/data.json'
import Stepper from '@mui/material/Stepper'
import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Step from '@mui/material/Step'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

const Step2 = ({handleNext, handleBack, activeStep, formValues}) => {

    const [monto, setMonto] = useState(12500)

    const handleMore = () => {
        setMonto(number => number + 1)
    }

    const handleLess = () => {
        setMonto(number => number - 1)
    }

    const onChange = (e) => {
        let tabs = Array.from(document.getElementsByClassName("tablinks"))
        console.log(tabs[1].className)
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].className = tabs[i].className.replace(" active", "");
        }
        e.currentTarget.className += " active";
    }

    return(
        <ThemeProvider theme={createTheme()}>
            <AppBar sx={{ background: '#F7F8FC' }}>
                <Toolbar sx={{ background: '#F7F8FC' }}>
                </Toolbar>
            </AppBar>
            { formValues.nombres !== '' ? 
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Stack direction="column" sx={{ height: '100vh',background: '#F7F8FC' }}>
                    <Box
                    sx={{
                    my: 15,
                    mx: 30,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                    }}
                    >
                        <Stepper activeStep={activeStep} orientation="vertical">
                            {data.steps.map((step, index) => (
                            <Step key={step.label}>
                                <StepLabel>
                                {step.label}
                                </StepLabel>
                            </Step>
                            ))}
                        </Stepper>
                    </Box>
                </Stack>
                <Box
                sx={{
                my: 15,
                mx: 15,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
                }}
                >
                    <Stack direction="row">
                        <ArrowBackIcon onClick={handleBack}></ArrowBackIcon>
                        <span>Volver</span>
                    </Stack>
                    <Stack direction="row">
                        <Typography variant="h4" mt={3} mr={1}>¡Hola, </Typography>
                        <Typography variant="h4" mt={3} sx={{color: "#EF3340"}}> {formValues.nombres}!</Typography>
                    </Stack>
                    <Stack direction="row">
                        <Typography>Conoce las coberturas para tu plan</Typography>
                    </Stack>
                    <Stack direction="row" mt={4}>
                        <TextField
                            id="outlined-multiline-static"
                            endadornment={<InputAdornment position="end"><ArrowBackIcon ></ArrowBackIcon></InputAdornment>}
                            fullWidth
                            disabled
                            multiline
                            rows={6}
                            defaultValue={'Placa: ' + formValues.Placa + ' ' + formValues.auto + ' ' + formValues.modelo}
                        />
                    </Stack>
                    <Stack direction="row" mt={4} mb={5}>
                        <Stack direction="column" mr={3}>
                            <Stack direction="row">
                                <Typography variant="h6" gutterBottom component="div">Indica la suma asegurada</Typography>
                            </Stack>   
                            <Stack direction="row">
                                <Typography variant="caption" display="block" gutterBottom>MIN $12,500 | MAX $16,500</Typography>
                            </Stack>  
                        </Stack>
                        <Stack direction="column" >
                            <ButtonGroup variant="outlined" aria-label="text button group">
                                <Button onClick={handleLess}>-</Button>
                                <Button disabled>{'$'+monto}</Button>
                                <Button onClick={handleMore}>+</Button>
                            </ButtonGroup>
                        </Stack>
                    </Stack>
                    <Stack direction="row" mt={5}>
                            <Typography variant="h6" gutterBottom component="div">Agrega o quita coberturas</Typography>
                    </Stack>
                    <Stack direction="row" mt={3}>
                        <Stack direction="row" mt={3}>
                            <div className="tab">
                                <button id="tab1" className="tablinks active" onClick={onChange}>
                                    <Typography variant="caption" display="block" gutterBottom>PROTEGE A TU AUTO</Typography></button>
                                <button id="tab2" className="tablinks" onClick={onChange}>
                                    <Typography variant="caption" display="block" gutterBottom>PROTEGE A LOS QUE TE RODEAN</Typography></button>
                                <button id="tab3" className="tablinks" onClick={onChange}>
                                    <Typography variant="caption" display="block" gutterBottom>MEJORA TU PLAN</Typography></button>
                            </div>
                        </Stack>
                    </Stack>
                </Box>
                <Box
                sx={{
                my: 15,
                mx: 15,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
                >Marco
                </Box>
            </Grid> : 
            <Stack mt={50} mr={50} ml={50}>
                <LinearProgress color="error" />
            </Stack>
            }
        </ThemeProvider> 
    )
}
export default Step2