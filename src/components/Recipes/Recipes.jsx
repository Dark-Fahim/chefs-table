import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])

    return (
        <div className="space-y-6">
            <h1 className="text-center font-bold text-5xl">Our Recipe</h1>
            <p className="text-center text-[#150B2B99]">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur elementum mauris aenean neque. </p>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
                <div className="lg:col-span-2 grid md:grid-cols-2 grid-cols-1 gap-5">
                    {
                        recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}></Recipe>)
                    }
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Recipes;