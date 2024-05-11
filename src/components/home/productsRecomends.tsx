


import { ListRecommends } from "./productsRecommends/listRecommends";
import { CategorySection } from "./categoryHome";

export function RecomendProducts() {

    return (
        <div 
            className="flex flex-col w-3/4 h-full gap-10 py-10"
        >
            <CategorySection categoryProps="Recomendados"/>

            <div className="flex flex-row w-full h-full gap-4 justify-center overflow-hidden">
                <ListRecommends />
            </div>
        </div>
    )
}