import ContactCard from "../components/contactGrid/ContactCard"
import ContactGrid from "../components/contactGrid/ContactGrid"
import contactItems from "../components/contactGrid/contactItems"
import locationItems from "../components/locationGrid/locationItems"
import LocationCard from "../components/locationGrid/LocationCard";
import LocationGrid from "../components/locationGrid/LocationGrid";

const Contact = () => {


    const contactCards = contactItems.map(item => <ContactCard contact={item} key={item.id} />)
    // const iframes = locationItems.map(el => <Iframe iframe={el.iFrame} />)
    const locationCards = locationItems.map(item => <LocationCard item={item} key={item.id} />)


    return (
        <div>
            <h1 className="p-4">Kontaktujte nás</h1>
            <p className="p-4">Zde je copy a základní kontaktní údaje jako ičo, datovka a emailová adresa.</p>
            <ContactGrid children={contactCards} />
            <h2>Kde nás najdete</h2>
            <LocationGrid children={locationCards} />
        </div>
    )
}

export default Contact
