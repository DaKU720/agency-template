import {motion} from "framer-motion"

import Navbar from "../../components/organisms/Navbar"
import Hero from "../../components/organisms/Hero"
import Team from "../../components/organisms/Team";
import Services from "../../components/organisms/Services";
import Clients from "../../components/organisms/Clients";

import ExtraFooter from '../../components/organisms/ExtraFooter'

import "../../assets/scss/App.scss"

const PreviewLayout = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Website Structure */}
                <div className="container mx-auto min-h-screen flex flex-col">
                    <Navbar />
                    <Hero />
                    <Team />
                    <Services />
                    <Clients />
                    <ExtraFooter />
                </div>
            </motion.div>
        </>
    );
};

export default PreviewLayout;
