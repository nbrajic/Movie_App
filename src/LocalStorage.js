var users = [{
    username: "admin",
    password: "admin",
    id: 1
}]
var nextId = 2;
window.localStorage.setItem('loggedIn', false)

export function insert(entry) {
    entry.id = nextId++;
    users.push(entry);
    window.localStorage.setItem('storageArray', JSON.stringify(users));
    window.localStorage.setItem('loggedIn', true)
    console.log(window.localStorage.loggedIn);
    return entry.id;
}

export function remove(entry) {
    users.splice(users.findIndex(el => entry.id === el.id ), 1);
    window.localStorage.setItem('storageArray', JSON.stringify(users));
}

export function clearStorage() {
    users = [{
        username: "admin",
        password: "admin",
        id: 1
    }]
    window.localStorage.setItem('storageArray', JSON.stringify(users));
    window.localStorage.setItem('loggedIn', false)
}

export function getUsers() {
    const storageData = window.localStorage.getItem('storageArray');
    if (storageData == null) {
        users = [{
            username: "admin",
            password: "admin",
            id: 1
        }];
        nextId = 2;
    }
    else {
        users = JSON.parse(window.localStorage.getItem('storageArray'));
        nextId = users[users.length - 1].id+1;
    }
    console.log(users)
    return users;
}

export function isLoggedIn() {
    return window.localStorage.getItem('loggedIn')
}
