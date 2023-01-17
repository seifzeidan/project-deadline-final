import { FormRow, FormRowSelect, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const ReportProblem = () => {
  const {
    isLoading,
    showAlert,
    displayAlert,
    problemType,
    courseName,
    typeOptions,

    description,

    clearValues,
    reportProblem,
    handleChange,

    answer,
    aboutCourseOptions,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!problemType || !description) {
      displayAlert();
      return;
    }
    //clearValues();
    reportProblem();
  };

  const handleProblemInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>Report New Problem</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          {/*YOU MUST USE HERE THE SAME NAME AS THE VALUE OBJ */}
          {/*problemType */}
          <FormRowSelect
            name="problemType"
            value={problemType}
            handleChange={handleProblemInput}
            list={typeOptions}
          />
          {/*about course or not select */}
          <FormRowSelect
            name="answer"
            labelText={"About a Course?"}
            value={answer}
            handleChange={handleProblemInput}
            list={aboutCourseOptions}
          />
          {/*course name*/}
          {answer == "true" && (
            <FormRow
              type="text"
              name="courseName"
              value={courseName}
              handleChange={handleProblemInput}
            ></FormRow>
          )}

          {/*description */}
          <FormRow
            type="text"
            name="description"
            value={description}
            handleChange={handleProblemInput}
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
export default ReportProblem;
