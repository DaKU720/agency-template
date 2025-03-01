import { Helmet } from "react-helmet-async";
import {motion} from "framer-motion"

import Navbar from "../../components/organisms/Navbar"
import Hero from "../../components/organisms/Hero"
import Team from "../../components/organisms/Team"

import "../../assets/scss/App.scss"

const PreviewLayout = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* META TAGS */}
                <Helmet>
                    <title>Agency Template</title>
                    <meta name="description" content="We build modern, fast, and responsive websites & apps." />
                    <meta property="og:title" content="Daku Studio - Web & App Development" />
                    <meta property="og:description" content="Check out our latest projects in web development and design!" />
                    <meta property="og:image" content="https://dakustudio.com/images/preview-thumbnail.jpg" />
                    <meta property="og:url" content="https://dakustudio.com" />
                </Helmet>

                {/* Website Structure */}
                <div className="container mx-auto min-h-screen flex flex-col">
                    <Navbar />
                    <Hero />
                    <Team />
                </div>
            </motion.div>
        </>
    );
};

export default PreviewLayout;