// class UserList {
//     constructor(container, number) {
//         this.container = container
//         this.users = []
//         this.render()
//         this.number = number
//         this.init()
//     }

//     init() {
//         this.render()
//         this.fetchUsers()
//     }
//     fetchUsers() {
//         fetch(`https://randomuser.me/api/?results=${this.number}`)
//             .then(response => response.json())
//             .then(data => {
//                 this.users = data.results
//                 this.render()
//             })
//     }
//     render() {
//         this.container.innerHTML = ''
//         const ul = document.createElement('ul')
//         this.users.forEach((user, userIndex) => {
//             const li = document.createElement('li')
//             const but = document.createElement('button')
//             but.innerText = 'remove'
//             li.innerText = `${user.name.first} ${user.name.last}`
//             li.addEventListener('click', () => {
//                 alert(`${user.email}`)
//             })
//             but.addEventListener('click', () => {
//                 this.users.splice(userIndex, 1)
//                 this.render()
//             })
//             ul.appendChild(li)
//             ul.appendChild(but)
//         })
//         this.container.appendChild(ul)
//     }
// }
// const list = new UserList(document.body, 10)

class UserList {
    constructor(container, number) {
        this.container = container
        this.users = []
        this.render()
        this.number = number
        this.init()
    }

    init() {
        this.render()
        this.fetchUsers()
    }
    fetchUsers() {
        fetch(`https://randomuser.me/api/?results=${this.number}`)
            .then(response => response.json())
            .then(data => {
                this.users = data.results
                this.render()
            })
    }
    render() {
        this.container.innerHTML = ''
        const ul = document.createElement('ul')
        this.users.forEach((user, userIndex) => {
            const li = document.createElement('li')
            const but = document.createElement('button')
            but.innerText = 'remove'
            li.innerText = `${user.name.first} ${user.name.last}`
            li.addEventListener('click', e => this.onUserClickHandler(user))
            but.addEventListener('click', e => this.onUserDeleteClickHandler(e, userIndex))


            li.appendChild(but)
            ul.appendChild(li)
        })

        this.container.appendChild(ul)
    }
    onUserClickHandler(user) {
        alert(user.email)
    }
    onUserDeleteClickHandler(e, userIndex) {
        e.stopPropagation()
        this.users.splice(userIndex, 1)
        this.render()
    }

}
const list = new UserList(document.body, 10)

