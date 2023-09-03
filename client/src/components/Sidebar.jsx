import ListItem from "./Listitem"

function Sidebar({ content, setDocument }) {
  const handleClick = () => {
    setDocument(null) // null means upload page
  }

  const renderedItems = content.map((item) => {
    return (
      <ListItem
        id={item._id}
        key={item._id}
        title={item.title}
        isDue={item.isDue}
        setDocument={setDocument}
      />
    )
  })

  return (
    <>
      <div className="relative p-2 pt-3 flex flex-col gap-2 bg-sidebar-gray h-full">
        <div className="text-md font-medium text-center">
          <button
            className="p-2 border-2 border-gray-500 rounded-lg w-full text-white"
            onClick={handleClick}
          >
            New Session
          </button>
        </div>
        <div className="flex flex-col gap-1">{renderedItems}</div>
      </div>
    </>
  )
}

export default Sidebar
