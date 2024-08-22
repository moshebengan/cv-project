import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import '../../styles/personalInfoSection.css'

const PersonalInfoSection = (
    {personalInfo}
) => {
    const {fullName, email, phoneNumber, address} = personalInfo
    
  return (
    <div className="personalInfoSection">
        <h1>{fullName}</h1>
        <div className="details">
            {email.length > 0 && <span className='detail'><EmailIcon className='icon'/>{email}</span>}
            {phoneNumber.length > 0 && <span className='detail'><PhoneIcon className='icon'/>{phoneNumber}</span>}
            {address.length > 0 && <span className='detail'><LocationOnIcon className='icon'/>{address}</span>}
        </div>
      
    </div>
  )
}

export default PersonalInfoSection
