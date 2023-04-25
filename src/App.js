import React from "react";
import { useState } from "react";

function App() {
    console.log('useState');
    // console.log('useState', useState);
    const [state, setState] = useState('');
    const appInner = () => {
        setState('Again !!');
        console.log('appInner working !');
    }

    // var ElementObject = React.createElement(
    //     'div',
    //     { onSubmit: 'this.formHandler' },
    //     React.createElement(
    //         'form',
    //         null,
    //         React.createElement('input', { type: 'text', name: 'option' }),
    //         React.createElement(
    //             'button',
    //             null,
    //             'Add Option',
    //             'this.randomProp'
    //         )
    //     ),
    //     React.createElement('br', null)
    // );

    // console.log('ElementObject: ', ElementObject);

    return (
        <div>
            <h2 onClick={appInner}>Hi ! Let's just get started {state}</h2>
        </div>
    );
}

export default App;