/* eslint-disable react/no-unescaped-entities */

const ReviewCard4 = () => {
    return (
        <div className="bg-white rounded-lg p-6 shadow-md max-w-md mx-auto my-2">
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src="https://i.ibb.co/zHdT4v0/staff-2-jpg.webp" alt="Client" />
          </div>
        </div>
        <p className="text-center mt-4 text-gray-800">
        "An epicurean's dream! The restaurant offers a delectable fusion of flavors that tantalize the taste buds. The atmosphere elevates the dining adventure, making it a must-visit for food connoisseurs."
        </p>
        <div className="text-center mt-4">
          <p className="text-gray-600 font-semibold">Hemel Johnson</p>
          <p className="text-gray-500">Businessman</p>
        </div>
      </div>
    );
};

export default ReviewCard4;