import CounterStore from './CounterStore';
import LoginStore from './LoginStore';

class RootStore {
  constructor() {
    this.counterStore = new CounterStore();
    this.loginStore = new LoginStore();
  }
}

export default RootStore;
