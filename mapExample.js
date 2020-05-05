/*
const productPrices =[1,2,3,4,5,6,7,8,9,10];
const newValues=productPrices.map(x=>x*2);
const newFilterValues = productPrices.filter(x=>x%2);
console.log(newFilterValues);
console.log(newValues);
*/

function getShortMessages(messages){
    const filterValue =messages.map(x=> x.message);
    const mapValue = messages.filter(x=>x.message<5)
    console.log(filterValue);
    console.value(mapValue);

}
var messages=[
    {
        message:'Testing aaaaaaaaaaaaaaaaaaaaa'
    },
    {
        message : 'Testing bbbbbbbbbbbbbbbbbbbb'
    },
    {
        message : 'Testing cccccccccccccccccccccccc'
    }
]
getShortMessages(messages);