export let initialState =[
    {id:1, name:'Martin'},
    {id:2, name:'Karen'},
    {id:3, name:'Artur'}
]

export default function(state,action){
    switch(action.type){
        case 'add':
            return [
                ...state,
                {
                    id:Date.now(),
                    name:action.payload
                }
            ]
        default:
            return state
    }
}