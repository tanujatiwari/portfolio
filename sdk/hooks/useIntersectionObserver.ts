import { useEffect, useRef, useState } from 'react'

interface IIntersectionProps {
    callback?: IntersectionObserverCallback
    options?: IntersectionObserverInit
}

const defaultOptions = {
    threshold: 0.6,
    root: null,
    rootMargin: '0px',
}

export default function useIntersectionObserver({ callback, options = defaultOptions }: IIntersectionProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    const defaultCallback = (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries

        if (entry.isIntersecting) {
            setIsVisible(true)
        }
        console.log(entry)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callback || defaultCallback, options)
        if (ref.current) {
            observer.observe(ref.current)
        }
        return () => {
            if (ref.current) {
                observer.disconnect()
            }
        }
    }, [])

    return {
        isVisible,
        ref,
    }
}
