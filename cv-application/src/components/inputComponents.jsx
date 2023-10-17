
function GeneralInfo({name, setName, lastName, setLastName, email, setEmail, phoneNumber, setPhoneNumber}) {

    return (
    <div className="inputForm">
        <h1>General</h1>

        <div className="inputLabel">
            <div><label className="label">Enter your name: </label></div>
            <input className="input" type="text" name="name" value={name}
             onChange={(event) => setName(event.target.value)}/>
        </div>

        <div className="inputLabel">
            <div><label className="label">Enter your last name: </label></div>
            <input className="input" type="text" name="last name"  value={lastName}
             onChange={(event) => setLastName(event.target.value)}/>
        </div>

        <div className="inputLabel">
            <div><label className="label">Email: </label></div>
            <input className="input" type="email" name="email"  value={email} 
            onChange={(event) => setEmail(event.target.value)}/>
        </div>

        <div className="inputLabel">
            <div><label className="label">Phone number: </label></div>
            <input className="input" type="tel" name="phone number"  value={phoneNumber}  
            onChange={(event) => setPhoneNumber(event.target.value)}/>
        </div>
    </div>
    )
}


function Education({titleOfStudy, setTitleOfStudy, schoolName, setSchoolName}) {

    return (
    <div className="inputForm">
        <h1>Education</h1>

        <div className="inputLabel">
            <div><label className="label">Title of study: </label></div>
            <input className="input" type="text" name="title of study" value={titleOfStudy} 
            onChange={(event) => setTitleOfStudy(event.target.value)}/>
        </div>

        <div className="inputLabel">
            <div><label className="label">School name: </label></div>
            <input className="input" type="text" name="school name" value={schoolName} 
            onChange={(event) => setSchoolName(event.target.value)}/>
        </div>
    </div>
    )
}

function Experience({companyName, setCompanyName, positionTitle, setPositionTitle, responsibilities,setResponsibilities, startOfEmployment, setStartOfEmployment, endOfEmployment, setEndOfEmployment}) {

    return (
    <div className="inputForm">
        <h1>Experience</h1>

        <div className="inputLabel">
            <div><label className="label">Company name: </label></div>
            <input className="input" type="text" name="company name" value={companyName}
            onChange={(event) => setCompanyName(event.target.value)}/>
        </div>

        <div className="inputLabel">
            <div><label className="label">Position title: </label></div>
            <input className="input" type="text" name="position title" value={positionTitle}
            onChange={(event) => setPositionTitle(event.target.value)}/>
        </div>

        <div className="inputLabel">
            <div><label className="label">Main responsibilities: </label></div>
            <textarea className="input responsibilitiesInput" cols="20" rows="10"
            value={responsibilities}
            onChange={(event) => setResponsibilities(event.target.value)}></textarea>
        </div>

        <div className="inputLabel">
            <div><label className="label">Start date of employment: </label></div>
            <input className="input" type="text" name="start date of employment" value={startOfEmployment}
            onChange={(event) => setStartOfEmployment(event.target.value)}/>
        </div>
        
        <div className="inputLabel">
            <div><label className="label">End date of employment: </label></div>
            <input className="input" type="text" name="end date of employment" value={endOfEmployment}
            onChange={(event) => setEndOfEmployment(event.target.value)}/>
        </div>
    </div>
    )
}


export {GeneralInfo, Education, Experience}