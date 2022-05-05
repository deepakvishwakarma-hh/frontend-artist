import classes from "../../styles/introduction.module.scss";
import { motion } from 'framer-motion'


const Introduction = () => {

    const varients = {
        initial: { opacity: 0, skew: 20 },
        animate: { opacity: 1, skew: 0, transition: { duration: 1 } },
    }

    return (
        <div className={classes.container}>
            <div className={classes.texts}>
                <motion.p variants={varients} animate="animate" initial="initial">Hello! <br />
                    Im Deepak Vishwakarma -  curious designer /  developer 👈. Interested in futuristic designs, software user interfaces, science  & development tools, human interaction,
                    productivity, ethics. <br />
                    🕵️‍♀️ Currently Finding Opportunities. </motion.p>
            </div>
            <div className={classes.more}>
                <a href="https://github.com/deepakvishwakarma-hh" target={"_parent"}>  Github</a>

            </div>
        </div>
    )
}

export default Introduction
