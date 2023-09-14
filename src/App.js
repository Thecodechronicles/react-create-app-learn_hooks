import React from "react";
import { useState } from "react";

// function App() {
//     console.log('useState');
//     // console.log('useState', useState);
//     const [state, setState] = useState('');
//     const appInner = () => {
//         setState('Again !!');
//         console.log('appInner working !');
//     }

//     // var ElementObject = React.createElement(
//     //     'div',
//     //     { onSubmit: 'this.formHandler' },
//     //     React.createElement(
//     //         'form',
//     //         null,
//     //         React.createElement('input', { type: 'text', name: 'option' }),
//     //         React.createElement(
//     //             'button',
//     //             null,
//     //             'Add Option',
//     //             'this.randomProp'
//     //         )
//     //     ),
//     //     React.createElement('br', null)
//     // );

//     // console.log('ElementObject: ', ElementObject);

//     return (
//         <div>
//             <h2 onClick={appInner}>Hi ! Let's just get started {state}</h2>
//         </div>
//     );
// }

// export default App;






// Interview Ques: Webkul
// Solution 1
// codesandbox: https://codesandbox.io/s/great-haibt-vlz6j7?file=/src/App.js (login: github)

// import "./styles.css";
// import { useState, useRef, useEffect } from "react";

// function useAPI() {
//     const dummyObject = {};
//     const [obj, setState] = useState({ title: "ankit" });
//     const valueObject = useRef();

//     if (valueObject.current === "iPhone 9") {
//         console.log("Title: ", valueObject.current);
//     } else {
//         console.log("No Record !");
//     }

//     useEffect(() => {
//         fetch("https://dummyjson.com/products").then((response) => {
//             response.json().then((data) => {
//                 // console.log("data: ", data.products[0].title);
//                 dummyObject.title = data.products[0].title;
//                 valueObject.current = dummyObject.title;
//                 setState({ title: dummyObject.title });
//             });
//         });
//     }, []);
//     return obj;
// }

// export default function App() {
//     const value = useAPI();
//     return (
//         <div className="App">
//             <h1>Hello {value.title}</h1>
//             <h2>Start editing to see some magic happen!</h2>
//         </div>
//     );
// }






// Solution 2
// import "./styles.css";
// import { useState, useRef } from "react";

// function useAPI() {
//     const [obj, setState] = useState({ title: "ankit" });
//     const valueObject = useRef();

//     if (valueObject.current === "iPhone 9") {
//         console.log("Title: ", valueObject.current);
//         return obj;
//     } else {
//         console.log("No Record !");
//     }

//     fetch("https://dummyjson.com/products").then((response) => {
//         response.json().then((data) => {
//             valueObject.current = data.products[0].title;
//             setState({ title: valueObject.current });
//         });
//     });
//     return obj;
// }

// export default function App() {
//     const value = useAPI();
//     return (
//         <div className="App">
//             <h1>Hello {value.title}</h1>
//             <h2>Start editing to see some magic happen!</h2>
//         </div>
//     );
// }




// Solution 3
// import "./styles.css";
// import { useState } from "react";

// function useAPI() {
//     const [obj, setState] = useState({ title: "ankit" });

//     if (obj.title === "iPhone 9") {
//         console.log("Title: ", obj.title);
//         return obj;
//         // return;
//     } else {
//         console.log("No Record !");
//     }

//     fetch("https://dummyjson.com/products").then((response) => {
//         response.json().then((data) => {
//             setState({ title: data.products[0].title });
//         });
//     });
//     return obj;
// }

// export default function App() {
//     const value = useAPI();
//     return (
//         <div className="App">
//             <h1>Hello {value.title}</h1>
//             <h2>Start editing to see some magic happen!</h2>
//         </div>
//     );
// }



// solution 4
// import "./styles.css";
// import { useState, useRef } from "react";

// function useAPI() {
//     const [obj, setState] = useState({ title: "ankit" });
//     const valueObject = useRef();

//     if (valueObject.current ? valueObject.current.title : false) {
//         console.log("Title: ", obj.title);
//         return obj;
//     } else {
//         console.log("No Record !");
//     }

//     fetch("https://dummyjson.com/products").then((response) => {
//         response.json().then((data) => {
//             valueObject.current = {};
//             valueObject.current.title = data.products[0].title;
//             setState({ title: data.products[0].title });
//         });
//     });
//     return obj;
// }

// export default function App() {
//     const value = useAPI();
//     return (
//         <div className="App">
//             <h1>Hello {value.title}</h1>
//             <h2>Start editing to see some magic happen!</h2>
//         </div>
//     );
// }



//Solution 5.1
// export default function App() {
//     const [obj, setState] = useState({ title: "ankit" });
//     let value = obj;
//     const api = "https://dummyjson.com/products";
//     const pageArr = [1, 2, 3, 4, 5];

//     useEffect(() => {
//         fetch(api).then((response) => {
//             response.json().then((data) => {
//                 setState({ title: data.products[0].title });
//             });
//         });
//     }, []);

//     const callApi = (event) => {
//         fetch(api + "/" + event.target.value).then((response) => {
//             response.json().then((data) => {
//                 setState({ title: data.title });
//             });
//         });
//     };

//     return (
//         <div className="App">
//             <h1>Hello {value.title}</h1>
//             <h2>Start editing to see some magic happen!</h2>
//             {pageArr.map((element) => {
//                 return (
//                     <button key={element} value={element} onClick={callApi}>
//                         {element}
//                     </button>
//                 );
//             })}
//         </div>
//     );
// }




// solution 5.2
export default function App() {
    const [obj, setState] = useState({ title: "ankit" });
    const api = "https://dummyjson.com/products";
    const pageArr = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetch(api).then((response) => {
            response.json().then((data) => {
                setState({ title: data.products[0].brand });
            });
        });
    }, []);

    const callApi = (event) => {
        fetch(api + "/" + event.target.value).then((response) => {
            response.json().then((data) => {
                setState({
                    title: data.title,
                    image: data.thumbnail,
                    description: data.description
                });
            });
        });
    };

    return (
        <div className="App">
            <h1>Hello {obj.title}</h1>
            <img alt={obj.description} src={obj.image} />
            <h2>Start editing to see some magic happen!</h2>
            {/* {pageArr.map((element) => {
                return (
                    <button key={element} value={element} onClick={callApi}>
                        {element}
                    </button>
                );
            })} */}
            {[<button key='1' value={element} onClick={callApi}>
                {element}
            </button>,
            <button key={element} value={element} onClick={callApi}>
                {element}
            </button>,
            <button key={element} value={element} onClick={callApi}>
                {element}
            </button>]}
        </div>
    );
}
