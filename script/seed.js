'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')
const {Product} = require('../server/db/models')

const products = [
  {
    id: 1,
    productName: 'Pepper - Red Thai',
    instructor: 'Cyndy',
    description: 'Occupant (driver) of pk-up/van injured in unsp nontraf',
    price: 63.61,
    imageUrl: 'http://dummyimage.com/238x100.png/5fa2dd/ffffff'
  },
  {
    id: 2,
    productName: 'Tuna - Salad Premix',
    instructor: 'Jenny',
    description: 'Unsp injury of unsp blood vessel at shldr/up arm, right arm',
    price: 78.59,
    imageUrl: 'http://dummyimage.com/217x100.png/ff4444/ffffff'
  },
  {
    id: 3,
    productName: 'Pepper - Sorrano',
    instructor: 'Tobey',
    description: 'Stenosis of larynx',
    price: 32.96,
    imageUrl: 'http://dummyimage.com/130x100.png/ff4444/ffffff'
  },
  {
    id: 4,
    productName: 'Cheese - Ermite Bleu',
    instructor: 'Cornie',
    description: 'Chronic Eustachian salpingitis',
    price: 21.6,
    imageUrl: 'http://dummyimage.com/156x100.png/5fa2dd/ffffff'
  },
  {
    id: 5,
    productName: 'Soup - Verve - Chipotle Chicken',
    instructor: 'Ryann',
    description: 'Diab due to undrl cond w diabetic prph angiopath w gangrene',
    price: 78.6,
    imageUrl: 'http://dummyimage.com/125x100.png/ff4444/ffffff'
  },
  {
    id: 6,
    productName: 'Cookie - Dough Variety',
    instructor: 'Maryanna',
    description: 'Unsp injury of ulnar artery at wrs/hnd lv of left arm, init',
    price: 81.68,
    imageUrl: 'http://dummyimage.com/111x100.png/5fa2dd/ffffff'
  },
  {
    id: 7,
    productName: 'Ocean Spray - Kiwi Strawberry',
    instructor: 'Aleda',
    description: 'Peripheral vasodilators',
    price: 56.76,
    imageUrl: 'http://dummyimage.com/199x100.png/dddddd/000000'
  },
  {
    id: 8,
    productName: 'Wine - Pinot Noir Latour',
    instructor: 'Rufus',
    description: 'Poisoning by therapeutic gases, accidental (unintentional)',
    price: 5.87,
    imageUrl: 'http://dummyimage.com/103x100.png/dddddd/000000'
  },
  {
    id: 9,
    productName: 'Crackers - Melba Toast',
    instructor: 'Clovis',
    description: 'Resistance to other specified beta lactam antibiotics',
    price: 40.36,
    imageUrl: 'http://dummyimage.com/206x100.png/cc0000/ffffff'
  },
  {
    id: 10,
    productName: 'Grapes - Green',
    instructor: 'Lise',
    description: 'Gastric contents in bronchus causing asphyxiation, subs',
    price: 73.06,
    imageUrl: 'http://dummyimage.com/113x100.png/ff4444/ffffff'
  },
  {
    id: 11,
    productName: 'Beef Ground Medium',
    instructor: 'Gav',
    description: 'Poisoning by opium, undetermined',
    price: 6.43,
    imageUrl: 'http://dummyimage.com/131x100.png/5fa2dd/ffffff'
  },
  {
    id: 12,
    productName: 'Beef - Bones, Cut - Up',
    instructor: 'Sianna',
    description: 'Major laceration of right internal jugular vein, init encntr',
    price: 82.45,
    imageUrl: 'http://dummyimage.com/113x100.png/5fa2dd/ffffff'
  },
  {
    id: 13,
    productName: 'Squid - Tubes / Tenticles 10/20',
    instructor: 'Celestyn',
    description: 'Fall same lev from slip/trip w strk agnst sharp glass, init',
    price: 39.09,
    imageUrl: 'http://dummyimage.com/107x100.png/5fa2dd/ffffff'
  },
  {
    id: 14,
    productName: 'Ice Cream Bar - Hagen Daz',
    instructor: 'Dede',
    description: 'Disp fx of shaft of fifth metacarpal bone, left hand, init',
    price: 42.34,
    imageUrl: 'http://dummyimage.com/146x100.png/5fa2dd/ffffff'
  },
  {
    id: 15,
    productName: 'Mushrooms - Honey',
    instructor: 'Adena',
    description: 'Poisoning by ganglionic blocking drugs, undetermined, init',
    price: 62.48,
    imageUrl: 'http://dummyimage.com/111x100.png/ff4444/ffffff'
  },
  {
    id: 16,
    productName: 'Chevril',
    instructor: 'Vivian',
    description: 'Postprocedural stenosis of left external ear canal',
    price: 48.5,
    imageUrl: 'http://dummyimage.com/243x100.png/dddddd/000000'
  },
  {
    id: 17,
    productName: 'Bag - Clear 7 Lb',
    instructor: 'Courtney',
    description: 'Athscl type of bypass of the right leg w ulceration of calf',
    price: 47.04,
    imageUrl: 'http://dummyimage.com/249x100.png/cc0000/ffffff'
  },
  {
    id: 18,
    productName: 'Buttons',
    instructor: 'Claus',
    description: 'Disp fx of posterior wall of right acetabulum, sequela',
    price: 29.67,
    imageUrl: 'http://dummyimage.com/140x100.png/5fa2dd/ffffff'
  },
  {
    id: 19,
    productName: 'Energy Drink - Redbull 355ml',
    instructor: 'Zoe',
    description: 'Crushing injury of head, part unspecified, subs encntr',
    price: 56.58,
    imageUrl: 'http://dummyimage.com/183x100.png/dddddd/000000'
  },
  {
    id: 20,
    productName: 'Tomatoes - Yellow Hot House',
    instructor: 'Melita',
    description: 'Malignant neoplasm of short bones of right upper limb',
    price: 27.88,
    imageUrl: 'http://dummyimage.com/114x100.png/ff4444/ffffff'
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
