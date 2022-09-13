import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const CostaRica = () => {

    const { costaRicaColor } = useContext(ColorContext)

return (
<g className={'costaRica'}>
    <style jsx>{`
    .costaRica {
    fill: ${costaRicaColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M514.6 431.6l1.2 3.5 2 2.6 2.5 2.7-2.2 0.6-0.1 2.6 1.1 0.9-0.9 0.8 0.2 1.1-0.6 1.3-0.3 1.3-3-1.4-1.1-1.4 0.7-1.1-0.1-1.4-1.5-1.5-2.2-1.3-1.8-0.8-0.3-1.9-1.4-1.1 0.2 1.8-1.2 1.6-1.2-1.8-1.7-0.7-0.7-1.2 0.1-2 0.9-2-1.5-0.9 1.4-1.3 0.9-0.8 3.6 1.7 1.3-0.8 1.8 0.5 0.8 1.3 1.7 0.5 1.4-1.4z" stroke="black"/>
</g>
)
}

export default CostaRica