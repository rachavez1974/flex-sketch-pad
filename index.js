function changeBackgroundColor(e){
  e.target.style.backgroundColor = '#f5f5f5'
}

function openGridDimensions(){
  document.getElementById("dims-forms").style.display = "block";
}

function clearGrid(){
  let grabContainers = document.querySelectorAll('.flex-container')
  grabContainers.forEach(container => container.remove())
}

function resetGrid(){
  clearGrid()
  dropGrid()
}

function closeModal(e){
  e.target.closest('div').style.display = "none";
}

function submitGridDimensions(e){
  event.preventDefault()
  let columns = document.getElementById('columns').value
  let rows = document.getElementById('rows').value
    if(columns > 100 || rows > 100){
      rows = 100
      columns = 100
    }


  clearGrid()
  document.getElementById('dims-forms').style.display = 'none'
  dropGrid(columns, rows)
}

function dropGrid(columns = 16, rows = 16) {
  for(let row = 0; row < rows; row++) {
    let container = document.createElement('div')
    container.classList.add('flex-container')
    document.body.appendChild(container);

    for(let col = 0; col < columns; col++) {
      let colDiv = document.createElement('div')
      colDiv.addEventListener('mouseover', changeBackgroundColor)
      container.appendChild(colDiv)
    }
  }
}

dropGrid()

const newGrid = document.getElementById('new-grid')
newGrid.addEventListener('click', openGridDimensions)

const submit = document.getElementById('submit')
submit.addEventListener('click', submitGridDimensions)

const close = document.getElementById('close')
close.addEventListener('click', closeModal)

const reset = document.getElementById('reset')
reset.addEventListener('click', resetGrid)


