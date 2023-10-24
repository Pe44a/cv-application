
// General info inputs with destructive props
function GeneralInfo({name, setName, lastName, setLastName, email, setEmail, phoneNumber, setPhoneNumber, aboutMe, setAboutMe}) {

    return (
        <div className="inputForm">
            <h1>General</h1>

            <div className="inputLabel">
                <div><label className="label">Enter your name: </label></div>
                <input className="input" type="text" name="name" value={name}
                // Updates `variables` state when input changes
                onChange={(event) => setName(event.target.value)}/>
            </div>

            <div className="inputLabel">
                <div><label className="label">Enter your last name: </label></div>
                <input className="input" type="text" name="last name"  value={lastName}
                // Updates `variables` state when input changes
                onChange={(event) => setLastName(event.target.value)}/>
            </div>

            <div className="inputLabel">
                <div><label className="label">Email: </label></div>
                <input className="input" type="email" name="email"  value={email} 
                // Updates `variables` state when input changes
                onChange={(event) => setEmail(event.target.value)}/>
            </div>

            <div className="inputLabel">
                <div><label className="label">Phone number: </label></div>
                <input className="input" type="tel" name="phone number"  value={phoneNumber}
                // Updates `variables` state when input changes  
                onChange={(event) => setPhoneNumber(event.target.value)}/>
            </div>

            <div className="inputLabel">
                <div><label className="label">About me: </label></div>
                <textarea className="input responsibilitiesInput" cols="20" rows="10"
                value={aboutMe}
                // Updates `variables` state when input changes
                onChange={(event) => setAboutMe(event.target.value)}></textarea>
            </div>
        </div>
    )
}


// Education info inputs with destructive props
function Education({titleOfStudy, setTitleOfStudy, schoolName, setSchoolName}) {

    return (
        <div className="inputForm">
            <h1>Education</h1>

            <div className="inputLabel">
                <div><label className="label">Title of study: </label></div>
                <input className="input" type="text" name="title of study" value={titleOfStudy}
                // Updates `variables` state when input changes 
                onChange={(event) => setTitleOfStudy(event.target.value)}/>
            </div>

            <div className="inputLabel">
                <div><label className="label">School name: </label></div>
                <input className="input" type="text" name="school name" value={schoolName}
                // Updates `variables` state when input changes 
                onChange={(event) => setSchoolName(event.target.value)}/>
            </div>
        </div>
    )
}


// Experience info inputs with destructive props
function Experience({companyName, setCompanyName, positionTitle, setPositionTitle, responsibilities,setResponsibilities, startOfEmployment, setStartOfEmployment, endOfEmployment, setEndOfEmployment}) {

    return (
        <div className="inputForm">
            <h1>Experience</h1>

            <div className="inputLabel">
                <div><label className="label">Company name: </label></div>
                <input className="input" type="text" name="company name" value={companyName}
                // Updates `variables` state when input changes
                onChange={(event) => setCompanyName(event.target.value)}/>
            </div>

            <div className="inputLabel">
                <div><label className="label">Position title: </label></div>
                <input className="input" type="text" name="position title" value={positionTitle}
                // Updates `variables` state when input changes
                onChange={(event) => setPositionTitle(event.target.value)}/>
            </div>

            <div className="inputLabel">
                <div><label className="label">Main responsibilities: </label></div>
                <textarea className="input responsibilitiesInput" cols="20" rows="10"
                value={responsibilities}
                // Updates `variables` state when input changes
                onChange={(event) => setResponsibilities(event.target.value)}></textarea>
            </div>

            <div className="inputLabel">
                <div><label className="label">Start date of employment: </label></div>
                <input className="input" type="text" name="start date of employment" value={startOfEmployment}
                // Updates `variables` state when input changes
                onChange={(event) => setStartOfEmployment(event.target.value)}/>
            </div>
            
            <div className="inputLabel">
                <div><label className="label">End date of employment: </label></div>
                <input className="input" type="text" name="end date of employment" value={endOfEmployment}
                // Updates `variables` state when input changes
                onChange={(event) => setEndOfEmployment(event.target.value)}/>
            </div>
        </div>
    )
}


export {GeneralInfo, Education, Experience}