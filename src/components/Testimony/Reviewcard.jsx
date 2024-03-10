/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

const ReviewCard = ({datum}) => {
    return (
        <div className="bg-white rounded-lg p-6 shadow-md max-w-md mx-auto my-2 h-[320px]">
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src={datum.image} alt="Client" />
          </div>
        </div>
        <p className="text-center mt-4 text-gray-800 ">{datum.description.slice(0,200)}
        </p>
        <div className="text-center mt-4">
          <p className="text-gray-600 font-semibold">{datum.name}</p>
          <p className="text-gray-500">{datum.designation}</p>
        </div>
      </div>
    );
};

export default ReviewCard;