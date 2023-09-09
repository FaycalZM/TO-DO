import { createSlice } from "@reduxjs/toolkit";


const initialAllTasks = [
    {
        id: 0,
        text: 'eat',
        isCompleted: true
    },
    {
        id: 1,
        text: 'code',
        isCompleted: false
    },
    {
        id: 2,
        text: 'workout',
        isCompleted: false
    },
    {
        id: 3,
        text: 'sleep',
        isCompleted: false
    },

];
const initialActiveTasks = initialAllTasks.filter(task => !task.isCompleted);
const initialCompletedTasks = initialAllTasks.filter(task => task.isCompleted);

const initialState = {
    allTasks: initialAllTasks,
    active: initialActiveTasks,
    completed: initialCompletedTasks,
    nextId: initialAllTasks.length
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.allTasks.push({
                id: action.payload.id,
                text: action.payload.text,
                isCompleted: false
            });
        },
        updateTask: (state, action) => {
            state.allTasks = state.allTasks.map(
                task => task.id === action.payload.id ? { ...task, isCompleted: !task.isCompleted } : task
            );
        },
        deleteTask: (state, action) => {
            state.allTasks = state.allTasks.filter(task => task.id !== action.payload.id);
        },
        clearCompleted: (state) => {
            state.allTasks = state.allTasks.filter(task => !task.isCompleted);
        },
        filterTasks: (state) => {
            state.active = state.allTasks.filter(task => !task.isCompleted);
            state.completed = state.allTasks.filter(task => task.isCompleted);
        },
        updateNextId: (state) => {
            state.nextId++;
        },
        updateAllTasks: (state, action) => {
            state.allTasks = action.payload.allTasks;
        }
    }
})

export const { addTask, updateTask, deleteTask, filterTasks, updateNextId, updateAllTasks, clearCompleted } = todosSlice.actions;


export default todosSlice.reducer;