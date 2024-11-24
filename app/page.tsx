'use client'
import Button from '@/sdk/components/button'
import Heading from '@/sdk/components/heading'
import { projects } from '@/sdk/constants'
import clsx from 'clsx'
import { ElementType, ReactNode, useState } from 'react'
import { FaArrowDown } from 'react-icons/fa'
import { Footer, Menu, ProjectContainer, ScrollContent } from './components'

const DoubleComponent = ({
    as: Component,
    className,
    children,
    firstComponentClassName,
    secondComponentClassName,
    ...rest
}: {
    as: ElementType
    className?: string
    children?: ReactNode
    firstComponentClassName?: string
    secondComponentClassName?: string
    [key: string]: any
}) => {
    return (
        <>
            <Component
                className={clsx(
                    'group-hover:top-1 duration-300 top-[-100px]',
                    className,
                    firstComponentClassName
                )}
                {...rest}
            >
                {children}
            </Component>
            <Component
                className={clsx(
                    'group-hover:-bottom-5 duration-300 bottom-[6px]',
                    className,
                    secondComponentClassName
                )}
                {...rest}
            >
                {children}
            </Component>
        </>
    )
}

export default function Home() {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <main
            className={clsx('bg-primary-dark-150 ', {
                '!overflow-hidden !h-screen': showMenu,
            })}
        >
            {/* <Cursor /> */}
            <section className='h-screen w-screen bg-[url("/images/header.jpg")] bg-cover bg-no-repeat flex items-end justify-center relative mb-[90px] scale-down'>
                <Menu setShowMenu={setShowMenu} showMenu={showMenu} />
                <div
                    className='absolute bg-primary-light w-[60px] h-[60px] z-10 top-10 right-10 rounded-full p-[15px] flex flex-col justify-center items-center gap-2.5 group animation-menu opacity-0'
                    role='button'
                    onClick={() => setShowMenu(p => !p)}
                >
                    <hr className='border-black border-[1.1px] top-6 group-hover:top-9 duration-500 absolute w-[28px]' />
                    <hr className='border-black border-[1.1px] top-9 group-hover:top-6 duration-500 absolute w-[28px]' />
                </div>
                <div
                    className={clsx('bg-headerBg h-screen w-screen absolute p-10', {
                        'fade-bg bg-black': showMenu,
                    })}
                />
                <div className={clsx('relative z-10 flex flex-col items-center gap-4 p-10 ')}>
                    <div>
                        <div className='overflow-hidden'>
                            <Heading
                                text='Creative Design Agency'
                                className='text-center relative animation-heading-1 opacity-0'
                            />
                        </div>
                        <div className='overflow-hidden'>
                            <Heading
                                text='Based In London'
                                className='text-center relative animation-heading-2 opacity-0'
                            />
                        </div>
                    </div>
                    <div className='overflow-hidden'>
                        <Heading
                            text='Our Design Agency Specializes In Creating Innovative And Impactful Solutions
                        That Elevate Your Brand And Engage Your Audience.'
                            className='text-center !text-2xl max-w-[800px] !font-normal !font-inter !capitalize animation-heading-3 relative opacity-0'
                        />
                    </div>

                    <div className='overflow-hidden'>
                        <Button
                            variant='link'
                            href='#about'
                            onClick={() => window.scrollTo({ behavior: 'smooth' })}
                            prefix={
                                <DoubleComponent as={FaArrowDown} className='absolute left-0' />
                            }
                            suffix={
                                <DoubleComponent as={FaArrowDown} className='absolute right-0' />
                            }
                            className='text-lg gap-x-2 mt-4 font-semibold group relative !px-7 overflow-hidden animation-button opacity-0'
                        >
                            Scroll To Explore
                        </Button>
                    </div>
                </div>
            </section>
            <section className='space-y-[140px] py-[60px]' id='about'>
                <div className=''>
                    <ScrollContent text='Your partner for' baseVelocity={-3} />
                    <ScrollContent text='digital experience' baseVelocity={3} />
                </div>
                <div className='h-[60vh]'>
                    <div className='max-w-[960px] text-center flex items-center justify-center flex-col gap-y-[60px] mx-auto'>
                        <Heading text='About Us' className='!text-4xl' />
                        <Heading
                            text=' We are a passionate team of designers, developers, and strategists dedicated
                        to transforming your ideas into visually stunning and effective designs'
                            className='!text-[56px] !leading-[61px]'
                        />
                        <div className='overflow-hidden relative group'>
                            <button className='mx-auto bold-heading !text-[22px] !leading-normal !text-secondary-green-light bottom-[-30px] group-hover:bottom-0 group-hover:!text-white duration-300 absolute'>
                                More About Us
                            </button>
                            <button className='mx-auto bold-heading !text-[22px] !leading-normal !text-secondary-green-light bottom-0 relative group-hover:bottom-[30px] duration-300'>
                                More About Us
                            </button>
                            <hr className='w-0 group-hover:w-full duration-500' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='p-[30px] space-y-10 '>
                {projects.map((project, index) => (
                    <ProjectContainer key={project.title} index={index} {...project} />
                ))}
            </section>
            <section className='p-[30px]'>
                <Footer />
            </section>
        </main>
    )
}
