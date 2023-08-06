import React, { useState } from 'react';
import './filterModal.css';
import FilterMenu from './FilterMenu/FilterMenu';
import SortBy from '../../FilterItem/FilterModal/FilterMenu/SortBy/SortBy';
import Cuisines from '../../FilterItem/FilterModal/FilterMenu/Cuisines/Cuisines';
import Rating from '../../FilterItem/FilterModal/FilterMenu/Rating/Rating';
import CostPerPerson from '../../FilterItem/FilterModal/FilterMenu/CostPerPerson/CostPerPerson';
import MoreFilters from '../../FilterItem/FilterModal/FilterMenu/MoreFilters/MoreFilters';


export default function FilterModal() {
  // Tabing System
  const [activeMenu, setActiveMenu] = useState("Sort by");

  const getCorrectMenu = (menu) => {
    switch (menu) {
      case "Sort By":
        return <SortBy />
        break;
      case "Cuisines":
        return <Cuisines />
        break;
      case "Rating":
        return <Rating />
        break;
      case "Cost Per Person":
        return <CostPerPerson />
        break;
      case "More Filters":
        return <MoreFilters />
        break;
      default:
        return <SortBy />
        break;
    }
  }
  return (
    <div>
      {/* Button trigger modal */}
      <div className='filter-item mb-3 mb-md-0 d-flex align-items-center me-3 border cursor-pointer px-2 py-2' data-bs-toggle="modal"
        data-bs-target="#exampleModal">
        <i className="fa-solid fa-filter me-2"></i> Filters
      </div>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg filterModal">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Filter
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body p-0">
              <div className="row">
                <div className="col-4"> 
                  <div className='Filter-left-Menu'>
                    <FilterMenu activeMenu={activeMenu}
                      setActiveMenu={setActiveMenu}
                    />
                  </div>
                </div>
                <div className="col-8">
                  {getCorrectMenu(activeMenu)}
                </div>

              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Clear All
              </button>
              <button type="button" className="btn btn-primary">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
