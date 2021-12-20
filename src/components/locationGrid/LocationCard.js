import Iframe from "./Iframe"

const LocationCard = ({ item }) => {

    // AIzaSyD1nehP8FaokWwthWusg7ifYgdP10uw_ic

    return (
        <div className="flex">
            <div className="h-60 w-60">
                <div className="absolute bg-gray-300 opacity-80">
                    <h3>{item.title}</h3>
                    <p>{`${item.street}, ${item.postCode} ${item.city}`}</p>
                </div>
                <img className="object-cover h-full w-full" src="https://www.agra-risuty.cz/uploads/photos/ledce.jpg"></img>
            </div>
            <Iframe iframe={item.iFrame} />
        </div>
    )
}

export default LocationCard
