import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <>
      <div className='flex h-screen w-screen bg-slate overflow-hidden items-center justify-center'>
        <div className='todo-box'>
          <div className='add-todo'>
            <h1>ReduxToolKitTodo</h1>
            <AddTodo />
          </div>
          <div className='todo-list'>
            <Todos />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
