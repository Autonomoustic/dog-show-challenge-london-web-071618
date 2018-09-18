class Adapter {
  static getDogs () {
    return fetch('http://localhost:3000/dogs')
      .then(resp => resp.json())
  }

  static createDog (dog) {
    return fetch('http://localhost:3000/dogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dog)
    }).then(resp => resp.json())
  }

  static editDog (dog) {
    return fetch(`http://localhost:3000/dogs/${dog.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        dog)
    }).then(resp => resp.json())
  }
}
