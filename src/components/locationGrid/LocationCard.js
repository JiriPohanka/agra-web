import locationItems from "./locationItems"

const Iframe = (props) => {
    console.log(props.iframe)
    return (
        < div
            dangerouslySetInnerHTML={{ __html: props.iframe }
            }
        />
    )
}

const { iFrame } = locationItems[0]


const LocationCard = () => {

    // AIzaSyD1nehP8FaokWwthWusg7ifYgdP10uw_ic

    console.log(iFrame)
    return (
        <Iframe iframe={iFrame} />
    )
}

export default LocationCard
