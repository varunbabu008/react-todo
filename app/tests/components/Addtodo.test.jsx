var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var Addtodo = require('Addtodo');

describe('Addtodo',()=>{
  it('should exist',() =>{
    expect(Addtodo).toExist();
  });

  it('should call onAddTodo prop with valid data',() =>{
    var todoText = 'Check mail';
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<Addtodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todoText);
  });

  it('should not call onAddTodo prop when invalid input',() =>{
    var todoText = '';
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<Addtodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled(todoText);
  });
});