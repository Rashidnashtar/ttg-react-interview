import { TaskActionPayloadTypes, TodoActionTypes } from './actions';
import update from 'immutability-helper';
import { combineReducers } from 'redux';
import { Task } from '../../types/Task';
import TaskService from '../../services/TasksService';

const services = new TaskService();
export interface TodoState {
  tasks: Task[];
}

const defaultState: TodoState = {
  tasks: services.loadFromStorage(),
};

const todoReducer = (state = defaultState, action: TaskActionPayloadTypes) => {
  switch (action.type) {
    case TodoActionTypes.addTodo: {
      const newTask = action.payload;
      return update(state, {
        tasks: { $push: [newTask] },
      });
    }
    case TodoActionTypes.deleteTodo: {
      const taskId = action.payload;
      return update(state, {
        tasks: { $apply: (tasks: Task[]) => tasks.filter((task: Task) => task.id !== taskId) },
      });
    }
    default:
      return state;
  }
};

const reducer = combineReducers({
  current: todoReducer,
});

export default reducer;
