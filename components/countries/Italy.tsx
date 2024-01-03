import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Italy:React.FC = () => {

  const { it } = useContext(ColorContext)
  const { IT } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'italy'} onMouseOver={() => setCountrySelect('italy')}>
  <style jsx>{`
  .italy {
  fill: ${it};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="it" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#it)" />
</defs>
{(IT == 1) ?
<>
<path fill="url(#it)" d="M 1068.2 256.4 1066.5 261.5 1067.4 263.4 1066.5 266.7 1062.3 264.3 1059.6 263.6 1052.1 260.4 1052.6 257.1 1058.8 257.7 1064.2 257 1068.2 256.4 Z" stroke="black"/>
<path fill="url(#it)" d="M 1034.2 237.4 1037.5 241.9 1037.1 250.4 1034.7 250 1032.6 252.1 1030.6 250.4 1030.1 242.7 1028.8 239.1 1031.7 239.4 1034.2 237.4 Z" stroke="black"/>
<path fill="url(#it)" d="M 1055.9 203.9 1055.5 207 1056.9 209.7 1052.8 208.7 1048.9 211 1049.3 214.1 1048.8 215.9 1050.7 219.1 1055.7 222.3 1058.6 227.6 1064.7 232.7 1068.7 232.6 1070.1 234 1068.7 235.3 1073.5 237.6 1077.5 239.5 1082.2 242.9 1082.8 244 1082 246.3 1078.9 243.3 1074.3 242.3 1072.4 246.4 1076.3 248.8 1075.9 252.1 1073.8 252.5 1071.3 258 1069.1 258.5 1069 256.5 1069.9 253.1 1071 251.7 1068.7 248 1066.9 244.8 1064.7 244 1062.9 241.3 1059.5 240.1 1057.1 237.5 1053.3 237.1 1049 234.3 1044.1 230.1 1040.4 226.5 1038.5 220.2 1035.9 219.5 1031.7 217.4 1029.4 218.2 1026.5 221.2 1024.4 221.6 1024.9 218.9 1022.1 218.1 1020.6 213.2 1022.3 211.3 1020.8 208.9 1020.9 207.1 1023.1 208.5 1025.6 208.2 1028.3 206 1029.2 207 1031.6 206.8 1032.6 204.3 1036.4 205.1 1038.5 204 1038.8 201.5 1041.9 202.4 1042.4 201.2 1047.3 200.1 1048.6 202.2 1055.9 203.9 Z" stroke="black"/>
</>
:
<>
<path d="M 1068.2 256.4 1066.5 261.5 1067.4 263.4 1066.5 266.7 1062.3 264.3 1059.6 263.6 1052.1 260.4 1052.6 257.1 1058.8 257.7 1064.2 257 1068.2 256.4 Z" stroke="black"/>
<path d="M 1034.2 237.4 1037.5 241.9 1037.1 250.4 1034.7 250 1032.6 252.1 1030.6 250.4 1030.1 242.7 1028.8 239.1 1031.7 239.4 1034.2 237.4 Z" stroke="black"/>
<path d="M 1055.9 203.9 1055.5 207 1056.9 209.7 1052.8 208.7 1048.9 211 1049.3 214.1 1048.8 215.9 1050.7 219.1 1055.7 222.3 1058.6 227.6 1064.7 232.7 1068.7 232.6 1070.1 234 1068.7 235.3 1073.5 237.6 1077.5 239.5 1082.2 242.9 1082.8 244 1082 246.3 1078.9 243.3 1074.3 242.3 1072.4 246.4 1076.3 248.8 1075.9 252.1 1073.8 252.5 1071.3 258 1069.1 258.5 1069 256.5 1069.9 253.1 1071 251.7 1068.7 248 1066.9 244.8 1064.7 244 1062.9 241.3 1059.5 240.1 1057.1 237.5 1053.3 237.1 1049 234.3 1044.1 230.1 1040.4 226.5 1038.5 220.2 1035.9 219.5 1031.7 217.4 1029.4 218.2 1026.5 221.2 1024.4 221.6 1024.9 218.9 1022.1 218.1 1020.6 213.2 1022.3 211.3 1020.8 208.9 1020.9 207.1 1023.1 208.5 1025.6 208.2 1028.3 206 1029.2 207 1031.6 206.8 1032.6 204.3 1036.4 205.1 1038.5 204 1038.8 201.5 1041.9 202.4 1042.4 201.2 1047.3 200.1 1048.6 202.2 1055.9 203.9 Z" stroke="black"/>
</>
}
</g>
)
}

export default Italy