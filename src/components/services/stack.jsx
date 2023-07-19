
const StackCard = ({id, logo, title}) => {
  return (
    <div className=" flex flex-col gap-2 items-center bg-tertiary p-5">
      <div key={id} className="text-7xl ">{logo}</div>
      <p className="text-xs">{title}</p>
    </div>
  )
}

export default StackCard
