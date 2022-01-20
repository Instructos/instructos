/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../db')
const Product = db.model('product')

describe('Product model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctType', () => {
      let experience

      beforeEach(async () => {
        experience = await Product.create({
          productName: 'Movie time',
          imageUrl:
            'https://www.pembinanorthcommunityschool.ca/wp-content/uploads/sites/14/2019/11/68591246-cinema-movie-vector-poster-design-template-popcorn-filmstrip-clapboard-tickets-movie-time-background.jpg',
          description: 'the description can be anything',
          price: 10.3,
          instructor: 'Mac'
        })
      })

      it('returns false if the productName validates', () => {
        expect(experience.correctName(123)).to.be.equal(false)
      })

      it('returns true if the name is correct', () => {
        expect(experience.correctName('Movie time')).to.be.equal(true)
      })
    })
  })
})
