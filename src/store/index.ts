import { BehaviorSubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { select, SHARE_REPLAY_CONFIG } from 'rxfm';

export interface IApp {
  counter: number;
}

export const initialState = (): IApp => ({
  counter: 0,
})

export const storeSubject = new BehaviorSubject<IApp>(initialState());

// Selectors:
export const counterSelector = storeSubject.pipe(
  select('counter'),
  shareReplay(SHARE_REPLAY_CONFIG),
);

// Actions:
export const incrementCounterAction = () => ({ counter }: IApp) => ({ counter: counter + 1 });
