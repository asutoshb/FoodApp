function navbar(){

    return `<div id="navbar">

        <h3><a href = "/">Home</a></h3>
        <img src='https://www.themealdb.com/images/logo-small.png'>

        <input type="text" placeholder="Search Food" id="query">
       
    

        <div class="options">
            <h3><a href="recipeofday.html">Recipe of the day</a></h3>
            <h3><a href="latestrecipe.html">Latest Recipe</a></h3>
            <h3><a href="#">Register</a></h3>
            <h3><a href="#">Login</a></h3>

        </div>
    </div>
    <div id="data"></div>`

}

export default navbar

