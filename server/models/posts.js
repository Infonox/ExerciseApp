//how can we change GetWall to get the Wall just like we get the Feed?? I want to delete only things that are on myWall, not what is on Feed
const { GetByHandle } = require("./users");
//import { GetByHandle } from "./users";
const Users = require("./users");
const { ObjectId } = require('bson');
const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('posts');
module.exports.collection = collection;

const list = [
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/0/06/GoldGymShibuyaEntrance.jpg",
        alt: "Golds Gym Tokyo",
        caption: "At golds gym in Tokyo!!",
        time: Date(),
        user_handle: "@HenryM",
        isPublic: true,
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/6/61/Two_weight_training_benches.jpg",
        alt: "Free Weights",
        caption: "Free weights are my favorite way to workout!",
        time: Date(),
        user_handle: "@HenryM",
        isPublic: true,
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Arnold_Schwarzenegger_%2833730956438%29.jpg",
        alt: "Governer Arnold",
        caption: "Ello Gov'Na!",
        time: Date(),
        user_handle: "@bodybuilder",
        isPublic: true,
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Construction_Truck.jpg",
        alt: "Arnolds Workout",
        caption: "I only lift Tractor Trailers when I workout!",
        time: Date(),
        user_handle: "@bodybuilder",
        isPublic: true,
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Exercise_Treadmill_Convey_Motion.jpg",
        alt: "Tyson's cardio",
        caption: "Always gotta keep that cardio up!!!",
        time: Date(),
        user_handle: "@boxer",
        isPublic: true,
    },
    {
        src: "https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/p180x540/242759506_10102663165018030_5506732176336636339_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=LJFWaOTJXvUAX-skiU3&_nc_ht=scontent-lga3-2.xx&oh=e6a03799ccf969c3b3fe62a7b266b8b9&oe=618C38F8https://upload.wikimedia.org/wikipedia/commons/c/cb/BagGloves.JPG",
        alt: "Tyson's gloves",
        caption: "My favorite pair of boxing gloves!",
        time: Date(),
        user_handle: "@boxer",
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
const addOwnerPipeline2 = [
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

//convert to mongo
//this is the sql way
module.exports.getFeed_ = function GetFeed_(handle) {
    const query = Users.collection.aggregate([
        { $match: { handle } },
        {
            "$lookup": {
                from: "posts",
                localField: 'following.handle',
                foreignField: 'user_handle',
                as: 'posts'
            }
        },
        { $unwind: '$posts' },
        { $replaceRoot: { newRoot: "$posts" } },
    // @ts-ignore
    ].concat(addOwnerPipeline));
    return query.toArray();
    //return listWithOwner()
    //.match(post=> GetByHandle(handle).following.some(f=> f.handle == post.user_hand
}
//this is the mongo way
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

module.exports.GetWall = function GetWall(handle) {
    return collection.aggregate(addOwnerPipeline2).match({ user_handle: handle }).toArray();
}










module.exports.Get = function Get(post_id) { return collection.findOne({ _id: new ObjectId(post_id) }); }
module.exports.Add = async function Add(post) {
    if (!post.user_handle) {
        throw { code: 422, msg: "Post must have an Owner" }
    }
    post.time = Date();
    const response = await collection.insertOne(post);
    post.id = response.insertedId;
    return { ...post };
}
module.exports.Update = async function Update(post_id, post) {
    const results = await collection.findOneAndUpdate(
        { _id: new ObjectId(post_id) },
        { $set: post },
        { returnDocument: 'after' }
    );
    return results.value;
}
module.exports.Delete = async function Delete(post_id) {
    const results = await collection.findOneAndDelete({ _id: new ObjectId(post_id) })
    return results.value;
}
module.exports.Search = q => collection.find({ caption: new RegExp(q, "i") }).toArray();

module.exports.Seed = async () => {
    for (const x of list) {
        await this.Add(x)
    }
}