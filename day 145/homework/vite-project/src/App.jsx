import { useEffect, useState } from "react";
function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  function moving(e) {
    setMousePos({ x: e.clientX, y: e.clientY });
  }
    window.addEventListener("mousemove", moving);
  
    document.body.style.backgroundColor = "#060606";
    document.body.style.overflowX = 'hidden'
  const moveX = (mousePos.x - 100) / 70;
  const moveY = (mousePos.y - 100) / 70;
  const arr = ['Developer','Designer','Creator','Coder']
  const [currentText, setCurrentText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = arr[wordIndex];
    const speed = isDeleting ? 50 : 120;
  
    const timeout = setTimeout(() => {
      setCurrentText(prev =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );
  
      if (!isDeleting && currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % arr.length);
      }
    }, speed);
  
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, wordIndex]);
  const [widthPlus,setWidthPlus] = useState(0)
  const [widthPlus2,setWidthPlus2] = useState(0)
  const [percentText,setPercentText] = useState('')
  const [percentText2,setPercentText2] = useState('')

  function widthFunc(){
    for(let i =0;i< 24.4;i++){
      setTimeout(()=>{
        setWidthPlus((el) => el+1)
      },i * 100)
    }
  }
  useEffect(() => {
    let max = 50
    const percent = Math.round((widthPlus / max) * 10);
    setPercentText2(`${percent}%`);
  }, [widthPlus]);
  
  useEffect(() => {
    let max = 486
    const percent = Math.round((widthPlus2 / max) * 100);
    setPercentText(`${percent}%`);
  }, [widthPlus2]);
  
  

  useEffect(() => {
    widthFunc()
    fullWidth()
  }, []);
    function fullWidth(){
      for(let i=0;i<244;i++){
        setTimeout(()=>{
          setWidthPlus2((el)=>el+1)
        },i*10)
      }
    }
    let aClassName = 'text-white hover:text-[#FF014F] transition duration-[250ms]'
    
  return (
    <>
    <div className="relative w-full h-screen ">
      <nav className="flex justify-center gap-10 font-bold p-5">
        <a className={aClassName}  href="#">Home</a>
        <a className={aClassName}  href="#">Features</a>
        <a className={aClassName}  href="#">All Demos</a>
        <a className={aClassName}  href="#">Portfolio</a>
        <a className={aClassName}  href="#">Contact</a>
      </nav>
      <img className="absolute" src="./public/shape-01.png"/>
      <div className="absolute top-[-200px] left-[-269px] w-[682px] h-[845px] opacity-30 bg-rose-950  rounded-full filter blur-[150px]"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[550px] h-[450px] bg-rose-900 opacity-30 rounded-full filter blur-[150px]"></div>
      <div className="absolute top-[0%] right-[0%] w-[550px] h-[350px] bg-rose-900 opacity-30 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-[0] left-[0%] w-[500px] h-[350px] bg-rose-950 opacity-30 rounded-full filter blur-[100px]"></div>
      <div className="absolute left-120 w-[550px] h-[580px] bg-rose-950 opacity-30 rounded-full filter blur-[100px]"></div>

      <img
        className="absolute w-[330px] h-auto m-10 transition-transform duration-300 ease-out"
        src="./home-01.png"
        style={{ transform: `translate(${moveX}px, ${moveY}px)` }}
      />
      <img
        className="absolute w-[330px] h-auto m-10 right-0 transition-transform duration-300 ease-out"
        src="./home-02.png"
        style={{ transform: `translate(${-moveX}px, ${moveY}px)` }}
      />
      <img
        className="absolute w-[330px] h-auto m-10 bottom-0 transition-transform duration-300 ease-out"
        src="./home-03.png"
        style={{ transform: `translate(${moveX}px, ${-moveY}px)` }}
      />
      <img
        className="absolute w-[330px] h-auto right-0 m-10 bottom-0 transition-transform duration-300 ease-out"
        src="./home-03.png"
        style={{ transform: `translate(${-moveX}px, ${-moveY}px)` }}
      />

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
        <p className="text-7xl m-3">👋</p>
        <h1 className="text-5xl font-bold leading-tight">
          Biggest Personal Portfolio
        </h1>
        <h2 className="text-5xl font-bold">
          For <span className="text-pink-600">{currentText}</span>
        </h2>
        <p className="text-xl mt-6 max-w-xl">
          You can check my Portfolio as you can see my skills
        </p>
      </div>
    </div>
    <div className="flex justify-center items-center h-150 gap-10">
      <div className="w-105 h-80 rounded-lg bg-pink-600/5 text-[#D7D9FF] border-2 flex justify-center items-center flex-direction: column	 border-red-600/12">
      <img className=" absolute mb-40" src="./public/service-01.png"/>
      <b className=" text-center text-xl mb-10 text-white">Fast Performance</b>
      <p className=" absolute mt-30 text-[1.1rem] text-center">Optimized for a smaller build size, <br /> faster dev compilation and dozens of <br /> other improvements.
</p>
      </div>
      <div className="w-105 h-80 rounded-lg bg-pink-600/5 text-[#D7D9FF] border-2 flex justify-center items-center flex-direction: column	 border-red-600/12">
      <img className=" absolute mb-40" src="./public/service-02.png"/>
      <b className=" text-center text-xl mb-10 text-white">Perfect Responsive</b>
      <p className="absolute mt-30 text-[1.1rem] text-center">Our Template is full Perfect for all <br /> device. You can visit our template all <br/> device easily.</p>
      </div>
      <div className="w-105 h-80 rounded-lg bg-pink-600/5 text-[#D7D9FF] border-2 flex justify-center items-center flex-direction: column	 border-red-600/12">
      <img className=" absolute mb-40" src="./public/service-03.png"/>
      <b className=" text-center text-xl mb-10 text-white">Fast & Friendly Support</b>
      <p className="absolute mt-30 text-[1.1rem] text-center">We are provide 24 hours support for all <br /> clients.You can purchase without <br/> hesitation.</p>
      </div>
    </div>
    <div className="flex justify-center items-center flex-col relative top-50">
    <div className="text-[#FF014F] text-[80px] font-bold">44+</div>
    <h1 className="text-white text-center text-6xl absolute mt-50 font-bold">Pre-Build Creative <br /> <b className="text-gray-500"> Personal Portfolio </b> Demos</h1>
    <p className="text-center text-xl text-[#D7D9FF] relative top-50">We have carefully selected these categories based on our judgment. <br/> However, you are free to choose any suggested category that best fits <br/> your personal or individual preferences.
</p>
    </div>
    <div className="text-[#494967] opacity-10 font-bold text-[400px] -z-10 text-center mt-[-140px] gap-10">Reeni</div>
    <div className="grid grid-cols-3 relative top-60">
      <img className="w-120 m-5 cursor-pointer transition-transform duration-300 hover:-translate-y-3" src="./public/01.webp"/>
      <img className="w-120 transition-transform duration-300 hover:-translate-y-3" src="./public/03.webp"/>
      <img className="w-120 transition-transform duration-300 hover:-translate-y-3" src="./public/05.webp"/>
      <img className="w-120 m-5 transition-transform duration-300 hover:-translate-y-3" src="./public/07.webp"/>
      <img className="w-120 transition-transform duration-300 hover:-translate-y-3" src="./public/09.webp"/>
      <img className="w-120 transition-transform duration-300 hover:-translate-y-3" src="./public/11.webp"/>
      <img className="w-120 m-5 transition-transform duration-300 hover:-translate-y-3" src="./public/13.webp"/>
      <img className="w-120 transition-transform duration-300 hover:-translate-y-3" src="./public/15.webp"/>
      <img className="w-120 transition-transform duration-300 hover:-translate-y-3" src="./public/17.webp"/>
      <img className="w-120 m-5 transition-transform duration-300 hover:-translate-y-3" src="./public/19.webp"/>
      <img className="w-120 transition-transform duration-300 hover:-translate-y-3" src="./public/21.webp"/>
      <img className="w-120 transition-transform duration-300 hover:-translate-y-3" src="./public/23.webp"/>
    </div>
    <div className="text-[#494967] opacity-10 font-bold text-[370px] -z-10 text-center relative top-100 gap-10">Features</div>
    <b className="text-[#ff014f] text-7xl m-20">Features</b>
    <p className="text-white text-[1.8rem] absolute right-50">Fresh new features, even more power.</p>
    <p className="text-[#D7D9FF] absolute right-50 mt-10 text-[1.2rem]">Strengthen your website's flexibility and robustness with <br /> these powerful features. Access high-quality features at <br /> no cost.</p>
    <div className="flex justify-center items-center gap-10 relative top-100">
        <img src="./public/bootstrap.png" />
        <p className="absolute text-white left-78 top-50 text-2xl">bootstrap</p>
        <button className="absolute w-40 h-8 g-30 border-2 bg-transparent mt-90 left-72 text-[#9F9F9F] border-rose-800 font-bold">CSS Framework</button>
        <img src="./public/contact-form.png" />
        <p className="absolute text-white left-126 top-50 text-2xl">Documentation</p>
        <button className="absolute w-30 h-8 g-30 border-2 bg-transparent mt-90 left-131 text-[#9F9F9F] border-rose-800 font-bold">Instructions</button>
        <img src="./public/cross-browser.png" />
        <p className="absolute text-white left-177 top-50 text-2xl">Browser Support</p>
        <button className="absolute w-30 h-8 g-30 border-2 bg-transparent mt-90 left-185 text-[#9F9F9F] border-rose-800 font-bold">Compatable</button>
        <img src="./public/sass.png" />
        <p className="absolute text-white left-245 top-50 text-2xl">SCSS</p>
        <button className="absolute w-30 h-8 g-30 border-2 bg-transparent mt-90 left-238 text-[#9F9F9F] border-rose-800 font-bold">Preprocessor</button>
        <img src="./public/w3validation.png" />
        <p className="absolute text-white left-287 top-50 text-2xl">W3 Validation</p>
        <button className="absolute w-40 h-8 g-30 border-2 bg-transparent mt-90 left-285 text-[#9F9F9F] border-rose-800 font-bold">HTML Validation</button>
    </div>
    <p className="text-center text-[#ff014f] relative top-180">Mobile First Template</p>
    <p className="text-white font-bold text-center relative top-182 text-4xl">Responsive With all Device</p>
    <p className="text-[#d7d9ff] text-center relative top-190 font-bold">With a fully responsive design, your website automatically adjusts its layout and <br /> elements to match the screen size and resolution of the device being used.
</p>
<div>
  <img className="relative top-240 m-7" src="./public/device.png" />
</div>

<div className="w-full h-[800px] bg-[url('/public/bg-attach.jpg')] bg-fixed bg-cover bg-center relative top-300"></div>
<div className="w-320 h-150 bg-[#141414] border-2 transition duration-[450ms] hover:border-[#ff014f] relative top-350 m-auto rounded-3xl flex">
  <p className="text-[#ff014f] m-20 pt-30 font-bold">GET IN TOUCH</p>
  <h1 className="text-white text-5xl font-bold pt-60 ml-[-195px]">Elevate your brand <br/> with Me</h1>
  <p className="text-[#9F9F9F] pt-90 text-xl ml-[-420px]">ished fact that a reader will be distrol acted bioiiy <br /> desig ished fact that a reader will acted ished fact <br /> that a reader will be distrol acted
</p>
<form>
  <div className="grid grid-cols-2 relative left-25 top-30 gap-10">
  <input className="w-73 text-white font-[1rem] p-3 h-15 rounded-xl border-2 border-[#ffffff14]" required type="text"  placeholder="Your Name"/>
  <input className="w-73 text-white font-[1rem] p-3 h-15 rounded-xl border-2 border-[#ffffff14]" required type="number" placeholder="Phone Number"/>
  <input  className="w-73 text-white font-[1rem] p-3 h-15 rounded-xl border-2 border-[#ffffff14]" required type="email" placeholder="Your Email"/>
  <input  className="w-73 text-white font-[1rem] p-3 h-15 rounded-xl border-2 border-[#ffffff14]" required type="text" placeholder="Subject"/>
  </div>
  <input className="w-157 text-white font-[1rem] p-3 h-45 rounded-xl border-2 border-[#ffffff14] relative top-35 left-25"  type="text"/>
  <button className="w-157 h-15 rounded-4xl absolute border-none bg-[#ff014f] mt-90 font-bold text-[1rem] text-white right-10 cursor-pointer" type="submit">Appointment Now</button>
</form>
</div>
<h2 className="text-white text-3xl relative top-400 text-center font-bold ">Development Skill</h2>
    <div className="flex justify-center flex-col relative">
      <p className="text-white text-2sm absolute top-410  left-145 text-center font-bold">HTML</p>
    <div className="w-122 right-130 h-2 rounded-lg bg-[#1d1c1c] absolute bottom-[-1680px]">
      <div className="h-2 bg-[#ff014f] rounded-lg"
      style={{width:`${widthPlus2}px`}}>
      <b className="text-white relative top-[-16px] left-125">{percentText}</b>
      </div>
    </div>
    <p className="text-white text-3sm absolute top-425  left-145 text-center font-bold">CSS</p>
    <div className="w-122 right-130 h-2 rounded-lg bg-[#1d1c1c] absolute bottom-[-1740px]">
    <div className="h-2 bg-[#ff014f] rounded-lg"
      style={{width:`${widthPlus2}px`}}></div> 
      <b className="text-white relative top-[-16px] left-125">{percentText}</b>
         </div>
    <p className="text-white text-3sm absolute top-425  left-145 text-center font-bold">CSS</p>
         <div className="w-122 right-130 h-2 rounded-lg bg-[#1d1c1c] absolute bottom-[-1740px]">
    <div className="h-2 bg-[#ff014f] rounded-lg"
      style={{width:`${widthPlus2}px`}}></div> 
      <b className="text-white relative top-[-16px] left-125">{percentText}</b>
         </div>
    <p className="text-white text-2sm absolute top-440  left-145 text-center font-bold">JAVASCRIPT</p>
    <div className="w-122 right-130 h-2 rounded-lg bg-[#1d1c1c] absolute bottom-[-1800px]">
    <div className="h-2 bg-[#ff014f] rounded-lg"
      style={{width:`${widthPlus2}px`}}></div>
      <b className="text-white relative top-[-16px] left-125">{percentText}</b>
          </div>
    <p className="text-white text-2sm absolute top-456  left-145 text-center font-bold">REACT</p>
    <div className="w-122 right-130 h-2 rounded-lg bg-[#1d1c1c] absolute bottom-[-1860px]">
      <div className="h-2 bg-[#ff014f] rounded-lg"
      style={{width:`${widthPlus}px`}}
      ></div>
      <b className="text-white relative top-[-16px] left-125">{percentText2}</b>
    </div>
    </div>
    <div className="flex justify-center">
      <div className="group cursor-pointer w-100 h-105 rounded-xl border bg-[#0f1011] absolute top-2400 left-40">
        <img className="rounded-xl" src="./public/01.png"/>
        <p className="text-white text-xl font-bold text-center mt-5">Online Documented</p>
        <p className="text-white group:text-[#ff014f] group-hover:text-[#ff014f] transition duration-[450ms] mt-2 text-center">Well organized and up to date</p>
      </div>
      <div className="group cursor-pointer w-100 h-105 rounded-xl border bg-[#0f1011] absolute top-2400">
        <img className="rounded-xl" src="./public/02.png"/>
        <p className="text-white text-xl font-bold text-center mt-5">Dedicated Support</p>
        <p className="text-white group:text-[#ff014f] group-hover:text-[#ff014f] transition duration-[450ms] mt-2 text-center">If You Need support ? Submit a ticket.</p>
      </div>
      <div className="w-100 group cursor-pointer h-105 rounded-xl border bg-[#0f1011] absolute top-2400 right-40">
      <img className="rounded-xl" src="./public/03.png"/>
        <p className="text-white text-xl font-bold text-center mt-5">Customization Service</p>
        <p className="text-white group:text-[#ff014f] group-hover:text-[#ff014f] transition duration-[450ms] mt-2 text-center">Well organized and up to date</p>
      </div>
    </div>
    <div className="w-320 rounded-xl h-140 flex relative top-750 m-auto bg-[#ff014f]">
      <img className="h-200 relative bottom-60" src="./public/footerimg.png"/>
      <h1 className="text-white text-[4.2rem] leading-tight mt-20 ml-12	font-bold">Encounter <br/> outstanding service <br/> excellence with us</h1>
      <p className="text-[#D7D9FF] absolute bottom-35 right-10 text-xl">At the heart of our company lies a commitment to excellence that drives <br/> everything we do.</p>
      <button className="absolute w-55 h-12 rounded-lg bottom-15 right-113 font-bold text-[1rem] cursor-pointer text-[#ff014f] bg-white">Interested</button>
    </div>
    <footer className="w-full h-150 bg-[#1b1919] flex absolute top-2900">
      <h1 className="text-white leading-tight m-20 mt-50 text-[3rem]"><b>Get Ready</b> To Create <br /> Great</h1>
      <input className="w-50 h-10 border-none border-red-500 absolute left-22 bottom-50 text-white" type="email" placeholder="Email Adress"/>
      <hr className="border border-[#534d4d] w-50 absolute left-21 bottom-47"/> 
      <h1 className="text-white font-bold text-[1.4rem] m-40">Quick Link</h1>
      <a className="text-white text-[1rem] absolute left-191 top-60" href="#">About Me</a>
      <a className="text-white text-[1rem] absolute left-191 top-70" href="#">Service</a>
      <a className="text-white text-[1rem] absolute left-191 top-80" href="#">Contact Me</a>
      <a className="text-white text-[1rem] absolute left-191 top-90" href="#">Blog Post</a>
      <a className="text-white text-[1rem] absolute left-191 top-100" href="#">Pricing</a>
      <h1 className="text-white font-bold m-37 text-[1.4rem]">Contact</h1>
      <p className="absolute text-white right-61 top-60 font-bold text-[1.1rem]">chavle329@gmail.com</p>
      <p className="absolute text-white right-80 top-70 font-bold text-[1.1rem]">01245789321</p>
      <img className="absolute w-10 right-100 top-80" src="./public/instagram-svgrepo-com.svg"/>
      <img className="absolute w-10 right-90 top-80" src="./public/facebook-svgrepo-com.svg"/>
      <img className="absolute w-8 right-80 top-81" src="./public/twitter-154-svgrepo-com.svg" alt="" />
    </footer>
    </>
  );
}


export default App;
