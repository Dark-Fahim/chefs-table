import PropTypes from 'prop-types';

const Table = ({ cook, handleDelete }) => {
    

    return (
        <div className='p-4 w-full '>
            <h3 className='text-2xl font-semibold text-center py-4 border-b border-[#2828281A]'>Want to cook: {cook.length}</h3>
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
                        {cook.map((row, idx) => (
                            <tr key={idx} className="p-2  text-center bg-[#28282808]">
                                <td className="md:py-2 md:px-4">{idx + 1}</td>
                                <td className="md:py-2 md:px-4">{row.title}</td>
                                <td className="md:py-2 md:px-4">{row.preparing_time} Minutes</td>
                                <td className="md:py-2 md:px-4">{row.calories} calories</td>
                                <td className="md:py-2 md:px-4">
                                    <button
                                        onClick={() => handleDelete(row)}
                                        className=" font-medium cursor-pointer px-3 py-1 rounded-lg bg-[#0BE58A] transition">
                                        Preparing
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Table.propTypes = {
    cook: PropTypes.array.isRequired,
    handleDelete : PropTypes.func
}

export default Table;