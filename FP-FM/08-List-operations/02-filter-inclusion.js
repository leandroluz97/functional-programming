const isLoggedIn = (user) => user.session != null

function filterIn(predicate, groupOfUser) {
    let groupOfLoggedInUsers = []

    for (const user of groupOfUser) {
        if (predicate(user)) {
            groupOfLoggedInUsers.push(user)
        }
    }

    return groupOfLoggedInUsers

}

console.log(filterIn(isLoggedIn, [
    { userID: 42, session: "dfdssaf*_fdsfaT" },
    { userID: 44 },
    { userID: 42, session: "re!d1dssaf*_fdsfaTaz" }
]));