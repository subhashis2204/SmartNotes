import axios from "axios"
import { useState, useEffect } from "react"
import Carousel from "../components/Carousel"
import PageHeader from "../components/PageHeader"
import Flashcards from "../components/Flashcards"
import Summary from "../components/Summary"

function DetailsPage({ document }) {
  const [documentData, setDocumentData] = useState({})
  const [showModal, setShowModal] = useState(false)

  const {
    _id,
    title,
    image_urls,
    last_updated,
    flashcards,
    summary,
    next_review,
  } = documentData

  console.log(next_review)

  useEffect(() => {
    const fetchDocument = async () => {
      const response = await axios.get(
        `http://localhost:8000/uploads/${document}`
      )

      console.log(response.data)
      console.log(response.data.answer)
      setDocumentData(response.data.answer)
    }

    fetchDocument()
  }, [document])

  console.log(flashcards)

  return (
    <>
      <div>
        <PageHeader
          title={title}
          lastVisited={last_updated}
          nextReview={next_review}
          showModal={showModal}
          setShowModal={setShowModal}
          document={document}
          setDocumentData={setDocumentData}
        />
        <section className="grid grid-cols-12 gap-4 py-5">
          <section className="col-start-1 col-span-5 flex justify-center">
            <Carousel image_urls={image_urls} />
          </section>
          <section className="col-start-6 col-span-6 flex flex-col gap-4">
            <Flashcards flashcards={flashcards} />
            <Summary>{summary}</Summary>
          </section>
        </section>
      </div>
    </>
  )
}

export default DetailsPage
