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
  },
  {
    productName: 'Horseback Riding',
    instructor: 'Eric',
    description:
      "Prepare yourself for a magical afternoon with our resident horse whisperer, Eric. You will meet him at our World Class stables, where he will introduce you to all of the horses. Once you've made your selection Eric will give you a brief walk through on how to sit on a horse properly. When you're ready, Eric will put those rippling biceps to use and pull you up to the saddle. Thats right, you'll be riding tandem, with Eric pecs pressed firmly against your back, and his arms holding you securely in place. No one's falling off on his watch *Winks in French*. (Disclaimer: Instructos is not responsible for any feelings you may develope for Eric.)",
    price: 120000,
    imageUrl: '/img/eric.jpeg'
  },
  {
    productName: 'Reenacting Cast Away',
    instructor: 'Sey',
    description:
      "Ever want to be lost on a deserted island with nothing but a volley ball? Love Tom Hanks? Well, then Sey can make all your dreams come true. This Premium Experience puts you in the role of Chuck Noland, originally played by Hollywood Heartthrob Tom Hanks, and Sey as Wilson the Volleyball, originally played by a Volleyball. Over the course of sixteen weeks, you and Sey will take acting lessons where you will learn to truely immitate the Great Tom Hanks playing Chuck Noland, while Sey will learn to be an inanimate volleyball. Then we will fly you, by FedEx cargo plane to maintian total immersion in the role, to the very island the movie was filmed on. You will reenact, scene for scene, the entirety of the film that the Marvelous Tom Hanks was nominated for an Academy Award for Best Actor in a Leading Role. (Disclaimer: Per attorney's representing the magical Tom Hanks, we must make clear that the greatest actor ever Tom Hanks is in no way associtated with Instructos, nor does our Lord and Savior Tom Hanks endorse this Experience.)",
    price: 2500000,
    imageUrl: '/img/castaway.jpeg'
  },
  {
    productName: 'Corporate Espionage',
    instructor: 'Savion',
    description:
      "Ever want to enter the face paced world of corporate America, but also hate corporate America? Then be ready to team up with Savion, as he takes you under his wing, so the two of you can take down the corporate fat cats. Savion will train you in useful techniques such as, lying, blending in, how to shake a hand, and hiding behind plants. Look out Jeff Bezos, Elon Musk, and definitely not a robot Mark Zuckerberg, if you're reading this, our highly skilled corporate spies are right behind you, and they're ready to eat the rich. (Disclaimer: Instructos does not condone actual cannabalism. Please do not actually eat anyone.)",
    price: 1750000,
    imageUrl: '/img/savion.jpeg'
  },
  {
    productName: 'The Art of Pointing with Your Mouth',
    instructor: 'Margarita',
    description:
      "Margarita is a pro at pointing with her mouth, because she knows sometimes you just can't use anything else. She will imbue unto you some of the raw talent she has in the hopes of sculpting you from a sad, weak lipped nobody, into someone who can point with their lips so incredibly well, that whatever god you believe in cries. (Disclaimer: Instructos is not resposible if your god chooses to smite as retribution for making them cry)",
    price: 300000,
    imageUrl: '/img/margarita.jpeg'
  },
  {
    productName: 'Judging Strangers on the Subway',
    instructor: 'Devonne',
    description:
      'People are weird and Devonne has no problem letting them know, and soon neither will you. (Disclaimer: Instructos cannot guarantee that Devonne will not end up judging you, as you are a stranger to him and will in fact be on the subway.)',
    price: 65000,
    imageUrl: '/img/devonne.jpeg'
  },
  {
    productName: 'Getting Late Night Drunk Food',
    instructor: 'Amber',
    description:
      "Amber knows the best places to get food when you've had one or ten too many. After years of being in a constant state of drunk, Amber has sampled the most delicious morsels from the three block area around her home. Take a tour of the best of the best restaurants that are open at 4:30am. By the time the sun comes up you will have feasted like French nobility, the only difference being no peasants are coming to cut off your head. (Disclaimer: Instructos is not responsible if you upset, anger, or otherwise provoke the French commoners, and will not be held liable if they execute you like it's 1789.)",
    price: 90000,
    imageUrl: '/img/amber.jpeg'
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123', isAdmin: true}),
    User.create({email: 'murphy@email.com', password: '123', isAdmin: false})
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
