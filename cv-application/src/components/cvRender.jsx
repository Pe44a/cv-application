

function CvRender({name, lastName, email, phoneNumber, titleOfStudy, schoolName, companyName, positionTitle, responsibilities, startOfEmployment, endOfEmployment}) {

    return(
    <div className="cv">
        <div className="header">
            <div className="fullName"> {name } {lastName}</div>
        </div>

        <div className="navBar">
            <div className="contacts">
                <h1>Contacts</h1>

                <ul>
                    <li>{email}</li>
                    <li>{phoneNumber}</li>
                </ul>
            </div>

            <div className="education">
                <h1>Education</h1>
                <ul>
                    <li>{titleOfStudy}</li>
                    <li>{schoolName}</li>
                </ul>
            </div>
        </div>

        <div className="main">
            <div className="experience">
                <h1>Experience</h1>

                <h2>Company name</h2>
                <div className="experienceChild">{companyName}</div>

                <h2>Position title</h2>
                <div className="experienceChild">{positionTitle}</div>

                <h2>Responsibilities</h2>
                <div className="experienceChild">{responsibilities}</div>

                <h2>Time of employment</h2>
                <div className="experienceChild">Start date:{startOfEmployment}</div>
                <div className="experienceChild">End date:{endOfEmployment}</div>
            </div>
        </div>
    </div>
    )
}

export default CvRender;