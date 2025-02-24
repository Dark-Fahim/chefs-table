import './Banner.css'



const Banner = () => {
    return (
        <div className='banner-img w-full   bg-cover bg-center bg-no-repeat'>
            <div className='container lg:p-40 p-1 md:p-20 space-y-7'>
                <h1 className='text-center text-2xl md:text-5xl font-bold text-white'>Discover an exceptional cooking <br /> class tailored for you!</h1>
                <p className='md:leading-[30px] text-[10px] md:text-[1rem] text-center  text-white'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div className='text-center space-x-7 flex flex-wrap items-center justify-center'>
                    <button className='primary-btn'>Explore Now</button>
                    <button className='transparent primary-btn'>Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;