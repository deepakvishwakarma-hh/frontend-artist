import classes from "../../styles/project.module.scss"
import Wrapper from "./wrapper"
const Project = () => {
    return (
        <div className={classes.container}>

            <Wrapper
                date="2020 - current"
                heading="Momentary ~ Web application"
                paragraph=" Momentary is Secure Web Application.
                Here user can create ( Generate Chat room ) and  Chat secreatly."
                images={['https://camo.githubusercontent.com/1aa6f7e6d8d9dcb0882ddc730080d89a03411ba13a1c6d1aea025a517a48e0e0/68747470733a2f2f692e6962622e636f2f4e46647a386d532f636f6e6669672d77616c2d776974682d686c2e706e67', 'https://camo.githubusercontent.com/88613f6d50aace257c2b233b2c30e5e5cb54c6e37aa26c097a7507c3957df8c0/68747470733a2f2f692e6962622e636f2f356878434c6b722f726f6f6d2d62616c6c2e706e67']}
            />



            <Wrapper
                date="2020 - current"
                heading="Cryptoinf Place ~ Web application"
                paragraph="cryptoinf fetch data from crypo api and show result. it is simple to use.
                Live Fetching is Now available."
                images={['https://camo.githubusercontent.com/1aa6f7e6d8d9dcb0882ddc730080d89a03411ba13a1c6d1aea025a517a48e0e0/68747470733a2f2f692e6962622e636f2f4e46647a386d532f636f6e6669672d77616c2d776974682d686c2e706e67', 'https://camo.githubusercontent.com/88613f6d50aace257c2b233b2c30e5e5cb54c6e37aa26c097a7507c3957df8c0/68747470733a2f2f692e6962622e636f2f356878434c6b722f726f6f6d2d62616c6c2e706e67']}
            />


        </div>
    )
}

export default Project