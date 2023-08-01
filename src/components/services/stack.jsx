
const StackCard = ({id, logo, title}) => {
  return (
    <div className=" flex flex-col gap-2 items-center bg-tertiary p-5 hover:bg-secondary hover:scale-110 transition-all group">
      <div key={id} className="text-7xl group-hover:text-main">{logo}</div>
      <p className="text-xs group-hover:text-main">{title}</p>
    </div>
  )
}

export default StackCard
