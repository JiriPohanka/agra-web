import ContactCard from "../contactGrid/ContactCard"
import ContactGrid from "../contactGrid/ContactGrid"
import contactItems from "../contactGrid/contactItems"
import { v4 as uuidv4 } from 'uuid';
import LocationCard from "../locationGrid/LocationCard";

const Contact = () => {


    const contactCards = contactItems.map(item => <ContactCard contact={item} key={uuidv4()} />)

    return (
        <div>
            <h1 className="p-4">Kontaktujte nás</h1>
            <p className="p-4">Zde je copy a základní kontaktní údaje jako ičo, datovka a emailová adresa.</p>
            <ContactGrid children={contactCards} />
            <h2>Kde nás najdete</h2>
            <LocationCard />
        </div>
    )
}

export default Contact
