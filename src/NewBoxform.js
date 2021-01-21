import { useState } from "react";


/* NewBoxForm
 * Props: addBox (function, adds a box)
 * State: formData{width(in px), height(in px), backgroundColor}
 */
function NewBoxForm({addBox}){
  const initialState = {width:"", height:"", backgroundColor:""};
  const [formData, setFormData] = useState(initialState);

  /* Handle form changes */
  function handleChange(evt){
    const {name, value} = evt.target;
    setFormData(fData => ({...fData, [name]: value}));
  }

  function handleSubmit(evt){
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  return (<div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width</label>
      <input onChange={handleChange} id="width" name="width" value={formData.width}></input>

      <label htmlFor="height">Height</label>
      <input onChange={handleChange} id="height" name="height" value={formData.height}></input>

      <label htmlFor="backgroundColor">backgroundColor</label>
      <input onChange={handleChange} id="backgroundColor" name="backgroundColor" value={formData.backgroundColor}></input>

      <button type="submit">Add box!</button>
    </form>
    </div>);
}

export default NewBoxForm;
