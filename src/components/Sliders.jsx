import React, {useState} from 'react'
import {BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const Sliders = () => {

    const slides = [
        {
            url: "https://m.media-amazon.com/images/I/7173a8decnL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6wP7k09D_qOeMR-DARAkQ85_1uJeYy-bPNXBYKdAOzkL0i8wG-aoF1kJ-Jk058Y7Zns&usqp=CAU"
        },
        {
            url: "https://imageio.forbes.com/specials-images/imageserve/5f85be4ed0acaafe77436710/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"
        },
        {
            url: "https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Best-Reviewed-Books.jpeg"
        },
        {
            url: "https://cdn.theatlantic.com/thumbor/5T-358hrx4dcsOlQKo024rmLHf4=/0x0:2000x1125/1600x900/media/img/mt/2023/07/books_picku_up_put_down_final/original.jpg"
        }
    ]

    const [current, setCurrent] = useState(0)

    const prevSlide = () => {
        const lastSlide = current === 0;
        const goBack = lastSlide ? slides.length -1 : current -1;
        setCurrent(goBack);
    }

    const nextSlide = () => {
        const nextSlide = current === slides.length -1;
        const goNext = nextSlide ? 0 : current +1;
        setCurrent(goNext)
    }

    const goToSlide = (indexSlide) => {
        setCurrent(indexSlide)
    }

  return (
        <div className="bg-slate-500">
        <div className="max-w-[700px] h-[500px] w-full m-auto py-16 px-4 relative group">
            <div style={{backgroundImage: `url(${slides[current].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-300"></div>
            <div className="cursor-pointer absolute top-[50%] transition-x-0 transition-y-[50%] left-10">
                <BsArrowLeftCircle onClick={prevSlide} size={30} />
            </div>
            <div className="cursor-pointer absolute top-[50%] transition-x-0 transition-y-[50%] right-10">
                <BsArrowRightCircle onClick={nextSlide} size={30} />
            </div>
            <div className="flex top-4 justify-center py-2">
                {slides.map((slide, indexSlide) => (
                    <div key={indexSlide} onClick={() => goToSlide(indexSlide)} className="text-white cursor-pointer text-2xl">
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Sliders