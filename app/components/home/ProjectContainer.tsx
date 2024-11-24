import { Chip } from '@/sdk/components'
import Heading from '@/sdk/components/heading'
import { projects } from '@/sdk/constants'
import useIntersectionObserver from '@/sdk/hooks/useIntersectionObserver'
import clsx from 'clsx'

import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'

type ProjectType = (typeof projects)[0]

interface IProps extends ProjectType {
    className?: string
    index: number
}

export function ProjectContainer({
    className,
    link,
    subtitle,
    img,
    tags,
    title,
    year,
    index,
}: IProps) {
    const { isVisible, ref } = useIntersectionObserver({})
    const { scrollYProgress, scrollY } = useScroll()

    const scrollRef = useRef()

    return (
        <motion.div
            className={clsx(
                `h-[calc(100vh-60px)] w-[calc(100vw-60px)] bg-cover bg-center bg-no-repeat rounded-2xl top-[30px] sticky overflow-y-hidden`,
                className
            )}
            style={{
                backgroundImage: `url(${img})`,
            }}
            role='button'
            ref={ref}
            id={index.toString()}
            transition={{ duration: 1 }}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 1 }}
            key={index}
        >
            <div className='h-3/4 w-full bg-projectsBg absolute bottom-0' />
            <div className='px-[30px] py-10 z-10 relative h-full flex flex-col justify-between'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-2.5'>
                        {tags?.map(tag => <Chip key={tag} text={tag} />)}
                    </div>
                    <Chip text={year} />
                </div>
                <div className='max-w-[75%] mx-auto space-y-2.5'>
                    <div className='overflow-hidden'>
                        <Heading
                            text={title}
                            className={clsx('!text-[108px] text-center opacity-0', {
                                'relative project-container-heading-1 ': isVisible,
                            })}
                        />
                    </div>
                    <div className='overflow-hidden'>
                        <Heading
                            text={subtitle}
                            className={clsx(
                                '!text-[22px] !leading-8 !font-inter text-center !normal-case  opacity-0',
                                { 'relative project-container-heading-2': isVisible }
                            )}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
