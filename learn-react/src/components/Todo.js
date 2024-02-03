function Todo(props) {
    function deleteHandler() {
        console.log('Clicked!')
    }

    return (
        <div>
            <h3>{props.text}</h3>
            <div>
                <button onClick={deleteHandler}>Delete</button>
                {/* <button onClick={() => { }}>Delete</button> */}
                {/* <button onClick={function () { }}>Delete</button> */}
            </div>
        </div >
    );
}

export default Todo;
