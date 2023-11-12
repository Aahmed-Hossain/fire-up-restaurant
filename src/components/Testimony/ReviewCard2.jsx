/* eslint-disable react/no-unescaped-entities */


const ReviewCard2 = () => {
    return (
        <div className="bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto">
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src="https://i.ibb.co/CBfG8Vs/staff-3-jpg.webp" alt="Client" />
          </div>
        </div>
        <p className="text-center mt-4 text-gray-800">
          "Your digital service is absolutely fantastic! I've seen a significant improvement in my online presence since I started working with you. Your team is top-notch."
        </p>
        <div className="text-center mt-4">
          <p className="text-gray-600 font-semibold">Bob Johnson</p>
          <p className="text-gray-500">Businessman</p>
        </div>
      </div>
    );
};

export default ReviewCard2;