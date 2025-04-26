import React from 'react';

function App() {
  const equipmentList = [
    {
      id: 1,
      name: "Bench Press",
      image: "4201_9201PowerLiftingBench.jpg",
      description: "Perfect for chest workouts with adjustable incline levels."
    },
    {
      id: 2,
      name: "Treadmill",
      image: "https://via.placeholder.com/200x150.png?text=Treadmill",
      description: "High-performance treadmill with multiple speed settings."
    },
    {
      id: 3,
      name: "Dumbbells",
      image: "https://via.placeholder.com/200x150.png?text=Dumbbells",
      description: "Set of dumbbells ranging from 2kg to 30kg."
    },
    {
      id: 4,
      name: "Pull-up Bar",
      image: "https://via.placeholder.com/200x150.png?text=Pull-up+Bar",
      description: "Sturdy pull-up bar for upper body exercises."
    }
  ];

  return (
    <div className="p-8 font-sans bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">Gym Inventory</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {equipmentList.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden w-64 transform hover:scale-105 transition duration-300"
          >
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
