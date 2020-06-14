'use strict';

module.exports = function(app) {
  const router = require('./router');
  const todoList = require('../controllers/todoListController');

  app.use('/api/v1', router);
  // todoList Routes
  app
    .route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);

  app
    .route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
};
