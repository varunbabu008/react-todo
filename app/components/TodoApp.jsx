var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState:function(){
      return{
        showCompleted: false,
        searchText: '',
        todos:[
          {
            id: 1,
            text:'walk the dog'
          },
          {
            id: 2,
            text: 'Clean the yard'
          },
          {
            id: 3,
            text: 'Polish the shoes'
          },
          {
            id: 4,
            text: 'Do the dishes'
          }
        ]
      };
    },
    handleAddTodo: function(text){
      alert('new todo:'+ text);
    },
    handleSearch: function(showCompleted,searchText){
      this.state({
        showCompleted: showCompleted,
        searchText: searchText.toLowerCase()
      })

    },
  render: function(){
    var{todos} = this.state;
    return(
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
      )
    
  }
});

module.exports = TodoApp;