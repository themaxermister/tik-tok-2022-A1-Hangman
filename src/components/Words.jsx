var words = [
	"apple",
    "banana",
    "kiwifruit",
    "orange",
    "durian",
    "watermelon"
]

function randomWord() {
  return words[Math.floor(Math.random() * words.length)]
}

export { randomWord }