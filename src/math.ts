export const futureValue = (presentValue: number, growthPercentage: number, numYears: number) => {
    const growthRate = growthPercentage / 100;
    const result = presentValue * ((1 + growthRate) ** numYears);
    const rounded = Math.round(result * 100) / 100;
    return rounded;
};
