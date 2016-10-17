const NUM_FRAMES = 24

const init = () => {
  // Grab a reference to our lone <img> node/tag.
  const img = document.querySelector('img')
  // Start at frame one
  let frame = 1
  // Repeat the given function at a specified interval
  setInterval(() => {
    // reset frame counter
    if (frame > NUM_FRAMES) frame = 1
    // Pad frame number with leading zeros to 4 places
    const num = String('0000' + frame).slice(-4)
    // Set the <img>'s src attribute to be the path of
    // the new animation frame, using string interpolation
    img.src = `images/ball${num}.png`
    // Step to the next frame
    frame++
  }, 1000 / NUM_FRAMES) // 24 frames per second
}

document.addEventListener('DOMContentLoaded', init)
