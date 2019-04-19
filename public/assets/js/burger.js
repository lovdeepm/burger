$(function() {  
    $(".create-burger").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.

  
      var newBurger = {
        burger_name: $("#burger").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  

    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    $(".change-burger").on("click", function(event) {
        event.preventDefault();
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");
      var newDevourState = {
        devoured: "true"
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("Devoured state", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  