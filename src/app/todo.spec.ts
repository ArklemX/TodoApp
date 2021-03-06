import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let todo = new Todo({
      title: 'title',
      completed: true
    });
    expect(todo.title).toEqual('title');
    expect(todo.completed).toEqual(true);
  });
});
