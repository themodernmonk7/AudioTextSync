const data = [
  {
    text: "Here's to the crazy ones,",
    type: "word",
    startTime: 3.79,
  },
  {
    text: "the misfits,",
    type: "word",
    startTime: 6.53,
  },
  {
    text: "the rebels,",
    type: "word",
    startTime: 8.27,
  },
  {
    text: "the troublemakers,",
    type: "word",
    startTime: 10.13,
  },
  {
    text: "the round pegs",
    type: "word",
    startTime: 12.17,
  },
  {
    text: "in the square holes...",
    type: "word",
    startTime: 13.31,
  },
  {
    text: "the ones ",
    type: "word",
    startTime: 16.05,
  },
  {
    text: "who see things",
    type: "word",
    startTime: 16.71,
  },
  {
    text: "differently —",
    type: "word",
    startTime: 17.46,
  },
  {
    text: "they're not fond of rules...",
    type: "word",
    startTime: 19.3,
  },
  {
    text: "and they",
    type: "word",
    startTime: 20.41,
  },
  {
    text: "have no respect",
    type: "word",
    startTime: 20.97,
  },
  {
    text: "for the status quo.",
    type: "word",
    startTime: 21.91,
  },
  {
    text: "You can quote them,",
    type: "word",
    startTime: 24.59,
  },
  {
    text: "disagree with them,",
    type: "word",
    startTime: 26.0,
  },
  {
    text: "glorify",
    type: "word",
    startTime: 27.55,
  },
  {
    text: "or vilify them.",
    type: "word",
    startTime: 28.37,
  },
  {
    text: "About the only thing",
    type: "word",
    startTime: 30.53,
  },
  {
    text: "you can't do",
    type: "word",
    startTime: 31.6,
  },
  {
    text: "is ignore them",
    type: "word",
    startTime: 32.58,
  },
  {
    text: "because they change things...",
    type: "word",
    startTime: 34.14,
  },
  {
    text: "They push",
    type: "word",
    startTime: 36.36,
  },
  {
    text: "the human race forward,",
    type: "word",
    startTime: 37.1,
  },
  {
    text: "while some may see",
    type: "word",
    startTime: 40.49,
  },
  {
    text: "them as the crazy ones,",
    type: "word",
    startTime: 41.5,
  },
  {
    text: "we",
    type: "word",
    startTime: 44.27,
  },
  {
    text: "see",
    type: "word",
    startTime: 44.91,
  },
  {
    text: "genius,",
    type: "word",
    startTime: 45.21,
  },
  {
    text: "because",
    type: "word",
    startTime: 47.45,
  },
  {
    text: "the people who are crazy enough",
    type: "word",
    startTime: 47.9,
  },
  {
    text: "to think they",
    type: "word",
    startTime: 49.23,
  },
  {
    text: "can change the world,",
    type: "word",
    startTime: 49.74,
  },
  {
    text: "are the ones who do.",
    type: "word",
    startTime: 52.49,
  },
]
const playButton = document.getElementById("playButton")
const audioPlayer = document.querySelector(".player")
const lyricsContainer = document.querySelector(".lyricsContainer")

// Add click event listener to the play button
playButton.addEventListener("click", () => {
  // Hide the play button when click on
  playButton.classList.add("hide")

  // Play the audio
  audioPlayer.play()
})

// Create a map to associate each line with its corresponding start time
const syncData = data.map((line) => ({
  start: line.startTime,
  text: line.text,
}))

// Generate the <span> tag for each line and append it to the lyrics div
syncData.forEach((item) => {
  const spanTag = document.createElement("span")
  spanTag.innerText = item.text
  lyricsContainer.appendChild(spanTag)
})

audioPlayer.addEventListener("timeupdate", () => {
  // Get the current time of the audio player
  const currentTime = audioPlayer.currentTime
  // Toggle the "active" class for each span tag based on the current time
  syncData.forEach((item, index) => {
    const spanTag = lyricsContainer.children[index]

    if (currentTime >= item.start) {
      spanTag.classList.add("active")
    }
  })
})

// Add event listener to:
// - remove the active class when the audio finishes playing
// - reset the button when the audio finishes playing
audioPlayer.addEventListener("ended", () => {
  syncData.forEach((_, index) => {
    const spanTag = lyricsContainer.children[index]
    spanTag.classList.remove("active")
  })
  playButton.classList.remove("hide")
})

// Prevent right click on mouse
document.addEventListener("contextmenu", (e) => e.preventDefault(), false)
