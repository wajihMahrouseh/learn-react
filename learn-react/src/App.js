import Todo from './components/Todo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Learn React</h1>
        <div>
          <h2>My Todo</h2>
          <Todo text="learn react" />
        </div>
      </header>
    </div>
  );
}

export default App;
