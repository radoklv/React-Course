const UserListItem = ({ user }) => {
  return (
    <li className="list_item wrapper">
      <p>{user.username} who is {user.age} years old</p>
    </li>
  );
};

export default UserListItem;
