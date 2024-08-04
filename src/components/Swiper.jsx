import React, { useEffect } from "react"
import Glide from "@glidejs/glide"

export default function CarouselControlsInside() {


const SwiperData = [{
  image:"./images/Pen.png",
  text:"Art & Design"
},{
  image:"./images/Layers (1).png",
  text:"English"
},{
  image:"./images/Chat_alt_3.png",
  text:"Bio"
},{
  image:"./images/Group 512843.png",
  text:"Maths"
},{
  image:"./images/Camera.png",
  text:"Chemistry"
},{
  image:"./images/Chart_pin.png",
  text:"Physics"
}];

  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "carousel",
      focusAt: "center",
      perView: 6,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      {/*<!-- Component: Carousel with controls inside --> */}
      <div className="glide-01 relative w-full ">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden " data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
           
           {SwiperData.map((data)=>{
            return(
              <>
              <div className=" flex flex-col justify-center items-center bg-[#3D4E64] rounded-md p-12 gap-2 border border-white text-center">
                <img className=" h-12 w-12 rounded-full bg-yellow-500 p-2 " src={data.image} alt="" />
                <p className="  w-[10rem]">{data.text}</p>
              </div>
              </>
            )
           })}
         
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex  h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-white transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-white transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js"></script>
      {/*<!-- End Carousel with controls inside --> */}
    </>
  )
}