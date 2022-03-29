/* eslint-disable @next/next/no-img-element */

import classes from "../../styles/project.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const squareVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 100 }
};

const Wrapper = ({ date, heading, paragraph, images, index }: any) => {

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");

        }
    }, [controls, inView]);


    const imageMapper = images?.map((src: string, index: any) => {
        return <img key={index} src={src} alt="project related images" />
    })

    const style = {
        backgroundImage: 'url(' + `/wrapper/${index}.png` + ')',
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={squareVariants}
            style={style}
            className={classes.wrapper}>

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