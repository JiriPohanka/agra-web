const ContactGrid = ({ children }) => {
    return (
        <div className="grid p-4 gap-4 grid-cols-3 grid-rows-3">
            {children}
        </div>
    )
}

export default ContactGrid
