import { RootState } from '../../reducers/rootReducers';

export const selectTodos = (state: RootState) => state.todo.current.tasks;
