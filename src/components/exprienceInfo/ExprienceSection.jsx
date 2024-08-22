import '../../styles/exprienceSection.css'

const ExprienceSection = (
    {exprienceHistory}
) => {
    console.log(exprienceHistory)
  return (
    <div className="exprienceSection">
        <h2>Exprience</h2>

      {exprienceHistory?.map(exprience => (
        <div className='exprienceInfo' key={exprience.companyName}>
            <div className="exprience-item-group">
                <p className='dates'>{exprience.startDate} - {exprience.endDate}</p>
            </div>
            <div className="exprience-item-group">
                <p className='exprience-item-companyName'>{exprience.companyName}</p>
                <p className="exprience-item-position">{exprience.position_title}</p>
            </div>
        </div>
      ))}
    </div>
  )
}

export default ExprienceSection
