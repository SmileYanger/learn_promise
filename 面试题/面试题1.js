setTimeout(() => {
    console.log(1)
},0)
Promise.resolve().then(() => {
    console.log(2)
})
Promise.resolve().then(() => {
    console.log(4)
})
console.log(3)
/**
 * 3  2  4  1
 */