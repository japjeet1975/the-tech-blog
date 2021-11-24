const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// For users can make many posts 
User.hasMany(Post, {
    foreignKey: 'user_id'
}); 

// code for where a post can only belong to one user 
Post.belongsTo(User, {
    foreignKey: 'user_id'
})

// code for a comment can only belong to one user 
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

// code for a comment can only belong to one user 
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

// code for users who can make many comments 
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

// code for users who can make many posts 
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };