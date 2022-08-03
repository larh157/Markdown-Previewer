import React from "react";
import './text-area.css'


export function TexArea ({agregarInput, text}){



return(
<textarea name="editor" id="editor" cols="30" rows="33" onChange={agregarInput} value={text}>
   
</textarea>
)

}