import { useState } from 'react';
import Modal from './Modal'
import BackDrop from './BackDrop'

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler() {
        console.log('Clicked!')
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    function confirmModalHandler() {
        setModalIsOpen(false);
    }

    return (
        <div>
            <h3>{props.text}</h3>
            <div>
                <button onClick={deleteHandler}>Delete</button>
                {/* <button onClick={() => { }}>Delete</button> */}
                {/* <button onClick={function () { }}>Delete</button> */}
            </div>
            {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={confirmModalHandler} />}
            {modalIsOpen && <BackDrop onCancel={closeModalHandler} />}
        </div >
    );
}

export default Todo;
