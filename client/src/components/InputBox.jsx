import axios from "axios"
import { useState } from "react"

function InputBox({ setAnswer }) {
  const [input, setInput] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const params = {
      query: input,
    }
    const response = await axios.get("http://localhost:8000/uploads/chats", {
      params,
    })

    setAnswer(response.data.response)
  }

  return (
    <>
      <div className="px-5">
        <form
          action=""
          className="p-2 border-2 flex rounded-md"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="bg-slate-100 p-2 rounded-md grow mr-2 outline-0 border-2 border-gray-300"
            placeholder="Please Type Your Question Here"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            type="submit"
            className="bg-green-700 px-3 py-2 rounded-md text-white"
          >
            Send
          </button>
        </form>
      </div>
    </>
  )
}

export default InputBox
