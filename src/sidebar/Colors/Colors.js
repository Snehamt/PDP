import React from "react";
import Input from "../../components/Input";

function Colors({handleChange}) {
  return (
    <div className="color-sidebar">
      <h2 className="sidebar-title color-title">COLOR</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type='checkbox' value="" name="test1" />
        <span className="checkmark all"></span>
        All
      </label>

      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test1"
        color="black"
      />

      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test1"
        color="blue"
      />

      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="test1"
        color="red"
      />

      <Input
        handleChange={handleChange}
        value="yellow"
        title="Yellow"
        name="test1"
        color="yellow"
      />

      <Input
        handleChange={handleChange}
        value="orange"
        title="Orange"
        name="test1"
        color="orange"
      />
      <Input
          handleChange={handleChange}
          value="pink"
          title="Pink"
          name="test1"
          color="pink"
        />
        <Input
          handleChange={handleChange}
          value="brown"
          title="Brown"
          name="test1"
          color="brown"
        />

      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="test1"
        color="green"
      />

      <label className="sidebar-label-container">
        <input
          onChange={handleChange}
          type="radio"
          value="white"
          name="test1"
        />
        <span
          className="checkmark"
          style={{ background: "white", border: "2px solid black" }}
        ></span>
        White
      </label>
    </div>
  );
}

export default Colors;
