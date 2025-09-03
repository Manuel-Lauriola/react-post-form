
function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form>
              <div className="row gy-4 my-5">
                <div className="col-4">
                  <input type="text"
                    name="title"
                    placeholder="titolo"
                    className="form-control title" />
                </div>
                <div className="col-4">
                  <input type="text"
                    name="author"
                    placeholder="autore"
                    className="form-control author" />
                </div>
                <div className="col-4">
                  <input type="checkbox"
                    name="isPublic"
                    className="isPublic form-check-inline" />
                  <label htmlFor="isPublic">Pubblico</label>
                </div>
                <div className="col-12">
                  <input type="text"
                    name="post"
                    placeholder="scrivi il tuo post"
                    className="form-control post" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
