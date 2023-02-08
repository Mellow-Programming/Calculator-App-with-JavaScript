const resultsDisplay = document.querySelector(".display > .content")
const keys = document.querySelector(".keys")

keys.addEventListener("click", (event) => {
  let target = event.target
  if (target.className.includes("digit") || target.className.includes("operator")) {
    let keyValue = target.textContent
    if (keyValue === "=") {
      let operation_string = resultsDisplay.textContent
      let calculation_results = calculator(operation_string)
      resultsDisplay.textContent = `${calculation_results}`
    }
    else if (keyValue === "C") {
      resultsDisplay.textContent = ""
      
    }
    else {
      resultsDisplay.textContent += keyValue
    }
  }
  
})

function calculator(operationString) {
  return eval(operationString)
}