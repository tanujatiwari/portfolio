import Button from '@/sdk/components/button'
import { menuLinks, socialLinks } from '@/sdk/constants'
import clsx from 'clsx'
import Link from 'next/link'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { RxCross1 } from 'react-icons/rx'

interface IMenuProps {
    setShowMenu: Dispatch<SetStateAction<boolean>>
    showMenu: boolean
}

export function Menu({ setShowMenu, showMenu }: IMenuProps) {
    const [onlyOnce, setOnlyOnce] = useState(false)

    useEffect(() => {
        if (!showMenu) setOnlyOnce(false)
    }, [showMenu])

    return (
        <div
            className={clsx(
                'absolute h-screen w-screen bg-primary-dark-50 z-20 p-[50px] flex flex-col justify-between  top-[100%]',
                { '!top-0 animate-up': showMenu, invisible: !showMenu }
            )}
        >
            <div
                className='bg-primary-light w-[60px] h-[60px] z-10 top-0 right-0 rounded-full p-[15px] flex flex-col justify-center items-center gap-2.5 ml-auto'
                role='button'
                onClick={() => setShowMenu(p => !p)}
            >
                <RxCross1 className='w-[30px] h-[30px]' />
            </div>
            <ul className='space-y-2.5'>
                {menuLinks.map((link, index) => {
                    return (
                        <li key={link.name} className='overflow-hidden relative w-max'>
                            <div className='group'>
                                <Link
                                    className={clsx(
                                        'text-primary-light bold-heading !leading-[144px] !text-[144px] absolute top-[150px] group-hover:top-0 duration-300 group-hover:!delay-0'
                                    )}
                                    href={link.href}
                                >
                                    {link.name}
                                </Link>
                                <Link
                                    className={clsx(
                                        'text-primary-light bold-heading !leading-[144px] !text-[144px] relative bottom-[-200px] group-hover:!bottom-[150px] !duration-300 group-hover:!delay-0',
                                        {
                                            '!bottom-0 animate-up-slow': showMenu,
                                        }
                                    )}
                                    onMouseOver={() => setOnlyOnce(true)}
                                    href={link.href}
                                    style={{
                                        transitionDelay: !onlyOnce
                                            ? `${300 + index * 200}ms`
                                            : '0ms',
                                    }}
                                >
                                    {link.name}
                                </Link>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <div className='overflow-hidden'>
                <div
                    className={clsx(
                        'flex justify-between relative bottom-0' //bottom-[-200px]
                        // {
                        //     'animate-up-slow !bottom-0': showMenu,
                        // }
                    )}
                    // style={{
                    //     transitionDelay: `${300 + menuLinks.length * 200}ms`,
                    // }}
                >
                    <div className='overflow-hidden group'>
                        <Button
                            variant='link'
                            href='mailto:suryansh06shahi@gmail.com'
                            className='font-semibold bottom-[30px] group-hover:bottom-0 duration-500 absolute'
                        >
                            john.doe@gmail.com
                        </Button>
                        <Button
                            variant='link'
                            href='mailto:suryansh06shahi@gmail.com'
                            className='font-semibold bottom-0 relative group-hover:bottom-[-30px] duration-500'
                        >
                            john.doe@gmail.com
                        </Button>
                    </div>

                    <ul className='flex gap-[30px]'>
                        {socialLinks.map(link => (
                            <li key={link.name}>
                                <div className='group'>
                                    <Link
                                        className='text-primary-light font-semibold absolute bottom-[30px] group-hover:bottom-0 duration-500 '
                                        href={link.href}
                                    >
                                        {link.name}
                                    </Link>
                                    <Link
                                        className={clsx(
                                            'text-primary-light font-semibold relative bottom-0 group-hover:bottom-[-30px] duration-500 ',
                                            {
                                                '!bottom-0 animate-up-slow': showMenu,
                                            }
                                        )}
                                        href={link.href}
                                        onMouseOver={() => setOnlyOnce(true)}
                                        style={{
                                            transitionDelay: `${300 + menuLinks.length * 200}ms`,
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
