import { FormRow, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const AddNewCourse = () => {
  const {
    isLoading,
    showAlert,
    displayAlert,
    title,
    subject,
    subtitles,
    price,
    summary,
    youtubeVideoLink,
    handleChange,
    clearValues,
    addNewCourse,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !title ||
      !subject ||
      !subtitles ||
      !price ||
      !summary ||
      !youtubeVideoLink
    ) {
      displayAlert();
      return;
    }
    //clearValues();
    addNewCourse();
  };

  const handleCourseInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>Add New Course</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          {/*YOU MUST USE HERE THE SAME NAME AS THE VALUE OBJ */}
          {/*text */}
          <FormRow
            type="text"
            name="title"
            value={title}
            handleChange={handleCourseInput}
          ></FormRow>
          {/*subject */}
          <FormRow
            type="text"
            name="subject"
            value={subject}
            handleChange={handleCourseInput}
          ></FormRow>
          {/*subtitles */}
          <FormRow
            type="text"
            name="subtitles"
            value={subtitles}
            handleChange={handleCourseInput}
          ></FormRow>
          {/*price */}
          <FormRow
            type="number"
            name="price"
            value={price}
            handleChange={handleCourseInput}
          ></FormRow>
          {/*summary */}
          <FormRow
            type="text"
            name="summary"
            value={summary}
            handleChange={handleCourseInput}
          ></FormRow>
          {/*youtubeVideoLink */}
          <FormRow
            type="text"
            name="youtubeVideoLink"
            value={youtubeVideoLink}
            handleChange={handleCourseInput}
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
export default AddNewCourse;
