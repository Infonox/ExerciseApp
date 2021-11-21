/* B"H
*/

const list = [
    { 
        firstName: 'Henry',
        lastName: 'Maldonado',
        handle: '@HenryM',
        pic: 'https://images.app.goo.gl/j5XRNZVVBvPPXN2v9',
        password: 'me',
        isAdmin: true,
        emails: [
            "maldonah2@newpaltz.edu"
        ],
        following: [ { handle: '@bodybuilder', isApproved: true }, { handle: '@yummyears', isApproved: true }, ],
        get name(){ return this.firstName + ' ' + this.lastName },
    },
    {
        firstName: 'Arnold ',
        lastName: 'Schwarzenegger',
        handle: '@bodybuilder',
        pic: 'arnold.jpg',
        password: 'strong',
        isAdmin: true,
        emails: [
            "arnolds@gmail.com"
        ],
        following: [{ handle: '@yummyears', isApproved: true },],
    },
    {
        firstName: 'Mike',
        lastName: 'Tyson',
        handle: '@boxer',
        pic: 'data:image/jpeg;base64,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',
        password: 'letsfight',
        isAdmin: true,
        emails: [
            "@heavyhitter@newpaltz.edu"
        ],
        following: [{ handle: '@bodybuilder', isApproved: true },],
    },

];

export function GetAll() { return list; }
export function Get(user_id) { return list[user_id]; }
export function GetByHandle(handle) { return ({ ...list.find(x => x.handle == handle), password: undefined }); }

export function Add(user) {
    if (!user.firstName) {
        throw { code: 422, msg: "First Name is required" }
    }
    list.push(user);
    return { ...user, password: undefined };
}   //MongoDB axios, database 


export function Update(user_id, user) {
    const oldObj = list[user_id];
    if (user.firstName) {
        oldObj.firstName = user.firstName;
    }
    if (user.lastName) {
        oldObj.lastName = user.lastName;
    }
    if (user.handle) {
        oldObj.handle = user.handle;
    }
    if (user.pic) {
        oldObj.pic = user.pic;
    }
    //list[user_id] = newObj ;
    return { ...oldObj, password: undefined };
}

export function Delete(user_id) {
    const user = list[user_id];
    list.splice(user_id, 1);
    return user;
}

export function Login(handle, password) {
    console.log({ handle, password })
    const user = list.find(x => x.handle == handle);
    if (!user) throw { code: 401, msg: "Sorry there is no user with that handle" };

    if (!(password == user.password)) {
        throw { code: 401, msg: "Wrong Password" };
    }

    const data = { ...user, password: undefined };

    return { user: data };
}