import React from 'react';

function App() {
  const Task = (value) => {
    return (
      <li>{value}</li>
    );
  }

  const arrayTasks = [
    {
      id: 1,
      titulo: "learn React",
    },
    {
      id: 2,
      titulo: "Use Scrum/Kanban Agile Methodologies",
    },
    {
      id: 3,
      titulo: "Create projects with React",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {
            arrayTasks.map(activities => {
              return (
                Task(activities.titulo)
              )
            })
          }
        </ul>
      </header>
    </div>
  );

}

export default App;
