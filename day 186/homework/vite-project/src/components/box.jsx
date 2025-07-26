import React, { use, useState } from 'react'

const Box = () => {
   const data = [
  {
    logo: "/src/assets/logo-devlens.svg",
    name: "DevLens",
    description: "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
  },
  {
    logo: "/src/assets/logo-style-spy.svg",
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },
  {
    logo: "/src/assets/logo-speed-boost.svg",
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
  },
  {
    logo: "/src/assets/logo-json-wizard.svg",
    name: "JSONWizard",
    description: "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true,
  },
  {
    logo: "/src/assets/logo-tab-master-pro.svg",
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true,
  },
  {
    logo: "/src/assets/logo-viewport-buddy.svg",
    name: "ViewportBuddy",
    description: "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },
  {
    logo: "/src/assets/logo-markup-notes.svg",
    name: "Markup Notes",
    description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },
  {
    logo: "/src/assets/logo-grid-guides.svg",
    name: "GridGuides",
    description: "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
  },
  {
    logo: "/src/assets/logo-palette-picker.svg",
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },
  {
    logo: "/src/assets/logo-link-checker.svg",
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true,
  },
  {
    logo: "/src/assets/logo-dom-snapshot.svg",
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false,
  },
  {
    logo: "/src/assets/logo-console-plus.svg",
    name: "ConsolePlus",
    description: "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  }
];
  const [toggleStates, setToggleStates] = useState(Array(data.length).fill(false))
  const [info,setInfo] = useState(data)

  const handleToggle = (index) => {
    setToggleStates((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    )
  }

  const handleRemove = (index) => {
    setInfo(prev=>prev.filter((_,i)=> i!== index))
    setToggleStates((prev) => prev.filter((_, i) => i !== index));

  }

  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-[1160px] mt-8 mx-auto gap-6 px-4">
      {info.map((el, index) => (
        <div key={index} className="box w-full h-[200px] p-4 rounded-2xl flex flex-col justify-between bg-white bg-opacity-10 text-white shadow-md">
          <div className="flex gap-4 items-start">
            <img src={el.logo} alt={el.name} className="w-14 h-14" />
            <div>
              <b className="block text-lg">{el.name}</b>
              <p className="text-sm mt-1 text-neutral-400">{el.description}</p>
            </div>
          </div>
          <div className="mt-4 flex gap-[200px]">
            <button onClick={()=>handleRemove(index)} className="btn w-24 h-9 cursor-pointer text-white rounded-3xl hover:bg-red-600 transition">Remove</button>
            <button onClick={()=>handleToggle(index)} className={`w-12 h-6 mt-2 cursor-pointer ${toggleStates[index] ? 'bg-red-400' : 'bg-neutral-400'} rounded-3xl`}>
                <div className={`w-[18px] h-[18px] ${ toggleStates[index] ? 'ml-[23px]' : 'ml-[1px]' } bg-white rounded-3xl`}></div>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Box