'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')
const {Product} = require('../server/db/models')

const products = [
  {
    productName: 'Pepper - Red Thai',
    instructor: 'Cyndy',
    description: 'Occupant (driver) of pk-up/van injured in unsp nontraf',
    price: 63.61,
    imageUrl: 'http://dummyimage.com/238x100.png/5fa2dd/ffffff'
  },
  {
    productName: 'Tuna - Salad Premix',
    instructor: 'Jenny',
    description: 'Unsp injury of unsp blood vessel at shldr/up arm, right arm',
    price: 78.59,
    imageUrl: 'http://dummyimage.com/217x100.png/ff4444/ffffff'
  },
  {
    productName: 'Pepper - Sorrano',
    instructor: 'Tobey',
    description: 'Stenosis of larynx',
    price: 32.96,
    imageUrl: 'http://dummyimage.com/130x100.png/ff4444/ffffff'
  },
  {
    productName: 'Cheese - Ermite Bleu',
    instructor: 'Cornie',
    description: 'Chronic Eustachian salpingitis',
    price: 21.6,
    imageUrl: 'http://dummyimage.com/156x100.png/5fa2dd/ffffff'
  },
  {
    productName: 'Soup - Verve - Chipotle Chicken',
    instructor: 'Ryann',
    description: 'Diab due to undrl cond w diabetic prph angiopath w gangrene',
    price: 78,
    imageUrl: 'http://dummyimage.com/125x100.png/ff4444/ffffff'
  },
  {
    productName: 'Cookie - Dough Variety',
    instructor: 'Maryanna',
    description: 'Unsp injury of ulnar artery at wrs/hnd lv of left arm, init',
    price: 81,
    imageUrl: 'http://dummyimage.com/111x100.png/5fa2dd/ffffff'
  },
  {
    productName: 'Ocean Spray - Kiwi Strawberry',
    instructor: 'Aleda',
    description: 'Peripheral vasodilators',
    price: 56.76,
    imageUrl: 'http://dummyimage.com/199x100.png/dddddd/000000'
  },
  {
    productName: 'Wine - Pinot Noir Latour',
    instructor: 'Rufus',
    description: 'Poisoning by therapeutic gases, accidental (unintentional)',
    price: 5.87,
    imageUrl: 'http://dummyimage.com/103x100.png/dddddd/000000'
  },
  {
    productName: 'Crackers - Melba Toast',
    instructor: 'Clovis',
    description: 'Resistance to other specified beta lactam antibiotics',
    price: 40.36,
    imageUrl: 'http://dummyimage.com/206x100.png/cc0000/ffffff'
  },
  {
    productName: 'Grapes - Green',
    instructor: 'Lise',
    description: 'Gastric contents in bronchus causing asphyxiation, subs',
    price: 73.06,
    imageUrl: 'http://dummyimage.com/113x100.png/ff4444/ffffff'
  },
  {
    productName: 'Beef Ground Medium',
    instructor: 'Gav',
    description: 'Poisoning by opium, undetermined',
    price: 6.43,
    imageUrl: 'http://dummyimage.com/131x100.png/5fa2dd/ffffff'
  },
  {
    productName: 'Beef - Bones, Cut - Up',
    instructor: 'Sianna',
    description: 'Major laceration of right internal jugular vein, init encntr',
    price: 82.45,
    imageUrl: 'http://dummyimage.com/113x100.png/5fa2dd/ffffff'
  },
  {
    productName: 'Squid - Tubes / Tenticles 10/20',
    instructor: 'Celestyn',
    description: 'Fall same lev from slip/trip w strk agnst sharp glass, init',
    price: 39,
    imageUrl: 'http://dummyimage.com/107x100.png/5fa2dd/ffffff'
  },
  {
    productName: 'Ice Cream Bar - Hagen Daz',
    instructor: 'Dede',
    description: 'Disp fx of shaft of fifth metacarpal bone, left hand, init',
    price: 42.34,
    imageUrl: 'http://dummyimage.com/146x100.png/5fa2dd/ffffff'
  },
  {
    productName: 'Mushrooms - Honey',
    instructor: 'Adena',
    description: 'Poisoning by ganglionic blocking drugs, undetermined, init',
    price: 62.48,
    imageUrl: 'http://dummyimage.com/111x100.png/ff4444/ffffff'
  },
  {
    productName: 'Chevril',
    instructor: 'Vivian',
    description: 'Postprocedural stenosis of left external ear canal',
    price: 48.5,
    imageUrl: 'http://dummyimage.com/243x100.png/dddddd/000000'
  },
  {
    productName: 'Bag - Clear 7 Lb',
    instructor: 'Courtney',
    description: 'Athscl type of bypass of the right leg w ulceration of calf',
    price: 47.04,
    imageUrl: 'http://dummyimage.com/249x100.png/cc0000/ffffff'
  },
  {
    productName: 'Buttons',
    instructor: 'Claus',
    description: 'Disp fx of posterior wall of right acetabulum, sequela',
    price: 29.67,
    imageUrl: 'http://dummyimage.com/140x100.png/5fa2dd/ffffff'
  },
  {
    productName: 'Energy Drink - Redbull 355ml',
    instructor: 'Zoe',
    description: 'Crushing injury of head, part unspecified, subs encntr',
    price: 56.58,
    imageUrl: 'http://dummyimage.com/183x100.png/dddddd/000000'
  },
  {
    productName: 'Tomatoes - Yellow Hot House',
    instructor: 'Melita',
    description: 'Malignant neoplasm of short bones of right upper limb',
    price: 27.88,
    imageUrl: 'http://dummyimage.com/114x100.png/ff4444/ffffff'
  },
  {
    productName: 'Coffee Time',
    instructor: 'Margarita',
    description: 'An elegant way to spend time!',
    price: 10000,
    imageUrl:
      'https://www.cancer.org/content/dam/cancer-org/images/photographs/single-use/espresso-coffee-cup-with-beans-on-table-restricted.jpg'
  },
  {
    productName: 'Fun Fun Coding',
    instructor: 'Sey',
    description: 'Learning Javascript the fun way',
    price: 10000,
    imageUrl:
      'https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg'
  },
  {
    productName: 'New York City tour',
    instructor: 'Eric',
    description: 'Touring with the best',
    price: 20000,
    imageUrl: 'https://i.ytimg.com/vi/TdM6ri0kIG4/maxresdefault.jpg'
  },
  {
    productName: 'Going to the best New York Restaurants',
    instructor: 'Devonne',
    description: 'Having great food with Devonne',
    price: 10000,
    imageUrl:
      'https://cdn.vox-cdn.com/thumbor/gP2kgYtNHMHccU2qo5JUhLai5pk=/0x0:4500x3000/1200x900/filters:focal(1890x1140:2610x1860)/cdn.vox-cdn.com/uploads/chorus_image/image/58970287/20180604_GH_LAMERCERIE_1016.6.jpg'
  },
  {
    productName: 'Attend a Comedy show in NYC',
    instructor: 'Savion',
    description:
      'Best comedy shows in the world! This show requires valid license and COVID vaccination card',
    price: 30000,
    imageUrl:
      'https://p300-americantownscom.netdna-ssl.com/img/article/ny-comedy-clubs-1.jpg'
  },
  {
    productName: 'Slaying the mightiest Dragons',
    instructor: 'Mac',
    description: 'Fight the dangerous dragons with the fearless Mac',
    price: 10000,
    imageUrl:
      'https://imgix.kotaku.com.au/content/uploads/sites/3/2020/06/dungeons-and-dragons-learn.jpg?ar=16%3A9&auto=format&fit=crop&q=65&w=1280'
  },
  {
    productName: 'Chicago Deep dish Pizza',
    instructor: 'Zach',
    description:
      'Having the famous Chicago Deep dish Pizza. If you can finish one whole pie, Zach buys!',
    price: 20000,
    imageUrl:
      'https://www.savingdessert.com/wp-content/uploads/2018/03/Chicago-Style-Deep-Dish-Pizza-5.jpg'
  },
  {
    productName: '1 vs 1 Quidditch match',
    instructor: 'Eric',
    description:
      'Quidditch is a fictional sport invented by author J.K. Rowling for her fantasy book series Harry Potter. It is a dangerous but popular sport played by witches and wizards riding flying broomsticks. ',
    price: 30000,
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
