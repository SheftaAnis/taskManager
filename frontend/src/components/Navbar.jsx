import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <Link to="/dashboard" className="text-xl font-bold text-white">Task Manager</Link>
      <div className="space-x-4">
        <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
        <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">Logout</button>
      </div>
    </nav>
  );
}
