$(function () {

    $(".eatBurger").on("click", function () {
        console.log($(this).data("id"));
        id = $(this).data("id");

        $.ajax("/api/burger/" + id, {
            type: "PUT"
        }).then(() => {
            location.reload();
        });
    });

    $(".delete").on("click", function () {
        id = $(this).data("id");
        console.log(id)
        $.ajax("/api/burger/" + id, {
            type: "DELETE"
        }).then(() => {
            location.reload();
        });
    });

    $(".create-form").on("submit", function (evt) {
        evt.preventDefault();
        var BurgerName = {
            burger_name: $("#bh").val().trim()
        };
        
        $.ajax("/api/burger", {
            type: "POST",
            data: BurgerName
        }).then(() => {
            location.reload();
        });
        $("#bh").val("");
    });
})
// $(this).data("id")