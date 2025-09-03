import { useState } from "react"

function App() {

  const [ formData, setFormData ] = useState({
    title: "",
    author: "",
    post: "",
    isPublic: false
  })

  function handleFormData(e) {

    const value =
      e.target.type === "checkbox"? e.target.checked:e.target.value

    setFormData((formData) => ({
      ...formData, [e.target.name]:value
    }))
  }

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
                    value={formData.title}
                    onChange={handleFormData}
                    placeholder="titolo"
                    className="form-control title" />
                </div>
                <div className="col-4">
                  <input type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleFormData}
                    placeholder="autore"
                    className="form-control author" />
                </div>
                <div className="col-4">
                  <div className="form-check">
                    <input type="checkbox"
                    name="isPublic"
                    id="isPublic"
                    checked={formData.isPublic}
                    onChange={handleFormData}
                    className="isPublic form-check-input" />
                    <label htmlFor="isPublic" className="form-check-label">Pubblico</label>
                  </div>
                </div>
                <div className="col-12">
                  <input type="text"
                    name="post"
                    value={formData.post}
                    onChange={handleFormData}
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
