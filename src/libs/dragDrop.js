export function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

export function drop(ev) {
  ev.preventDefault();
  const childWeights = ev.target.childNodes;
  const type = ev.target.getAttribute("data-type");

  if (type === "weight") return;

  if (ev.target.id !== "weight-list") {
    for (let index = 0; index < childWeights.length; index++) {
      const element = childWeights[index];
      if (element.classList) {
        if (element.classList.includes("weight")) return;
      }
    }
  }

  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
export function allowDrop(ev) {
  ev.preventDefault();
}

export const resetDrag = (ev) => {
  ev.preventDefault();

  if (ev.target.parentNode.id === "weight-list") return;

  const parent = ev.target.parentNode;

  document
    .querySelector("#weight-list")
    .appendChild(document.getElementById(ev.target.id));
  parent.removeChild(document.getElementById(ev.target.id));
};
