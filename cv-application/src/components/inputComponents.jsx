
function GeneralInfo() {

    return (
    <div className="inputForm">
        <div >
            <label>Enter your name: </label>
            <input type="text" name="name"/>
        </div>
        <div >
            <label>Enter your last name: </label>
            <input type="text" name="last name"/>
        </div>
        <div >
            <label>Email: </label>
            <input type="email" name="email"/>
        </div>
        <div >
            <label>Phone number: </label>
            <input type="tel" name="phone number"/>
        </div>
    </div>
    )
}


function Education() {

    return (
    <div className="inputForm">
        <div >
            <label>Title of study: </label>
            <input type="text" name="title of study"/>
        </div>
        <div >
            <label>School name: </label>
            <input type="text" name="school name"/>
        </div>
    </div>
    )
}

function Experience() {

    return (
    <div className="inputForm">
        <div >
            <label>Company name: </label>
            <input type="text" name="company name"/>
        </div>
        <div >
            <label>Position title: </label>
            <input type="text" name="position title"/>
        </div>
        <div >
            <label>Main responsibilities: </label>
            <input type="text" name="main responsibilities"/>
        </div>
        <div >
            <label>Start date of employment: </label>
            <input type="text" name="start date of employment"/>
        </div>
        <div >
            <label>End date of employment: </label>
            <input type="text" name="end date of employment"/>
        </div>
    </div>)
}


export {GeneralInfo, Education, Experience}