
import InputGroup from '../InputGroup'
import "../../styles/form.css"

const ExprienceInfoForm = ({
    onChange,
    companyName,
    position_title,
    startDate,
    endDate,
    exprienceHistory,
    setExperienceHistory,
    setDisplayForm,
    setExprienceInfo,
    

}) => {

    const resetExprienceInfo = () => {
        setExprienceInfo({
            companyName: '',
            position_title: '',
            startDate: '',
            endDate: ''
        })
    }

    const handleSave = (e) => {
        e.preventDefault();
        setExperienceHistory([...exprienceHistory, {
            companyName,
            position_title,
            startDate,
            endDate
        }])
        resetExprienceInfo();
        setDisplayForm(false);
    }

    const handleCancel = (e) => {
        e.preventDefault();
        resetExprienceInfo();
        setDisplayForm(false);
    }

    const handleDeleteItem = (e, itemName) => {
        e.preventDefault()
        setExperienceHistory(exprienceHistory.filter(item => item.companyName !== itemName))
        setDisplayForm(false)
    }
  return (
    <form className="educationInfoForm">
        <InputGroup
          labelText="Company Name"
          type="text"
          id="companyName"
          placeholder="Enter the name of your Company"
          value={companyName}
          onChange={onChange}
          data-key="companyName"
        />
        <InputGroup
          labelText="Position/Title"
          type="text"
          id="position_title"
          placeholder="Enter Position/Title"
          value={position_title}
          onChange={onChange}
          data-key="position_title"
        />
        <InputGroup
          labelText="Start Date"
          type="date"
          id="startDate"
          value={startDate}
          onChange={onChange}
          data-key="startDate"
        />

        <InputGroup
          labelText="end"
          type="date"
          id="endDate"
          value={endDate}
          onChange={onChange}
          data-key="endDate"
        />
        <div className="buttons">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={(e) => handleDeleteItem(e, companyName)}>Delete</button>
        </div>
        

      </form>
  )
}

export default ExprienceInfoForm
