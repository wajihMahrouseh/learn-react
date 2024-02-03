function Todo(props) {
    return (
        <div>
            <h3>{props.text}</h3>
            <div>
                <button>Delete</button>
            </div>
        </div>
    );
}

export default Todo;
