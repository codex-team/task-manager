module.exports = {
  async up(db) {
    db.collection('tasks').drop();
  },
  async down() {
    // How to revert?
  },
};
