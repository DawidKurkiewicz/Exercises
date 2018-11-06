// var log10times = function innerName (i){
//     i = i || 0
//     console.log('log10times')
//     if (i < 10) innerName(++i)
// }
// const log10TimesPrim = log10Times
// log10Times = null
// log10TimesPrim()

const  numbers = function showNum(i) {
    i = i || 0
    console.log(i)
    if (i >=1) showNum(--i)

}
numbers(10)