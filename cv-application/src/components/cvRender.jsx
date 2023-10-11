

function CvRender({name, lastName, email, phoneNumber, titleOfStudy, schoolName, companyName, positionTitle, responsibilities, startOfEmployment, endOfEmployment}) {

    return(
    <div>
        <div>{name}</div>
        <div>{lastName}</div>
        <div>{email}</div>
        <div>{phoneNumber}</div>
        <div>{titleOfStudy}</div>
        <div>{schoolName}</div>
        <div>{companyName}</div>
        <div>{positionTitle}</div>
        <div>{responsibilities}</div>
        <div>{startOfEmployment}</div>
        <div>{endOfEmployment}</div>
    </div>
    )
}

export default CvRender;