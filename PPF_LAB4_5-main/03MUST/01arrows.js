const getFavouriteNumber = () => 6;
const addSeven = a => a+7;
const divide = (a,b) => a/b;

//powyższy kod działa tak samo jak:
function getFavouriteNumberA()
{
    return 6;
}
function addSevenA(a)
{
    return a+7;
}
function divideA(a,b)
{
    return a/b;
}

console.log(getFavouriteNumber());
console.log(addSeven(6));
console.log(divide(13,6));
console.log(getFavouriteNumberA());
console.log(addSevenA(8));
console.log(divideA(15,6));