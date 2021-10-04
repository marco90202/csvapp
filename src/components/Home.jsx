import {Fragment, useState} from 'react'
import Step1 from './Step1'
import Step2 from './Step2'

const Home = () => {

    const formData = {
        flag: '1',
        tipoDoc: null,
        numDoc: null,
        Celular: null,
        Placa: null,
        Terms: false
    }

    const [formValues, setFormValues] = useState(formData)

    const handleInputChange = e => {
         let inputName = e.target.name === undefined ? "tipoDoc" : e.target.name
         let inputValue = e.target.value === 0 ? e.target.innerText : e.target.value

         setFormValues({
             ...formValues,
             [inputName] : inputName === "Terms" ?  e.target.checked : inputValue
         })
    }

    console.log(formValues.flag)

    return (
        <Fragment>
            {formData.flag === '1' ? 
                                    <Step1 
                                        handleInputChange={handleInputChange}
                                        setFormValues={setFormValues}
                                        formValues={formValues}
                                    />
                                    :
                                    <Step2 />
            }
        </Fragment>
    )
}
export default Home