(function() {

  $(function() {

    function getRecipes() {

      $('table').append('<table></table');
      let table = $('.table').children();
      table.append("<tr><th>ID</th><th>Recipe Name</th><th>Category</th><th>By Season </th><th>By Ingredient</th><th>Baking Time</th><th>Recipe URL</th><th>Date Added</th></tr>");

      $.get("http://localhost:1337/recipe/", function(data) {
        $.each(data, function(index, value) {
          table.append(`<tr><td id='idClick'><a href='#'>${value.id}</a></td><td>${ value.Recipe_Name}</td><td>${value.Category}</td><td>${value.By_Season} </td><td>${value.By_Ingredient}</td><td>${value.Baking_Time}</td><td><a href='${value.Recipe_URL}'>${value.Recipe_URL}</a></td><td>${value.Date_Added}</td></tr>`);
        })
      })
    }

    getRecipes();

    function deleteRecipe(id) {
      url = "http://localhost:1337/recipe/" + id
      console.log(url);
      $.ajax({
        url: url,
        type: "delete"
      })

    }

    $('table').delegate('#idClick', 'click', function() {
      if (confirm("You are deleting ID" + $(this).text() + ".")){
        deleteRecipe($(this).text());
        $(this).closest('tr').remove();
      }
    })

  })
})();
