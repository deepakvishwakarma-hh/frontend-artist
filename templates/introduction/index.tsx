import classes from "../../styles/introduction.module.scss";



const Introduction = () => {
    return (
        <div className={classes.container}>
            <div className={classes.texts}>
                <p>Hello! <br />
                    Im Deepak Vishwakarma -  curious designer / developer 👈. Interested in futuristic designs, software user interfaces, science  & development tools, human interaction,
                    productivity, ethics. <br />
                    🕵️‍♀️    Currently Design *This website. </p>
            </div>
            <div className={classes.more}>
                <a href="#">  Github</a>

            </div>
        </div>
    )
}

export default Introduction