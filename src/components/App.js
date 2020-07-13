import React, {Component} from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput/TodoInput.js';

//import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  render() {
    return (
      <PageTemplate>
        <TodoInput/>
      </PageTemplate>
    );
  }
}


export default App;
