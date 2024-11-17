'use client'
import { ChangeEvent, FormEvent, useState } from "react"

const numbers = Array.from({length: 11}, (_,i) => i)


export default function NPSComponent() {
    const [NPSnumber, setNPSnumber] = useState('')

    function handleSelectedNumber(event: ChangeEvent<HTMLInputElement>) {
        setNPSnumber(event.target.value)
        console.log(event.target.value)

    }

    function getColor(number: number) {
        if(number >= 10) {
            return 'bg-green-300 border-green-300'
        } else if( number >= 7) {
            return 'bg-yellow-300 border-yellow-300'
        } else {
            return 'bg-red-300 border-red-300'
        }   
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
                        <div 
                        onClick={() => setNPSnumber(number.toString())} // Adicionei onClick para melhor interatividade
                        className={`
                            flex flex-col items-center p-2 rounded border-2
                            ${NPSnumber === number.toString() 
                                ? getColor(number) 
                                : 'bg-gray-50 border-gray-200'}
                            hover:bg-gray-100 cursor-pointer transition-all
                        `}  
                        key={number}
                    >                        
                        <input 
                            className="hidden" 
                            value={number} 
                            type="radio" 
                            name="NPS" 
                            checked={NPSnumber === number.toString()} 
                            onChange={handleSelectedNumber} 
                        />
                        <label className="cursor-pointer font-medium">{number}</label>
                    </div>
                    )
                })}
                </div>
                <input type="submit" value="Enviar" />
            </form>
        </>
    )
}