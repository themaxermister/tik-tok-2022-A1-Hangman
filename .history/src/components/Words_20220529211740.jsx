var words = [
	"apple",
    "banana",
    "kiwifruit",
    "orange",
    "durian",
    "watermelon",
    "guava",
    "papaya",
    "grape",
    "strawberry",
    "persimmon"
]

function randomWord() {
  return words[Math.floor(Math.random() * words.length)]
}

export { randomWord }