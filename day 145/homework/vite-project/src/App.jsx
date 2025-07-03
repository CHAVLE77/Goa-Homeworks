import { useEffect, useState,useRef } from "react";
function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const demoRef = useRef(null);
    const portfolioRef = useRef(null);
    const featuresRef = useRef(null);
    const contactRef = useRef(null);
  function moving(e) {
    setMousePos({ x: e.clientX, y: e.clientY });
  }
  
    const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener("mousemove", moving);
    document.body.style.backgroundColor = "#060606";
    document.body.style.overflowX = 'hidden';
    return () => window.removeEventListener("mousemove", moving);
  }, []);

  const moveX = (mousePos.x - 100) / 70;
  const moveY = (mousePos.y - 100) / 70;
  const arr = ['Developer','Designer','Creator','Coder'];
  const [currentText, setCurrentText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [widthPlus, setWidthPlus] = useState(0);
  const [widthPlus2, setWidthPlus2] = useState(0);
  const [percentText, setPercentText] = useState('');
  const [percentText2, setPercentText2] = useState('');

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

  function widthFunc() {
    for(let i =0;i< 24.4;i++){
      setTimeout(()=>{
        setWidthPlus((el) => el+1)
      },i * 100)
    }
  }

  function fullWidth(){
    for(let i=0;i<244;i++){
      setTimeout(()=>{
        setWidthPlus2((el)=>el+1)
      },i*10)
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

  let aClassName = 'text-white hover:text-[#FF014F] transition duration-[250ms]'
    
  return (
    <div className="overflow-x-hidden">
      <div className="relative w-full h-screen overflow-hidden">
        <nav className="flex justify-center gap-4 md:gap-10 md:text-[1.2rem] font-bold p-7">
          <a className='text-[#ff014f]' href="#">Home</a>
          <a className={aClassName} href="#"  onClick={(e) => {
            e.preventDefault();
            scrollToSection(featuresRef);
          }}>Features</a>
          <a className={aClassName} href="#"  onClick={(e) => {
            e.preventDefault();
            scrollToSection(demoRef);
          }}>All Demos</a>
          <a className={aClassName} href="#" onClick={(e) => {
            e.preventDefault();
            scrollToSection(portfolioRef);
          }}>Portfolio</a>
          <a className={aClassName} href="#" onClick={(e) => {
            e.preventDefault();
            scrollToSection(contactRef);
          }}>Contact</a>
        </nav>

        <img className="hidden md:block absolute" src="./shape-01.png" alt=""/>
        <div className="hidden md:block absolute top-[-200px] left-[-269px] w-[682px] h-[845px] opacity-30 bg-rose-950 rounded-full filter blur-[150px]"></div>
        <div className="hidden md:block absolute bottom-[-100px] right-[-100px] w-[550px] h-[450px] bg-rose-900 opacity-30 rounded-full filter blur-[150px]"></div>
        <div className="hidden md:block absolute top-[0%] right-[0%] w-[550px] h-[350px] bg-rose-900 opacity-30 rounded-full filter blur-[100px]"></div>
        <div className="hidden md:block absolute bottom-[0] left-[0%] w-[500px] h-[350px] bg-rose-950 opacity-30 rounded-full filter blur-[100px]"></div>
        <div className="hidden md:block absolute left-120 w-[550px] h-[580px] bg-rose-950 opacity-30 rounded-full filter blur-[100px]"></div>

        <img className="hidden md:block absolute w-[200px] lg:w-[330px] h-auto m-10 transition-transform duration-300 ease-out" src="./home-01.png"
          style={{ transform: `translate(${moveX}px, ${moveY}px)` }}
        />
        <img className="hidden md:block absolute w-[200px] lg:w-[330px] h-auto m-10 right-0 transition-transform duration-300 ease-out" src="./home-02.png"
          style={{ transform: `translate(${-moveX}px, ${moveY}px)` }}
        />
        <img className="hidden md:block absolute w-[200px] lg:w-[330px] h-auto m-10 bottom-0 transition-transform duration-300 ease-out" src="./home-03.png"
          style={{ transform: `translate(${moveX}px, ${-moveY}px)` }}
        />
        <img className="hidden md:block absolute w-[200px] lg:w-[330px] h-auto right-0 m-10 bottom-0 transition-transform duration-300 ease-out" src="./home-03.png"
          style={{ transform: `translate(${-moveX}px, ${-moveY}px)` }}
        />

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
          <p className="text-7xl m-3">👋</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Biggest Personal Portfolio
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold">
            For <span className="text-pink-600">{currentText}</span>
          </h2>
          <p className="text-lg md:text-xl mt-6 max-w-xl">
            You can check my Portfolio as you can see my skills
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center h-auto md:h-150 gap-6 md:gap-10 px-4 py-20">
        <div className="w-full md:w-105 h-80 rounded-lg bg-pink-600/5 text-[#D7D9FF] border-2 flex flex-col justify-center items-center border-red-600/12 p-6">
          <img className="w-16 mb-4" src="./service-01.png" alt=""/>
          <b className="text-center text-xl mb-4 text-white">Fast Performance</b>
          <p className="text-center text-base md:text-[1.1rem]">
            Optimized for a smaller build size, faster dev compilation and dozens of other improvements.
          </p>
        </div>
        <div className="w-full md:w-105 h-80 rounded-lg bg-pink-600/5 text-[#D7D9FF] border-2 flex flex-col justify-center items-center border-red-600/12 p-6">
          <img className="w-16 mb-4" src="./service-02.png" alt=""/>
          <b className="text-center text-xl mb-4 text-white">Perfect Responsive</b>
          <p className="text-center text-base md:text-[1.1rem]">
            Our Template is full Perfect for all device. You can visit our template all device easily.
          </p>
        </div>
        <div className="w-full md:w-105 h-80 rounded-lg bg-pink-600/5 text-[#D7D9FF] border-2 flex flex-col justify-center items-center border-red-600/12 p-6">
          <img className="w-16 mb-4" src="./service-03.png" alt=""/>
          <b className="text-center text-xl mb-4 text-white">Fast & Friendly Support</b>
          <p className="text-center text-base md:text-[1.1rem]">
            We are provide 24 hours support for all clients.You can purchase without hesitation.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col py-20 px-4">
        <div className="text-[#FF014F] text-6xl md:text-[80px] font-bold">44+</div>
        <h1 className="text-white text-center text-4xl md:text-6xl font-bold mt-8">
          Pre-Build Creative <br className="hidden md:block"/> <span className="text-gray-500">Personal Portfolio</span> Demos
        </h1>
        <p className="text-center text-base md:text-xl text-[#D7D9FF] mt-8 max-w-2xl">
          We have carefully selected these categories based on our judgment. However, you are free to choose any suggested category that best fits your personal or individual preferences.
        </p>
      </div>

      <div className="hidden md:block text-[#494967] opacity-10 font-bold text-[400px] -z-10 text-center mt-[-140px]">Reeni</div>

      <section ref={portfolioRef}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-10 max-w-6xl mx-auto">
        {['01','03','05','07','09','11','13','15','17','19','21','23'].map((num) => (
          <img 
            key={num}
            className="w-full max-w-md mx-auto transition-transform duration-300 hover:-translate-y-3" 
            src={`./${num}.webp`}
            alt=""
          />
        ))}
      </div>
      </section>

      <div className="hidden md:block text-[#494967] opacity-10 font-bold text-[370px] -z-10 text-center py-20">Features</div>

      <div className="px-4 py-20 max-w-6xl mx-auto">
        <section ref={featuresRef} id="features">
        <b className="text-[#ff014f] text-5xl md:text-7xl m-10 md:m-20">Features</b>
        </section>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div>
            <p className="text-white text-2xl md:text-[1.8rem]">Fresh new features, even more power.</p>
            <p className="text-[#D7D9FF] text-base md:text-[1.2rem] mt-4">
              Strengthen your website's flexibility and robustness with <br className="hidden md:block"/> these powerful features. Access high-quality features at <br className="hidden md:block"/> no cost.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-12">
          <div className="flex flex-col items-center">
            <img src="./bootstrap.png" alt=""/>
            <p className="text-white text-lg md:text-2xl mt-4">bootstrap</p>
            <button className="w-full md:w-40 h-8 border-2 bg-transparent mt-2 text-[#9F9F9F] border-rose-800 font-bold text-sm">
              CSS Framework
            </button>
          </div>
          <div className="flex flex-col items-center">
            <img src="./contact-form.png" alt=""/>
            <p className="text-white text-lg md:text-2xl mt-4">Documentation</p>
            <button className="w-full md:w-30 h-8 border-2 bg-transparent mt-2 text-[#9F9F9F] border-rose-800 font-bold text-sm">
              Instructions
            </button>
          </div>
          <div className="flex flex-col items-center">
            <img src="./cross-browser.png" alt=""/>
            <p className="text-white text-lg md:text-2xl mt-4">Browser Support</p>
            <button className="w-full md:w-30 h-8 border-2 bg-transparent mt-2 text-[#9F9F9F] border-rose-800 font-bold text-sm">
              Compatible
            </button>
          </div>
          <div className="flex flex-col items-center">
            <img src="./sass.png" alt=""/>
            <p className="text-white text-lg md:text-2xl mt-4">SCSS</p>
            <button className="w-full md:w-30 h-8 border-2 bg-transparent mt-2 text-[#9F9F9F] border-rose-800 font-bold text-sm">
              Preprocessor
            </button>
          </div>
          <div className="flex flex-col items-center">
            <img src="./w3validation.png" alt=""/>
            <p className="text-white text-lg md:text-2xl mt-4">W3 Validation</p>
            <button className="w-full md:w-40 h-8 border-2 bg-transparent mt-2 text-[#9F9F9F] border-rose-800 font-bold text-sm">
              HTML Validation
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 py-20 text-center">
      <section ref={demoRef}>
        <p className="text-[#ff014f]">Mobile First Template</p>
        <p className="text-white font-bold text-3xl md:text-4xl mt-2">Responsive With all Device</p>
        <p className="text-[#d7d9ff] text-base md:text-lg mt-4 max-w-2xl mx-auto">
          With a fully responsive design, your website automatically adjusts its layout and elements to match the screen size and resolution of the device being used.
        </p>
        <img className="mt-8 mx-auto max-w-full" src="./device.png" />
        </section>
      </div>

      <div className="w-full h-[400px] md:h-[800px] bg-[url('/bg-attach.jpg')] bg-fixed bg-cover bg-center"></div>

    <section ref={contactRef}>
      <div className="w-full max-w-4xl mx-auto bg-[#141414] border-2 transition duration-[450ms] hover:border-[#ff014f] my-20 rounded-3xl p-6 md:p-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <p className="text-[#ff014f] m-4 md: font-bold">GET IN TOUCH</p>
            <h1 className="text-white text-3xl md:text-5xl font-bold mt-4 md:mt-0">
              Elevate your brand <br className="hidden md:block"/> with Me
            </h1>
            <p className="text-[#9F9F9F] text-base md:text-xl mt-4">
              ished fact that a reader will be distrol acted bioiiy desig ished fact that a reader will acted ished fact that a reader will be distrol acted
            </p>
          </div>
          

          <form className="md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                className="w-full text-white font-[1rem] p-3 h-15 rounded-xl border-2 border-[#ffffff14] bg-transparent" 
                required type="text" 
                placeholder="Your Name"
              />
              <input 
                className="w-full text-white font-[1rem] p-3 h-15 rounded-xl border-2 border-[#ffffff14] bg-transparent" 
                required type="number" 
                placeholder="Phone Number"
              />
              <input 
                className="w-full text-white font-[1rem] p-3 h-15 rounded-xl border-2 border-[#ffffff14] bg-transparent" 
                required type="email" 
                placeholder="Your Email"
              />
              <input 
                className="w-full text-white font-[1rem] p-3 h-15 rounded-xl border-2 border-[#ffffff14] bg-transparent" 
                required type="text" 
                placeholder="Subject"
              />
            </div>
            <textarea 
              className="w-full text-white font-[1rem] p-3 h-32 rounded-xl border-2 border-[#ffffff14] bg-transparent mt-4" 
              placeholder="Your Message"
            />
            <button 
              className="w-full md:w-auto px-8 h-12 rounded-4xl border-none bg-[#ff014f] mt-4 font-bold text-[1rem] text-white cursor-pointer" 
              type="submit"
            >
              Appointment Now
            </button>
          </form>
        </div> 
      </div>
</section>
      <div className="px-4 py-20 w-full max-w-4xl mx-auto flex flex-col justify-center items-center">
  <h2 className="text-white text-2xl md:text-3xl text-center font-bold mb-8 md:mb-12">Development Skill</h2>
  
  <div className="w-full space-y-6 md:space-y-8">
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <p className="text-white text-sm md:text-base">HTML</p>
        <span className="text-white text-sm md:text-base">{percentText}</span>
      </div>
      <div className="w-full h-2 rounded-lg bg-[#1d1c1c] overflow-hidden">
        <div 
          className="h-full bg-[#ff014f] rounded-lg transition-all duration-500"
          style={{ width: `${(widthPlus2/486)*100}%` }}
        ></div>
      </div>
    </div>

    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <p className="text-white text-sm md:text-base">CSS</p>
        <span className="text-white text-sm md:text-base">{percentText}</span>
      </div>
      <div className="w-full h-2 rounded-lg bg-[#1d1c1c] overflow-hidden">
        <div 
          className="h-full bg-[#ff014f] rounded-lg transition-all duration-500"
          style={{ width: `${(widthPlus2/486)*100}%` }}
        ></div>
      </div>
    </div>

    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <p className="text-white text-sm md:text-base">JAVASCRIPT</p>
        <span className="text-white text-sm md:text-base">{percentText}</span>
      </div>
      <div className="w-full h-2 rounded-lg bg-[#1d1c1c] overflow-hidden">
        <div 
          className="h-full bg-[#ff014f] rounded-lg transition-all duration-500"
          style={{ width: `${(widthPlus2/486)*100}%` }}
        ></div>
      </div>
    </div>

    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <p className="text-white text-sm md:text-base">REACT</p>
        <span className="text-white text-sm md:text-base">{percentText2}</span>
      </div>
      <div className="w-full h-2 rounded-lg bg-[#1d1c1c] overflow-hidden">
        <div 
          className="h-full bg-[#ff014f] rounded-lg transition-all duration-500"
          style={{ width: `${(widthPlus/50)*100}%` }}
        ></div>
      </div>
    </div>
  </div>
</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-20 max-w-6xl mx-auto">
        <div className="group cursor-pointer w-full h-auto rounded-xl border bg-[#0f1011] p-6">
          <img className="rounded-xl w-full" src="./01.png" alt=""/>
          <p className="text-white text-xl font-bold text-center mt-4">Online Documented</p>
          <p className="text-white group-hover:text-[#ff014f] transition duration-[450ms] mt-2 text-center">
            Well organized and up to date
          </p>
        </div>
        <div className="group cursor-pointer w-full h-auto rounded-xl border bg-[#0f1011] p-6">
          <img className="rounded-xl w-full" src="./02.png" alt=""/>
          <p className="text-white text-xl font-bold text-center mt-4">Dedicated Support</p>
          <p className="text-white group-hover:text-[#ff014f] transition duration-[450ms] mt-2 text-center">
            If You Need support ? Submit a ticket.
          </p>
        </div>
        <div className="group cursor-pointer w-full h-auto rounded-xl border bg-[#0f1011] p-6">
          <img className="rounded-xl w-full" src="./03.png" alt=""/>
          <p className="text-white text-xl font-bold text-center mt-4">Customization Service</p>
          <p className="text-white group-hover:text-[#ff014f] transition duration-[450ms] mt-2 text-center">
            Well organized and up to date
          </p>
        </div>
      </div>

      <div className="w-full max-w-4xl rounded-xl flex flex-col md:flex-row items-center bg-[#ff014f] mx-auto my-20 p-8">
        <img className="h-40 md:h-80  mb-8 md:mb-0 md:mr-8" src="./footerimg.png" alt=""/>
        <div>
          <h1 className="text-white text-3xl md:text-[4.2rem] leading-tight font-bold">
            Encounter outstanding service excellence with us
          </h1>
          <p className="text-[#D7D9FF] text-base md:text-xl mt-4">
            At the heart of our company lies a commitment to excellence that drives everything we do.
          </p>
          <button className="w-full md:w-55 h-12 rounded-lg mt-6 font-bold text-[1rem] cursor-pointer text-[#ff014f] bg-white">
            Interested
          </button>
        </div>
      </div>

      <footer className="w-full bg-[#1b1919] py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h1 className="text-white text-3xl md:text-[3rem] leading-tight">
              <b>Get Ready</b> To Create Great
            </h1>
            <div className="mt-6">
              <input 
                className="w-full bg-transparent border-b border-[#534d4d] text-white py-2" 
                type="email" 
                placeholder="Email Address"
              />
            </div>
          </div>
          
          <div>
            <h1 className="text-white font-bold text-xl mb-4">Quick Link</h1>
            <div className="space-y-2">
              <a className="block text-white" href="#">About Me</a>
              <a className="block text-white" href="#">Service</a>
              <a className="block text-white" href="#">Contact Me</a>
              <a className="block text-white" href="#">Blog Post</a>
              <a className="block text-white" href="#">Pricing</a>
            </div>
          </div>
          
          <div>
            <h1 className="text-white font-bold text-xl mb-4">Contact</h1>
            <p className="text-white font-bold">chavle329@gmail.com</p>
            <p className="text-white font-bold mt-2">01245789321</p>
            <div className="flex gap-4 mt-4">
              <img className="w-8" src="./instagram-svgrepo-com.svg" alt="instagram"/>
              <img className="w-8" src="./facebook-svgrepo-com.svg" alt="facebook"/>
              <img className="w-7" src="./twitter-154-svgrepo-com.svg" alt="twitter"/>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;