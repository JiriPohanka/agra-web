const ContactCard = (props) => {

    const { titleBefore,
        titleAfter,
        firstName,
        lastName,
        jobTitle,
        email,
        phone1,
        phone2
    } = props.contact

    return (
        <div className="p-4 bg-gray-300">
            <h3 className="">{`${titleBefore}${firstName} ${lastName}${titleAfter}`}</h3>
            <p>{jobTitle}</p>
            <p>{email}</p>
            <p>{phone1}</p>
            {phone2 && <p>{phone2}</p>}
        </div>
    )
}

export default ContactCard
