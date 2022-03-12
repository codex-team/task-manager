/**
 * Adds sample workspace
 */
module.exports = {
  async up(db) {
    // Create a sample workspace named 'CodeX Tasks'
    await db.collection('workspaces').insertOne({ name: 'CodeX Tasks' });

    // Get a sample workspace
    const workspace = await db.collection('workspaces').findOne();

    // Assign workspaceId into projects
    await db.collection('projects').updateMany(
      {},
      { $set: { workspaceId: workspace._id } }
    );

    // Assign workspaceId into teammates
    await db.collection('teammates').updateMany(
      {},
      { $set: { workspaceId: workspace._id } }
    );
  },

  async down(db) {
    // Change workspaceId to null
    await db.collection('projects').updateMany(
      {},
      { $set: { workspaceId: null } }
    );

    // Change workspaceId to null
    await db.collection('teammates').updateMany(
      {},
      { $set: { workspaceId: null } }
    );

    // Remove a sample workspace
    await db.collection('workspaces').findOneAndDelete({});
  },
};
