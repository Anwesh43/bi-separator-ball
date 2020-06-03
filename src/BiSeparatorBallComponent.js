import React from 'react'
import {useStyle, useAnimatedScale, useDimension} from './hooks'

const Circle = ({w, h, scale, i}) => {
    const {getCircleStyle} = useStyle(w, h, scale)
    return <div style = {getCircleStyle(i)}>
    </div>
}

const BiSeparatorBallPresentational = ({w, h, scale}) => {
    return <div>
        {[0, 1].map(i => <Circle i = {i} w = {w} h = {h} scale = {scale}/>)}
    </div>
}

const BiSeparatorBallComponent = (props) => {
    const {scale, start} = useAnimatedScale(0.02 / 3, 20)
    const {w, h} = useDimension()
    return <div onClick = {start}>
        <BiSeparatorBallPresentational w = {w} h = {h} scale = {scale} start = {start}/>
    </div>
}

export default BiSeparatorBallComponent
