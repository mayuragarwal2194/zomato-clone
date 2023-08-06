import React, { useState } from 'react'
import Header from '../../components/common/header/Header';
import TabOptions from '../../components/common/tabOption/TabOptions'
import Footer from '../../components/common/footer/Footer'
import Delivery from '../../components/Delivery/Delivery';
import DiningOut from '../../components/DiningOut/DiningOut';
import NightLife from '../../components/NightLife/NightLife';


export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Delivery");

  const getCorrectScreen = (tab) => {
    switch (tab) {
      case "Delivery":
        return <Delivery />
        break;
      case "Dining Out":
        return <DiningOut />
        break;
      case "NightLife":
        return <NightLife />
        break
    
      default:
        return <div>Delivery</div>
        break;
    }
  }

  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  )
}
