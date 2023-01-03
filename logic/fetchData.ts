import insertionSort from './insertionSort';
const countriesAndTerritories:string[] = ['abkhazia','afghanistan', 'albania','algeria','americanSamoa','andorra','angola','anguilla','antiguaAndBarbuda','argentina','armenia','aruba','australia','austria','azerbaijan','bahamas','bahrain','bangladesh','barbados','belarus','belgium','belize','benin','bermuda','bhutan','bolivia','bonaire','bosniaAndHerzegovina','botswana','bouvetIsland','brazil','britishIndianOceanTerritory','britishVirginIslands','brunei','bulgaria','burkinaFaso','burundi','cambodia','cameroon','canada','capeVerde','caymanIslands','centralAfricanRepublic','chad','chile','china','colombia','comoros','cookIslands','costaRica','croatia','cuba','curacao','cyprus','czechRepublic','democraticRepublicOfTheCongo','denmark','djibouti','dominica','dominicanRepublic','eastTimor','ecuador','egypt','elSalvador','equatorialGuinea','eritrea','estonia','eswatini','ethiopia','falklandIslands','faroeIslands','fiji','finland','france','frenchGuiana','frenchPolynesia','gabon','gambia','georgia','germany','ghana','gibraltar','greece','greenland','grenada','guadeloupe','guam','guatemala','guernsey','guinea','guineaBissau','guyana','haiti','heardIslandAndMcDonaldIslands','honduras','hongKong','hungary','iceland','india','indonesia','iran','iraq','ireland','isleOfMan','israel','italy','ivoryCoast','jamaica','janMayen','japan','jersey','jordan','kazakhstan','kenya','kiribati','kosovo','kuwait','kyrgyzstan','laos','latvia','lebanon','lesotho','liberia','libya','liechtenstein','lithuania','luxembourg','macao','madagascar','malawi','malaysia','maldives','mali','malta','marshallIslands','martinique','mauritania','mauritius','mayotte','mexico','micronesia','moldova','monaco','mongolia','montenegro','montserrat','morocco','mozambique','myanmar','namibia','nauru','nepal','netherlands','newCaledonia','newZealand','nicaragua','niger','nigeria','niue','norfolkIsland','northernCyprus','northernMarianaIslands','northKorea','northMacedonia','norway','oman','pakistan','palau','palestine','panama','papuaNewGuinea','paraguay','peru','philippines','pitcairnIslands','poland','portugal','qatar','republicOfTheCongo','reunion','romania','russia','rwanda','saba','saintBarthelemy','saintHelena','saintKittsAndNevis','saintLucia','saintMartin','saintPierreAndMiquelon','saintVincentAndTheGrenadines','samoa','sanMarino','saoTomeAndPrincipe','saudiArabia','senegal','serbia','seychelles','sierraLeone','singapore','sintEustatius','sintMaarten','slovakia','slovenia','solomonIslands','somalia','southAfrica','southGeorgiaAndTheSouthSandwichIslands','southKorea','southOssetia','southSudan','spain','sriLanka','sudan','suriname','svalbard','sweden','switzerland','syria','taiwan','tajikistan','tanzania','thailand','togo','tokelau','tonga','transnistria','trinidadAndTobago','tunisia','turkey','turkmenistan','turksAndCaicos','tuvalu','uganda','ukraine','unitedArabEmirates','unitedKingdom','unitedStates','unitedStatesVirginIslands','uruguay','uzbekistan','vanuatu','vaticanCity','venezuela','vietnam','wallisAndFutuna','westernSahara','yemen','zambia','zimbabwe']
const passportsArray:any = ['abkhazia','afghanistan','albania','algeria','andorra','angola','anguilla','antiguaAndBarbuda','argentina','armenia','australia','austria','azerbaijan','bahamas','bahrain','bangladesh','barbados','belarus','belgium','belize','benin','bermuda','bhutan','bolivia','bosniaAndHerzegovina','botswana','brazil','britishVirginIslands','brunei','bulgaria','burkinaFaso','burundi','cambodia','cameroon','canada','capeVerde','caymanIslands','centralAfricanRepublic','chad','chile','china','colombia','comoros','costaRica','croatia','cuba','cyprus','czechRepublic','democraticRepublicOfTheCongo','denmark','djibouti','dominica','dominicanRepublic','eastTimor','ecuador','egypt','elSalvador','equatorialGuinea','eritrea','estonia','eswatini','ethiopia','fiji','finland','france','gabon','gambia','georgia','germany','ghana','greece','grenada','guatemala','guinea','guineaBissau','guyana','haiti','honduras','hongKong','hungary','iceland','india','indonesia','iran','iraq','ireland','israel','italy','ivoryCoast','jamaica','japan','jordan','kazakhstan','kenya','kiribati','kuwait','kyrgyzstan','laos','latvia','lebanon','lesotho','liberia','libya','liechtenstein','lithuania','luxembourg','macao','madagascar','malawi','malaysia','maldives','mali','malta','marshallIslands','mauritania','mauritius','mexico','micronesia','moldova','monaco','mongolia','montenegro','montserrat','morocco','mozambique','myanmar','namibia','nauru','nepal','netherlands','newZealand','nicaragua','niger','nigeria','northKorea','northMacedonia','norway','oman','pakistan','palau','palestine','panama','papuaNewGuinea','paraguay','peru','philippines','poland','portugal','qatar','republicOfTheCongo','romania','russia','rwanda','saintHelena','saintKittsAndNevis','saintLucia','saintVincentAndTheGrenadines','samoa','sanMarino','saoTomeAndPrincipe','saudiArabia','senegal','serbia','seychelles','sierraLeone','singapore','slovakia','slovenia','solomonIslands','somalia','southAfrica','southKorea','southOssetia','southSudan','spain','sriLanka','sudan','suriname','sweden','switzerland','syria','taiwan','tajikistan','tanzania','thailand','togo','tonga','trinidadAndTobago','tunisia','turkey','turkmenistan','turksAndCaicos','tuvalu','uganda','ukraine','unitedArabEmirates','unitedKingdom','unitedStates','uruguay','uzbekistan','vanuatu','vaticanCity','venezuela','vietnam','yemen','zambia','zimbabwe']

export default function fetchData(setVisaPolicyData:Function, setRankRender:Function) {
  let [visaFreeCount, visaOnArrivalEVisaCount, visaOnArrivalCount, eVisaCount, visaRequiredCount, total] = [0,0,0,0,0,0]
  const rankData = []
  fetch('visaPolicy.json')
  .then((res) => res.json())
  .then((data) => {
    for(const passport of passportsArray) {
      for(let countriesLoop = 0; countriesLoop < countriesAndTerritories.length; countriesLoop++) {
        if(data[passport][countriesAndTerritories[countriesLoop]] == 8 || countriesLoop == countriesAndTerritories.length - 1) {visaOnArrivalEVisaCount++}
        if(data[passport][countriesAndTerritories[countriesLoop]] == 9 || countriesLoop == countriesAndTerritories.length - 1) {visaOnArrivalCount++}
        if(data[passport][countriesAndTerritories[countriesLoop]] == 10 || countriesLoop == countriesAndTerritories.length - 1) {eVisaCount++}
        if(data[passport][countriesAndTerritories[countriesLoop]] == 14 || data[passport][countriesAndTerritories[countriesLoop]] == 12 || data[passport][countriesAndTerritories[countriesLoop]] == 11 || data[passport][countriesAndTerritories[countriesLoop]] == 13 || countriesLoop == countriesAndTerritories.length - 1) {visaRequiredCount++}
        if(data[passport][countriesAndTerritories[countriesLoop]] == 2 || data[passport][countriesAndTerritories[countriesLoop]] == 3 || data[passport][countriesAndTerritories[countriesLoop]] == 4 || data[passport][countriesAndTerritories[countriesLoop]] == 5 || data[passport][countriesAndTerritories[countriesLoop]] == 6 || data[passport][countriesAndTerritories[countriesLoop]] == 7 || countriesLoop == countriesAndTerritories.length - 1) {
          visaFreeCount++
          if(countriesLoop == countriesAndTerritories.length - 1) {
            visaFreeCount--;visaOnArrivalEVisaCount--;visaOnArrivalCount--;eVisaCount--;visaRequiredCount--
            total = visaFreeCount + visaOnArrivalEVisaCount + visaOnArrivalCount + eVisaCount
            rankData.push([passport, visaFreeCount, visaOnArrivalEVisaCount, visaOnArrivalCount, eVisaCount, visaRequiredCount, total])
          }
        }
      }
      [visaFreeCount, visaOnArrivalEVisaCount, visaOnArrivalCount, eVisaCount, visaRequiredCount, total] = [0,0,0,0,0,0]
    }
    setVisaPolicyData(rankData)
    insertionSort(rankData, setRankRender)
  })
}