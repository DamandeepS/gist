'use client'
import { useMemo, useState } from "react"
import primeWindow from "@/utils/primeWindow";
import Carousel from "@/components/carousel";
import { PRIME_WINDOW_KEY } from "@/constants";

export default function PrimeWindowGist() {
    const [currentValue, setCurrentValue] = useState(23);

    const data = useMemo(() => primeWindow(currentValue).map((prime, index) => ({
        prime,
        key: PRIME_WINDOW_KEY[index]
    })), [currentValue])

    const onNumberChange = (number: number) => setCurrentValue(number)
   
    return <>
        <Carousel items={data} onInputChange={onNumberChange} />
    </>
}