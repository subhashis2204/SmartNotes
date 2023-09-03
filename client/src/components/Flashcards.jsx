import { FlashcardArray } from "react-quizlet-flashcard"
import Heading from "./Heading"
import Alert from "@mui/material/Alert"
import AlertTitle from "@mui/material/AlertTitle"

function Flashcards({ flashcards }) {
  if (!flashcards) return <></>

  const questions = flashcards.map((flashcard, index) => {
    return {
      id: index,
      frontHTML: flashcard.question,
      backHTML: flashcard.answer,
    }
  })

  const content = (
    <div>
      <Alert severity="info">
        <AlertTitle>
          {" "}
          <strong>Info</strong>
        </AlertTitle>
        The text is too short — <strong>cannot create flashcards !</strong>
      </Alert>
    </div>
  )

  console.log(questions)
  return (
    <>
      <div>
        <Heading>Flashcards</Heading>
        {questions.length === 0 ? content : <></>}

        {questions.length > 0 && (
          <FlashcardArray
            cards={questions}
            frontContentStyle={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.2rem",
              padding: "2rem",
              textAlign: "center",
              backgroundColor: "lightgoldenrodyellow",
              color: "black",
            }}
            backContentStyle={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.2rem",
              padding: "2rem",
              textAlign: "center",
              backgroundColor: "lightgoldenrodyellow",
              color: "black",
            }}
            cycle
          />
        )}
      </div>
    </>
  )
}

export default Flashcards
