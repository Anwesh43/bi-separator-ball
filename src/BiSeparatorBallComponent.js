import React from 'react'
import {useStyle} from './hooks'

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

export default BiSeparatorBallPresentational
