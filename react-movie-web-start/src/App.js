import { useState, useEffect } from 'react';

function Hello() {
    function byFn() {
        console.log('destroy : (');
    }
    function hiFn() {
        console.log('create : )');
        return byFn;
    }
    useEffect(hiFn, []);

    return <div>Hello</div>;
}

function App() {
    const [showing, setShowing] = useState(false);

    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={() => setShowing((prev) => !prev)}>
                {showing ? 'Hide' : 'Show'}
            </button>
        </div>
    );
}

export default App;
