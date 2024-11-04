import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const App = () => {
  const [filter, setFilter] = useState('all');
  const tasks = []; // This should be replaced with the actual tasks from your state

  const filteredTasks = tasks.filter(task => {
    if (filter === 'done') return task.isDone;
    if (filter === 'not_done') return !task.isDone;
    return true; // 'all'
  });

  return (
    <Provider store={store}>
      <div>
        <h1>ToDo App</h1>
        <AddTask />
        <TaskList tasks={filteredTasks} />
        <div>
          <button onClick={() => setFilter('all')}>All</button>
          <button onClick={() => setFilter('done')}>Done</button>
          <button onClick={() => setFilter('not_done')}>Not Done</button>
        </div>
      </div>
    </Provider>
  );
};

export default App;
