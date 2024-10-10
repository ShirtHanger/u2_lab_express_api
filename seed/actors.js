const db = require('../db') // Import database
const { Movie, Actor } = require('../models') 

/* To save time, I asked ChatGPT to populate my data with random movies, names, and reviews after I wrote the first one */
/* I will specify the reviews, movies, and actors I wrote out or modified signifigantly */

db.on('error', console.error.bind(console, 'MongoDB connection error:')) // Catch errors

const main = async () => { 

  const bloodIsThickerThanWater = await Movie.find({ name: 'Blood Is Thicker Than Water' })
  const lunarEclipse = await Movie.find({ name: 'Lunar Eclipse' })
  const hauntedCarousel = await Movie.find({ name: 'The Haunted Carousel' })
  const giggleFest = await Movie.find({ name: 'Gigglefest' })
  const beneathTheIce = await Movie.find({ name: 'Beneath the Ice' })
  const pixelInvasion = await Movie.find({ name: 'Pixel Invasion' })

  const actors = [
    // Blood Is Thicker Than Water
    { /* I wrote this */
        name: 'Isaiah Morris',
        age: 21,
        gender: 'male',
        country: 'Trinidad and Tobago',
        year_born: 2000,
        isAlive: true,
        movie_id: bloodIsThickerThanWater._id, 
        image_url: 'https://fakeactors.com/images/IsaiahMorris.png',
        /* For some reason, I got error when I tried to seed this this until I removed array denotion */
        /* TypeError: Cannot read properties of undefined (reading '_id')
    at main (/home/jordanjc/general-assembly-bootcamp-ft/unit2/week-4/thursday/u2_lab_express_api/seed/actors.js:27:46)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async run (/home/jordanjc/general-assembly-bootcamp-ft/unit2/week-4/thursday/u2_lab_express_api/seed/actors.js:220:3) */
    },
    {
        name: 'Naomi Tanaka',
        age: 35,
        gender: 'female',
        country: 'Japan',
        year_born: 1988,
        isAlive: true,
        movie_id: bloodIsThickerThanWater._id,
        image_url: 'https://fakeactors.com/images/NaomiTanaka.png',
    },
    {
        name: 'Ahmed Husseini',
        age: 40,
        gender: 'male',
        country: 'Palestine',
        year_born: 1983,
        isAlive: true,
        movie_id: bloodIsThickerThanWater._id,
        image_url: 'https://fakeactors.com/images/AhmedHusseini.png',
    },

    // Lunar Eclipse
    {
        name: 'Li Wei',
        age: 29,
        gender: 'male',
        country: 'China',
        year_born: 1994,
        isAlive: false,
        movie_id: lunarEclipse._id,
        image_url: 'https://fakeactors.com/images/LiWei.png',
    },
    {
        name: 'Amara Thompson',
        age: 33,
        gender: 'female',
        country: 'United Kingdom',
        year_born: 1990,
        isAlive: true,
        movie_id: lunarEclipse._id,
        image_url: 'https://fakeactors.com/images/AmaraThompson.png',
    },
    {
        name: 'Moussa Diop',
        age: 28,
        gender: 'male',
        country: 'Senegal',
        year_born: 1995,
        isAlive: true,
        movie_id: lunarEclipse._id,
        image_url: 'https://fakeactors.com/images/MoussaDiop.png',
    },

    // The Haunted Carousel
    {
        name: 'Sofia Diaz',
        age: 25,
        gender: 'female',
        country: 'Spain',
        year_born: 1998,
        isAlive: false,
        movie_id: hauntedCarousel._id,
        image_url: 'https://fakeactors.com/images/SofiaDiaz.png',
    },
    {
        name: 'Jamal Washington',
        age: 22,
        gender: 'male',
        country: 'USA',
        year_born: 2002,
        isAlive: true,
        movie_id: hauntedCarousel._id,
        image_url: 'https://fakeactors.com/images/JamalWashington.png',
    },
    {
        name: 'Olga Petrov',
        age: 27,
        gender: 'female',
        country: 'Russia',
        year_born: 1996,
        isAlive: false,
        movie_id: hauntedCarousel._id,
        image_url: 'https://fakeactors.com/images/OlgaPetrov.png',
    },

    // Gigglefest
    {
        name: 'Marcus Baptiste',
        age: 34,
        gender: 'male',
        country: 'Haiti',
        year_born: 1989,
        isAlive: true,
        movie_id: giggleFest._id,
        image_url: 'https://fakeactors.com/images/MarcusBaptiste.png',
    },
    {
        name: 'Emily Zhang',
        age: 30,
        gender: 'female',
        country: 'Taiwan',
        year_born: 1993,
        isAlive: true,
        movie_id: giggleFest._id,
        image_url: 'https://fakeactors.com/images/EmilyZhang.png',
    },
    {
        name: 'Oluwatobi Ajayi',
        age: 38,
        gender: 'male',
        country: 'Nigeria',
        year_born: 1986,
        isAlive: true,
        movie_id: giggleFest._id,
        image_url: 'https://fakeactors.com/images/OluwatobiAjayi.png',
    },

    // Beneath the Ice
    {
        name: 'Freya Lund',
        age: 32,
        gender: 'female',
        country: 'Sweden',
        year_born: 1992,
        isAlive: true,
        movie_id: beneathTheIce._id,
        image_url: 'https://fakeactors.com/images/FreyaLund.png',
    },
    {
        name: 'Kofi Mensah',
        age: 36,
        gender: 'male',
        country: 'Ghana',
        year_born: 1987,
        isAlive: false,
        movie_id: beneathTheIce._id,
        image_url: 'https://fakeactors.com/images/KofiMensah.png',
    },
    {
        name: 'Clara Schmidt',
        age: 29,
        gender: 'female',
        country: 'Germany',
        year_born: 1995,
        isAlive: true,
        movie_id: beneathTheIce._id,
        image_url: 'https://fakeactors.com/images/ClaraSchmidt.png',
    },

    // Pixel Invasion
    {
        name: 'Jiro Nakamura',
        age: 26,
        gender: 'male',
        country: 'Japan',
        year_born: 1998,
        isAlive: true,
        movie_id: pixelInvasion._id,
        image_url: 'https://fakeactors.com/images/JiroNakamura.png',
    },
    {
        name: 'Ella Johnson',
        age: 20,
        gender: 'female',
        country: 'USA',
        year_born: 2003,
        isAlive: true,
        movie_id: pixelInvasion._id,
        image_url: 'https://fakeactors.com/images/EllaJohnson.png',
    },
    {
        name: 'Tariq Rahman',
        age: 28,
        gender: 'male',
        country: 'Pakistan',
        year_born: 1996,
        isAlive: true,
        movie_id: pixelInvasion._id,
        image_url: 'https://fakeactors.com/images/TariqRahman.png',
    }
  ]

  
  await Actor.insertMany(actors)
  console.log('============================')
  console.log('ACTORS are now shooting for their movies!')
  console.log('============================')
}

const run = async () => {
  await main()
  db.close()
}

run()