import Image, { StaticImageData } from "next/image";

const UniCards = ({imageData,description,title}:{imageData:StaticImageData,description:String,title:String}) => {
    return (
        <>
          <div className="p-4 sm:w-1/2 lg:w-1/3">
                 <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <Image className="lg:h-72 md:h-48 w-full object-cover object-center" width={100} height={192}
                            src={imageData} alt="school" unoptimized/>
                        <div className="p-6  hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                            {/* <h2 className="text-base font-medium text-indigo-300 mb-1">October 29,
                                2021</h2> */}
                            <h1 className="text-2xl font-semibold mb-3">{title}</h1>
                            <p className="leading-relaxed mb-3">{description}</p>
                           
                        </div>
                    </div>
            </div>
        </>
        
    );
}

export default UniCards;