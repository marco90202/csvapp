
import { useState } from 'react'
import { post } from '../utils/Helpers'
import Step1 from './Step1'
import Step2 from './Step2'

const Home = () => {


    const formData = {
        tipoDoc: null,
        numDoc: null,
        Celular: null,
        Placa: null,
        Terms: false,
        nombres: null,
        auto : null,
        modelo : null
    }

    const [formValues, setFormValues] = useState(formData)
    const [activeStep, setActiveStep] = useState(0)

    const handleInputChange = e => {
         let inputName = e.target.name === undefined ? "tipoDoc" : e.target.name
         let inputValue = e.target.value === 0 ? e.target.innerText : e.target.value

         setFormValues({
             ...formValues,
             [inputName] : inputName === "Terms" ?  e.target.checked : inputValue
         })
    }


    const submitForm = () => {

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
        
    }

    const handleNext = () => {
        setActiveStep(Index => Index + 1)
    }

    const handleBack = () => {
        setActiveStep(Index => Index - 1)
    }

    const currentStep = (Index) => {
        let steps = [
            <Step1 submitForm={submitForm} handleInputChange={handleInputChange} handleNext={handleNext}/>,
            <Step2 handleBack={handleBack} formValues={formValues}/>
        ]

        return steps[Index]
    }

    return currentStep(activeStep)
}
export default Home