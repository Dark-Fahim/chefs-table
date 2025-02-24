import PropTypes from 'prop-types';

const CurrentCooking = ({currentCook}) => {
    console.log(currentCook)
    let totalTime = 0
    let totalCalories = 0
    for(const time of currentCook){
        totalTime = totalTime + time.preparing_time
    }
    for(const calories of currentCook){
        totalCalories = totalCalories + calories.calories
    }
    return (
        <div className='p-4 w-full '>
        <h3 className='text-2xl font-semibold text-center py-4 border-b border-[#2828281A]'>Want to cook: {currentCook.length}</h3>
        <div className='max-w-full'>
            <table className='w-full bg-white shadow-md rounded-lg overflow-hidden'>
                <thead className='text-[#878787]'>
                    <tr>
                        <th></th>
                        <th className="py-2 px-4">Name</th>
                        <th className="py-2 px-4">Time</th>
                        <th className="py-2 px-4">Calories</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='w-full space-y-5 overflow-hidden text-[#282828B3]'>
                    {currentCook.map((row, idx) => (
                        <tr key={idx} className="p-2  text-center bg-[#28282808]">
                            <td className="py-2 px-4">{idx + 1}</td>
                            <td className="py-2 px-4">{row.title}</td>
                            <td className="py-2 px-4">{row.preparing_time} Minutes</td>
                            <td className="py-2 px-4">{row.calories} calories</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='flex justify-end gap-6 text-[#282828CC] font-medium mt-6'>
                    <p>Total Time = <br /> {totalTime} Minutes </p>
                    <p>Total Calories = <br /> {totalCalories} Calories </p>
            </div>
        </div>
    </div>
    );
};

CurrentCooking.propTypes = {
    currentCook: PropTypes.array.isRequired,
}
export default CurrentCooking;