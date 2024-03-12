/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

const TestimonyCard = ({testimony}) => {
    return (
        <div className="bg-white rounded-lg p-6 shadow-md max-w-md mx-auto my-2 h-[320px]">
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src={testimony.image} alt="Client" />
          </div>
        </div>
        <p className="text-center mt-4 text-gray-800 ">{testimony.description.slice(0,200)}
        </p>
        <div className="text-center mt-4">
          <p className="text-gray-600 font-semibold">{testimony.name}</p>
          <p className="text-gray-500">{testimony.designation}</p>
        </div>
      </div>
    );
};

export default TestimonyCard;