import ReactDOM from 'react-dom';
import NotesApp from './components/NotesApp';
// import 'normalize.css/normalize.css'
// import './styles/styles.scss'

console.log('app is running !');

let appRoot = document.getElementById('reactApp');
ReactDOM.render(<NotesApp />, appRoot);
