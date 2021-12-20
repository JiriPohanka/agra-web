const Iframe = ({ iframe }) => {
    return (
        < div
            dangerouslySetInnerHTML={{ __html: iframe }
            }
        />
    )
}

export default Iframe