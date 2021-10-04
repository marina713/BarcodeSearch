import React from "react";
import { useSelector } from "react-redux";
import { getCurrentItem } from "../../../state/search/selectors";
import { Wrapper, NutrimentWrapper, Label } from "./styles"

const NUTRIMENTS = [
    { key: "energy-kcal_100g", unit: "energy-kcal_unit", label: "Energy" },
    { key: "fat_100g", unit: "fat_unit", label: "Fat" },
    { key: "fsaturated-fat_100g", unit: "saturated-fat_unit", label: "Saturated fat" },
    { key: "carbohydrates_100g", unit: "carbohydrates_unit", label: "Carbohydrates" },
    { key: "sugars_100g", unit: "sugars_unit", label: "Sugar" },
    { key: "fiber_100g", unit: "fiber_unit", label: "Fiber" },
    { key: "proteins_100g", unit: "proteins_unit", label: "Proteins" },
    { key: "salt_100g", unit: "salt_unit", label: "Salt" }
];

const Nutriments = () => {
    const currentItem = useSelector(getCurrentItem);
    const nutriments = currentItem.nutriments;

    return nutriments ?
        <Wrapper>
            <Label>Nutritional information (per 100g)</Label>

            {NUTRIMENTS.map((nutriment) => {
                return nutriments.hasOwnProperty(nutriment.key) ?
                    <NutrimentWrapper>
                        <div><Label small>{nutriment.label}</Label></div>
                        {/* @ts-ignore */}
                        <div>{`${nutriments[nutriment.key]} ${nutriments[nutriment.unit]}`}</div>
                    </NutrimentWrapper> : null
            })}
        </Wrapper> : null;
}


export default Nutriments;
