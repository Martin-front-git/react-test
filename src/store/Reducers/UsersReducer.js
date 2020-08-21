const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";  

let initialState = {
  users : []
}


const UsersReducer = (state = initialState, action) => {
 
  switch (action.type) {
      case FOLLOW:
      return{
        ...state,
        users : state.users.map(u=>{
          if(u.id === action.usersId){
            return{...u,followed:true}
          }
          return u;
        })
      } 
      case UNFOLLOW : 
        return{
          ...state,
          users : state.users.map(u=>{
            if(u.id === action.usersId){
              return{...u,followed:false}
            }
            return u;
          })
        }
      case SET_USERS : {
        return {
          ...state,users : [...state.users, ...action.users]
        }
      } 
        
    default:
      return state;
  }
};

export const FollowAC=(usersId)=>({ type : FOLLOW, usersId});
export const UnfollowAC=(usersId)=>({ type : UNFOLLOW, usersId})
export const setUsersAC=(users)=>({ type : SET_USERS, users})

export default UsersReducer;
