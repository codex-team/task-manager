const statusLabels = ['Unsorted', 'To do', 'In progress', 'Done'];

module.exports = {
  async up(db) {
    const projects = await db.collection('projects').find()
      .toArray();

    for (const project of projects) {
      for (const label of statusLabels) {
        const query = {
          label,
          projectId: project._id,
        };

        await db.collection('statuses').findOneAndUpdate(query, {
          $set: query,
        }, {
          upsert: true,
          returnNewDocument: true,
        });

        if (label === 'Unsorted') {
          const status = await db.collection('statuses').findOne(query);

          await db.collection('tasks').updateMany(
            { projectId: project._id },
            { $set: { statusId: status._id } }
          );
        }
      }
    }
  },

  async down(db) {
    await db.collection('statuses').drop();
    await db.collection('tasks').updateMany(
      { },
      { $unset: { statusId: '' } }
    );
  },
};
