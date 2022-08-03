import './App.css';
// import { Preview } from './preview';
import { useState} from 'react';
import { TexArea } from './text-area';

import { Preview } from './preview';

function App() {


  const [text, setText] = useState(
  `# H1\n
  ## H2\n
  **bold text** \n
  > blockquote\n
- First item
- Second item
- Third item\n
[link](https://www.example.com)\n
![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/FreeCodeCamp_logo.svg/320px-FreeCodeCamp_logo.svg.png)\n
  \`code\`
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`
`);





  const agregarInput = (evento)=>{
     setText(evento.target.value);
  };


  return (
    <div className="App">
      <div className='agregarInput'>
  <TexArea agregarInput={agregarInput} text={text}/>
  </div>
  <div className='separar'>  
  </div>
   
      <div className="preview"
        ><Preview text={text}/></div>
    </div>
  );
}

export default App;
