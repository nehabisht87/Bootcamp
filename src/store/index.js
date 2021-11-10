import AddNoteStore from './AddNoteStore';
class RootStore {
  constructor() {
    this.addNoteStore = new AddNoteStore();
  }
}

export default RootStore;
