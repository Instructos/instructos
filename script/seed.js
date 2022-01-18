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
  },

  {
    productName: 'Coffee Time',
    instructor: 'Margarita',
    description: 'An elegant way to spend time!',
    price: 30,
    imageUrl:
      'https://www.cancer.org/content/dam/cancer-org/images/photographs/single-use/espresso-coffee-cup-with-beans-on-table-restricted.jpg'
  },
  {
    productName: 'Fun Fun Coding',
    instructor: 'Sey',
    description: 'Learning Javascript the fun way',
    price: 40,
    imageUrl:
      'https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg'
  },
  {
    productName: 'New York City tour',
    instructor: 'Eric',
    description: 'Touring with the best',
    price: 100,
    imageUrl: 'https://i.ytimg.com/vi/TdM6ri0kIG4/maxresdefault.jpg'
  },
  {
    productName: 'Going to the best New York Restaurants',
    instructor: 'Devonne',
    description: 'Having great food with Devonne',
    price: 250,
    imageUrl:
      'https://cdn.vox-cdn.com/thumbor/gP2kgYtNHMHccU2qo5JUhLai5pk=/0x0:4500x3000/1200x900/filters:focal(1890x1140:2610x1860)/cdn.vox-cdn.com/uploads/chorus_image/image/58970287/20180604_GH_LAMERCERIE_1016.6.jpg'
  },
  {
    productName: 'Attend a Comedy show in NYC',
    instructor: 'Savion',
    description:
      'Best comedy shows in the world! This show requires valid license and COVID vaccination card',
    price: 300,
    imageUrl:
      'https://p300-americantownscom.netdna-ssl.com/img/article/ny-comedy-clubs-1.jpg'
  },
  {
    productName: 'Slaying the mightiest Dragons',
    instructor: 'Mac',
    description: 'Fight the dangerous dragons with the fearless Mac',
    price: 100,
    imageUrl:
      'https://imgix.kotaku.com.au/content/uploads/sites/3/2020/06/dungeons-and-dragons-learn.jpg?ar=16%3A9&auto=format&fit=crop&q=65&w=1280'
  },
  {
    productName: 'Chicago Deep dish Pizza',
    instructor: 'Zach',
    description:
      'Having the famous Chicago Deep dish Pizza. If you can finish one whole pie, Zach buys!',
    price: 200,
    imageUrl:
      'https://www.savingdessert.com/wp-content/uploads/2018/03/Chicago-Style-Deep-Dish-Pizza-5.jpg'
  },
  {
    productName: '1 vs 1 Quidditch match',
    instructor: 'Eric',
    description:
      'Quidditch is a fictional sport invented by author J.K. Rowling for her fantasy book series Harry Potter. It is a dangerous but popular sport played by witches and wizards riding flying broomsticks. ',
    price: 300,
    imageUrl:
      'https://alcalde.texasexes.org/wp-content/uploads/2013/06/quidditch2.jpg'
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
