class Dog {
  constructor (dog, callback) {
    this.id = dog.id
    this.name = dog.name
    this.breed = dog.breed
    this.sex = dog.sex
    this.tableBody = document.querySelector('#table-body')
    this.appendDog(callback)
  }

  appendDog (callback) {
    const tr = document.createElement('tr')

    tr.innerHTML = `
    <td>${this.name}</td>
    <td>${this.breed}</td>
    <td>${this.sex}</td>
    <td><button>Edit</button></td>
    `
    const button = tr.querySelector('button')
    const name = document.querySelector("input[name='name']")
    const breed = document.querySelector("input[name='breed']")
    const sex = document.querySelector("input[name='sex']")

    button.addEventListener('click', event => {
      name.value = this.name
      breed.value = this.breed
      sex.value = this.sex
      callback()
    })
    this.tableBody.appendChild(tr)
  }
}
