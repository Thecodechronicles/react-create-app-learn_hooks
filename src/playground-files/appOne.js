console.log('app is running !');


class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let propObj = {
            params: this.props.params,
            appInfo: this.props.appInfo
        };

        const { params, appInfo } = propObj;

        return (
            <div>
                <h1>{appInfo.title}</h1>
                {appInfo.subtitle && <p>{appInfo.subtitle}</p>}
            </div>
        );
    }
}


class Options extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let propObj = {
            params: this.props.params,
            appInfo: this.props.appInfo
        };

        const { params, appInfo } = propObj;

        // console.log(this.props.options.length);
        // console.log(this.props.options);

        return (
            <div>
                <p>{this.props.options.length > 0 ? 'Here are the options' : 'No options'}</p>
                <Option
                    // appInfo={appInfo}
                    // params={params}
                    options={this.props.options}
                    showOption={this.props.showOption}
                // optionPicked={this.props.optionPicked}
                />
            </div>
        );
    }
}

class Option extends React.Component {
    constructor(props) {
        super(props);
        this.removeItem = this.removeItem.bind(this);
        this.appInfo = this.props.appInfo;
        this.params = this.props.params;

        // this.state = {
        //     optionsList: this.props.options,
        //     showOption: this.props.showOption
        // }
    }

    removeItem(e) {

        this.props.options.splice(e.target.parentElement.id, 1);
        // this.props.showOption = false;
        // customRender();

        // e.persist();
        // this.setState((prevState) => {
        //     // console.log(prevState.optionsList.splice(e.target.parentElement.id, 1));
        //     return {
        //         optionsList: prevState.optionsList.splice(e.target.parentElement.id, 1)
        //     }
        // });

        // console.log('propsOptions: ', this.props.options);
        // console.log('stateOptions: ', this.state.optionsList);
        // this.props.options.push(11);
        // console.log('propsOptions After: ', this.props.options);
        // console.log('stateOptions After: ', this.state.optionsList);
    }

    render() {

        // console.log('propsOptions: ', this.props.options);
        // console.log('stateOptions: ', this.state.optionsList);
        // this.props.options.push(11);
        // console.log('propsOptions After: ', this.props.options);
        // console.log('stateOptions After: ', this.state.optionsList);

        let propObj = {
            params: this.props.params,
            appInfo: this.props.appInfo
        };

        const { params, appInfo } = propObj;

        return (
            <div>
                <ol>
                    {this.props.options.length > 0 && this.props.options.map((item, index) => (
                        <li key={item} id={index}>Item {item} &nbsp;
                            <button onClick={this.removeItem}>Remove Item</button>
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}

class Form extends React.Component {
    constructor(props) {
        super(props);
        // this.formHandler = this.formHandler.bind(this);
        this.appInfo = this.props.appInfo;
        // this.options = this.props.options;
        // this.showOption = this.props.showOption;
        // this.params = this.props.params;
        this.formHandler = this.props.formHandler;
    }

    render() {
        let propObj = {
            params: this.props.params,
            appInfo: this.props.appInfo
        };
        const { params, appInfo } = propObj;

        return (
            <div>
                <form onSubmit={this.formHandler}>
                    <input type="text" name="option" />
                    <button>Add Option{this.randomProp}</button>
                </form>
                <br />
            </div>
        );
    }
}

class WhatDecision extends React.Component {
    constructor(props) {
        super(props);
        // this.pickOption = this.pickOption.bind(this);
        // this.removeAllOptions = this.removeAllOptions.bind(this);
        this.params = this.props.params;
        this.appInfo = this.props.appInfo;

        // this.state = {
        //     randomNumeral: 0,
        // }
    }

    // pickOption() {
    //     var random = Math.floor(Math.random() * this.appInfo.options.length);
    //     this.params.optionPicked = this.appInfo.options[random];
    //     this.params.showOption = true;
    //     customRender();
    // }

    // removeAllOptions() {
    //     this.appInfo.options = [];
    //     this.params.showOption = false;
    //     customRender();
    // }

    render() {
        let propObj = {
            params: this.props.params,
            appInfo: this.props.appInfo
        };

        const { params, appInfo } = propObj;

        // console.log(this.constructor.name, propObj);

        return (
            <div>
                <button disabled={this.props.options.length === 0} onClick={this.props.pickOption}>What should i do ?</button>
                <button onClick={this.props.removeAllOptions}>Clear All</button>
                <br />
            </div>
        );
    }
}

// class DisplayDecision extends React.Component {
//     constructor(props) {
//         super(props);
//         this.showOption = this.props.showOption;
//         this.params = this.props.params;
//     }

//     render() {
//         let propObj = {
//             params: this.props.params,
//             appInfo: this.props.appInfo
//         };
//         const { params, appInfo } = propObj;

//         return (
//             <div>
//                 {/* {<p>Numeral: {this.state.randomNumeral}</p>} */}
//                 {this.props.showOption && <p>Here's what you can choose : {this.props.optionPicked}</p>}
//                 <br />
//             </div>
//         );
//     }
// }


//Stateless Components are defined like this
var DisplayDecision = (props) => {

    return (
        <div>
            {/* {<p>Numeral: {this.state.randomNumeral}</p>} */}
            {props.showOption && <p>Here's what you can choose : {props.optionPicked}</p>}
            <br />
        </div>
    );
}


class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let propObj = {
            params: this.props.params,
            appInfo: this.props.appInfo,
            formHandler: this.props.formHandler
        };

        const { params, appInfo, formHandler } = propObj;

        // console.log(this.constructor.name, propObj);

        return (
            <div>
                <Header appInfo={appInfo} />
                <Options
                    // appInfo={appInfo}
                    // params={params}
                    options={this.props.options}
                    showOption={this.props.showOption}
                // optionPicked={this.props.optionPicked}
                />
                <Form
                    appInfo={appInfo}
                    // options={this.props.options}
                    // showOption={this.props.showOption}
                    formHandler={formHandler}
                // params={params}
                />
                <WhatDecision
                    // appInfo={appInfo}
                    // params={params}
                    options={this.props.options}
                    pickOption={this.props.pickOption}
                    removeAllOptions={this.props.removeAllOptions}
                />
                <DisplayDecision
                    // appInfo={appInfo}
                    // params={params}
                    showOption={this.props.showOption}
                    optionPicked={this.props.optionPicked}
                />
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.params = {
            appInfo: {
                title: 'Indecision App',
                subtitle: 'This computer wil help you in decision making',
            },
        }

        this.state = {
            options: ['one', 'two'],
            showOption: false,
            optionPicked: 0
        }

        this.pickOption = this.pickOption.bind(this);
        this.removeAllOptions = this.removeAllOptions.bind(this);
        // this.formHandler = this.formHandler.bind(this);
    }

    formHandler = (e) => { // Notice that it is an arrow function.. Babel gives context to arrow functions // To be used with 'npm run build-babel-cp'
        // formHandler(e) {  // To be used with 'npm run build-babel'
        e.preventDefault();
        e.persist();
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(e.target.elements.option.value),
                showOption: false
            }
        });
        // this.options.push(e.target.elements.option.value);
        // e.target.elements.option.value = '';
        // this.showOption = false;
        console.log(this.state.options, ' ', this.showOption);
        // customRender();
    }

    pickOption() {
        console.log('inside pickOption !');
        var random = Math.floor(Math.random() * this.state.options.length);
        // console.log(random);
        this.setState((prevState) => {
            return {
                showOption: true,
                optionPicked: prevState.options[random]
            }
        })
    }

    removeAllOptions() {

        this.setState((prevState) => {
            return {
                options: [],
                showOption: false
            }
        })
    }

    render() {

        return (
            <div>
                <IndecisionApp
                    // params={this.params}
                    appInfo={this.params.appInfo}
                    options={this.state.options}
                    showOption={this.state.showOption}
                    optionPicked={this.state.optionPicked}
                    pickOption={this.pickOption}
                    removeAllOptions={this.removeAllOptions}
                    formHandler={this.formHandler}
                />
            </div>
        );
    }
}

let appRoot = document.getElementById('reactApp');

ReactDOM.render(<App />, appRoot);
