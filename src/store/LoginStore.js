import {action, computed, observable, makeObservable} from 'mobx';

class LoginStore {
  constructor() {
    makeObservable(this);
  }
  @observable name = '';

  @action updateName(name) {
    debugger;
    this.name = name;
  }

  @action clear() {
    this.name = '';
  }

  @computed get getName() {
    return this.name;
  }
}

export default LoginStore;
