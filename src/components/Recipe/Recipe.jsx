import PropTypes from 'prop-types'; // ES6
import { IoMdTime } from "react-icons/io";
import { FaFire } from "react-icons/fa";

const Recipe = ({ recipe }) => {
    const { recipe_image, title, short_description, ingredients, preparing_time, calories } = recipe
    console.log(recipe)
    return (
        <div className='m-w-[400px] p-8 rounded-2xl shadow-2xl'>
            <div>
                <img src={recipe_image} alt="" />
            </div>
            <div className='py-6 border-b border-[#2828281A] space-y-3'>
                <h2 className='font-semibold text-xl'>{title}</h2>
                <p className='text-[#878787]'>{short_description}</p>
            </div>
            <div className='py-6 border-b border-[#2828281A] space-y-3'>
                <p className='text-[#282828] font-medium text-lg'>ingredients: {ingredients.length}</p>
                <ul className='list-disc p-3'>
                    {
                        ingredients.map((ingr, idx) => <li className='ml-3.5' key={idx}>{ingr}</li>)
                    }
                </ul>
            </div>
            <div className='flex items-center  gap-5 my-6'>
                <p className='text-sm text-[#282828CC] flex items-center gap-2'><span><IoMdTime></IoMdTime></span>{preparing_time} Miniutes</p>
                <p className='text-sm text-[#282828CC] flex items-center gap-2'><span><FaFire></FaFire></span>{calories} Calories</p>
            </div>
            <button className='primary-btn'>Want To Cook</button>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired
}

export default Recipe;