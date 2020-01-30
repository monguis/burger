$(function () {

    $(".eatBurger").on("click", function () {
        console.log($(this).data("id"));
        id = $(this).data("id");

        $.ajax("/api/burger/" + id, {
            type: "POST"
        }).then(() => {
                location.reload();  
        });
    });

    $(".delete").on("click",function(){
    
    })
})
// $(this).data("id")