import React, { useState } from 'react';
import Notification from './Notification';

const TodoInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const [editIndex, setEditIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [notification, setNotification] = useState('');

  // function to submit todo
  const handleSubmitTodo = () => {
    // check if input is empty
    if (inputValue.length === 0) {
      setNotification('Please Enter Todo');
      setTimeout(() => {
        setNotification('');
      }, 3000);
      return;
    }

    // this if block is to update the selected to
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = inputValue;
      setTodos(updatedTodos);
      setEditIndex(null);
      setIsEditing(false);
      setNotification('Todo has been Updated');
      setTimeout(() => {
        setNotification('');
      }, 3000);
    }
    // this else block is to add new todo
    else {
      setTodos([...todos, inputValue]);
    }

    setInputValue('');
  };

  // function to edit todo
  const handleEditTodo = (index) => {
    setInputValue(todos[index]);
    setEditIndex(index);
    setIsEditing(true);
  };

  // // function to delete todo
  const handleDeleteTodo = (index) => {
    if (confirm('Are you sure you want to delete an todo')) {
      const updatedTodos = [...todos];
      updatedTodos.splice(index, 1);
      setTodos(updatedTodos);
      setNotification('Todo has been Deleted');
      setTimeout(() => {
        setNotification('');
      }, 3000);
    }
  };

  return (
    <main className='bg-white p-12 rounded-lg w-[90%] md:w-[60%] lg:w-[40%]'>
      {/* Notification component */}
      <section>
        <Notification notification={notification} />
      </section>

      {/* todo heading */}
      <p className='text-center font-bold text-2xl  pb-3 border-b border-b-gray-600'>
        Todo App
      </p>

      <section className='flex items-center gap-4 my-6'>
        {/* input for adding todo */}
        <input
          type='text'
          placeholder='Add Todo'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className='border p-2 rounded-md w-full focus:outline-none focus:border-[rgb(246,_85,_85)]'
        />
        <button
          onClick={handleSubmitTodo}
          className={`${
            isEditing ? 'bg-green-600' : 'bg-blue-500'
          } text-white font-semibold py-2 px-4 rounded-md`}
        >
          {isEditing ? 'Update' : 'Submit'}
        </button>
      </section>

      {/* todo list */}
      {todos?.map((todo, index) => (
        <section
          key={index}
          className='flex justify-between mb-5 mx-1 items-center'
        >
          {/* todo title */}
          <p className='font-semibold text-lg'>{todo}</p>

          {/* todo icons */}
          <div>
            <i
              onClick={() => handleEditTodo(index)}
              className='fa-solid fa-pen-to-square mr-5 cursor-pointer text-gray-600 hover:text-black'
            ></i>
            <i
              onClick={() => handleDeleteTodo(index)}
              className='fa-solid fa-trash cursor-pointer text-gray-600 hover:text-black'
            ></i>
          </div>
        </section>
      ))}
    </main>
  );
};

export default TodoInput;
