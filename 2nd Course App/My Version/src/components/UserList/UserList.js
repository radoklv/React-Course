import UserListItem from './UserListItem';

const UserList = ({ users }) => {
  return (
    <div>
      <ul>
        {users.map((user) => {
          return <UserListItem key={user.id} user={user} />;
        })}
      </ul>
    </div>
  );
};

export default UserList;
