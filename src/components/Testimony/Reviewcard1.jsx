/* eslint-disable react/no-unescaped-entities */


const ReviewCard1 = () => {
    return (
        <div className="bg-white rounded-lg p-6 shadow-md max-w-md mx-auto my-2">
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src="https://i.ibb.co/v3ZrB7t/staff-4-jpg.webp" alt="Client" />
          </div>
        </div>
        <p className="text-center mt-4 text-gray-800">
        "Deliciously crafted dishes with exquisite flavors! The restaurant's diverse menu caters to every palate. The ambiance enhances the dining experience, making it a perfect culinary retreat."
        </p>
        <div className="text-center mt-4">
          <p className="text-gray-600 font-semibold">John Doe</p>
          <p className="text-gray-500">Digital Marketing Expert</p>
        </div>
      </div>
    );
};

export default ReviewCard1;