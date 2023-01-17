import { FormRow, FormRowSelect, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const AddNewUser = () => {
  const {
    isLoading,
    showAlert,
    displayAlert,
    name,
    email,
    password,
    userType,
    userOptions,
    registerAdmin,

    clearValues,
    handleChange,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !email || !userType) {
      displayAlert();
      return;
    }
    //clearValues();
    const type = userType;
    const currentUser = { name, email, password, type };
    registerAdmin(currentUser);
    clearValues();
  };

  const handleNewUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>Add new user/admin</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          {/*YOU MUST USE HERE THE SAME NAME AS THE VALUE OBJ */}
          {/*problemType */}
          <FormRowSelect
            name="userType"
            value={userType}
            handleChange={handleNewUserInput}
            list={userOptions}
          />

          {/*name*/}

          <FormRow
            type="text"
            name="name"
            value={name}
            handleChange={handleNewUserInput}
          ></FormRow>

          {/*email */}
          <FormRow
            type="email"
            name="email"
            value={email}
            handleChange={handleNewUserInput}
          ></FormRow>
          {/*password*/}

          <FormRow
            type="password"
            name="password"
            value={password}
            handleChange={handleNewUserInput}
          ></FormRow>

          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddNewUser;
