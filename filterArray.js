const mixedArray = [3,13,74,14,66,15,22,4];

const isEven = num => { 
    return num %2 == 0;
     };

const filterArray = (enterArray, filterFunc) => {
    const filtredArray = []
    enterArray.forEach(element => {
        if(filterFunc(element))
        filtredArray.push(element)
        
    });
    return filtredArray
}

console.log(filterArray(mixedArray, isEven));