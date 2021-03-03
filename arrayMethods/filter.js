const items = [
      { name: 'Bike', price: 100 },
      { name: 'TV', price: 200 },
      { name: 'Album', price: 10 },
      { name: 'Book', price: 5 },
      { name: 'Phone', price: 500 },
      { name: 'Computer', price: 1000 },
      { name: 'Keyboard', price: 25 },
]

const cheapItems = items.filter(item => {
      if (item.price <= 100) {
            return item;
      }
})

console.log(items);
console.log(cheapItems)

// Returns and filters items into new array..
// Does not change the original array..