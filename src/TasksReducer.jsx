

const TasksReducer = (tasks, action) => {
    switch (action.type) {
        case 'added': {
            return [
                ...tasks,
                {
                    id: action.id,
                    text: action.text,
                    isCompleted: false
                }
            ];
        }
        case 'updated': {
            return tasks.map(task => {
                if (action.id === task.id) {
                    return { ...task, isCompleted: !task.isCompleted };
                }
                else {
                    return task;
                }
            });
        }
        case 'deleted': {
            return tasks.filter(task => task.id !== action.id);
        }
        case 'cleared_completed': {
            return tasks.filter(task => !task.isCompleted);
        }

        default:
            throw new Error('unknown action : ' + action.type);
    }
}

export default TasksReducer