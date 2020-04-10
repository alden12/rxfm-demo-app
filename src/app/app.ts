import { div, children, classes, button, event, dispatch, store } from 'rxfm';
import { map } from 'rxjs/operators';
import { storeSubject, incrementCounterAction, counterSelector } from '../store';

import './app.css';

const buttonText = () => counterSelector.pipe(
  map(counter => counter ? `Clicked ${counter} times!` : 'Click Me!'),
)

const clickCounter = () => button().pipe(
  children(buttonText()),
  event(
    'click',
    dispatch(incrementCounterAction),
  ),
);

export const app = () => div().pipe(
  classes('app'),
  children(
    'Hello, world!',
    clickCounter(),
  ),
  store(storeSubject),
);
