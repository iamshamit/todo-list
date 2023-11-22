import React, { useState, useEffect } from 'react';

function TodoItems({ todo, onDelete }) {
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    const storedCheckedState = localStorage.getItem(`todo-${todo.sno}-checked`);
    setChecked(storedCheckedState === 'true');
  }, [todo.sno]);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    localStorage.setItem(`todo-${todo.sno}-checked`, (!isChecked).toString());
  };

  return (
    <div className='container my-5 border border-primary p-3 rounded'>
      <div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="form-check-input mb-3"
        />
      </div>
      <p style={{ fontSize: '14px', textDecoration: isChecked ? 'line-through' : 'none' }}>{todo.createdAt}</p>
      <h4 className='my-3' style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>{todo.title}</h4>
      <p className='my-3' style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>{todo.desc}</p>
      <button className="btn btn-sm btn-danger my-2" onClick={() => { onDelete(todo) }}>Delete</button>
    </div>
  );
}

export default TodoItems;
