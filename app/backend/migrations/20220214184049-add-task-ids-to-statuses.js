module.exports = {
  async up(db) {
    // Get all the statuses persisted in db
    const statuses = await db.collection('statuses').find()
      .toArray();

    // Traverse found statuses
    for (const status of statuses) {
      // Find tasks which have statusId equal to current status id
      const tasks = await db.collection('tasks').find({ statusId: status._id })
        .toArray();
      const taskIds = tasks.map(task => task._id);

      // Set 'tasks' field of current status to be equal to array of found tasks ids
      await db.collection('statuses').findOneAndUpdate({ _id: status._id }, {
        $set: { tasks: taskIds },
      }, {
        upsert: true,
        returnNewDocument: true,
      });
    }
  },

  async down(db) {
    // Remove 'tasks' field of status
    await db.collection('statuses').updateMany(
      { },
      { $unset: { tasks: '' } }
    );
  },
};
