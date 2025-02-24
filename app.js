const Box = document.querySelector('.box')
const colorSelector = document.querySelector('.color-selector')

const sizeSelector = document.querySelector('.size-selector')
const radiusSelector = document.querySelector('.radius-selector')
const horizontalSelector = document.querySelector('.horizontal-shadow')
const blurSelector = document.querySelector('.blur-shadow')
const verticalSelector = document.querySelector('.vertical-shadow')
const shadowColorSelector = document.querySelector('.shadow-color-selector')


const code = document.querySelector('.css-code')

function boxColor(){     
  cssCode() 
  if(colorSelector.value === "#fff" || colorSelector.value === "#ffffff"){
    colorValue.style.color = "#000"
  }
  else if(colorSelector.value === "#000" || colorSelector.value === "#000000"){
    colorValue.style.color = "#fff"
  }
Box.style.backgroundColor = colorSelector.value
}
function shadowColor(){
  cssCode()
  Box.style.boxShadow = `${horizontalSelector.value}px ${verticalSelector.value}px  ${blurSelector.value}px 0px ${shadowColorSelector.value}`;
}

function boxSize(){
  cssCode()
Box.style.transform  = `scale(${sizeSelector.value})`
}
function boxRadius(){
  cssCode()
  Box.style.borderRadius = `${radiusSelector.value}px`
}
function shadowHorizontal(){      
  cssCode()
  Box.style.boxShadow = `${horizontalSelector.value}px ${verticalSelector.value}px ${blurSelector.value}px  0px ${shadowColorSelector.value}`;
}
function shadowBlur(){      
  cssCode()
  Box.style.boxShadow = `${horizontalSelector.value}px ${verticalSelector.value}px ${blurSelector.value}px 0px ${shadowColorSelector.value}`;
}

function shadowVertical(){
  cssCode()
  Box.style.boxShadow = `${horizontalSelector.value}px ${verticalSelector.value}px  ${blurSelector.value}px 0px ${shadowColorSelector.value}`;
}

function cssCode(){
  code.innerHTML = `background-color:${colorSelector.value}; <br>  transform: scale(${sizeSelector.value}); <br> border-radius:${radiusSelector.value}px; <br>box-shadow: ${horizontalSelector.value}px ${verticalSelector.value}px ${blurSelector.value}px ${shadowColorSelector.value};
`
}
