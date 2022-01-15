export const futureValue = (presentValue: number, growthPercentage: number, numYears: number) => {
    const growthRate = growthPercentage / 100;
    let result = presentValue;
    for (let i = 0; i < numYears; i++) {
        result = result + result * growthRate;
        if (result <= 0) return 0;
    }
    result = Math.round(result * 100) / 100;
    return result;
};
