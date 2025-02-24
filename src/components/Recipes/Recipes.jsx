import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import Table from "../Table/Table";

const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    const [cook, setCook] = useState([])
    const [currentCook, setCurrentCook]= useState([])
    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    const handleCookBtn = recipe => {
        
        if(!cook.some(selecled => selecled.recipe_id === recipe.recipe_id)){
            let newCook = [...cook, recipe]
            setCook(newCook)
        }
    }
    const handleDelete = (id) => {
        const current = [...currentCook, id]
        setCurrentCook(current)
        const remaining = cook.filter(cookId => cookId.recipe_id !== id.recipe_id)
        setCook(remaining)
      };

    return (
        <div className="space-y-6 container">
            <h1 className="text-center font-bold text-5xl">Our Recipe</h1>
            <p className="text-center text-[#150B2B99]">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur elementum mauris aenean neque. </p>

            <div className="grid lg:grid-cols-5 grid-cols-1 gap-5">
                <div className="lg:col-span-3 grid md:grid-cols-2 grid-cols-1 gap-5">
                    {
                        recipes.map((recipe) => <Recipe
                            key={recipe.recipe_id}
                            handleCookBtn={handleCookBtn}
                            recipe={recipe}></Recipe>)
                    }
                </div>
                <div className="col-span-1 md:col-span-2">
                    <Table 
                    handleDelete={handleDelete}
                    cook={cook}></Table>
                    {/* <Table cook={cook}> </Table> */}
                </div>
            </div>
        </div>
    );
};

export default Recipes;