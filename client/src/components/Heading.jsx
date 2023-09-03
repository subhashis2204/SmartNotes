import classNames from "classnames"

function Heading({ children, className }) {
  const classes = classNames(
    "text-2xl font-medium border-b-2 pb-2 mb-4",
    className
  )

  return (
    <>
      <h1 className={classes}>{children}</h1>
    </>
  )
}

export default Heading
