import { useState } from "react"
import axios from "axios"

function App() {

  const [ formData, setFormData ] = useState({
    title: "",
    author: "",
    body: "",
    public: false
  })

  function handleFormData(e) {

    const value =
      e.target.type === "checkbox"? e.target.checked:e.target.value

    setFormData((formData) => ({
      ...formData, [e.target.name]:value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData).then((resp) => {
      console.log(`post inviato`+ resp.data)
    })
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form onSubmit={handleSubmit}>
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
                    name="public"
                    id="public"
                    checked={formData.public}
                    onChange={handleFormData}
                    className="public form-check-input" />
                    <label htmlFor="public" className="form-check-label">Pubblico</label>
                  </div>
                </div>
                <div className="col-12">
                  <textarea
                    name="body"
                    value={formData.body}
                    onChange={handleFormData}
                    placeholder="scrivi il tuo post"
                    className="form-control post"
                    rows={10} />
                </div>
                <div className="col-12 d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary">
                    Invia Post
                  </button>
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
