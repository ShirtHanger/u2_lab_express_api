const db = require('../db')
const { Movie } = require('../models')



db.on('error', console.error.bind(console, 'MongoDB connection error:'))



const main = async () => {
    const movies = [
      { /* I wrote this */
        title: 'Blood Is Thicker Than Water',
        runtime_minutes: 167,
        genre: 'superhero thriller',
        medium: 'animated',
        rating: 'R',
        rotten_tomatoes_rating: 70,
        year_released: 2021,
        description: `Soon after college, Khenan Carter's life takes a drastic turn in 1970s Harlem as his mother reveals her true nature`,
        image_url: 'https://fakeimages.com/thickerthanwater.svg',
      },
      {
        title: 'Lunar Eclipse',
        runtime_minutes: 125,
        genre: 'sci-fi drama',
        medium: 'live action',
        rating: 'PG-13',
        rotten_tomatoes_rating: 92,
        year_released: 2019,
        description: `In a distant future, a colony on the moon faces a catastrophic solar event that forces a group of unlikely heroes to save humanity.`,
        image_url: 'https://fakeimages.com/lunareclipse.svg',
      },
      {
        title: 'The Haunted Carousel',
        runtime_minutes: 98,
        genre: 'horror',
        medium: 'live action',
        rating: 'R',
        rotten_tomatoes_rating: 85,
        year_released: 2020,
        description: `A cursed amusement park ride begins claiming lives, forcing a group of teenagers to uncover its dark past before becoming its next victims.`,
        image_url: 'https://fakeimages.com/hauntedcarousel.svg',
      },
      {
        title: 'Gigglefest',
        runtime_minutes: 110,
        genre: 'comedy',
        medium: 'animated',
        rating: 'PG',
        rotten_tomatoes_rating: 75,
        year_released: 2022,
        description: `A group of clumsy but lovable clowns are on a mission to perform at the world's biggest comedy festival, but things quickly go hilariously wrong.`,
        image_url: 'https://fakeimages.com/gigglefest.svg',
      },
      {
        title: 'Beneath the Ice',
        runtime_minutes: 130,
        genre: 'adventure thriller',
        medium: 'live action',
        rating: 'PG-13',
        rotten_tomatoes_rating: 80,
        year_released: 2021,
        description: `An elite team of scientists and explorers dive deep under the Antarctic ice to uncover a forgotten civilization, only to awaken an ancient terror.`,
        image_url: 'https://fakeimages.com/beneaththeice.svg',
      },
      {
        title: 'Pixel Invasion',
        runtime_minutes: 115,
        genre: 'sci-fi comedy',
        medium: 'animated',
        rating: 'PG',
        rotten_tomatoes_rating: 68,
        year_released: 2018,
        description: `When video game characters from different eras come to life and invade the real world, a group of gamers must team up to send them back.`,
        image_url: 'https://fakeimages.com/pixelinvasion.svg',
      },
    ]
  
  

  await Movie.insertMany(movies) 

  console.log('============================')
  console.log('MOVIES are now airing!')
  console.log('============================')

}

const run = async () => {

  await main()
  
  db.close()
}

run()