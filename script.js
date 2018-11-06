const numbers = [1, 2, 3, 4, 5]

Array.prototype.myOwnMap = function (func) {
    let newArray  = []

    for (let i = 0; i < this.length; i++){
        newArray.push(func(this[i], i, this))
    }
    return newArray
}

const result = numbers.myOwnMap((e) => 2 * e)
