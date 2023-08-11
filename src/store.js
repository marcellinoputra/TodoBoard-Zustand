import { create } from 'zustand';

const store = (set) => ({
  tasks: [{ title: 'Testing Task', progress: 'DONE' }],
  draggedTasks: null,
  addTask: (title, progress) =>
    set((store) => ({ tasks: [...store.tasks, { title, progress }] })),
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

export const useStore = create(store);
