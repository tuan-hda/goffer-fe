import { motion } from 'framer-motion';

type RevealProps = {
    children?: React.ReactNode;
};

const Fade = ({ children }: RevealProps) => {
    return (
        <motion.div
            variants={{
                hidden: {
                    opacity: 0,
                    x: -100,
                },
                visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 0.5,
                    },
                },
            }}
            initial="hidden"
            animate="visible"
        >
            {children}
        </motion.div>
    );
};

export default Fade;
