const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
  counter.innerText = '0' // set text to 0

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target')  // bring the final number from target
    const c = +counter.innerText // "c" is intermediate number

    const increment = target / 200 // this is the speed of incrementing during each tick. It's attached to the final figure => the same speed for all counters

    if(c < target) { // this will mare sure c doesn't go over the final number
      counter.innerText = `${Math.ceil(c + increment)}` // here we set innerText of counter to the intermediate number (c) and add an increment + round it up with Math.ceil

      setTimeout(updateCounter, 1) // run this function every 1ms till the intermadiate number reaches the final value
    } else {
      counter.innerText = target
    }
  }
  
  updateCounter()
})