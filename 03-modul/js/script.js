import { display, display2, displayStyled } from "./lib.js";

display("Hello World!");
display2("Hello World2!");

// Additional examples to showcase new functionality
displayStyled("Styled Message 1", { 
  color: 'white', 
  backgroundColor: 'blue',
  padding: '10px',
  fontWeight: 'bold'
});

displayStyled("Styled Message 2", { 
  color: 'green', 
  backgroundColor: 'lightyellow',
  margin: '5px'
});