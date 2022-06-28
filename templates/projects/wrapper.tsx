/* eslint-disable @next/next/no-img-element */
import Router from "next/router";
import { useEffect } from "react";
import classes from "../../styles/project.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const squareVariants = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, }
};

const Wrapper = ({ date, heading, paragraph, images, index, link }: any) => {

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

    const onClick = () => {
        window && window.open(link, '_ blank')
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={squareVariants}
            style={style}
            onClick={onClick}
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