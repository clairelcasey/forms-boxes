import { useState } from "react";


/* NewBoxForm
 * Props: addBox (function, adds a box)
 * State: formData{width(in px), height(in px), backgroundColor}
 * App -> BoxList -> { Box, NewBoxForm }
 */
function NewBoxForm({addBox}){
  const initialState = {width:"100", height:"100", backgroundColor:"purple"};
  const [formData, setFormData] = useState(initialState);

  /* Handle form changes */
  function handleChange(evt){
    const {name, value} = evt.target;
    setFormData(fData => ({...fData, [name]: value}));
  }

  /* Handle form submit
   * Add a box based on formdata
   * reset formData to initial state
   */
  function handleSubmit(evt){
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="width">Width</label>
        <input onChange={handleChange} type="number" id="width" name="width" value={formData.width}></input>

        <label htmlFor="height">Height</label>
        <input onChange={handleChange} type="number" id="height" name="height" value={formData.height}></input>

        <label htmlFor="backgroundColor">backgroundColor</label>
        <input onChange={handleChange} id="backgroundColor" name="backgroundColor" value={formData.backgroundColor}></input>

        <button type="submit">Add box!</button>
      </form>
    </div>
  );
}

export default NewBoxForm;
