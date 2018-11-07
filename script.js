class UserList {
    constructor(container) {
        this.container = container
        this.users = []
        this.render()
    }
    render() {
        this.container.innerHTM = ''
        const ul = document.createElement('ul')
        this.users.forEach(user => {
            const li = document.createElement('li')

            li.innerText = `${name.first} ${name.last}`
        })
        this.container.appendChild(ul)
    }
}
const list = new UserList(document.body)