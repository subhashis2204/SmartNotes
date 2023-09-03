import { useState } from "react"

function AnswerBox({ answer }) {
  return (
    <>
      <div className="p-5 text-justify bg-gray-100 rounded-md mt-2 mx-5">
        {answer}
      </div>
    </>
  )
}

export default AnswerBox
