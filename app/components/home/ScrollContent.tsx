import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
    wrap,
} from 'framer-motion'
import { useRef } from 'react'

interface ParallaxProps {
    text: string
    baseVelocity: number
}

export function ScrollContent({ text, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0)
    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 1000,
        stiffness: 1000,
    })
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    })

    const x = useTransform(baseX, v => `${wrap(-20, -45, v)}%`)

    const directionFactor = useRef<number>(0)
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1
        } else if (velocityFactor.get() === 0) {
            directionFactor.current = 0
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get()

        baseX.set(baseX.get() + moveBy)
    })

    return (
        <div className='overflow-hidden whitespace-nowrap flex-nowrap flex'>
            <motion.div
                className='flex flex-nowrap whitespace-nowrap items-center gap-20'
                style={{ x }}
            >
                <p className='text-primary-light text-center bold-heading !text-[216px] !leading-[216px]'>
                    {text}
                </p>
                <div className='w-10 h-10 bg-white' />
                <p className='text-primary-light text-center bold-heading !text-[216px] !leading-[216px]'>
                    {text}
                </p>
                <div className='w-10 h-10 bg-white' />
                <p className='text-primary-light text-center bold-heading !text-[216px] !leading-[216px]'>
                    {text}
                </p>
                <div className='w-10 h-10 bg-white' />
                <p className='text-primary-light text-center bold-heading !text-[216px] !leading-[216px]'>
                    {text}
                </p>
            </motion.div>
        </div>
    )
}

// export const ScrollContent = ({ text }: { text: string }) => {
//     return (
//         <div className='flex whitespace-nowrap'>
//             {/* <div className='flex items-center justify-center gap-[30px] whitespace-nowrap'> */}
//         </div>
//     )
// }
