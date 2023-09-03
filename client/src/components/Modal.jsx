import ReactDOM from "react-dom"
// import Rating from "@mui/material/Rating"
import { useState } from "react"
import { Rating } from "@smastrom/react-rating"
import axios from "axios"

function Modal({ setShowModal, documentID, setDocumentData }) {
  const [rating, setRating] = useState(0)

  const handleClick = async () => {
    setShowModal(false)

    console.log(documentID)

    const params = {
      rate: rating,
    }
    axios
      .get(`http://localhost:8000/uploads/${documentID}/review`, { params })
      .then((response) => {
        console.log(response.data)

        setDocumentData(response.data.answer)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return ReactDOM.createPortal(
    <>
      <div
        className="absolute inset-0 bg-gray-400 bg-opacity-60"
        onClick={handleClick}
      ></div>
      <div className="absolute inset-y-56 bg-white p-5 rounded-md grid grid-cols-12 inset-x-80">
        <div className="flex flex-col gap-4 items-center justify-around h-full col-start-0 col-span-7">
          <p className="text-2xl text-center">How was your review session ?</p>
          <Rating
            style={{ maxWidth: 250 }}
            value={rating}
            onChange={setRating}
          />
          <button
            onClick={handleClick}
            className="bg-green-700  px-3 py-2 text-white rounded-md"
          >
            Submit
          </button>
        </div>
        <div className="col-start-8 col-span-5 flex flex-col justify-around">
          <ul className="flex flex-col justify-around gap-2 text-sm">
            <li>
              <strong>5 stars</strong> - perfect response
            </li>
            <li>
              <strong>4 stars</strong> - correct response after a hesitation
            </li>
            <li>
              <strong>3 stars</strong> - correct response recalled with serious
              difficulty
            </li>
            <li>
              <strong>2 stars</strong> - incorrect response; where the correct
              one seemed easy to recall
            </li>
            <li>
              <strong>1 stars</strong> - incorrect response; the correct one
              remembered
            </li>
            <li>
              <strong>0 stars</strong> - complete blackout.
            </li>
          </ul>
        </div>
      </div>
    </>,
    document.getElementById("modal-container")
  )
}

export default Modal
