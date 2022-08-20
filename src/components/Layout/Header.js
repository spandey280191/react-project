import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

const Header = (props) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>North Indian Meals</h1>
        {props.isAuth && (
          <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
        )}
        {props.isAuth && <button className={classes.logout} onClick={logoutHandler}>Logout</button>}
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food"></img>
      </div>
    </Fragment>
  );
};

export default Header;
