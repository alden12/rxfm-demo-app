import { div, children, classes, store } from 'rxfm';
import { storeSubject } from '../store';
import { todoList } from './todo-list/todo-list';

import './app.css';

export const app = () => div().pipe(
  classes('app'),
  children(todoList()),
  store(storeSubject),
);
