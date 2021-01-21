import { useState } from "react";
import { v4 as uuid } from 'uuid';

/** Box
 *
 * Props:
 *  - backgroundColor (string)
 *  - width (number in px)
 *  - height (number in px)
 *  - removeBox (function)
 *
  * App -> BoxList -> { Box, NewBoxForm }
 */

 function Box({ backgroundColor, width, height, removeBox }) {
   const style = {
     backgroundColor,
     width: `${width}px`,
     height: `${height}px`,
   }

   return (
    <div className="Box">
      <div style={style}></div>
      <button onClick={removeBox}>REMOVE BOX</button>
    </div>
   )
 }

 export default Box;
