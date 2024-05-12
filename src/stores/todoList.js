import {defineStore} from "pinia";

export const useTodoListStore = defineStore('todoList', {
  // state
  state: () => ({
    todoList: [], id: 0
  }),
  // getters
  // setters
  actions: {
    addTodo(item) {
      this.todoList.push({item, id: this.id++, completed: false});
    },
    deleteTodo(itemId) {
      this.todoList = this.todoList.filter((object) => {
        return object.id !== itemId;
      });
    },
    toggleCompleted(itemId) {
      const todo = this.todoList.find((obj) => obj.id === itemId);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
});
