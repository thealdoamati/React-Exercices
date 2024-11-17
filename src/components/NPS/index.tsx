'use client'
import { ChangeEvent, FormEvent, useState } from "react"

const numbers = Array.from({length: 11}, (_,i) => i)


export default function NPSComponent() {
    const [NPSnumber, setNPSnumber] = useState('')

    function handleSelectedNumber(event: ChangeEvent<HTMLInputElement>) {
        setNPSnumber(event.target.value)
        console.log(event.target.value)

    }

    function handleSendForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log('Nota selecionada:', NPSnumber)
    }
    

    return(
        <>
        <h3>O quanto você recomendaria este produto?</h3>
            <form onSubmit={handleSendForm}>
                <div className="flex gap-6">
                {numbers.map(number => {
                    return(
                        <div className="flex flex-col" key={number}>                        
                            <input value={number} type="radio" name="NPS" checked={NPSnumber === number.toString()} onChange={handleSelectedNumber} />
                            <label>{number}</label>
                        </div>
                    )
                })}
                </div>
                <input type="submit" value="Enviar" />
            </form>
        </>
    )
}