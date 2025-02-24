import './Banner.css'


const Banner = () => {
    return (
        <div className='banner bg-center bg-no-repeat bg-cover '>
            <div className='container lg:p-40 p-10 md:p-20 space-y-7'>
                <h1 className='text-center text-5xl font-bold text-white'>Discover an exceptional cooking <br /> class tailored for you!</h1>
                <p className='leading-[30px] text-center  text-white'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div className='text-center space-x-7'>
                    <button className='primary-btn'>Explore Now</button>
                    <button className='transparent primary-btn'>Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;