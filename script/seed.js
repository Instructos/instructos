'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')
const {Product} = require('../server/db/models')

const products = [
  {
    productName: 'EDM Dance Party',
    instructor: 'Eric',
    description:
      "Socially-distance-dance the night way with Fullstack's resident techno DJ!",
    price: 50,
    imageUrl: 'https://www.lafilm.edu/wp-content/uploads/2017/08/Dance-Show.jpg'
  },
  {
    productName: 'Nicki Minaj Listening Session',
    instructor: 'Amber',
    description:
      'Spend sometime enjoying the skillful flow of the beautiful and talented Ms. Nicki Minaj!',
    price: 50,
    imageUrl:
      'http://vh1.mtvnimages.com/uri/mgid:ao:image:mtv:647533?quality=0.8&format=jpg&width=1440&height=810&.jpg'
  },
  {
    productName: 'Totems of New York Photo Walk',
    instructor: 'Devonne',
    description:
      'Take a stroll to visually capture the essence of New York, including unexpectedly closed subway stations and cars double-parking you in!',
    price: 50,
    imageUrl:
      'https://media.nbcnewyork.com/2020/10/4987478283-1080pnbcstations.jpg?quality=85&strip=all&resize=1200%2C675'
  },
  {
    productName: 'Studio Ghibli & Popcorn',
    instructor: 'Mac',
    description:
      'Studio Ghibli and socially-distance chill with Instructor Mac!',
    price: 50,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo6c_5hWbXORUqfRgX-CuhADlM7FAfCAtsrC6UZ2MS2qtwrLw4hviFA1AkJj30Y1IY0t0&usqp=CAU'
  },
  {
    productName: 'An Awkward Encouter',
    instructor: 'Zach',
    description: '...so umm, yeah. Weather?',
    price: 50,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY71MclVp2zr6OjnxwjkuqtnM0mY1q4RTjDw&usqp=CAU'
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])
  await Promise.all(
    products.map(product => {
      return Product.create(product)
    })
  )

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
