import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const CaymanIslands = () => {

    const { caymanIslandsColor } = useContext(ColorContext)

return (
<g className={'caymanIslands'}>
    <style jsx>{`
    .caymanIslands {
    fill: ${caymanIslandsColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M 532.7 377.8 533 377.9 533.2 377.5 533.6 377.6 534.1 377.6 534.2 377.8 534 378 533.8 377.9 533.4 378 533.2 378.1 532.5 378.1 532.7 377.8 Z" />
<path d="M 540.8 375.3 540.1 375.6 540.3 375.3 540.8 375.3 Z" />
<path d="M 541.4 375.4 541.3 375.3 542.1 375 541.9 375.3 541.4 375.4 Z" />
<circle r="5" cy="500" cx="540" stroke="black"/>
</g>
)
}

export default CaymanIslands