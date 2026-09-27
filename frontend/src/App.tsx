import './App.css'

function App() {
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
            <h2>The Secret History</h2>
            <p>Donna Tartt</p>

            <div className="progress">
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>

              <span>72%</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mood-section">
        <p className="section-label">WHAT ARE YOU IN THE MOOD FOR?</p>

        <div className="moods">
          <button>🍂 Autumn</button>
          <button>☕ Cosy</button>
          <button>🌙 Late Night</button>
          <button>🕯️ Dark Academia</button>
          <button>🌧️ Rainy</button>
          <button>🎃 Spooky</button>
        </div>

        <button className="discover-button">
          Find me a book
        </button>
      </section>
    </main>
  )
}

export default App
