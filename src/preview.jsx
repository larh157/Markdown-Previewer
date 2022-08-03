import React from "react";
import {marked} from 'marked';
import './preview.css'

marked.setOptions({
    breaks:true
  })

export const Preview = ({text}) =>(
<div id="preview" dangerouslySetInnerHTML={{
         __html:marked(text)} }>
</div>
);