import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Comoros = () => {

    const { comorosColor } = useContext(ColorContext)

return (
<g className={'comoros'}>
    <style jsx>{`
    .comoros {
    fill: ${comorosColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M 1233.2 581.3 1232.3 581.2 1232.1 580.8 1232.1 580.5 1232.6 580.6 1233.3 581.1 1233.2 581.3 Z" />
<path d="M 1236.9 579.4 1237.1 580.4 1237.1 581.1 1237 581.3 1236.8 581 1236.4 580.7 1236.3 580.5 1236 580.4 1235.4 580 1235.5 579.9 1236 580.1 1236.3 580 1236.5 579.6 1236.5 579.4 1236.8 579.3 1236.9 579.4 Z" />
<path d="M 1231.2 578.4 1230.7 578 1230.4 577.9 1230.1 577.7 1229.9 577.1 1230 576.8 1230 576.6 1230.2 575.4 1230.1 575.3 1230.3 574.9 1230.8 574.8 1231 575.1 1230.8 576.3 1230.9 576.6 1231.1 577 1231.2 577.5 1231.4 578.1 1231.2 578.4 Z" />
<circle r="5" cy="500" cx="545" stroke="black"/>
</g>
)
}

export default Comoros