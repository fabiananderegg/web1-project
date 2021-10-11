import './App.css';
import {AppBar} from './AppBar'
import {AppBody} from './AppBody'
import {TaskInput} from './TaskInput'
import {Task} from './Task'

function App() {

  return (
    <div className="App">
      <AppBar> Todo App </AppBar>
      <AppBody>
        <TaskInput/>
        <div className="Task-list">
          <Task>Input Text</Task>
        </div>
      </AppBody>
    </div>
  );
}

export default App;
