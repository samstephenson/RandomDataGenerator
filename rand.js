const randomData = (numValues, lowerBound, upperBound, prefix, suffix) => {
  const array = [];
  for (var i = 0; i < numValues; i++) {
    const rand = Math.floor(Math.random() * (upperBound - lowerBound));
    const string = prefix + rand + suffix;
    array.push(string);
  }
  return array;
};

const randomObjective = (numValues, objectives) => {
  const array = [];
  for (var i = 0; i < numValues; i++) {
    const range = Math.floor(Math.random() * objectives.length);
    array.push(objectives[range]);
  }
  array.forEach((el) => console.log(el));
};

const objectives = [
  "Rottnest Channel swim",
  "Fun!",
  "Just like the squad",
  "sub 1:30 CSS",
  "fix crossover",
  "First Triathlon",
  "Ironman",
  "keep fit",
  "recover from injury",
];

// randomData(39, 10, 120, "");
// randomObjective(39, objectives);

function handleButtonClick(event) {
  event.preventDefault();
  document.getElementById("area").innerHTML = "";
  const lowerBound = document.getElementById("lowerBound").value;
  const upperBound = document.getElementById("upperBound").value;
  const numValues = document.getElementById("numValues").value;
  const prefix = document.getElementById("prefix").value;
  const suffix = document.getElementById("suffix").value;
  const randomValues = randomData(
    numValues,
    lowerBound,
    upperBound,
    prefix,
    suffix
  );
  randomValues.forEach((el) => createHTML("p", el));
}

function createHTML(tagType, contents) {
  const node = document.createElement(tagType);
  var textNode = document.createTextNode(contents);
  node.appendChild(textNode);
  document.getElementById("area").appendChild(node);
}

window.onload = () => {
  document.getElementById("submitButton").onclick = handleButtonClick;
};
