const Box = document.querySelector(".box");
const colorSelector = document.querySelector(".color-selector");

const sizeSelector = document.querySelector(".size-selector");
const radiusSelector = document.querySelector(".radius-selector");
const horizontalSelector = document.querySelector(".horizontal-shadow");
const blurSelector = document.querySelector(".blur-shadow");
const verticalSelector = document.querySelector(".vertical-shadow");
const shadowColorSelector = document.querySelector(".shadow-color-selector");

const codeContainer = document.querySelector(".code-editor");
const code = document.querySelector("code");

function boxColor() {
  cssCode();
  if (colorSelector.value === "#fff" || colorSelector.value === "#ffffff") {
    colorValue.style.color = "#000";
  } else if (
    colorSelector.value === "#000" ||
    colorSelector.value === "#000000"
  ) {
    colorValue.style.color = "#fff";
  }
  Box.style.backgroundColor = colorSelector.value;
}
function shadowColor() {
  cssCode();
  Box.style.boxShadow = `${horizontalSelector.value}px ${verticalSelector.value}px  ${blurSelector.value}px 0px ${shadowColorSelector.value}`;
}

function boxSize() {
  cssCode();
  Box.style.transform = `scale(${sizeSelector.value})`;
}
function boxRadius() {
  cssCode();
  Box.style.borderRadius = `${radiusSelector.value}px`;
}
function shadowHorizontal() {
  cssCode();
  Box.style.boxShadow = `${horizontalSelector.value}px ${verticalSelector.value}px ${blurSelector.value}px  0px ${shadowColorSelector.value}`;
}
function shadowBlur() {
  cssCode();
  Box.style.boxShadow = `${horizontalSelector.value}px ${verticalSelector.value}px ${blurSelector.value}px 0px ${shadowColorSelector.value}`;
}

function shadowVertical() {
  cssCode();
  Box.style.boxShadow = `${horizontalSelector.value}px ${verticalSelector.value}px  ${blurSelector.value}px 0px ${shadowColorSelector.value}`;
}

function cssCode() {
  const bg = colorSelector.value;
  const scale = sizeSelector.value;
  const radius = radiusSelector.value;
  const h = horizontalSelector.value;
  const v = verticalSelector.value;
  const blur = blurSelector.value;
  const shadowColor = shadowColorSelector.value;

  code.innerHTML = `
    <p class="property">
      <span class="color-2">background-color</span><span>:</span>
      <span class="color-1">${bg}</span>;
    </p>
    <p class="property">
      <span class="color-2">transform</span><span>:</span>
      <span class="color-1">scale(${scale})</span>;
    </p>
    <p class="property">
      <span class="color-2">border-radius</span><span>:</span>
      <span class="color-1">${radius}px</span>;
    </p>
    <p class="property">
      <span class="color-2">box-shadow</span><span>:</span>
      <span class="color-1">${h}px ${v}px ${blur}px <span class="color-preview-2" style="background:${shadowColor};"></span><span class="color-3">${shadowColor}</span></span>;
    </p>
  `;

  codeContainer.classList.remove("hide");

  // Clean version for copying
  let copiedCode = `background-color: ${bg};
transform: scale(${scale});
border-radius: ${radius}px;
box-shadow: ${h}px ${v}px ${blur}px ${shadowColor};`;

  return copiedCode;
}

function copyCode() {
  const copyBtn = document.querySelector(".btn-copy");

  copyBtn.classList.remove("hide");
  copyBtn.addEventListener("click", function () {
    let copyOfCode = cssCode();
    navigator.clipboard.writeText(copyOfCode);
  });
}

copyCode();
