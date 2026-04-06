import bookImg from '../../assets/hero_img.png'

const Banner = () => {
    return ( 
        <div className="hero bg-base-200 min-h-[70vh] my-8 rounded-lg container mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse w-[70%] justify-between">
                <img
                src={bookImg}
                className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                <button className="btn btn-success text-white mt-5">View The List</button>
                </div>
            </div>
        </div>
     );
}
 
export default Banner;