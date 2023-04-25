"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _reactDom = _interopRequireDefault(require("react-dom"));
var _App = _interopRequireDefault(require("./App"));
var _jsxRuntime = require("react/jsx-runtime");
// import React from 'react';

// import 'normalize.css/normalize.css'
// import './styles/styles.scss'
console.log('app is running !');

// function App() {
//     console.log('useState', useState);
//     const [state, setState] = useState('');
//     const appInner = () => {
//         setState('Again !!!!');
//         console.log('appInner working !');
//     }
//     return (
//         <div>
//             <h2 onClick={appInner}>Hi ! Let's just get started {state}!</h2>
//         </div>
//     );
// }

var NotesApp = function NotesApp() {
  // console.log('localNotes: ', JSON.stringify(localStorage.getItem('notes')));
  // console.log('localNotes: ', typeof localStorage.getItem('notes'));
  var localNotes = localStorage.getItem('notes') === '[]' ? null : JSON.parse(localStorage.getItem('notes'));
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    title = _useState2[0],
    setTitle = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    body = _useState4[0],
    setBody = _useState4[1];
  var _useState5 = (0, _react.useState)(localNotes || []),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    notes = _useState6[0],
    setNotes = _useState6[1];
  var addNotes = function addNotes(e) {
    e.preventDefault();
    setNotes([].concat((0, _toConsumableArray2["default"])(notes), [{
      title: title,
      body: body
    }]));
    setTitle('');
    setBody('');
  };
  var removeNotes = function removeNotes(title) {
    var retainedNotes = notes.filter(function (note) {
      return note.title !== title;
    });
    setNotes(retainedNotes);
  };
  (0, _react.useEffect)(function () {
    console.log('Hi ! Inside NotesApp');
    // localStorage.setItem('notes', JSON.stringify(notes));
  });

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
      children: "Notes"
    }), notes.map(function (note) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(Notes, {
        note: note,
        removeNote: removeNotes
      })
      // <div>
      //     <h3>{note.title}</h3>
      //     <p>{note.body}</p>
      //     <button onClick={(e) => {
      //         // e.preventDefault();
      //         removeNotes(note.title);
      //     }}>Remove Notes</button>
      // </div>
      ;
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("form", {
      onSubmit: addNotes,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          value: "{title}",
          onChange: function onChange(e) {
            return setTitle(e.target.value);
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", {
          value: body,
          onChange: function onChange(e) {
            return setBody(e.target.value);
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          children: "Add Notes"
        })]
      })
    })]
  });
};
var Notes = function Notes(_ref) {
  var note = _ref.note,
    removeNote = _ref.removeNote;
  (0, _react.useEffect)(function () {
    console.log('Hi ! Inside Notes');
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
      children: note.title
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      children: note.body
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      onClick: function onClick(e) {
        // e.preventDefault();
        removeNote(note.title);
      },
      children: "Remove Notes"
    })]
  });
};
var appRoot = document.getElementById('reactApp');
_reactDom["default"].render( /*#__PURE__*/(0, _jsxRuntime.jsx)(NotesApp, {}), appRoot);
