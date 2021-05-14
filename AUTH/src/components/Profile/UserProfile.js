import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';
import AuthContext from '../../store/auth-context';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

const UserProfile = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const changeUserPassword = (password) => {
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyC-orlybTIjU-wvOB2VsWLqUu07W0DGCAg
    `,
      {
        method: 'POST',
        body: JSON.stringify({
          idToken: authCtx.token,
          password,
          returnSecureToken: true,
        }),
        headers: { 'Content-Type': 'application/json' },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error(data.error.message);
          });
        }
      })
      .then(() => {
        history.replace('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChange={changeUserPassword} />
    </section>
  );
};

export default UserProfile;
