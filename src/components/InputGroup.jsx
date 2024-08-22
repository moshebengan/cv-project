import '../styles/inputGroup.css'

const InputGroup = ({labelText, type, id, placeholder, value, onChange, "data-key": dataKey}) => {
  return (
    <div className="inputGroup">
      <label htmlFor={id}>{labelText}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        data-key={dataKey}
      />
    </div>
  )
}

export default InputGroup
