import { motion } from 'framer-motion';
import TrustedByLayout from './TrustedByLayout';

const Individual = () => {
    return (
        <TrustedByLayout title="Individual">
            <div className="h-full w-full relative">
                <motion.div
                    whileHover={{ scale: 1.1, backgroundColor: 'red', rotate: 0, zIndex: 1 }}
                    initial={{ rotate: -3, backgroundColor: 'rgb(245,245,245)', zIndex: 0 }}
                    transition={{ duration: 0.3 }}
                    key="individual"
                    className="absolute top-16 left-0 invert rounded-3xl h-80 w-64"
                ></motion.div>
                <motion.div
                    whileHover={{ scale: 1.1, backgroundColor: 'red', rotate: 0, zIndex: 1 }}
                    initial={{ rotate: 6, backgroundColor: 'rgb(245,245,245)', zIndex: 0 }}
                    transition={{ duration: 0.3 }}
                    key="individual"
                    className="absolute top-16 left-1/4 invert rounded-3xl h-80 w-64"
                ></motion.div>
                <motion.div
                    whileHover={{ scale: 1.1, backgroundColor: 'red', rotate: 0, zIndex: 1 }}
                    initial={{ rotate: -5, backgroundColor: 'rgb(245,245,245)', zIndex: 0 }}
                    transition={{ duration: 0.3 }}
                    key="individual"
                    className="absolute top-16 right-1/4 invert rounded-3xl h-80 w-64"
                ></motion.div>
                <motion.div
                    whileHover={{ scale: 1.1, backgroundColor: 'red', rotate: 0, zIndex: 1 }}
                    initial={{ rotate: 4, backgroundColor: 'rgb(245,245,245)', zIndex: 0 }}
                    transition={{ duration: 0.3 }}
                    key="individual"
                    className="absolute top-16 right-0 invert rounded-3xl h-80 w-64"
                ></motion.div>
            </div>
        </TrustedByLayout>
    );
};

export default Individual;
