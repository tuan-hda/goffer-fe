import { TbHeartHandshake, TbPlayerRecord, TbSparkles, TbWaveSine } from 'react-icons/tb'
import { useMotionValue, useTransform, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useSpring } from 'use-spring'

const LandingPage = () => {
    const [floatY, setFloatY] = useState(0)
    const floatYRef = useRef(0)
    const direction = useRef(1)
    const [floatSecY, setFloatSecY] = useState(0)
    const floatYSecRef = useRef(5)
    const directionSec = useRef(1)

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [currentX] = useSpring(x)
    const [currentY] = useSpring(y)
    const xSpring = useMotionValue(0)
    const ySpring = useMotionValue(0)

    const rotateX = useTransform(ySpring, [-1, 1], ['-165deg', '-185deg'])
    const rotateY = useTransform(xSpring, [-1, 1], ['15.5deg', '-16.5deg'])
    const rotateSecX = useTransform(ySpring, [-1, 1], ['-17.5deg', '17.5deg'])
    const rotateSecY = useTransform(xSpring, [-1, 1], ['-197.5deg', '-163.5deg'])

    // Spring effect
    useEffect(() => {
        xSpring.set(currentX)
        ySpring.set(currentY)
    }, [currentX, currentY])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const left = e.clientX
            const top = e.clientY

            const middleX = window.innerWidth / 2
            const middleY = window.innerHeight / 2
            const l = left - middleX
            const t = top - middleY
            const pctX = l / middleX
            const pctY = t / middleY

            setX(pctX)
            setY(pctY)
        }

        document.addEventListener('mousemove', handleMouseMove)
        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            floatYRef.current += 0.175 * direction.current
            setFloatY(floatYRef.current)
            if (Math.abs(floatYRef.current) > 15) {
                direction.current *= -1
            }
        }, 1000 / 60)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            floatYSecRef.current += 0.225 * directionSec.current
            setFloatSecY(floatYSecRef.current)
            if (Math.abs(floatYSecRef.current) > 15) {
                directionSec.current *= -1
            }
        }, 1000 / 60)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className='flex w-full h-full'>
            <div className='m-auto flex flex-col items-center relative z-10'>
                <img src='/logo.svg' alt='logo' className='w-10 h-10' />
                <p className='mt-5'>Hi there. We're Goffer.</p>
                <p className='font-serif font-semibold text-5xl mt-2'>Offer to your quality candidates.</p>
                <p className='font-serif font-semibold text-5xl mt-2'>Got offer from your recruiter.</p>
                <div className='flex items-center gap-5 mt-6'>
                    <div className='flex items-center gap-1'>
                        <TbWaveSine className='text-2xl' /> Audio Responses
                    </div>
                    <div className='flex items-center gap-1'>
                        <TbPlayerRecord className='text-2xl' /> Video Responses
                    </div>
                    <div className='flex items-center gap-1'>
                        <TbSparkles className='text-2xl' /> Artificial Intelligence
                    </div>
                    <div className='flex items-center gap-1'>
                        <TbHeartHandshake className='text-2xl' /> Network
                    </div>
                </div>
                <div className='flex items-center justify-center gap-2 font-light text-sm text-gray-600 mt-2'>
                    Press <img src='/space-button.svg' className='w-16 h-16 opacity-50' /> or use arrow keys
                </div>
            </div>
            <motion.img
                src='/assets/tunnel.png'
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                    translateY: floatY,
                }}
                className='w-[35vw] fixed -z-0 select-none'
            />
            <motion.img
                style={{
                    rotateX: rotateSecX,
                    rotateY: rotateSecY,
                    transformStyle: 'preserve-3d',
                    translateY: floatSecY,
                }}
                src='/assets/cone.png'
                className='w-[36vw] fixed right-10 bottom-10 select-none'
            />
        </div>
    )
}

export default LandingPage
