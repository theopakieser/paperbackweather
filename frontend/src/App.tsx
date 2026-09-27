import './App.css'
import {useState} from "react"

type Book = {
  title: string
  author: string
  progress: number
}

const currentBook: Book = {
  title: "The Illiad",
  author:  "Homer",
  progress: 23,
}

const moods = [
  "🍂 Autumn",
  "☕ Cosy",
  "🌙 Late Night",
  "🕯️ Dark Academia",
  "🌧️ Rainy",
  "🎃 Spooky",
]

function App() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  return (
    <main>
      <header>
        <p className="eyebrow">PAPERBACK WEATHER</p>
        <h1>Books for every kind of day.</h1>
      </header>

      <section className="currently-reading">
        <p className="section-label">CURRENTLY READING</p>

        <div className="book">
          <div className="book-cover">
            BOOK
          </div>

          <div className="book-info">
            <h2>{currentBook.title}</h2>
            <p>{currentBook.author}</p>

            <div className="progress">
              <div className="progress-bar">
                <div 
                className="progress-fill"
                style={{width: `${currentBook.progress}%`}}
                ></div>
              </div>
              <span>{currentBook.progress}%</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mood-section">
        <p className="section-label">WHAT ARE YOU IN THE MOOD FOR?</p>

        <div className="moods">
          {moods.map((mood) => (
            <button key = {mood}
            onClick={() => setSelectedMood(mood)}
            >
              {mood}
            </button>
          ))}
        </div>

  {selectedMood && (
    <p className="selected-mood">
      You're in the mood for {selectedMood}.
    </p>
  )}

        <button className="discover-button">
          Find me a book
        </button>
      </section>
    </main>
  )
}

export default App
