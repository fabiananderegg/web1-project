import React from 'react';
import './App.css';
import { Header } from './Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App-body">
          <div className="Task-input">
            <div className="Task-input-text">
              <input className="Inp-input-text" type="text">

              </input>
              <button className="Btn-confirm-input">
                Hinzufügen
              </button>
            </div>
            <div className="Task-input-filter">
              <input className="Cb-filter-tasks" type="checkbox"/>
              <div> Alle anzeigen</div>
            </div>
          </div>
          <div className="Task-list">
            <div className="firstTask">
              <input className="Cb-first-task" type="checkbox"/>
              <button className="Btn-first-task-one"> </button>
              <div>Input text</div>
              <button> Löschen </button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
