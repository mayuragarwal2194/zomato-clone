import React from 'react';
import './tabOptions.css';
import activeDelivery from '../../../images/active_delivery.png';
import inactiveDelivery from '../../../images/inactive_delivery.png';
import activeDiningout from '../../../images/active_diningout.png';
import inactiveDiningout from '../../../images/inactive_diningout.png';
import activeNightlife from '../../../images/active_nightlife.png';
import inactiveNightlife from '../../../images/inactive_nightlife.png';

export default function TabOptions({ activeTab, setActiveTab}) {
  const tabs = [
    {
      id: 1,
      name: "Delivery",
      active_img: activeDelivery,
      backdrop: "#FCEEC0",
      inactive_backdrop: "#f8f8f8",
      inactive_img: inactiveDelivery,
    },
    {
      id: 2,
      name: "Dining Out",
      active_img: activeDiningout,
      backdrop: "#E5F3F3",
      inactive_backdrop: "#f8f8f8",
      inactive_img: inactiveDiningout,
    },
    {
      id: 3,
      name: "Nightlife",
      active_img: activeNightlife,
      backdrop: "#EDF4FF",
      inactive_backdrop: "#f8f8f8",
      inactive_img: inactiveNightlife,
    }
  ]
  return (
    <div className='container-fluid p-0'>
      <div className="tab-shadow mt-5">
        <div className='container'>
          <div className='d-flex align-items-center flex-wrap'>
            {tabs.map((tab) => {
              return (
                <div key={tab.id} onClick={() => setActiveTab(tab.name)} className={`cursor-pointer ${activeTab === tab.name && "active-tab"}`}>
                  <div className="card border-0 d-flex flex-row align-items-center mx-4 pb-3">
                    <div className='tab-image rounded-circle d-flex align-items-center justify-content-center' style={{ backgroundColor: `${activeTab === tab.name ? tab.backdrop : tab.inactive_backdrop}` }}>
                      <img src={activeTab === tab.name ? tab.active_img : tab.inactive_img} className="card-img-top" alt={tab.name} />
                    </div>
                    <h5 className="card-title tab-name ms-3">{tab.name}</h5>
                  </div>

                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
