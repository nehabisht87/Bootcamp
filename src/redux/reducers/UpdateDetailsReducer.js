const INITIAL_STATE = {
    data : [],
    name:'hello',
    updateDataObject:{}
}

const UpdateDetailsReducer = (state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case 'UPDATE_ITEM':
            return {...state, data: action.payload.value}
        case 'UPDATE_NAME':
            return {...state, name: action.payload}
        case 'UPLOAD_OBJECT':
            return {...state, updateDataObject: action.payload}
        case 'SAVE' : 
            const obj = state.data.map((item) => {
                if(item.id == state.updateDataObject.id){
                   item = {...item, title:state.updateDataObject.title, body:state.updateDataObject.body}   
                }
                return item
            })
            return {...state, data : obj};
        default:
            return state;
    }
}

export default UpdateDetailsReducer ; 

