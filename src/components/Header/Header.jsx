import { CgProfile } from "react-icons/cg";

const Header = () => {
    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center md:py-5 container">
            <h2 className="text-[#150B2B] md:text-3xl font-bold ">Recipe Calories</h2>
            <ul className="flex gap-1 md:gap-3 text-[#150B2BB3] fira">
                <li>Home</li>
                <li>Recipe </li>
                <li>About </li>
                <li>Search</li>
            </ul>
            <div className="flex items-center gap-3.5">
                <input className="bg-[#150B2B0D] w-[150px] lg:w-auto p-3 rounded-4xl" type="text" placeholder="Search" />
                <CgProfile  className="text-[#0BE58A] text-[40px]"/>
            </div>
        </div>
    );
};

export default Header;