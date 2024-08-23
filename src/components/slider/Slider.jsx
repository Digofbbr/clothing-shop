import {sliderData} from '../../assets/data/dummyData.js'
import { useSelector, useDispatch } from 'react-redux'
import { nextSlide, prevSlide, dotSlide } from '../../featurers/slices/sliderSlice'
import { MdKeyboardArrowLeft , MdKeyboardArrowRight } from "react-icons/md";


const Slider = () => {

  const dispatch = useDispatch()
  const slideIndex = useSelector((state) => state.slider.value)
  console.log(slideIndex)

  function handleNext() {
    dispatch(nextSlide())
  }

  function handlePrev() {
    dispatch(prevSlide())
  }

  return (
    <div className="relative pb-4">
      <div className="">
        {sliderData.map((item) => {
          return(
            <div key={item.id} className={parseInt(item.id) === slideIndex ? 'opacity-100 duration-700 ease-in-out scale-100' : 'opacity-0 duration-700 ease-in-out scale-95'}>
              <div>
                {parseInt(item.id) === slideIndex && 
                  <img className="h-[850px] w-full" src={item.img} alt=""/>
                } 
              </div>
              <div className="absolute top-28 mx-auto inset-x-1/4">
                {parseInt(item.id) === slideIndex &&
                  <p className="text-white text-4xl text-center font-bold tracking-normal leading-none">{item.text}</p>
                }
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex absolute bottom-10 left-[45%] gap-3">
        {sliderData.map((item, index) => {
          return (
            <div key={item.id} className={`rounded-full h-[20px] w-[20px] cursor-pointer ${index === slideIndex ? 'bg-green-300' : 'bg-white'}`} onClick={() => dispatch(dotSlide(index))}>
              
            </div>
          )
        })}

      </div>
      <MdKeyboardArrowLeft className="absolute top-[50%] rounded-full bg-white text-3xl left-4 hover:bg-green-300 cursor-pointer" onClick={handlePrev}></MdKeyboardArrowLeft>
      <MdKeyboardArrowRight className="absolute top-[50%] rounded-full bg-white text-3xl right-4 hover:bg-green-300 cursor-pointer" onClick={handleNext}></MdKeyboardArrowRight>
    </div>
  )
}

export default Slider
