import facebookPosts from './facebookPosts'
import FacebookCard from './FacebookCard'
import {useEffect} from "react"
import { v4 as uuidv4 } from 'uuid'

const FacebookGrid = () => {

    useEffect(() => {
        window.fbAsyncInit = () => {
            window.FB.init({
                appId            : '276911294492916',
                autoLogAppEvents : true,
                xfbml            : true,
                version          : 'v11.0'
            });
        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }, []);

    const cards = facebookPosts.map((postUrl) => <FacebookCard
        url={postUrl}
        key={uuidv4()}
    />)

    return (
        <div className="grid p-4 gap-4 grid-cols-3 grid-rows-3">
            {cards}
        </div>
    )
}

export default FacebookGrid