import Todo from './Todo'

function TodoApp() {
    return (
        <header className="App-header">
            <h1>Learn React</h1>
            <div>
                <h2>My Todo</h2>
                <Todo text="learn react" />
            </div>
        </header>
    )
}

export default TodoApp