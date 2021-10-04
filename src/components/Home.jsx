
import { useState } from 'react'
import { post, validateInput } from '../utils/Helpers'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

const Home = () => {


    const formData = {
        tipoDoc: '',
        numDoc: '',
        Celular: '',
        Placa: '',
        Terms: false,
        nombres: '',
        auto : '',
        modelo : ''
    }

    const [formValues, setFormValues] = useState(formData)
    const [activeStep, setActiveStep] = useState(0)
    const [error, setError] = useState({
        valid: false,
        text: ""
    })

    const handleInputChange = e => {
         let inputName = e.target.name === undefined ? "tipoDoc" : e.target.name
         let inputValue = e.target.value === 0 ? e.target.innerText : e.target.value

            if(validateInput(inputValue)){
                setFormValues({
                    ...formValues,
                    [inputName] : inputName === "Terms" ?  e.target.checked : inputValue
                })
            }
            if(inputName === "Terms" || inputName === "tipoDoc"){
                setFormValues({
                    ...formValues,
                    [inputName] : inputName === "Terms" ?  e.target.checked : inputValue
                })
            }
    }


    const submitForm = () => {

        if(formValues.tipoDoc.trim() !== '' &&  
           formValues.numDoc.trim() !== '' &&
           formValues.Celular.trim() !== '' &&
           formValues.Placa.trim() !== '' &&
           formValues.Terms !== false){
            post('/posts',JSON.stringify(formValues),null,function(code, response){
                if(code === 201){
                    setFormValues({
                        ...formValues,
                        nombres : "Juan",
                        auto : "Wolkswagen 2019",
                        modelo : "Golf"
                    })
                }
            })
            handleNext()
        }else{
            setError({
                ...error,
                valid: true,
                text: "Completar campo"
            })
        }
        
    }

    const handleNext = () => {
        setActiveStep(Index => Index + 1)
    }

    const handleBack = () => {
        setActiveStep(Index => Index - 1)
    }

    const currentStep = (Index) => {
        let steps = [
            <Step1 
                submitForm={submitForm} 
                handleInputChange={handleInputChange} 
                handleNext={handleNext}
                error={error}
                formValues={formValues}/>,
            <Step2 
                activeStep={activeStep}
                handleNext={handleNext}
                handleBack={handleBack} 
                formValues={formValues}/>,
            <Step3
                handleBack={handleBack}/>
        ]

        return steps[Index]
    }

    return currentStep(activeStep)
}
export default Home