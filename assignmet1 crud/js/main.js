

data = []
const nameInput = document.getElementById('nameInput')
const EmailInput = document.getElementById('EmailInput')
const ageInput = document.getElementById('AgeInput')
const statusInput = document.getElementById('statusInput')
const addButton = document.getElementById('addButton')
const saveButton = document.getElementById('saveButton')

saveButton.style.display = 'none'

if (localStorage.getItem('List') != null) {
  data = JSON.parse(localStorage.getItem('List'))
  displayData()
}

function addData() {
  const creatobj = {
    name: nameInput.value,
    Email: EmailInput.value,
    Age: ageInput.value,
    status: statusInput.value,
  }
  data.push(creatobj)
  localStorage.setItem('List', JSON.stringify(data))
  displayData()
}
function displayData() {
  var temp = ''
  for (var i = 0; i < data.length; i++) {
    temp +=
      `  <tr>
        <td>` +
      i +
      ` </td>
        <td>` +
      data[i].name +
      ` </td>
        <td>` +
      data[i].Email +
      `</td>
        <td>` +
      data[i].Age +
      `</td>
        <td>` +
      data[i].status +
      ` </td>
        <td>
            <button onclick="updateProduct(` +
      i +
      `)"  class="btn btn-outline-warning">Update</button>
        </td>
        <td>
            <button  onclick="deleteProduct(` +
      i +
      `)" class="btn btn-outline-danger">Delete</button>
        </td>
    </tr>`
  }
  document.getElementById('tableData').innerHTML = temp
}
function deleteProduct(index) {
  data.splice(index, 1)
  localStorage.setItem('List', JSON.stringify(data))
  displayData()
}
function search() {
  var searchInput = (temp = '')
  for (var i = 0; i < data.length; i++) {
    if (
      data[i].name.toLowerCase().includs(searchVal) == true ||
      data[i].status.toLowerCase().includs(searchVal) == true
    )
      temp +=
        `  <tr>
    <td>` +
        i +
        ` </td>
    <td>` +
        data[i].name
          .toLowerCase()
          .replace(
            searchVal,
            "<span class='bg-danger'>" + searchVal + '</span>',
          ) +
        ` </td>
    <td>` +
        data[i].Email +
        `</td>
    <td>` +
        data[i].age
          .toLowerCase()
          .replace(
            searchVal,
            "<span class='bg-danger'>" + searchVal + '</span>',
          ) +
        `</td>
    <td>` +
        data[i].status +
        ` </td>
    <td>
        <button class="btn btn-outline-warning">Update</button>
    </td>
    <td>
        <button  onclick="deleteProduct(` +
        i +
        `)" class="btn btn-outline-danger">Delete</button>
    </td>
</tr>`
  }
  document.getElementById('tableData').innerHTML = temp
}

function updateButton(id) {
  if (data.hasOwnProperty(id)) {
    nameInput.addEventListener('input', function () {
      data[id] = {
        name: nameInput.value,
        Email: EmailInput.value,
        Age: ageInput.value,
        status: statusInput.value,
      }
    })
    EmailInput.addEventListener('input', function () {
      data[id] = {
        name: nameInput.value,
        Email: EmailInput.value,
        Age: ageInput.value,
        status: statusInput.value,
      }
    })
    ageInput.addEventListener('input', function () {
      data[id] = {
        name: nameInput.value,
        Email: EmailInput.value,
        Age: ageInput.value,
        status: statusInput.value,
      }
    })
    statusInput.addEventListener('input', function () {
      data[id] = {
        name: nameInput.value,
        Email: EmailInput.value,
        Age: ageInput.value,
        status: statusInput.value,
      }
    })
  }
  localStorage.setItem('List', JSON.stringify(data))
  console.log(data)
}

function updateProduct(id) {
  const items = JSON.parse(localStorage.getItem('List')) || {}
  nameInput.value = items[id].name
  EmailInput.value = items[id].Email
  ageInput.value = items[id].Age
  statusInput.value = items[id].status
  addButton.style.display = 'none'
  saveButton.style.display = 'block'
  saveButton.style.backgroundColor = 'green'
  updateButton(id)
}

function saveData() {
  addButton.style.display = 'block'
  saveButton.style.display = 'none'
  displayData()
}
