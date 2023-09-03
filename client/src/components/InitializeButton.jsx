function InitializeButton({ children, onClick }) {
  return (
    <>
      <div className="text-center">
        <button
          className="bg-green-700 text-white rounded-md px-3 py-2"
          onClick={onClick}
        >
          {children}
        </button>
      </div>
    </>
  )
}

export default InitializeButton
