$.ajax({
  type: "get",
  url: "https://www.themealdb.com/api/json/v1/1/filter.php?a=canadian",
  success: function (res) {
    console.log(res);
    for (let i = 0; i < res.meals.length; i++) {
      let newitem = `<div class='col-md-3 m-2 shadow-lg p-3 mb-5 bg-white rounded text-center'>
      <p>${res.meals[i].strMeal}</p>
      <img src=${res.meals[i].strMealThumb} class='img-fluid'>
      <p>${res.meals[i].idMeal}</p></div>`;
      $("#myitems").append(newitem);
    }
  },
  error: function (err) {
    console.log(err);
  },
});
