import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const store = (set) => ({
  tasks: [],
  draggedTasks: null,
  addTask: (title, progress) =>
    set(
      (store) => ({ tasks: [...store.tasks, { title, progress }] }),
      false,
      'Add Task'
    ),
  deleteTask: (title) =>
    set((store) => ({
      tasks: store.tasks.filter((task) => task.title !== title),
    })),
  setDraggedTasks: (title) => set({ draggedTasks: title }),
  moveTask: (title, progress) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.title === title ? { title, progress } : task
      ),
    })),
});

export const useStore = create(persist(devtools(store), { name: 'store' }));
