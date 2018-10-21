$('.minput').on('keydown', function (event) {
    // console.log(event.which);
    if (event.which === 13) {
        additem();
        newList()
    }
});
$('.contain').sortable({
    handle: '.handle'
});//add edit button
//$('.row').addClass('greyText');
//$('.contain').find('p').css('color','blue');
$('.checked').click(function () {

    $('.checkedRow').animate({
        opacity: 0,
        left: "+=50"
    }, 800, function () {
        $('.checkedRow').remove()
    });

});
function newList() {
    let myListName = $('.newListName').val();
    let listID = Math.floor((Math.random() * 10000000000) + 1);
    console.log(listID);
    console.log(myListName);

    if (myListName === '') {
        throw 'No Name!';
    }
    else {
    $('.listContain').append('<div class="lists" id="' + listID +'">' +
        '<div class="nameBar">' +
        '<h1 class="listName" contenteditable="true">' + myListName + '</h1>' +

       // '<button onclick="removeList()">delete</button> </div>' +
        '<input class="minput" type="text" placeholder="List Item Here">' +
        '<button onclick="clearlist()">Clear the List</button>' +
       // '<button class="checked">Clear Checked items</button>' +
        '<i class="additem far fa-plus-square fa-lg"></i>' +
        '<i class="kill fas fa-bomb fa-lg"></i>' +
        '<div class="contain '+listID+'">' +
        '</div></div>'
    );
    $('.newListName').val('');
    let numChildren = $('.listContain').children().length;
    console.log(numChildren);
    $('.kill').click(function () {
        $('#'+listID+'').animate({
             opacity: 0,
             left: "+=50"
         }, 800, function () {
             $('#'+listID+'').remove();
         });
        //$(this).remove();

    });
        $('.additem').click(function () {
            let myname = $('.minput').val();
            console.log(myname);
            $('.'+listID+'').append('<div class="row">' +
                '<span contenteditable="true">' + myname + '</span>' +
                '<i class="box far fa-square"></i><i class=" trash fas fa-ban"></i> ' +
                '<i class=" handle fas fa-sort"></i></div></div>'
            );
            $('.minput').val('');
            let numChildren = $('.contain').children().length;
            console.log(numChildren);

            $('.trash').click(function () {

                $(this).parent().parent().animate({
                    opacity: 0,
                    left: "+=50"
                }, 800, function () {
                    $(this).remove();
                });

            });
            $('.box').click(function () {

                $(this).parent().addClass('checkedRow');
                $(this).replaceWith('<i class="checkBox far fa-check-square"></i>')
            });
            $('.checkBox').click(function () {

                $(this).parent().removeClass('checkedRow');
                $(this).replaceWith('<i class="box far fa-square"></i>')
            })

        });
    // $('.checked').click(function () {
    //
    //      $('.checkedRow').animate({
    //           opacity: 0,
    //              left: "+=50"
    //          }, 800, function () {
    //                   $('.checkedRow').remove()
    //              });
    //
    //     });
}



}

function clearlist() {
    $('.row').animate({
        opacity: 0,
        left: "+=50"
    }, 800, function () {
        $('.row').remove()
    });

}


// function additem() {
// //     let myname = $('.minput').val();
// //     console.log(myname);
// //     $('.contain').append('<div class="row">' +
// //         '<span contenteditable="true">' + myname + '</span>' +
// //         '<i class="box far fa-square"></i><i class=" trash fas fa-ban"></i> ' +
// //         '<i class=" handle fas fa-sort"></i></div></div>'
// //     );
// //     $('.minput').val('');
// //     let numChildren = $('.contain').children().length;
// //     console.log(numChildren);
// //
// //     $('.trash').click(function () {
// //
// //         $(this).parent().parent().animate({
// //             opacity: 0,
// //             left: "+=50"
// //         }, 800, function () {
// //             $(this).remove();
// //         });
// //
// //     });
// //     $('.box').click(function () {
// //
// //         $(this).parent().addClass('checkedRow');
// //         $(this).replaceWith('<i class="checkBox far fa-check-square"></i>')
// //     });
// //     $('.checkBox').click(function () {
// //
// //         $(this).parent().removeClass('checkedRow');
// //         $(this).replaceWith('<i class="box far fa-square"></i>')
// //     })
// //
// // }


//create array to hold lists

//create an object that holds an array of tasks

//
