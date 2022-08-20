import Card from "./Card";
import classes from './Login.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';



const Login = () => {
  
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.login());
  };


  return (
      <form className={classes.form} onSubmit={loginHandler}>
      <div className={classes.login}>
        <label htmlFor="username">UserName:</label>
        <input type="text"></input>
      </div>
      <div className={classes.login}>
        <label htmlFor="password">Password:</label>
        <input type="password"></input>
      </div>
      <div className={classes.actions}>
        <button>Login</button>
      </div>
      </form>
  );
};

export default Login;
