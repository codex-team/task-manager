module.exports = {
  async up(db, client) {
    const groups =  db.collection('tasks').aggregate([
      { $group: { _id: 'projectId' } },
      { $sort: { _id: 'dateCreated' } },
      // { $set: { orderScore: 1 } },
    ]);

    // console.log(groups.pretty());

    const filter = {};
    const updateParams = {
      $set: { orderScore: { } },
    };

    return db.collection('tasks').updateMany(filter, updateParams);
    // return groups;

    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  },
};
