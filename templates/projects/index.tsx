import classes from "../../styles/project.module.scss"
import Wrapper from "./wrapper"
const Project = () => {
    return (
        <div className={classes.container}>

            <Wrapper
                link="https://github.com/deepakvishwakarma-hh/live-forms"
                index={3}
                date="2021"
                heading="Liveforms ~ Powerfull & Free Tool for Develop , Deploy , Analyse Forms."
                paragraph="The platform enables users to manage and analyse their form and form-database with greater transparency in a permissionless environment with a simplified and straightforward interface. Free for all makes it possible for everyday people to survey in a familiar environment but with decentralization at its core.."
                images={['/project/liveforms-1.png', '/project/liveforms-2.png', '/project/liveforms-3.png', '/project/liveforms-4.png']}
            />

            <Wrapper
                link="https://github.com/deepakvishwakarma-hh/momentary-talk"
                index={0}
                date="2020"
                heading="Momentary ~ Web application"
                paragraph=" Momentary is Secure Web Application.
                Here user can create ( Generate Chat room ) and  Chat secreatly."
                images={['https://camo.githubusercontent.com/1aa6f7e6d8d9dcb0882ddc730080d89a03411ba13a1c6d1aea025a517a48e0e0/68747470733a2f2f692e6962622e636f2f4e46647a386d532f636f6e6669672d77616c2d776974682d686c2e706e67', 'https://camo.githubusercontent.com/88613f6d50aace257c2b233b2c30e5e5cb54c6e37aa26c097a7507c3957df8c0/68747470733a2f2f692e6962622e636f2f356878434c6b722f726f6f6d2d62616c6c2e706e67', 'https://camo.githubusercontent.com/1a80683293dfa94ae4722e18e552f7fbacd22a55c1fb6d099fdd97ab0b3a99cf/68747470733a2f2f692e6962622e636f2f634463387a4b362f6c6f67696e2d57616c6c2e706e67', "https://camo.githubusercontent.com/52b7dab777bac3e36ae8c9548f1889feca9adf72291b4bbc8905502e11c4e807/68747470733a2f2f692e6962622e636f2f336378566d58382f73657474696e672d706f7075702d6163746976652e706e67"]}
            />

            <Wrapper
                link="https://github.com/deepakvishwakarma-hh/crypto-market"
                index={1}
                date="2020"
                heading="Cryptoinf Place ~ Web application"
                paragraph="Cryptoinf fetch data from crypo api and show result. it is simple to use.
                Live Fetching is Now available."
                images={['/project/crypto.png', '/project/crypto1.png', '/project/crypto2.png']}
            />
            <Wrapper
                link="https://github.com/deepakvishwakarma-hh/blog-website-nextjs"
                index={2}
                date="2020"
                heading="Blogoo ~ Web application"
                paragraph="In Blogoo, you can create mini-blog and share blog link."
                images={['/project/blogoo.png', '/project/blogoo2.png',]}
            />

            <Wrapper
                link="https://www.fiverr.com/deepak_vishwa/make-fast-react-website-web-development?context_referrer=user_page&ref_ctx_id=4b08a337ce1549d3d877353145f129b7&pckg_id=1&pos=1&imp_id=2b84d001-9747-41e9-ab5c-d993bcd81769"
                index={2}
                date="2023"
                heading="Freelance - Stock Website Customization"
                paragraph="Customizations were done on this project in which new page was created, API was fetched and data was rendered in table form. the client was from america"
                images={['/project/fiverr-stock-website-1.png']}
            />


        </div>
    )
}

export default Project