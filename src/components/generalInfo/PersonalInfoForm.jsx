import "../../styles/personalInfo.css";

import InputGroup from "../InputGroup";

const PersonalInfoForm = ({
  onChange,
  fullname,
  email,
  phoneNumber,
  address,
}) => {
  return (
    <>
      <h1>Personal Details</h1>
      <form className="personalInfoForm">
        <InputGroup
          labelText="Full Name"
          type="text"
          id="fullName"
          placeholder="First and last name"
          value={fullname}
          onChange={onChange}
          data-key="fullName"
        />

        <InputGroup
          labelText="E-mail"
          type="email"
          id="email"
          placeholder="Enter Email"
          value={email}
          onChange={onChange}
          data-key="email"
        />

        <InputGroup
          labelText="Phone Number"
          type="tel"
          id="phoneNumber"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={onChange}
          data-key="phoneNumber"
        />

        <InputGroup
          labelText="Address"
          type="text"
          id="address"
          placeholder="Enter address"
          value={address}
          onChange={onChange}
          data-key="address"
        />
      </form>
    </>
  );
};

export default PersonalInfoForm;
