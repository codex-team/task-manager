/**
 * Adds sample workspace
 */
module.exports = {
  async up(db) {
    // Create a sample workspace named 'CodeX Tasks'
    await db.collection('workspace').insertOne({ name: 'CodeX Tasks' });
  },

  async down(db) {
    // Remove a sample workspace
    await db.collection('workspaces').findOneAndDelete({});
  },
};
