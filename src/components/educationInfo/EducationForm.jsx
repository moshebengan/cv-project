
import InputGroup from "../InputGroup";
import "../../styles/form.css"

const EducationForm = ({
  onChange,
  schoolName,
  degree,
  startDate,
  endDate,
  educationHistory,
  setEducationHistory,
  setDisplayForm,
  setEducationInfo
}) => {

    const resetEducationInfo = () => {
        setEducationInfo({
            schoolName:'',
            degree:'',
            startDate:'',
            endDate:'',
        })
    }

    const handleSave = (e) => {
        e.preventDefault();
       
        setEducationHistory([...educationHistory, {
            schoolName,
            degree,
            startDate,
            endDate
        }])
        resetEducationInfo();
        setDisplayForm(false)
        

    }

    const handleCancel = (e) => {
        e.preventDefault();
        resetEducationInfo();
        setDisplayForm(false)
        
    }

    const handleDeleteItem = (e, itemName) => {
      e.preventDefault()
      setEducationHistory(educationHistory.filter(item => item.schoolName !== itemName))
      resetEducationInfo()
      setDisplayForm(false)
      }
   
  return (
    
      <form className="educationInfoForm">
        <InputGroup
          labelText="School Name"
          type="text"
          id="schoolName"
          placeholder="Enter the name of your school"
          value={schoolName}
          onChange={onChange}
          data-key="schoolName"
        />
        <InputGroup
          labelText="degree"
          type="text"
          id="degree"
          placeholder="Enter Degree / Field Of Study"
          value={degree}
          onChange={onChange}
          data-key="degree"
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
        <button onClick={(e) => handleDeleteItem(e, schoolName)}>Delete</button>
        </div>
        

      </form>
  
  );
};

export default EducationForm;
