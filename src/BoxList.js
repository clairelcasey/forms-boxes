import { useState } from "react";
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from 'uuid';


/** BoxList: renders Box components and NewBoxForm 
 * 
 * State:
 *  - boxes: array [ {backgroundColor, width, height} ...]
 * 
 * App -> BoxList -> { Box, NewBoxForm }
*/

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  /* Render boxes */
  function renderBoxes() {
    return (
      <div>
        { boxes.map(box =>
          <Box
            backgroundColor={box.backgroundColor}
            width={box.width}
            height={box.height}
            removeBox={evt => removeBox(id)}
          />)}
      </div>
    )
  }

  /* Add a new box */
  function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }

  /* Remove box (called by child element) */
  function removeBox(id) {
    setBoxes(boxes.filter(b => b.id !== id));
  }

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </div>
  );
}

export default BoxList;