import { useRef, useState } from "react";
import PersonalInfoForm from "./components/generalInfo/PersonalInfoForm";
import "./styles/app.css";
import EducationForm from "./components/educationInfo/EducationForm";
import Card from "./components/Card";
import SchoolIcon from "@mui/icons-material/School";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import WorkIcon from "@mui/icons-material/Work";
import AddIcon from "@mui/icons-material/Add";
import ExprienceInfoForm from "./components/exprienceInfo/ExprienceInfoForm";
import PersonalInfoSection from "./components/generalInfo/PersonalInfoSection";
import EducationSection from "./components/educationInfo/EducationSection";
import ExprienceSection from "./components/exprienceInfo/ExprienceSection";

function App() {
  const [activeSection, setActiveSection] = useState(null);


  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const [educationInfo, setEducationInfo] = useState({
    schoolName: "",
    degree: "",
    startDate: "",
    endDate: "",
  });

  const [exprienceInfo, setExprienceInfo] = useState({
    companyName: "",
    position_title: "",
    startDate: "",
    endDate: "",
  });

  const [educationHistory, setEducationHistory] = useState([]);
  const [experienceHistory, setExperienceHistory] = useState([]);

  const [displayEducationForm, setDisplayEducationForm] = useState(false);
  const [displayExprienceForm, setDisplayExperienceForm] = useState(false);

  const handlePersonalInfoChange = (e) => {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  };

  const handleEducationInfoChange = (e) => {
    const { key } = e.target.dataset;
    setEducationInfo({ ...educationInfo, [key]: e.target.value });
  };

  const handleExprienceInfoChange = (e) => {
    const {key} = e.target.dataset;
    setExprienceInfo({...exprienceInfo, [key]: e.target.value})
  }

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);

  };

  const handleEditEducationItem = (itemId) => {
    let searchedItem = educationHistory.find(
      ({ schoolName }) => schoolName === itemId
    );
    setEducationInfo({
      schoolName: searchedItem.schoolName,
      degree: searchedItem.degree,
      startDate: searchedItem.startDate,
      endDate: searchedItem.endDate,
    });

    setDisplayEducationForm(true);
  };

  const handleEditExprienceItem = (itemId) => {
    let searchedItem = experienceHistory.find(
      ({ companyName }) => companyName === itemId
    );
    setExprienceInfo({
      companyName: searchedItem.companyName,
      position_title: searchedItem.position_title,
      startDate: searchedItem.startDate,
      endDate: searchedItem.endDate,
    });

    setDisplayExperienceForm(true);
  };


  return (
    <div className="app">
      <div className="app-wrapper">
        <div className="forms-menu">
          <Card>
            <PersonalInfoForm
              onChange={handlePersonalInfoChange}
              fullname={personalInfo.fullName}
              email={personalInfo.email}
              phoneNumber={personalInfo.phoneNumber}
              address={personalInfo.address}
            />
          </Card>

          {/* Education Section */}
          <Card>
            <button
              onClick={() => toggleSection("education")}
              className="menu-button"
            >
              <div className="iconLabel">
                <SchoolIcon /> Education
              </div>
              {activeSection === "education" ? (
                <ArrowDropUpIcon />
              ) : (
                <ArrowDropDownIcon />
              )}
            </button>

            <div
              className={`form-container ${
                activeSection === "education" ? "expanded" : "collapsed"
              }`}
            >
              {!displayEducationForm &&
                educationHistory.length > 0 &&
                educationHistory?.map((educationItem) => (
                  <button
                    className="educationItemBtn"
                    key={educationItem.schoolName}
                    hidden={displayEducationForm}
                    onClick={() => handleEditEducationItem(educationItem.schoolName)}
                  >
                    {educationItem.schoolName}
                  </button>
                ))}
              {!displayEducationForm && (
                <button
                  className="openSectionBtn"
                  onClick={() => setDisplayEducationForm(true)}
                >
                  <AddIcon className="icon" /> Education
                </button>
              )}

              {displayEducationForm && (
                <EducationForm
                  onChange={handleEducationInfoChange}
                  schoolName={educationInfo.schoolName}
                  degree={educationInfo.degree}
                  startDate={educationInfo.startDate}
                  endDate={educationInfo.endDate}
                  educationHistory={educationHistory}
                  setEducationHistory={setEducationHistory}
                  setDisplayForm={setDisplayEducationForm}
                  setEducationInfo={setEducationInfo}
                />
              )}
            </div>
          </Card>

          {/* Employment Section */}
          <Card>
            <button
              onClick={() => toggleSection("employment")}
              className="menu-button"
            >
              <div className="iconLabel">
                <WorkIcon /> Experience
              </div>
              {activeSection === "employment" ? (
                <ArrowDropUpIcon />
              ) : (
                <ArrowDropDownIcon />
              )}
            </button>

            <div
              className={`form-container ${
                activeSection === "employment" ? "expanded" : "collapsed"
              }`}
            >
              {!displayExprienceForm &&
                experienceHistory.length > 0 &&
                experienceHistory?.map((experienceItem) => (
                  <button
                    className="educationItemBtn"
                    key={experienceItem.companyName}
                    hidden={displayExprienceForm}
                    onClick={() => handleEditExprienceItem(experienceItem.companyName)}
                  >
                    {experienceItem.companyName}
                  </button>
                ))}
              {!displayExprienceForm && (
                <button
                  className="openSectionBtn"
                  onClick={() => setDisplayExperienceForm(true)}
                >
                  <AddIcon className="icon" /> Exprience
                </button>
              )}

              {displayExprienceForm && (
                <ExprienceInfoForm
                  onChange={handleExprienceInfoChange}
                  companyName={exprienceInfo.companyName}
                  position_title={exprienceInfo.position_title}
                  startDate={exprienceInfo.startDate}
                  endDate={exprienceInfo.endDate}
                  exprienceHistory={experienceHistory}
                  setExperienceHistory={setExperienceHistory}
                  setDisplayForm={setDisplayExperienceForm}
                  setExprienceInfo={setExprienceInfo}
                />
              )}
            </div>
          </Card>
        </div>
        <div className="resume">
          <PersonalInfoSection personalInfo={personalInfo} />
          {educationHistory.length > 0 && <EducationSection educationHistory={educationHistory}/>}
          {experienceHistory.length > 0 && <ExprienceSection exprienceHistory={experienceHistory} />}
        </div>
      </div>
    </div>
  );
}

export default App;
