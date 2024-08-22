import '../../styles/educationSection.css'

const EducationSection = (
    {educationHistory}
) => {
    console.log(educationHistory)
  return (
    <div className="educationSection">
        <h2>Education</h2>

      {educationHistory?.map(education => (
        <div className='educationInfo' key={education.schoolName}>
            <div className="education-item-group">
                <p className='dates'>{education.startDate} - {education.endDate}</p>
            </div>
            <div className="education-item-group">
                <p className='education-item-schoolName'>{education.schoolName}</p>
                <p className="education-item-degree">{education.degree}</p>
            </div>
        </div>
      ))}
    </div>
  )
}

export default EducationSection
