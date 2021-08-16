import { BehaviorSubject } from 'rxjs';
interface State<T> {
  entities: {
    [key: number]: T
  },
  isLoading: boolean,
}
export abstract class Store<T extends {[key: string]: any}> {
  protected state$ = new BehaviorSubject<State<T>>({
    entities: {},
    isLoading: false,
  });
  protected getState$() {
    return this.state$.asObservable();
  }
  protected setState(newState: any) {
    this.state$.next({...this.state$.getValue(), ...newState});
  }
  protected transformArray(array: T[], key: keyof T) {
    return array.reduce((acc, item) => ({...acc, [item[key]]: item}), {})
  }
}
