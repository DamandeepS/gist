import isPrimeOptimized from "./isPrime";

function* primeFactory (current = 1 ) {
    
    
      while(true){
        if(isPrimeOptimized(current)) {
           try{
            yield current;
           } catch {
            console.log('dance')
            yield undefined;
           }
        }
        current++;
      }
}

export default primeFactory;