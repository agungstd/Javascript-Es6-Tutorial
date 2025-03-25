function display(message) {
  const el = document.createElement("div");
  el.innerText = message;
  el.classList.add('display-message');
  document.body.appendChild(el);
}

function display2(message) {
  const el = document.createElement("div");
  el.innerText = message;
  el.classList.add('display-message-2');
  document.body.appendChild(el);
}

// Added a new function with styling options
function displayStyled(message, options = {}) {
  const el = document.createElement("div");
  el.innerText = message;
  
  // Apply custom styling if provided
  el.style.color = options.color || 'black';
  el.style.backgroundColor = options.backgroundColor || 'transparent';
  el.style.padding = options.padding || '5px';
  el.style.margin = options.margin || '2px';
  el.style.fontWeight = options.fontWeight || 'normal';
  el.classList.add('display-message-styled');

  document.body.appendChild(el);
  return el;
}

export { display, display2, displayStyled };