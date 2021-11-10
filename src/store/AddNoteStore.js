import { action, computed, makeObservable, observable } from 'mobx';
import { inject, observer } from 'mobx-react';

class AddNoteStore {
    constructor() {
        makeObservable(this);
    }
    @observable data = [];

    @action
    saveData(title, description) {
        this.data.push({ title: title, description: description })
    }

    @action
    deleteData(i) {
        this.data.splice(i, 1)
    }
    @action
    updateData(title, description, id) {
        obj = this.data.map((item, i) => {
            if (i == id) {
                item = {
                    ...item,
                    title: title,
                    description: description,
                };
            }
            return item
        });
        this.data = obj
    }
}

export default AddNoteStore;