import { useState } from 'react';

function App() {
    const [toDo, setToDo] = useState('');
    const [toDos, setToDos] = useState([]); // ['a', 'b', 'c']
    const onChange = (event) => {
        setToDo(event.target.value);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === '') {
            return;
        }
        setToDos((prevArray) => [...prevArray, toDo]);
        setToDo('');
    };

    return (
        <div>
            <h1>To Do List ({toDos.length})</h1>
            <form onSubmit={onSubmit} action="">
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="Write your to do..."
                />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
