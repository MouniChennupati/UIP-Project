// 1. import mongoose
const mongoose = require("mongoose");

// 2. create schema for entity
const postSchema = new mongoose.Schema({
  posttype: { type: String, unique: true, required: true},
  postid: { type: Int16Array, required: true},
  userid: [Int16Array],
  commentid: [Int16Array]
})


const Post = mongoose.model("Post", postSchema);


async function create(posttype, postid, userid) {
  const newPost = await Post.create({
    posttype: posttype,
    postid: postid,
    userid: userid,
    commentid: commentid
  });

  return newPost;
}


async function updatePost(postid, posttype, commentid) {
  const post = await Post.updateOne({"_id": postid}, {$set: { posttype: posttype, commentid: commentid, userid: userid}});
  return post;
}


async function deletePost(postid) {
  await Post.deleteOne({"_id": postid}, {$set: {userid: userid}});
};


async function getUserPosts(userid) {
    return await Post.find({ "createdBy": userid});
}


module.exports = { 
    create, updatePost, deletePost, getUserPosts
};