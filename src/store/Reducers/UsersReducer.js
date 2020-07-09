const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";  

let initialState = {
  UsersList : [
     {id : 1,photoUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEpUUJVqlxCFXUdaSn7ieT0ucZkZGX1NlmBQ&usqp=CAU',
          follow : true, name : 'Martin Hovhannisyan', text: 'Hello World', location:{country: 'Armenia', city : 'Gyumri'}},
     {id : 2,photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEpUUJVqlxCFXUdaSn7ieT0ucZkZGX1NlmBQ&usqp=CAU',
          follow : false, name : 'Karen Abrahamyan', text: 'Hello Boys', location:{country: 'Russia', city : 'Moscow'}},
     {id : 3,photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEpUUJVqlxCFXUdaSn7ieT0ucZkZGX1NlmBQ&usqp=CAU',
          follow : true, name : 'John Wick', text: 'Hello Girls', location:{country: 'Ukraine', city : 'Kiev'}},
  ],
}


const UsersReducer = (state = initialState, action) => {
 
  switch (action.type) {
      case FOLLOW:
      return{
        ...state,
        UsersList : state.UsersList.map(u=>{
          if(u.id === action.userId){
            return{...u,followed:true}
          }
        })
      } 
      case UNFOLLOW : 
        return{
          ...state,
          UsersList : state.UsersList.map(u=>{
            if(u.id === action.userId){
              return{...u,followed:false}
            }
          })
        }
      case SET_USERS : 
        return {
          ...state,users : [...state.users, ...action.users]
        }
    default:
      return state;
  }
};

export const FollowAC=(usersId)=>({ type : FOLLOW, usersId});
export const UnfollowAC=(usersId)=>({ type : UNFOLLOW, usersId})
export const setUsersAC=(users)=>({ type : SET_USERS, users})

export default UsersReducer;
