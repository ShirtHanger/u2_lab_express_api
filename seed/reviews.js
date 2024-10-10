const db = require('../db') // Import database
const { Movie, Review } = require('../models') 

db.on('error', console.error.bind(console, 'MongoDB connection error:')) // Catch errors

const main = async () => { 

  const bloodIsThickerThanWater = await Movie.find({ name: 'Blood Is Thicker Than Water' })
  const lunarEclipse = await Movie.find({ name: 'Lunar Eclipse' })
  const hauntedCarousel = await Movie.find({ name: 'The Haunted Carousel' })
  const giggleFest = await Movie.find({ name: 'Gigglefest' })
  const beneathTheIce = await Movie.find({ name: 'Beneath the Ice' })
  const pixelInvasion = await Movie.find({ name: 'Pixel Invasion' })

  const reviews = [
    // Blood Is Thicker Than Water
    { /* I wrote this */
        reviewer: 'TheGarlicSamurai44',
        score: 56,
        comment: `Aside from the fact this just rips off Invincible, that Spider-Man rip off's actor killed it.`,
        reviewerIsbanned: false,
        movie_id: bloodIsThickerThanWater._id
      },
      {
        reviewer: 'AlienMomFan99',
        score: 85,
        comment: `The alien reveal was WILD. Didn't see that coming at all! More of this, please.`,
        reviewerIsbanned: false,
        movie_id: bloodIsThickerThanWater._id
      },
      {
        reviewer: 'CinemaJunkie420',
        score: 40,
        comment: `Harlem in the 70s... but make it aliens? This ain't it, chief.`,
        reviewerIsbanned: false,
        movie_id: bloodIsThickerThanWater._id
      },
      { /* I wrote this */
        reviewer: 'AngelaReins',
        score: 65,
        comment: `Best parts of the movie were the ones that had the least to do with heroes. Makes the superhero moments much better. Too much gore though.`,
        reviewerIsbanned: false,
        movie_id: bloodIsThickerThanWater._id
      },
  
      // Lunar Eclipse
      {
        reviewer: 'MoonLander22',
        score: 92,
        comment: `This is what happens when you mix sci-fi with emotional depth. Masterpiece!`,
        reviewerIsbanned: false,
        movie_id: lunarEclipse._id
      },
      {
        reviewer: 'GamerAstronaut',
        score: 72,
        comment: `Could've been shorter, but those visuals had me shook. Space looks GOOD.`,
        reviewerIsbanned: false,
        movie_id: lunarEclipse._id
      },
      {
        reviewer: 'NerdAlert',
        score: 50,
        comment: `How are they breathing on the moon? I call fake news!`,
        reviewerIsbanned: true,
        movie_id: lunarEclipse._id
      },
  
      // The Haunted Carousel
      { /* I modified this */
        reviewer: 'Spooky4Life',
        score: 97,
        comment: `That moose is gonna haunt my dreams forever. 10/10.`,
        reviewerIsbanned: false,
        movie_id: hauntedCarousel._id
      },
      {
        reviewer: 'TiredGoose',
        score: 65,
        comment: `Bro, every five minutes it's a jump scare... can we chill for once?`,
        reviewerIsbanned: false,
        movie_id: hauntedCarousel._id
      },
      {
        reviewer: 'ClownFear101',
        score: 20,
        comment: `I hate clowns. This movie was my personal nightmare. No thank you.`,
        reviewerIsbanned: false,
        movie_id: hauntedCarousel._id
      },
  
      // Gigglefest
      {
        reviewer: 'LOLmaster',
        score: 76,
        comment: `Not gonna lie, I laughed so hard I cried. 5/7 perfect score!`,
        reviewerIsbanned: false,
        movie_id: giggleFest._id
      },
      {
        reviewer: 'NoSenseOfHumor',
        score: 30,
        comment: `If this is comedy, I'd rather watch paint dry. Worst movie night ever.`,
        reviewerIsbanned: false,
        movie_id: giggleFest._id
      },
      {
        reviewer: 'ClowningAround',
        score: 90,
        comment: `Absolutely bonkers in the best way. Slapstick for the win!`,
        reviewerIsbanned: false,
        movie_id: giggleFest._id
      },
  
      // Beneath the Ice
      {
        reviewer: 'FrozenFanBoy',
        score: 85,
        comment: `Chilling. Literally. This movie made me want to bundle up. So intense!`,
        reviewerIsbanned: false,
        movie_id: beneathTheIce._id
      },
      {
        reviewer: 'IceBreaker',
        score: 60,
        comment: `Solid, but could've used more action. The pacing was a bit slow.`,
        reviewerIsbanned: false,
        movie_id: beneathTheIce._id
      },
      {
        reviewer: 'IcyReception',
        score: 45,
        comment: `If I wanted to watch snow, I'd stare out my window. Yawn.`,
        reviewerIsbanned: false,
        movie_id: beneathTheIce._id
      },
  
      // Pixel Invasion
      {
        reviewer: 'Gamer4Lyfe',
        score: 78,
        comment: `Watching retro video game characters invade our world? Absolutely insane! Loved it!`,
        reviewerIsbanned: false,
        movie_id: pixelInvasion._id
      },
      {
        reviewer: 'TooManyPixels',
        score: 50,
        comment: `Glitchy as heck. Gave me a headache after 10 minutes.`,
        reviewerIsbanned: false,
        movie_id: pixelInvasion._id
      },
      { /* I modiefied this */
        reviewer: 'OldSchoolGamer',
        score: 90,
        comment: `Pac-Man running loose in New York? Love it!`,
        reviewerIsbanned: false,
        movie_id: pixelInvasion._id
      },
  ]

  // Writes all reviews to the database
  await Review.insertMany(reviews)
  console.log('============================')
  console.log('REVIEWS are in! Some loved it, some hate it. But they all gave you money sooooooo...')
  console.log('============================')
}

// I think putting this into a function ensures the running is async
const run = async () => {
  await main()
  db.close()
}

run()