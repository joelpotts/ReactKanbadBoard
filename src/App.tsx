import React from 'react';
import './App.css';

// My Components
import Swimlane from './components/Swimlane'

type Column = {
  columnTitle: string,
  columnId: string
}

const App = () => {
  const columns: Column[] = [
    {"columnTitle": "To Do", "columnId": "todo"},
    {"columnTitle": "In Progress", "columnId": "inprogress"},
    {"columnTitle": "Done", "columnId": "done"},
  ]
  return (
    <div className="App">
      <header className="title">
        <h1>Simple Kanban Board</h1>
      </header>
      <body>
        <div className="container">
          <Swimlane columns={columns}/>
        </div>
      </body>
    </div>
  );
}

export default App;
