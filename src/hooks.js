import {useState, useEffect} from 'react'
import {divideScale} from './util'

export const useAnimatedScale = (scGap, delay) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale,
        start() {
            if (!animated) {
                var currScale = scale
                setAnimated(true)
                const interval = setInterval(() => {
                    currScale += scGap
                    setScale(currScale)
                    if (currScale > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
    return {
        w,
        h
    }
}

export const useStyle = (w, h, scale) => {
    const fixedX = w / 2
    const fixedY = h / 2
    const position = 'absolute'
    const size = Math.min(w, h) / 6
    const sc1 = divideScale(scale, 0, 3)
    const sc2 = divideScale(scale, 1, 3)
    const sc3 = divideScale(scale, 2, 3)
    const background = '#4CAF50'
    return {
        getCircleStyle(i) {
            const si = 1 - 2 * i
            const x = (fixedX - size / 2) * (1 - si * sc1 + si * sc3)
            const y = (fixedY - size / 2) * (1 + sc2 - sc3)
            const width = `${size}px`
            const height = `${size}px`
            const left = `${x}px`
            const top = `${y}px`
            const borderRadius = '50%'
            return {
                position,
                left,
                top,
                background,
                width,
                height,
                borderRadius
            }
        }
    }
}
