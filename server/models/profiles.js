//how can we change GetWall to get the Wall just like we get the Feed?? I want to delete only things that are on myWall, not what is on Feed
const { GetByHandle } = require("./users");
//import { GetByHandle } from "./users";
const Users = require("./users");
const { ObjectId } = require('bson');
const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('profiles');
module.exports.collection = collection;

const list = [
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Arnold_Schwarzenegger_%2833730956438%29.jpg",
        age: 25,
        weight: '250lbs',
        description: "Just a programmer who likes to workout!",
        user_handle: "@HenryM",
        isPublic: true,
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Arnold_Schwarzenegger_%2833730956438%29.jpg",
        age: 85,
        weight: '350lbs',
        description: 'Im THE TERMINATOR',
        user_handle: "@bodybuilder",
        isPublic: true,
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Arnold_Schwarzenegger_%2833730956438%29.jpg",
        age: 58,
        weight: '230lbs',
        description:'Im the best boxer ever',
        user_handle: "@yummyears",
        isPublic: true,
    },
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

module.exports.AddData = async function AddData(profile) {
    if (!profile.user_handle) {
        throw { code: 422, msg: "Post must have an Owner" }
    }
    profile.time = Date();
    const response = await collection.insertOne(profile);
    profile.id = response.insertedId;
    return { ...profile};
}

module.exports.getAll2 = function GetAll() {
    return collection.aggregate(addOwnerPipeline).toArray();
}


module.exports.Get = function Get(profiles_id) { return collection.findOne({ _id: new ObjectId(profiles_id) }); }

module.exports.Update = async function Update(profiles_id, profile) {
    const results = await collection.findOneAndUpdate(
        { _id: new ObjectId(profiles_id) },
        { $set: profile },
        { returnDocument: 'after' }
    );
    return results.value;
    }

    module.exports.Seed = async () => {
        for (const x of list) {
            await this.AddData(x)
        }
    }
