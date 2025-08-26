import React, { useState, useEffect } from "react";
import { Pencil, Trash2 } from "lucide-react";
import "./TodoList.css";

interface Job {
  id: string;
  name: string;
  isComplete: boolean;
}

export default function TodoList() {
  const [jobs, setJobs] = useState<Job[]>(() => {
    const saved = localStorage.getItem("jobs");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!input.trim()) {
      setError("Tên công việc không được để trống");
      return;
    }

    if (jobs.some((j) => j.name.toLowerCase() === input.toLowerCase())) {
      setError("Tên công việc đã tồn tại");
      return;
    }

    const newJob: Job = {
      id: Date.now().toString(),
      name: input.trim(),
      isComplete: false,
    };

    setJobs([...jobs, newJob]);
    setInput("");
  };

  const handleToggle = (id: string) => {
    setJobs(
      jobs.map((j) =>
        j.id === id ? { ...j, isComplete: !j.isComplete } : j
      )
    );
  };

  const handleDelete = (id: string) => {
    setDeleteId(id);
  };

  const confirmDelete = () => {
    if (deleteId) {
      setJobs(jobs.filter((j) => j.id !== deleteId));
      setDeleteId(null);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleAdd}>
        <h3>Danh sách công việc</h3>
        <div className="input-container">
          <input
            type="text"
            placeholder="Nhập tên công việc"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Thêm</button>
        </div>
        {error && <p className="error">{error}</p>}
      </form>

      <div className="job-container">
        {jobs.map((job) => (
          <div className="job" key={job.id}>
            <input
              type="checkbox"
              checked={job.isComplete}
              onChange={() => handleToggle(job.id)}
            />
            <span className={job.isComplete ? "done" : ""}>{job.name}</span>
            <div className="icon-container">
              <Pencil />
              <Trash2 onClick={() => handleDelete(job.id)} />
            </div>
          </div>
        ))}
      </div>

      <p>
        Công việc đã hoàn thành: {jobs.filter((j) => j.isComplete).length} /{" "}
        {jobs.length}
      </p>

      {deleteId && (
        <div className="modal-overlay">
          <div className="modal">
            <h4>Xác nhận</h4>
            <p>
              Bạn có chắc chắn muốn xóa công việc:{" "}
              <b>{jobs.find((j) => j.id === deleteId)?.name}</b> ?
            </p>
            <div className="modal-actions">
              <button onClick={() => setDeleteId(null)}>Hủy</button>
              <button onClick={confirmDelete} className="danger">
                Đồng ý
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}