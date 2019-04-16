import React, { PureComponent } from 'react';
import { Button, Card, Input, Icon, Form, Container } from 'semantic-ui-react'

export default class ToDoPage extends PureComponent {
  constructor() {
    super();
    this.state = {
      todos: [{
        text: 'Make a new To Do!'
      }],
      todoText: '',
    }
    this.handleUpdateTodoText = this.handleUpdateTodoText.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    this.renderTodoCard = this.renderTodoCard.bind(this);
    this.renderTodoCards = this.renderTodoCards.bind(this);
  }

  handleAddTodo() {
    const newTodo = {
      text: this.state.todoText,
    };
    let todos = this.state.todos;
    todos.push(newTodo);
    this.setState({
      todos,
      todoText: '',
    });
  }

  handleDeleteTodo(todo) {
    const todoText = todo[text];
    this.setState({
      todos: this.state.todos.filter((stateTodo) => stateTodo.text !== todoText),
    });
  }

  handleUpdateTodoText(e) {
    this.setState({
      todoText: e.target.value,
    })
  }

  renderTodoCard(todo, index) {
    return (
      <Card key={index}>
        <Card.Content>
          <Card.Header>TODO</Card.Header>
          <Card.Description>{todo.text}</Card.Description>
          <Button icon color="red" onClick={() => this.handleDeleteTodo(todo)}>
            <Icon floated='right' name='delete' />
          </Button>
        </Card.Content>
      </Card>
    );
  }

  renderTodoCards() {
    return this.state.todos.map(this.renderTodoCard);
  }

  renderAddTodoSection() {
    return (
      <div style={{
        maxWidth: '400px',
      }}>
        <Form>
          <Form.Field>
            <Input onChange={this.handleUpdateTodoText} value={this.state.todoText} />
          </Form.Field>
          <Form.Field>
            {this.renderAddTodoButton()}
          </Form.Field>
        </Form>
      </div>
    );
  }

  renderAddTodoButton() {
    return (
      <Button primary onClick={this.handleAddTodo} disabled={!this.state.todoText}>
        <Icon name='plus' /> Add To-Do
      </Button>
    );
  }

  render() {
    return (
      <Container>
        {this.renderAddTodoSection()}
        {this.renderTodoCards()}
      </Container>
    );
  }
};
