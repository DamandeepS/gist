'use client'
import { ChangeEventHandler, MouseEventHandler, useMemo, useState } from "react"
import primeFactory from "@/utils/primeFactory";

export default function PrimeFactoryGist() {
    const [value, setValue] = useState(1);
    const [currentPrime, setCurrentPrime] = useState(1);

    const iterator = useMemo(() => primeFactory(value), [value])

    const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
        setValue(parseInt(e.target.value))
        const localIterator = primeFactory(parseInt(e.target.value))
        setCurrentPrime(localIterator.next().value ?? 1)
        localIterator.throw(1)
        console.log(localIterator.next())
    }

    const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
        setCurrentPrime(iterator.next().value ?? 1)
    }

    return <>
        <input defaultValue={value} type="number" onChange={handleChange}></input>
        <button onClick={handleClick}>Next Prime</button>
        <h2>Next Prime: {currentPrime}</h2>
    </>
}