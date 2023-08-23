import React from 'react';
import Input from '../../components/Input';

function Brands({handleChange}) {
  return (
    <div>
      <h2 className="sidebar-title brand-title">BRAND</h2>
      <div>
      <label className="sidebar-label-container">
      <input onChange={handleChange} type='checkbox' value="" name="test3" />
          <span className="checkmark"></span>All
      </label>
      <Input
          handleChange={handleChange}
          value="Charu"
          title="Charu"
          name="test3"
        />
        <Input
          handleChange={handleChange}
          value="KALINI"
          title="KALINI"
          name="test3"
        />
        <Input
          handleChange={handleChange}
          value="Vishudh"
          title="Vishudh"
          name="test3"
        />
        <Input
          handleChange={handleChange}
          value="AHIKA"
          title="AHIKA"
          name="test3"
        />
        <Input
          handleChange={handleChange}
          value="Deewa"
          title="Deewa"
          name="test3"
        />
        <Input
          handleChange={handleChange}
          value="FabClub"
          title="FabClub"
          name="test3"
        />
        <Input
          handleChange={handleChange}
          value="Kiya"
          title="Kiya"
          name="test3"
        />
        <Input
          handleChange={handleChange}
          value="TEREZA"
          title="TEREZA"
          name="test3"
        />
        <Input
          handleChange={handleChange}
          value="Ishin"
          title="Ishin"
          name="test3"
        />
        <Input
          handleChange={handleChange}
          value="Sangria"
          title="Sangria"
          name="test3"
        />
      </div>
    </div>
  )
}

export default Brands
