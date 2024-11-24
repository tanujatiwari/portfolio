'use client'
import AnimatedCursor from 'react-animated-cursor'

export const Cursor = () => {
    return (
        <AnimatedCursor
            innerSize={0}
            outerSize={30}
            color='180, 207, 203'
            outerAlpha={0.2}
            outerScale={2}
            outerStyle={{
                background: 'transparent',
                border: '2px solid #B4CFCB',
            }}
            trailingSpeed={5}
            showSystemCursor
        />
    )
}
