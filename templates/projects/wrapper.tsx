/* eslint-disable @next/next/no-img-element */

import classes from "../../styles/project.module.scss";
import { motion, useAnimation } from "framer-motion";

const Wrapper = ({ date, heading, paragraph, images }: any) => {

    const imageMapper = images?.map((src: string, index: any) => {
        return <img key={index} src={src} alt="project related images" />
    })

    return (
        <motion.div className={classes.wrapper}>
            <h3>{date}</h3>
            <div className={classes.content}>
                <h1>{heading}</h1>
                <p>{paragraph}</p>
            </div>
            <div className={classes.image_showcase}>
                {imageMapper}
            </div>
        </motion.div>

    )
}
export default Wrapper;