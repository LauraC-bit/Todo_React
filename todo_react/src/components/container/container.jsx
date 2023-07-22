import './container.scss';
import Main from '../main/main.jsx';


function App() {
  return (
    <div className="container">
      <header className="container-header">
       <h1 className="h1-style">ToDoList !</h1>
      </header>
      <main>
        <Main />
      </main>
    </div>
  );
}

export default App;
