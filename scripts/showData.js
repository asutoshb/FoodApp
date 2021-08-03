async function getData(url)
{
    try{

        let res = await fetch(url)

        let data = await res.json();

        return data;

    }

    catch(e)
    {
        console.log('e:', e);
    }

   

    
}


function appendData(meals_data, parent)
{
    console.log(meals_data, parent);

    let {meals} = meals_data;

    meals.forEach(({strMealThumb, strMeal, strArea, strCategory, strIngredient1, strIngredient2, strIngredient3}) => {

        let div = document.createElement('div');

        let p = document.createElement('p');

        let p1 = document.createElement('p');

        let p2 = document.createElement('p');

        let p3 = document.createElement('p');

        let img = document.createElement('img');

        img.src = strMealThumb;

        p.innerText = `Recipe: ${strMeal}`;

        p1.innerText = `Recipe Area: ${strArea}`;

        p2.innerText = `Category: ${strCategory}`;

        p3.innerText = `Ingredients: ${strIngredient1}, ${strIngredient2}, ${strIngredient3}`;

        div.append(img,p,p1, p2, p3)

        parent.append(div);

    })

}



export {getData, appendData}