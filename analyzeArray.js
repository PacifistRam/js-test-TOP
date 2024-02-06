function analyzeArray(arrayOfNos){
    const lengthOfArray =  arrayOfNos.length;
    const average = arrayOfNos.reduce((acc,char) => acc + char,0) /lengthOfArray
    const minimumValue = Math.min(...arrayOfNos); 
    const maximumValue = Math.max(...arrayOfNos); 
    return {
        average : average,
        min : minimumValue,
        max: maximumValue,
        length : lengthOfArray,
    };
};

module.exports = analyzeArray;