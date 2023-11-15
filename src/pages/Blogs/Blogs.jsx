
import useAxios from "../../hooks/useAxios";

const Blogs = () => {
    const hoookAxios = useAxios();
    hoookAxios.get('/blogs').then(res=>{
        console.log(res.data);
    });
    return (
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div>
                <div className="relative">
                    <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                    <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                        <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                        <div className="mx-4">
                            <h1 className="text-sm text-gray-700 dark:text-gray-200">Tom Hank</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Creative Director</p>
                        </div>
                    </div>
                </div>

                <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                    What do you want to know about UI
                </h1>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor si
                </p>

                <a href="#" className="inline-block mt-4 text-blue-500 underline hover:text-blue-400">Read more</a>
            </div>
        </div>
    );
};

export default Blogs;
