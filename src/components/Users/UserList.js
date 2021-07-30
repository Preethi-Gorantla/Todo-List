import Card from '../UI/Card';
import './UserList.css';
const UserList = (props) => {
    console.log("UserList",props.items);
    console.log()
    return(
        <Card className="user-item">
            {props.items.map(user => <h4>{user.name} {user.age}</h4>)}
        </Card>
    )

}

export default UserList;