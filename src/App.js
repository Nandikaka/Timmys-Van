import './App.css';
import NavBar from './components/NavBar';
import TwoPart from './components/TwoPart';
import PriceBox from './components/PriceBox';

import car1 from './assets/car1.jpg'

function App() {
  return (
    <div className="App">
      <div className="main flex flex-col">
        <NavBar />

        <div className="wrapper text-center flex flex-col gap-8 text-text">
          <h2 className='text-3xl'>Give your car a much needed love with</h2>
          <h1 className='text-6xl font-bold'>Timmy's Van</h1>
          <a href="#pricing" className='rounded-lg bg-text text-black px-4 py-2 font-bold'>See prices below...</a>
        </div>
      </div >

      <div id='howItWorks' className="mt-8 flex flex-col gap-10">
        <TwoPart
          h1="So... how does it work?"
          h2="At your house service"
          p="You get in touch with us, we discuss your needs (don't be shy to tell us what you want your car to look like), and the hard part is already done! We come to you, and in no time your car will be happier than ever!"
          image="https://images.unsplash.com/photo-1601362840138-44bca7a80305?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        />


        <TwoPart
          h1="About us"
          h2="Quality care"
          p="We only utilize top-of-the-line car care products and cutting-edge techniques to deliver exceptional results. Our eco-friendly and industry-approved solutions ensure that your car's surfaces remain protected and radiant for an extended period."
          image={car1}
        />
        <TwoPart
          h1=""
          h2="Comprehensive Services"
          p="At Timmy's Van, we offer a comprehensive range of car detailing services tailored to your car's specific needs. From meticulous exterior wash and paint correction to deep interior cleaning and upholstery rejuvenation, our services cover every inch of your vehicle."
          image="https://images.unsplash.com/photo-1508974239320-0a029497e820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        />

        <TwoPart
          h1=""
          h2="Quality Products and Techniques"
          p="We only utilize top-of-the-line car care products and cutting-edge techniques to deliver exceptional results. Our eco-friendly and industry-approved solutions ensure that your car's surfaces remain protected and radiant for an extended period."
          image="https://images.unsplash.com/photo-1598453527201-a9b82a34f7d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        />
      </div>

      <div className=" bg-slate-950 text-text mt-8 p-8" id='pricing'>
        <h1 className='text-center text-6xl'>Pricing</h1>
        <PriceBox price="$300" details="HLKDJflkdj" />
      </div>
    </div >
  );
}

export default App;
