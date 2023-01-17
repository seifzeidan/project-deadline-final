import { useState } from "react";
import { FormRow, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
//import { BsCurrencyDollar } from "react-icons/bs";

const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();
  console.log(user);
  const moneyOwed = user.money;
  const [email, setEmail] = useState(user?.email);
  const [name, setName] = useState(user?.name);
  const [lastName, setLastName] = useState(user?.lastName);
  const [location, setLocation] = useState(user?.location);
  const [miniBio, setMiniBio] = useState(user?.miniBio);

  const handleSubmit = (e) => {
    e.preventDefault();
    //remove while testing
    if (!name || !email || !lastName || !location || !miniBio) {
      displayAlert(); //display hardcoded "please provide all values "
      return;
    }
    updateUser({ name, email, lastName, location, miniBio });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile</h3>
        <h2>Money Owed : {moneyOwed}$</h2>

        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow
            type="text"
            labelText={"last name"}
            name="lastName"
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
          <FormRow
            type="email"
            name="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormRow
            type="text"
            name="location"
            value={location}
            handleChange={(e) => setLocation(e.target.value)}
          />
          {user.type === "instructor" && (
            <FormRow
              type="text"
              labelText={"Mini Biography"}
              name="miniBio"
              value={miniBio}
              handleChange={(e) => setMiniBio(e.target.value)}
            />
          )}
          {/*again we put the set email in a function so we dont invoke it right away */}
          {/*Dont forget to add BIO */}
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "Please Wait..." : "save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default Profile;
