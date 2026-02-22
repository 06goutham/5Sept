import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Search } from 'lucide-react';

const AdminCareerResources = () => {
  const [careers, setCareers] = useState([
    {
      id: 1,
      title: 'Software Engineer',
      category: 'Technology',
      salary: '$80K - $150K',
      demand: 'Very High',
      created: '2026-01-15',
    },
    {
      id: 2,
      title: 'Data Scientist',
      category: 'Technology',
      salary: '$90K - $160K',
      demand: 'High',
      created: '2026-01-20',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    salary: '',
    demand: '',
  });

  const handleDelete = (id) => {
    if (window.confirm('Delete this career?')) {
      setCareers(careers.filter((c) => c.id !== id));
    }
  };

  const handleSave = () => {
    if (editingId) {
      setCareers(
        careers.map((c) => (c.id === editingId ? { ...c, ...formData } : c))
      );
    } else {
      setCareers([
        ...careers,
        {
          id: Math.max(...careers.map((c) => c.id), 0) + 1,
          ...formData,
          created: new Date().toISOString().split('T')[0],
        },
      ]);
    }
    setShowForm(false);
    setEditingId(null);
    setFormData({ title: '', category: '', salary: '', demand: '' });
  };

  const filteredCareers = careers.filter((c) =>
    c.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin-page">
      <div className="container">
        <div className="page-header">
          <h1>Career Resources Management</h1>
          <button className="btn btn-primary" onClick={() => setShowForm(true)}>
            <Plus size={18} /> Add Career
          </button>
        </div>

        <div className="search-bar">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search careers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {showForm && (
          <div className="form-panel">
            <h2>{editingId ? 'Edit Career' : 'Add New Career'}</h2>
            <div className="form-group">
              <label>Career Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Salary Range</label>
              <input
                type="text"
                value={formData.salary}
                onChange={(e) =>
                  setFormData({ ...formData, salary: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Market Demand</label>
              <select
                value={formData.demand}
                onChange={(e) =>
                  setFormData({ ...formData, demand: e.target.value })
                }
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Very High</option>
              </select>
            </div>
            <div className="form-actions">
              <button className="btn btn-primary" onClick={handleSave}>
                {editingId ? 'Update' : 'Add'} Career
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                  setFormData({ title: '', category: '', salary: '', demand: '' });
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
              <th>Career Title</th>
              <th>Category</th>
              <th>Salary Range</th>
              <th>Market Demand</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCareers.map((career) => (
              <tr key={career.id}>
                <td>{career.title}</td>
                <td>{career.category}</td>
                <td>{career.salary}</td>
                <td>
                  <span className="badge badge-success">{career.demand}</span>
                </td>
                <td>{career.created}</td>
                <td>
                  <div className="actions">
                    <button
                      className="btn-icon"
                      onClick={() => {
                        setEditingId(career.id);
                        setFormData(career);
                        setShowForm(true);
                      }}
                    >
                      <Edit2 size={18} />
                    </button>
                    <button
                      className="btn-icon btn-danger"
                      onClick={() => handleDelete(career.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style>{`
        .admin-page {
          padding: 40px 20px;
          background-color: #f5f5f5;
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
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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

        table {
          background: white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          overflow: hidden;
          width: 100%;
        }

        th {
          background-color: #fff3e0;
          color: #ff9800;
          padding: 15px;
          text-align: left;
          font-weight: 600;
        }

        td {
          padding: 12px 15px;
          border-bottom: 1px solid #eee;
        }

        .badge {
          padding: 5px 10px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
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
      `}</style>
    </div>
  );
};

export default AdminCareerResources;
