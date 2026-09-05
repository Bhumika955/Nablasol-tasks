import { useState } from 'react';

function TasksStep({ formData, updateField }) {
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    const updatedTasks = [
      ...formData.tasks,
      { id: Date.now(), text: newTask, checked: false },
    ];
    updateField('tasks', updatedTasks);
    setNewTask('');
  };

  const removeTask = (id) => {
    const updatedTasks = formData.tasks.filter((task) => task.id !== id);
    updateField('tasks', updatedTasks);
  };

  const toggleTask = (id) => {
    const updatedTasks = formData.tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    updateField('tasks', updatedTasks);
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-6">Tasks</h2>

      <div className="mb-4">
        <label className="block font-medium mb-1">Add a task</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
            placeholder="Add task"
            className="border border-blue-400 rounded px-3 py-2 flex-1"
          />
          <button
            type="button"
            onClick={addTask}
            className="bg-blue-600 text-white px-4 py-2 rounded font-medium"
          >
            Add
          </button>
        </div>
      </div>

      <div className="max-h-64 overflow-y-auto">
        {formData.tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between py-2 border-b"
          >
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={task.checked}
                onChange={() => toggleTask(task.id)}
              />
              <span className={task.checked ? 'line-through text-gray-400' : ''}>
                {task.text}
              </span>
            </label>
            <button
              type="button"
              onClick={() => removeTask(task.id)}
              className="text-gray-400 hover:text-red-500"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TasksStep;