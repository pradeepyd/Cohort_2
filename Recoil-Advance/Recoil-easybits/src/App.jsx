import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobAtom, networkAtom ,notificationAtom,messagingAtom, totalCount} from './store/atom'

function App() {
  
 return <RecoilRoot>
    <MainApp/>
 </RecoilRoot>
  
}

function MainApp(){
  const networkCount = useRecoilValue(networkAtom)
  const jobAtomCount = useRecoilValue(jobAtom)
  const [messagingAtomCount ,setMessagingAtomCount] = useRecoilState(messagingAtom)
  const notificationAtomCount = useRecoilValue(notificationAtom)
  const totalNumCount = useRecoilValue(totalCount)

  function addCount(c){
   return (c) >= 100 ? "99+" : c
  }
  return (
    <>
     <button>Home</button>
 
     <button>My Network({addCount(networkCount)})</button>
     <button>Jobs({addCount(jobAtomCount)})</button>
     <button>Messaging({addCount(messagingAtomCount)})</button>
     <button>Notifications({addCount(notificationAtomCount)})</button>
 
     <button>Me({totalNumCount})</button>
    </>
   )
}

export default App
