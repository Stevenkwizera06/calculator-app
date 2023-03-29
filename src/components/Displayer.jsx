const Displayer = ({ value }) => {
  return (
    <div className='w-full bg-gray-400 h-full col-span-4 flex justify-end items-end text-2xl text-white p-5'>
      {value || '0'}
    </div>
  )
}

export default Displayer
