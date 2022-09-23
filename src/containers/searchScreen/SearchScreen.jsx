import { Search } from "../../components/search-screen/search/Search";
import { useContext } from "react";
import { ScreenToggleContext } from "../../context/context";
import { motion, AnimatePresence } from 'framer-motion'


export function SearchScreen() {
    const { isOpen } = useContext(ScreenToggleContext)


    // Obrazovke vyhladavania som dal jednoduchu animaciu
    return (
        <AnimatePresence>
            {
                isOpen &&
                <motion.section className="search-screen"
                    initial={{height: 0}}
                    animate={{height: '96%'}}
                    exit={{height: 0}}
                    transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                    }}
                >
                    <h4>Location</h4>
                    <Search />
                </motion.section>
            }
        </AnimatePresence>

    )
}