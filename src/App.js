import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import TodoForm from "./TodoForm";
import TodoList from "./toDoList";


/**
  Componentes en React
  1.- Stateful Components
    - Classes
    - State
    - Lifecycle Methods

  2.- Stateless Components (Functional Components):
    -Fuctions
    -No State
    -No Lifecycles Methods
 **/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      todos: []
    };
  }

  updateValue = event => {
    // this.state.value = value;
    this.setState({ value: event.target.value });
  };
  saveTodo = () => {
    if (this.state.value) {
      const todos = this.state.todos;
      todos.push({
        value: this.state.value,
        completed: false
      });
      this.setState({ todos });
      this.clearValue();
    }
  };

  deleteTodo = index => {
    const todos = this.state.todos;
    todos.splice(index, 1)
    this.setState({todos})

  }

  clearValue = () => {
    this.setState({
      value: ""
    });
  };

  toggleCompleted = index => {
    const todos = this.state.todos; 
    todos[index].completed = !todos[index].completed
    this.setState({todos})
  }

  render() {
    console.log(this.state);

    return (
      <React.Fragment>
        <Typography variant="h5" align="center" gutterBottom>
          ToDo App
        </Typography>
        <Grid container justify = "center" gutterBottom>
        <Grid item></Grid>
        < TodoForm 
        value={this.state.value} 
        updateValue={this.updateValue} 
        saveTodo={this.saveTodo} />
        </Grid>
        <Grid container justify = "center">
        <Grid item md={8}>
          <TodoList todos = {this.state.todos} deleteTodo = {this.deleteTodo} toggleCompleted = {this.toggleCompleted} />
          </Grid>
        </Grid>
      </React.Fragment>
    ); // JSX
  }
}

export default App;
