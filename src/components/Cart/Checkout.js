import classes from "./Checkout.module.css";
import { useRef, useState } from "react";

const isEmpty = value => value.trim() === "";


const isNotFiveChar = value =>  value.trim().length < 5;

const Checkout = (props) => {

  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const cityInputRef = useRef();
  const postalCodeInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = !isNotFiveChar(enteredPostalCode);

    setFormValidity({
        name: enteredNameIsValid,
        street: enteredStreetIsValid,
        city: enteredCityIsValid,
        postal: enteredPostalCodeIsValid
    })
    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }

    const userData = {
        name: enteredName,
        street: enteredStreet,
        city: enteredCity,
        postalCode : enteredPostalCode
    };

    props.onConfirm(userData);
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${formValidity.name ? '' : classes.invalid }`}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        { !formValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div className={`${classes.control} ${formValidity.street ? '' : classes.invalid }`}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        { !formValidity.street && <p>Please enter a valid street</p>}
      </div>
      <div className={`${classes.control} ${formValidity.postal ? '' : classes.invalid }`}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        { !formValidity.postal && <p>Please enter a valid postal code</p>}
      </div>
      <div className={`${classes.control} ${formValidity.city ? '' : classes.invalid }`}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        { !formValidity.city && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
