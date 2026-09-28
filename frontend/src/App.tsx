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

const recommendations = [
  {
    title: "The Secret History",
    author: "Donna Tart",
    moods: ["🕯️ Dark Academia", "🍂 Autumn"]
  },

    {
    title: "The Very Secret Society of Irregular Witches",
    author: "Sangu Mandanna",
    moods: ["☕ Cosy", "🎃 Spooky"]
  },
  
  {
    title: "The Night Circus",
    author: "Erin Morgenstern",
    moods: ["🌙 Late Night", "🎃 Spooky"]
  },
  
  {
    title: "The Guernsey Literary and Potato Peel Pie Society",
    author: "Mary Ann Shaffer",
    moods: ["☕ Cosy", "🌧️ Rainy"]
  },
]

function App() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [recommendedBook, setRecommendedBook] = useState<{
    title: string
    author: string
  } | null >(null)

  //recommendation function
  const findBook = () => {
    if (!selectedMood) {
      return
    }

    const matchingBooks = recommendations.filter((book) =>
      book.moods.includes(selectedMood)
  )

  if (matchingBooks.length == 0){
    setRecommendedBook(null)
    return
  }

  const randomBook = matchingBooks[Math.floor(Math.random() * matchingBooks.length)]

  setRecommendedBook(randomBook)
  }
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

        <button 
        className="discover-button" 
        onClick={findBook} 
        disabled={!selectedMood}>
          
          Find me a book
        </button>

{recommendedBook && (
  <div className="recommendation">
    <div className="recommendation-cover">
      BOOK
    </div>

    <div className="recommendation-info">
      <p className="section-label">YOUR PAPERBACK WEATHER PICK</p>

      <h2>{recommendedBook.title}</h2>
      <p>{recommendedBook.author}</p>

      {selectedMood && (
        <span className="recommendation-mood">
          {selectedMood}
        </span>
      )}
    </div>
  </div>
)}
      </section>
    </main>
  )
}

export default App
