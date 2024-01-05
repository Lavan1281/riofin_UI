
import React from "react";

const Assets = () => {
  const cardData = [
    {
      title: "Pioneers in Alternative Investments",
      description: "The process of managing a task through its life cycle. It involves planning, testing, tracking.",
      opacity: 75,
    },
    {
      title: "Think Beyond Traditional Assets",
      description: "The technology by which a process or procedure is performed with minimal human assistance.",
      opacity: 75,
    },
    {
      title: "Join 3,000+ Investors",
      description: "Creating a plan to spend your money. This spending planner is called a budgeting tool.",
      opacity: 75,
    },
  ];

  return (
    <div className="bg-[#2272FF]  p-8">
     <div>
        <h2 className="text-5xl text-white font-bold mx-56 pl-60 pt-5 pb-8 ">What Is RIOFIN ASSETS?</h2>
        <hr className="border-t-4 border-green-500 w-3/4 mx-56 pr-96 p-2 "/>
        <p className="text-2xl font-semibold text-white mx-56 pl-40 pt-5 pb-16  ">At Riofin: Higher Returns, stronger Portfolio, Capital Protection.</p>
      </div> 

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((index) => (
          <div key={index} className="max-w-md mx-auto overflow-hidden shadow-lg rounded-lg relative">
            <div className={`relative h-64 opacity-${cardData[index - 1]?.opacity}`}>
              <img
                src={require(`./img${index}.jpg`)}
                alt={`Card ${index}`}
                className="w-full h-full object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-white rounded-t-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-black text-center p-4">
                  <h2 className="text-2xl font-bold">{cardData[index - 1]?.title}</h2>
                  <p className="mt-2">{cardData[index - 1]?.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assets;


