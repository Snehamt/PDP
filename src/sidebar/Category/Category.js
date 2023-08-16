import React from 'react';
import './Category.css';
import Input from '../../components/Input';

function Category({handleChange}) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
      <label className="sidebar-label-container">
      <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
      </label>
      <Input
          handleChange={handleChange}
          value="Salwar and Dupatta"
          title="Salwar & Duppata"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Fashion Wear"
          title="Fashion Wear"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Lehenga Choli"
          title="Lehenga Choli"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="T-Shirts and Tops"
          title="T-Shirts & Tops"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Jeans"
          title="Jeans"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Jackets"
          title="Jackets"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Sarees"
          title="Sarees"
          name="test"
        />
      </div>
    </div>
  )
}

export default Category
