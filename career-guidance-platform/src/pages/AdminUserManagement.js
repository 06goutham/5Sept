import React, { useState } from 'react';
import { Edit2, Trash2, Plus, Search } from 'lucide-react';

const AdminUserManagement = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Student',
      joinDate: '2026-01-15',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Counselor',
      joinDate: '2026-01-20',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      role: 'Student',
      joinDate: '2026-02-01',
      status: 'Active',
    },
    {
      id: 4,
      name: 'Sarah Williams',
      email: 'sarah@example.com',
      role: 'Admin',
      joinDate: '2025-12-10',
      status: 'Active',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Student',
  });

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const handleEdit = (user) => {
    setEditingId(user.id);
    setFormData({
      name: user.name,
      email: user.email,
      role: user.role,
    });
    setShowForm(true);
  };

  const handleSave = () => {
    if (editingId) {
      setUsers(
        users.map((user) =>
          user.id === editingId ? { ...user, ...formData } : user
        )
      );
    } else {
      setUsers([
        ...users,
        {
          id: Math.max(...users.map((u) => u.id), 0) + 1,
          ...formData,
          joinDate: new Date().toISOString().split('T')[0],
          status: 'Active',
        },
      ]);
    }
    setShowForm(false);
    setEditingId(null);
    setFormData({ name: '', email: '', role: 'Student' });
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin-page">
      <div className="container">
        <div className="page-header">
          <h1>User Management</h1>
          <button className="btn btn-primary" onClick={() => setShowForm(true)}>
            <Plus size={18} /> Add User
          </button>
        </div>

        <div className="search-bar">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search users by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {showForm && (
          <div className="form-panel">
            <h2>{editingId ? 'Edit User' : 'Add New User'}</h2>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Enter user name"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Enter email address"
              />
            </div>
            <div className="form-group">
              <label>Role</label>
              <select
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
              >
                <option>Student</option>
                <option>Counselor</option>
                <option>Admin</option>
              </select>
            </div>
            <div className="form-actions">
              <button className="btn btn-primary" onClick={handleSave}>
                {editingId ? 'Update User' : 'Add User'}
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                  setFormData({ name: '', email: '', role: 'Student' });
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Join Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <span className={`badge badge-${user.role.toLowerCase()}`}>
                      {user.role}
                    </span>
                  </td>
                  <td>{user.joinDate}</td>
                  <td>
                    <span className="badge badge-success">{user.status}</span>
                  </td>
                  <td>
                    <div className="actions">
                      <button
                        className="btn-icon"
                        onClick={() => handleEdit(user)}
                        title="Edit user"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        className="btn-icon btn-danger"
                        onClick={() => handleDelete(user.id)}
                        title="Delete user"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <style>{`
        .admin-page {
          padding: 40px 20px;
          background-color: #f5f5f5;
          min-height: 100vh;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .admin-page h1 {
          color: #ff9800;
          font-size: 28px;
          margin: 0;
        }

        .search-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          background: white;
          padding: 12px 20px;
          border-radius: 8px;
          margin-bottom: 30px;
          box-shadow: var(--shadow);
        }

        .search-bar input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 15px;
          max-width: none;
        }

        .form-panel {
          background: white;
          padding: 30px;
          border-radius: 8px;
          margin-bottom: 30px;
          box-shadow: var(--shadow);
        }

        .form-panel h2 {
          color: #ff9800;
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: #333;
          font-weight: 600;
        }

        .form-group input,
        .form-group select {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
          max-width: 100%;
        }

        .form-actions {
          display: flex;
          gap: 10px;
          margin-top: 25px;
        }

        .form-actions .btn {
          padding: 10px 20px;
        }

        table {
          background: white;
          box-shadow: var(--shadow);
          border-radius: 8px;
          overflow: hidden;
          width: 100%;
        }

        th {
          background-color: #fff3e0;
          color: #ff9800;
        }

        td {
          padding: 15px;
        }

        .badge {
          padding: 5px 10px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
        }

        .badge-student {
          background-color: #e8f5e9;
          color: #2c5f2d;
        }

        .badge-counselor {
          background-color: #e3f2fd;
          color: #1976d2;
        }

        .badge-admin {
          background-color: #fff3e0;
          color: #ff9800;
        }

        .badge-success {
          background-color: #e8f5e9;
          color: #388e3c;
        }

        .actions {
          display: flex;
          gap: 10px;
        }

        .btn-icon {
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          color: #ff9800;
          transition: color 0.2s ease;
        }

        .btn-icon:hover {
          color: #f57c00;
        }

        .btn-icon.btn-danger {
          color: #d32f2f;
        }

        .btn-icon.btn-danger:hover {
          color: #b71c1c;
        }

        .text-center {
          text-align: center;
          color: #999;
        }

        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }

          table {
            font-size: 12px;
          }

          td {
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminUserManagement;
