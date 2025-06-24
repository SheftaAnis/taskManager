const { Task } = require("../models");

// GET /api/tasks → Get all tasks for logged-in user
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      where: { user_id: req.user.id },
      order: [["createdAt", "DESC"]],
    });
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch tasks" });
  }
};

// POST /api/tasks → Create new task
const createTask = async (req, res) => {
  const { title } = req.body;
  try {
    const task = await Task.create({
      title,
      user_id: req.user.id,
    });
    res.status(201).json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create task" });
  }
};

// PUT /api/tasks/:id → Update task status
const updateTask = async (req, res) => {
  const { id } = req.params;
  const { status, title } = req.body;

  try {
    const task = await Task.findOne({ where: { id, user_id: req.user.id } });

    if (!task) return res.status(404).json({ message: "Task not found" });

    if (status) task.status = status;
    if (title) task.title = title;

    await task.save();

    res.json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update task" });
  }
};


// DELETE /api/tasks/:id
const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Task.destroy({
      where: { id, user_id: req.user.id },
    });

    if (deleted === 0) return res.status(404).json({ message: "Task not found" });

    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete task" });
  }
};




module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
