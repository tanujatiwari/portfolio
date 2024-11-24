import Button from '@/sdk/components/button'
import Heading from '@/sdk/components/heading'
import { footerBottomTexts, footerTopTexts } from '@/sdk/constants'
import useIntersectionObserver from '@/sdk/hooks/useIntersectionObserver'
import clsx from 'clsx'
import Link from 'next/link'

export function Footer() {
    const { isVisible, ref } = useIntersectionObserver({})
    return (
        <footer
            ref={ref}
            className='bg-primary-light h-[calc(100vh-60px)] w-[calc(100vw-60px)] rounded-2xl py-10 px-[30px] flex flex-col justify-between'
        >
            <div className='flex items-center justify-between [&>p:nth-child(even)]:bold-heading [&>p:nth-child(even)]:bold-heading [&>p:nth-child(even)]:!text-[22px]  [&>p:nth-child(even)]:!leading-normal [&>p:nth-child(even)]:!font-normal [&>p:nth-child(even)]:!text-primary-dark-150'>
                {footerTopTexts.map(text => (
                    <p className='text-lg font-semibold' key={text}>
                        {text}
                    </p>
                ))}
            </div>
            <div className='text-center space-y-5'>
                <div className='space-y-2.5'>
                    <p className='text-[22px] font-semibold capitalize'>Have a project in mind?</p>
                    <div>
                        <div className='flex justify-center gap-10 overflow-y-hidden'>
                            <Heading
                                text="Let's"
                                className={clsx(
                                    '!text-primary-dark-150 !text-[156px] !leading-[148px] opacity-0',
                                    { 'relative footer-container-heading-1': isVisible }
                                )}
                            />
                            <Heading
                                text='work'
                                className={clsx(
                                    '!text-primary-dark-150 !text-[156px] !leading-[148px] opacity-0',
                                    { 'relative footer-container-heading-2 ': isVisible }
                                )}
                            />
                        </div>
                        <div className='overflow-y-hidden'>
                            <Heading
                                text='Together'
                                className={clsx(
                                    '!text-primary-dark-150 !text-[156px] !leading-[148px] opacity-0',
                                    { 'relative footer-container-heading-3 ': isVisible }
                                )}
                            />
                        </div>
                    </div>
                </div>
                <Button
                    className='border-2 border-black rounded-[70px] mx-auto  capitalize py-[23px] px-[27px]  h-[70px] relative group duration-300'
                    animationVariant='fill'
                >
                    <div className='overflow-hidden relative'>
                        <p className='group-hover:!text-white absolute z-10 bottom-[-30px] group-hover:bottom-0 !text-primary-dark-150 leading-normal text-[22px] duration-300'>
                            Get in touch
                        </p>
                        <p className=' relative z-10 bottom-0 group-hover:bottom-[30px] duration-300 !text-primary-dark-150 leading-normal text-[22px]'>
                            Get in touch
                        </p>
                    </div>
                    <div className='text-black group-hover:w-full group-hover:h-full absolute bg-black bottom-0 w-0 h-0 duration-200 !rounded-full' />
                </Button>
            </div>
            <div className='flex items-center justify-between'>
                {footerBottomTexts.map((text, idx) => {
                    if (Array.isArray(text)) {
                        return (
                            <ul className='flex gap-[50px]' key={idx}>
                                {text.map(link => (
                                    <li key={link.name} className='overflow-hidden relative w-max'>
                                        <div className='group'>
                                            <Link
                                                className={clsx(
                                                    'text-lg font-semibold bottom-[30px] group-hover:bottom-0 duration-500 absolute'
                                                )}
                                                href={link.href}
                                            >
                                                {link.name}
                                            </Link>
                                            <Link
                                                className={clsx(
                                                    'text-lg font-semibold bottom-0 relative group-hover:bottom-[-30px] duration-500'
                                                )}
                                                href={link.href}
                                            >
                                                {link.name}
                                            </Link>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )
                    }
                    return (
                        <p key={text} className='text-lg font-semibold '>
                            {text}
                        </p>
                    )
                })}
            </div>
        </footer>
    )
}
