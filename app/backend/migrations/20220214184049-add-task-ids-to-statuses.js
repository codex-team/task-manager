module.exports = {
  async up(db) {
    const statuses = await db.collection('statuses').find()
      .toArray();

    for (const status of statuses) {
      const tasks = await db.collection('tasks').find({ statusId: status._id })
        .toArray();
      const taskIds = tasks.map(task => task._id);

      await db.collection('statuses').findOneAndUpdate({ _id: status._id }, {
        $set: { tasks: taskIds },
      }, {
        upsert: true,
        returnNewDocument: true,
      });
    }
  },

  async down(db) {
    await db.collection('statuses').updateMany(
      { },
      { $unset: { tasks: '' } }
    );
  },
};
