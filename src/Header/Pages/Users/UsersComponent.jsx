import { connect } from 'react-redux';
import Users from './Users';
import { FollowAC, UnfollowAC, setUsersAC } from '../../../store/Reducers/UsersReducer';


let mapStateToProps=(state)=>{
    return{
        users : state.UsersPage.users
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        follow : (usersId)=>{
            dispatch(FollowAC(usersId))
        },
        unfollow : (usersId)=>{
            dispatch(UnfollowAC(usersId))
        },
        setUsers : (users)=>{
            dispatch(setUsersAC(users))
        }
    }
}

let UsersComponent = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersComponent;