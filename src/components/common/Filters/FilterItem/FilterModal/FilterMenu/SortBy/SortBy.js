import React from 'react'

export default function SortBy() {
  return (
    <div className='mt-4'>
      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="popularity"
        />
        <label className="form-check-label" htmlFor="popularity">
          Popularity
        </label>
      </div>
      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="rating"
        />
        <label className="form-check-label" htmlFor="rating">
          Rating: High to Low
        </label>
      </div>
      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="deliveryTime"
        />
        <label className="form-check-label" htmlFor="deliveryTime">
          Delivery Time
        </label>
      </div>
      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="lowest"
        />
        <label className="form-check-label" htmlFor="lowest">
          Cost: Low to High
        </label>
      </div>
      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="highest"
        />
        <label className="form-check-label" htmlFor="highest">
          Cost: High to Low
        </label>
      </div>

    </div>
  )
}
