import { CgProfile } from "react-icons/cg";

const Header = () => {
    return (
        <div className="grid grid-cols-3 items-center py-5 container">
            <h2 className="text-[#150B2B] text-3xl font-bold lexend">Recipe Calories</h2>
            <ul className="flex gap-3 text-[#150B2BB3]">
                <li>Home</li>
                <li>Recipe </li>
                <li>About </li>
                <li>Search</li>
            </ul>
            <div className="flex items-center gap-3.5">
                <input className="bg-[#150B2B0D] p-3 rounded-4xl" type="text" placeholder="Search" />
                <CgProfile  className="text-[#0BE58A] text-[40px]"/>
            </div>
        </div>
    );
};

export default Header;