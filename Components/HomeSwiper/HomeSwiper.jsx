import React from 'react'
import { ChargerCard } from '../Cards/ChargerCard'
import { Block } from 'galio-framework'
import { useAppContext } from '../../Context/AppContext'

export default function HomeSwiper(props) {
  const {SICON,TIocn,AC, DC,Star}=props;
  const {selectedMarker, setSelectedMarker,isMarkerModalVisible, setMarkerModalVisible} = useAppContext()
    const InitialChargerData={StaionID:"48",lat:26.833408,lng:75.7141464,title:"Highway King Neemrana",icon:"assets/icon/IconM.gif",Rating:"4.5",Status:"Available",Place:"Neemrana",Distance:"10 km",Reviews:"23",travelTime:"18"}

     
  return (
    <ChargerCard   ChargerData={selectedMarker} SICON={SICON} TIocn={TIocn} AC={AC} DC={DC} Star={Star}/>
   
    
  )
}

