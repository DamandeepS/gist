import isPrimeOptimized from "./isPrime"

const primeWindow = (number: number) => {
    const previousPrime = findPreviousPrime(number);
    const previousPreviousPrime = findPreviousPrime(previousPrime);
    const currentPrime = findNextPrime(number, true)
    const nextPrime = findNextPrime(currentPrime);
    const nextNextPrime=findNextPrime(nextPrime)

    return [findPreviousPrime(previousPreviousPrime), previousPreviousPrime, previousPrime, currentPrime, nextPrime, nextNextPrime, findNextPrime(nextNextPrime)] as const
}

const findPreviousPrime = (number: number) => {
    let current = number - 1
    if (current < 1) {
        return 1
    }
    while(true && current>0) {
       if( isPrimeOptimized(current) ) {
        return current
       }
       current--;
    }
    return 1;
}
const findNextPrime = (number: number,  checkCurrent = false) => {

    if (number < 1) {
        return 1
    }
    let current = number
    !checkCurrent && current++
    while(true) {
       if( isPrimeOptimized(current) ) {
        return current
       }
       current++;
    }
    
}

export default primeWindow;