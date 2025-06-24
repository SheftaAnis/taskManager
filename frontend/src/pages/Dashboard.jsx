import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import TaskCard from '../components/TaskCard';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [refresh, setRefresh] = useState(false);

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/tasks`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setTasks(res.data);
    } catch (error) {
      console.error(error);
      alert('Error fetching tasks');
    }
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/tasks`,
        { title },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setTitle('');
      setRefresh((prev) => !prev); // trigger re-fetch
    } catch (error) {
      console.error(error);
      alert('Error creating task');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [refresh]);

  const groupedTasks = {
    'To Do': [],
    'In Progress': [],
    'Done': [],
  };

  tasks.forEach((task) => {
    groupedTasks[task.status].push(task);
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200">
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <form
          onSubmit={handleAddTask}
          className="flex flex-col sm:flex-row gap-4 mb-8 bg-white p-4 rounded shadow-md"
        >
          <input
            type="text"
            className="border border-gray-300 p-2 rounded flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">
            Add Task
          </button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['To Do', 'In Progress', 'Done'].map((status) => (
            <div key={status} className="bg-white rounded shadow p-4">
              <h2 className="text-xl font-bold text-blue-700 border-b pb-2 mb-4">
                {status}
              </h2>
              <div className="space-y-4">
                {groupedTasks[status].map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onStatusChange={() => setRefresh((prev) => !prev)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
