import { createContext } from 'react';
const defaultState = { abkhazia:undefined, afghanistan:undefined, albania:undefined, algeria:undefined, americanSamoa:undefined, andorra:undefined, angola:undefined, anguilla:undefined, antiguaAndBarbuda:undefined, argentina:undefined, armenia:undefined, artsakh:undefined, aruba:undefined, australia:undefined, austria:undefined, azerbaijan:undefined, bahamas:undefined, bahrain:undefined, bangladesh:undefined, barbados:undefined, belarus:undefined, belgium:undefined, belize:undefined, benin:undefined, bermuda:undefined, bhutan:undefined, bolivia:undefined, bonaire:undefined, bosniaAndHerzegovina:undefined, botswana:undefined, brazil:undefined, britishIndianOceanTerritory:undefined, britishVirginIslands:undefined, brunei:undefined, bulgaria:undefined, burkinaFaso:undefined, burundi:undefined, cambodia:undefined, cameroon:undefined, canada:undefined, capeVerde:undefined, caymanIslands:undefined, centralAfricanRepublic:undefined, chad:undefined, chile:undefined, china:undefined, colombia:undefined, comoros:undefined, cookIslands:undefined, costaRica:undefined, croatia:undefined, cuba:undefined, curacao:undefined, cyprus:undefined, czechRepublic:undefined, democraticRepublicOfTheCongo:undefined, denmark:undefined, djibouti:undefined, dominica:undefined, dominicanRepublic:undefined, eastTimor:undefined, ecuador:undefined, egypt:undefined, elSalvador:undefined, equatorialGuinea:undefined, eritrea:undefined, estonia:undefined, eswatini:undefined, ethiopia:undefined, falklandIslands:undefined, faroeIslands:undefined, fiji:undefined, finland:undefined, france:undefined, frenchGuiana:undefined, frenchPolynesia:undefined, gabon:undefined, gambia:undefined, georgia:undefined, germany:undefined, ghana:undefined, gibraltar:undefined, greece:undefined, greenland:undefined, grenada:undefined, guadeloupe:undefined, guam:undefined, guatemala:undefined, guernsey:undefined, guinea:undefined, guineaBissau:undefined, guyana:undefined, haiti:undefined, honduras:undefined, hongKong:undefined, hungary:undefined, iceland:undefined, india:undefined, indonesia:undefined, iran:undefined, iraq:undefined, ireland:undefined, isleOfMan:undefined, israel:undefined, italy:undefined, ivoryCoast:undefined, jamaica:undefined, janMayen:undefined, japan:undefined, jersey:undefined, jordan:undefined, kazakhstan:undefined, kenya:undefined, kiribati:undefined, kosovo:undefined, kuwait:undefined, kyrgyzstan:undefined, laos:undefined, latvia:undefined, lebanon:undefined, lesotho:undefined, liberia:undefined, libya:undefined, liechtenstein:undefined, lithuania:undefined, luxembourg:undefined, macao:undefined, madagascar:undefined, malawi:undefined, malaysia:undefined, maldives:undefined, mali:undefined, malta:undefined, marshallIslands:undefined, martinique:undefined, mauritania:undefined, mauritius:undefined, mayotte:undefined, mexico:undefined, micronesia:undefined, moldova:undefined, monaco:undefined, mongolia:undefined, montenegro:undefined, montserrat:undefined, morocco:undefined, mozambique:undefined, myanmar:undefined, namibia:undefined, nauru:undefined, nepal:undefined, netherlands:undefined, newCaledonia:undefined, newZealand:undefined, nicaragua:undefined, niger:undefined, nigeria:undefined, niue:undefined, norfolkIsland:undefined, northernCyprus:undefined, northernMarianaIslands:undefined, northKorea:undefined, northMacedonia:undefined, norway:undefined, oman:undefined, pakistan:undefined, palau:undefined, panama:undefined, papuaNewGuinea:undefined, paraguay:undefined, peru:undefined, philippines:undefined, pitcairnIslands:undefined, poland:undefined, portugal:undefined, qatar:undefined, republicOfTheCongo:undefined, reunion:undefined, romania:undefined, russia:undefined, rwanda:undefined, saba:undefined, saintBarthelemy:undefined, saintHelena:undefined, saintKittsAndNevis:undefined, saintLucia:undefined, saintMartin:undefined, saintPierreAndMiquelon:undefined, saintVincentAndTheGrenadines:undefined, samoa:undefined, sanMarino:undefined, saoTomeAndPrincipe:undefined, saudiArabia:undefined, senegal:undefined, serbia:undefined, seychelles:undefined, sierraLeone:undefined, singapore:undefined, sintEustatius:undefined, sintMaarten:undefined, slovakia:undefined, slovenia:undefined, solomonIslands:undefined, somalia:undefined, somaliland:undefined, southAfrica:undefined, southKorea:undefined, southOssetia:undefined, southSudan:undefined, spain:undefined, sriLanka:undefined, sudan:undefined, suriname:undefined, svalbard:undefined, sweden:undefined, switzerland:undefined, syria:undefined, taiwan:undefined, tajikistan:undefined, tanzania:undefined, thailand:undefined, togo:undefined, tokelau:undefined, tonga:undefined, transnistria:undefined, trinidadAndTobago:undefined, tunisia:undefined, turkey:undefined, turkmenistan:undefined, turksAndCaicos:undefined, tuvalu:undefined, uganda:undefined, ukraine:undefined, unitedArabEmirates:undefined, unitedKingdom:undefined, unitedStates:undefined, unitedStatesVirginIslands:undefined, uruguay:undefined, uzbekistan:undefined, vanuatu:undefined, vaticanCity:undefined, venezuela:undefined, vietnam:undefined, wallisAndFutuna:undefined, westernSahara:undefined, yemen:undefined, zambia:undefined, zimbabwe:undefined };//context requires type declaration, provided here
interface ContextTypes { abkhazia:object; afghanistan:object; albania:object; algeria:object; americanSamoa:object; andorra:object; angola:object; anguilla:object; antiguaAndBarbuda:object; argentina:object; armenia:object; artsakh:object; aruba:object; australia:object; austria:object; azerbaijan:object; bahamas:object; bahrain:object; bangladesh:object; barbados:object; belarus:object; belgium:object; belize:object; benin:object; bermuda:object; bhutan:object; bolivia:object; bonaire:object; bosniaAndHerzegovina:object; botswana:object; brazil:object; britishIndianOceanTerritory:object; britishVirginIslands:object; brunei:object; bulgaria:object; burkinaFaso:object; burundi:object; cambodia:object; cameroon:object; canada:object; capeVerde:object; caymanIslands:object; centralAfricanRepublic:object; chad:object; chile:object; china:object; colombia:object; comoros:object; cookIslands:object; costaRica:object; croatia:object; cuba:object; curacao:object; cyprus:object; czechRepublic:object; democraticRepublicOfTheCongo:object; denmark:object; djibouti:object; dominica:object; dominicanRepublic:object; eastTimor:object; ecuador:object; egypt:object; elSalvador:object; equatorialGuinea:object; eritrea:object; estonia:object; eswatini:object; ethiopia:object; falklandIslands:object; faroeIslands:object; fiji:object; finland:object; france:object; frenchGuiana:object; frenchPolynesia:object; gabon:object; gambia:object; georgia:object; germany:object; ghana:object; gibraltar:object; greece:object; greenland:object; grenada:object; guadeloupe:object; guam:object; guatemala:object; guernsey:object; guinea:object; guineaBissau:object; guyana:object; haiti:object; honduras:object; hongKong:object; hungary:object; iceland:object; india:object; indonesia:object; iran:object; iraq:object; ireland:object; isleOfMan:object; israel:object; italy:object; ivoryCoast:object; jamaica:object; janMayen:object; japan:object; jersey:object; jordan:object; kazakhstan:object; kenya:object; kiribati:object; kosovo:object; kuwait:object; kyrgyzstan:object; laos:object; latvia:object; lebanon:object; lesotho:object; liberia:object; libya:object; liechtenstein:object; lithuania:object; luxembourg:object; macao:object; madagascar:object; malawi:object; malaysia:object; maldives:object; mali:object; malta:object; marshallIslands:object; martinique:object; mauritania:object; mauritius:object; mayotte:object; mexico:object; micronesia:object; moldova:object; monaco:object; mongolia:object; montenegro:object; montserrat:object; morocco:object; mozambique:object; myanmar:object; namibia:object; nauru:object; nepal:object; netherlands:object; newCaledonia:object; newZealand:object; nicaragua:object; niger:object; nigeria:object; niue:object; norfolkIsland:object; northernCyprus:object; northernMarianaIslands:object; northKorea:object; northMacedonia:object; norway:object; oman:object; pakistan:object; palau:object; panama:object; papuaNewGuinea:object; paraguay:object; peru:object; philippines:object; pitcairnIslands:object; poland:object; portugal:object; qatar:object; republicOfTheCongo:object; reunion:object; romania:object; russia:object; rwanda:object; saba:object; saintBarthelemy:object; saintHelena:object; saintKittsAndNevis:object; saintLucia:object; saintMartin:object; saintPierreAndMiquelon:object; saintVincentAndTheGrenadines:object; samoa:object; sanMarino:object; saoTomeAndPrincipe:object; saudiArabia:object; senegal:object; serbia:object; seychelles:object; sierraLeone:object; singapore:object; sintEustatius:object; sintMaarten:object; slovakia:object; slovenia:object; solomonIslands:object; somalia:object; somaliland:undefined; southAfrica:object; southKorea:object; southOssetia:object; southSudan:object; spain:object; sriLanka:object; sudan:object; suriname:object; svalbard:object; sweden:object; switzerland:object; syria:object; taiwan:object; tajikistan:object; tanzania:object; thailand:object; togo:object; tokelau:object; tonga:object; transnistria:object; trinidadAndTobago:object; tunisia:object; turkey:object; turkmenistan:object; turksAndCaicos:object; tuvalu:object; uganda:object; ukraine:object; unitedArabEmirates:object; unitedKingdom:object; unitedStates:object; unitedStatesVirginIslands:object; uruguay:object; uzbekistan:object; vanuatu:object; vaticanCity:object; venezuela:object; vietnam:object; wallisAndFutuna:object; westernSahara:object; yemen:object; zambia:object; zimbabwe:object; };//context requires type declaration, provided here

export const PassportContext = createContext<ContextTypes>(defaultState); //provides passports imports through context