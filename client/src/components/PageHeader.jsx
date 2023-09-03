import Modal from "./Modal"

function PageHeader({
  title,
  lastVisited,
  showModal,
  setShowModal,
  document,
  nextReview,
  setDocumentData,
}) {
  const handleClick = () => {
    setShowModal(true)

    console.log(document)
    console.log(nextReview)
  }

  return (
    <>
      <div className="px-2 border-b-2 flex justify-between items-center">
        <h1 className="py-2 text-2xl font-bold ">{title}</h1>
        <span
          className="bg-green-700 px-3 py-2 text-white rounded-md cursor-pointer"
          onClick={handleClick}
        >
          Recall Score
        </span>
      </div>
      <div className="flex gap-4">
        <div className="px-2 py-4 ">
          <span className="text-md">Last Visited :</span>{" "}
          <span className="bg-fuchsia-300 text-fuchsia-800 px-2 py-1 font-medium rounded-md">
            {lastVisited}
          </span>
        </div>
        {/* <div>{nextReview}</div> */}
        <div className="px-2 py-4">
          <span className="text-md">Next Review :</span>{" "}
          <span className="bg-fuchsia-300 text-fuchsia-800 px-2 py-1 font-medium rounded-md">
            {nextReview}
          </span>
        </div>
      </div>

      {showModal && (
        <Modal
          documentID={document}
          setShowModal={setShowModal}
          setDocumentData={setDocumentData}
        />
      )}
    </>
  )
}

export default PageHeader
