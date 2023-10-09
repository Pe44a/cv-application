
function GeneralInfo({name, setName, lastName, setLastName, email, setEmail, phoneNumber, setPhoneNumber}) {

    return (
    <div className="inputForm">
        <div >
            <label>Enter your name: </label>
            <input type="text" name="name" value={name}
             onChange={(event) => setName(event.target.value)}/>
        </div>
        <div >
            <label>Enter your last name: </label>
            <input type="text" name="last name"  value={lastName}
             onChange={(event) => setLastName(event.target.value)}/>
        </div>
        <div >
            <label>Email: </label>
            <input type="email" name="email"  value={email} 
            onChange={(event) => setEmail(event.target.value)}/>
        </div>
        <div >
            <label>Phone number: </label>
            <input type="tel" name="phone number"  value={phoneNumber}  
            onChange={(event) => setPhoneNumber(event.target.value)}/>
        </div>
    </div>
    )
}


function Education({titleOfStudy, setTitleOfStudy, schoolName, setSchoolName}) {

    return (
    <div className="inputForm">
        <div >
            <label>Title of study: </label>
            <input type="text" name="title of study" value={titleOfStudy} 
            onChange={(event) => setTitleOfStudy(event.target.value)}/>
        </div>
        <div >
            <label>School name: </label>
            <input type="text" name="school name" value={schoolName} 
            onChange={(event) => setSchoolName(event.target.value)}/>
        </div>
    </div>
    )
}

function Experience(companyName, setCompanyName, positionTitle, setPositionTitle,
                     responsibilities, setResponsibilities, startDate, setStartDate, endDate, setEndDate
    ) {

    return (
    <div className="inputForm">
        <div >
            <label>Company name: </label>
            <input type="text" name="company name" value={companyName}
            onChange={(event) => setCompanyName(event.target.value)}/>
        </div>
        <div >
            <label>Position title: </label>
            <input type="text" name="position title" value={positionTitle}
            onChange={(event) => setPositionTitle(event.target.value)}/>
        </div>
        <div >
            <label>Main responsibilities: </label>
            <input type="text" name="main responsibilities" value={responsibilities}
            onChange={(event) => setResponsibilities(event.target.value)}/>
        </div>
        <div >
            <label>Start date of employment: </label>
            <input type="text" name="start date of employment" value={startDate}
            onChange={(event) => setStartDate(event.target.value)}/>
        </div>
        <div >
            <label>End date of employment: </label>
            <input type="text" name="end date of employment" value={endDate}
            onChange={(event) => setEndDate(event.target.value)}/>
        </div>
    </div>)
}


export {GeneralInfo, Education, Experience}