//how can we change GetWall to get the Wall just like we get the Feed?? I want to delete only things that are on myWall, not what is on Feed
const { GetByHandle } = require("./users");
//import { GetByHandle } from "./users";
const Users = require("./users");
const { ObjectId } = require('bson');
const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('workouts');
module.exports.collection = collection;

const list = [
    {
        time: '32:00 min',
        action: 'punching bag',
        date:'4/3/21',
        user_handle: '@boxer',
        isPublic: true
    },
    {
        time: '42:00 min',
        action: 'treadmill run',
        date:'1/22/21',
        user_handle: '@boxer',
        isPublic: true
    },
    {
        time: '35:00 min',
        action: 'football drills',
        date:'5/1/21',
        user_handle: '@HenryM',
        isPublic: true
    },
    {
        time: '1 hour',
        action: 'swimming',
        date:'1/24/21',
        user_handle: '@HenryM',
        isPublic: true
    },
    {
        time: '30:00 min',
        action: 'heavy weight lifting',
        date:'12/13/21',
        user_handle: '@bodybuilder',
        isPublic: true
    },
    {
        time: '30:00 min',
        action: 'picking up cars',
        date:'6/13/21',
        user_handle: '@bodybuilder',
        isPublic: true
    }
];

const addOwnerPipeline = [
    {
        "$lookup": {
            from: "users",
            localField: 'user_handle',
            foreignField: 'handle',
            as: 'user',
        }
    },
    { $unwind: "$user" },
    { $project: { "owner.password": 0 } }
];

module.exports.getAll = function GetAll() {
    return collection.aggregate(addOwnerPipeline).toArray();
}

module.exports.Add = async function Add(workouts) {
    if (!workouts.user_handle) {
        throw { code: 422, msg: "Workouts must have an Owner" }
    }
  
    const response = await collection.insertOne(workouts);
  workouts.id = response.insertedId;
    return { ...workouts };
}



module.exports.GetFeed = async function (handle) {
    //  The "MongoDB" way to do things. (Should test with a large `following` array)
    const user = await Users.collection.findOne({ handle });
    if(!user){
        throw { code: 404, msg: 'No such user'};
    }
    const targets = user.following.filter(x => x.isApproved).map(x => x.handle).concat(handle)
    const query = collection.aggregate([
        { $match: { user_handle: { $in: targets } } },
    // @ts-ignore
    ].concat(addOwnerPipeline));
    return query.toArray();
}
module.exports.Delete = async function Delete(workouts_id) {
    const results = await collection.findOneAndDelete({ _id: new ObjectId(workouts_id) })
    return results.value;
}


module.exports.Seed = async () => {
    for (const x of list) {
        await this.Add(x)
    }
}







