const User = require('./User');
const Activity = require('./activity');
const Sleep = require('./sleep');
const Mood = require ('./mood');
const toDoList = require('./toDoList');

User.hasMany(Activity, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Activity.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Mood, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Mood.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Sleep, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Sleep.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(toDoList, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

toDoList.belongsTo(User, {
  foreignKey: 'user_id',
})



module.exports = { User, Activity, Mood, Sleep, toDoList };
