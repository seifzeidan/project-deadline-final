const FormRow = ({type,name,value,handleChange,labelText}) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText||name} {/*if labeltext is inputed then use it otherwise use the name */}
      </label>

      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className='form-input'
      />
    </div>
  )
}
export default FormRow