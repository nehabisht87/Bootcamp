import {action, computed, makeObservable, observable} from 'mobx';

class CounterStore {
  constructor() {
    makeObservable(this);
  }
  @observable count = 0;

  @action
  increment() {
    this.count++;
    console.log('Updated Count:', this.count);
  }

  @action
  decrement() {
    this.count--;
  }

  @action
  updateByValue(value) {
    this.count = this.count + value;
  }

  @computed get getUpdatedCount() {
    //   this.count++
    return `Current Count : ${this.count}`;
  }
}

export default CounterStore;
