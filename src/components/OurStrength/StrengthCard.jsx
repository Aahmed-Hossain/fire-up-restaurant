/* eslint-disable react/prop-types */


const StrengthCard = ({strength}) => {
  return (
    <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 p-2">
    <img className="object-cover h-[6rem] w-[35%] mx-auto" src={strength.image} alt="avatar"/>
<div className="space-y-2 text-center">
    <a className="block text-xl font-bold text-gray-800 dark:text-white" >{strength.title}</a>
    <span className="text-sm text-gray-700 dark:text-gray-200">{strength.description}</span>
</div>
</div>
  )
}

export default StrengthCard