 import { create } from "zustand";

export const useTodoStore = create((set) => ({
  todo: [],
  addTodo: (data) =>
    set((state) => ({
      todo : [...state.todo, data]
    })),
  removeSingleTodo: (id) =>
    set((state) => {
      const index = state.todo.findIndex((data) => data.id === id);
      state.todo.splice(index, 1);
    }),
}));