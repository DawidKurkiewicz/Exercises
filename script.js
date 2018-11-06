const numbers = [1, 2, 3, 4, 5]

Array.prototype.myOwnFind = function (func) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (func(this[i], i, this)) {
            return this[i]
        }
    }
}

const result = numbers.find((e) => e % 2 === 0)

console.log(result)
