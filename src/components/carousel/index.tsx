import { ChangeEventHandler, KeyboardEventHandler, MouseEventHandler, useState } from 'react'
import styles from './styles.module.scss'
import {PRIME_WINDOW_KEY } from '@/constants'

type CarouselProps = {
    items: {prime: number, key: typeof PRIME_WINDOW_KEY[number]}[],
    onInputChange?: (arg: number) => void;
}

const Carousel = ({items, onInputChange}: CarouselProps) => {
    const [showEdit, setShowEdit] = useState(false)
    const handleClick: MouseEventHandler<HTMLLIElement> = () => {
        setShowEdit(true)
    }

    const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
        onInputChange?.(parseInt(e.target.value))
    }

    const handleKeypress: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if(e.key === 'Enter' || e.key === ' ') {
            setShowEdit(false)
        }
    }

    const handleKeyboardEvent: KeyboardEventHandler<HTMLLIElement> = e => {
        console.log({e})
        if(e.key === 'Enter' || e.key === ' ') {
            setShowEdit(true)
        }
    }
    
    return (<>
        <div className={styles.carousel} aria-live='polite'>
            <ul className={styles['carousel--list']}>
                {items.map(({prime, key}, index) => {
                    if(index === Math.floor(items.length/2)) {
                        return <>
                         <li onClick={handleClick} className={styles['carousel--list-item']} key={key} onKeyDown={handleKeyboardEvent}  tabIndex={0}>{prime}</li>
                        </>
                        
                        
                    } else {
                        return <li onClick={() => {
                            onInputChange?.(prime)
                        }} className={styles['carousel--list-item']} key={key}>{prime}</li>
                    }
                })}
                {showEdit  &&  <input autoFocus type='number' min={1} className={styles['carousel--input']} onChange={handleChange} onKeyDown={handleKeypress} onBlur={() => setShowEdit(false)} maxLength={10} max={100000000} defaultValue={items[ Math.floor(items.length/2)].prime} />}
            </ul>
        </div>
    </>)
}

export default Carousel;