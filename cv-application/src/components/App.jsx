import { useState } from 'react'
import { GeneralInfo, Education, Experience } from './inputComponents';
import CvRender from "./cvRender";


function App() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [titleOfStudy, setTitleOfStudy] = useState('');
    const [schoolName, setSchoolName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [responsibilities, setResponsibilities] = useState('');
    const [startOfEmployment, setStartOfEmployment] = useState('');
    const [endOfEmployment, setEndOfEmployment] = useState('');


    return(<>
        <div className="inputs">
            <GeneralInfo 
            name={name}  setName={setName}
            lastName={lastName} setLastName={setLastName}
            email={email} setEmail={setEmail}
            phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}
            schoolName={schoolName} setSchoolName={setSchoolName}/>

            <Education
            titleOfStudy={titleOfStudy} setTitleOfStudy={setTitleOfStudy}
            schoolName={schoolName} setSchoolName={setSchoolName}/>

            <Experience
            companyName={companyName} setCompanyName={setCompanyName}
            positionTitle={positionTitle} setPositionTitle={setPositionTitle}
            responsibilities={responsibilities} setResponsibilities={setResponsibilities}
            startOfEmployment={startOfEmployment} setStartOfEmployment={setStartOfEmployment}
            endOfEmployment={endOfEmployment} setEndOfEmployment={setEndOfEmployment}/>
        </div>
        <CvRender
         name={name} lastName={lastName} email={email} phoneNumber={phoneNumber}
         titleOfStudy={titleOfStudy} schoolName={schoolName} companyName={companyName}
         positionTitle={positionTitle} responsibilities={responsibilities}
         startOfEmployment={startOfEmployment} endOfEmployment={endOfEmployment}/>

    </>)
}

export default App;