class DogController {
  constructor () {
    this.dogs = []
    this.selectedDog = undefined
    this.getDogs()
    this.submitEditedDog()
  }
  //
  getDogs () {
    Adapter.getDogs()
      .then(dogs => {
        dogs.map(dog => this.addDog(dog))
      })
  }

  createDog (dog) {
    this.addDog(dog)
    Adapter.createDog(dog)
  }

  addDog (dog) {
    this.dogs.push(new Dog(dog, () => {
      this.selectedDog = dog
    }))
  }

  submitEditedDog () {
    const submit = document.querySelector("input[type='submit']")
    submit.addEventListener('click', event => {
      event.preventDefault()
      const form = document.querySelector('#dog-form')
      this.selectedDog.name = form.elements.name.value
      this.selectedDog.breed = form.elements.breed.value
      this.selectedDog.sex = form.elements.sex.value
      Adapter.editDog(this.selectedDog)
      .then(() => this.clearDogs())
      .then(() => this.getDogs())
    })
  }

  clearDogs () {
    const tableBody = document.querySelector('#table-body')
    tableBody.innerHTML = ''
  }

}
