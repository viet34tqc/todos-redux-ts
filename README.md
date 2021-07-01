# Content

## Requirements

- An input allows you to add todo
- List of todos
- Delete todo item, complete todo, categorize todo by color
- Mark all todos to be completed, clear completed todos
- Filter by status
- Filter by color
- Display active todo

## Components

    - Header: a big header with static text
    - Form: input for adding todo
    - TodoList
    - TodoItem:
        - Button to mark completed
        - Name
        - Select color
        - Button to delete
    - Footer
        - 2 buttons
            - Mark all completed
            - Clear all completed todos
        - Display remaining todos
        - Filter by status
        - Filter by color

## Steps

- Create a todoSlices, export todosReducer
- Pass todosReducer to the store
- TodoState structure: {
    status: 'idle'
    entities: {
        todoId: todoObject
    }
}
- Reducer
  - fetchTodos:
    - create thunk to Get todos from fakeApi and pass into entities
