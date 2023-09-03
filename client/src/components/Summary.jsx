import Heading from "./Heading"

function Summary({ children }) {
  return (
    <>
      <div>
        <Heading>Summary</Heading>
        <p>{children}</p>
      </div>
    </>
  )
}

export default Summary
