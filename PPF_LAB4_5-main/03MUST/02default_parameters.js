//ES6
function getItems(url, offset = 0, limit = 10, orderBy= "date")
{
    return url;
}

//funkcja arrow
const getItemsA = (url, offset = 0, limit = 10, orderBy= "date") =>{};

//add(1)
//add(1,2)
function add(a,b=0)
{
    return a+b;
}

//tak samo jak:
const addA = (a,b=0)=>a+b;
//i takie samo jak:
function addB(a,b)
{
    b=b=== undefined ? 0:b;
    return a+b;
}

console.log(getItems());
console.log(getItemsA());
console.log(add(1));
console.log(addA(1,0));
console.log(addB(1,0));