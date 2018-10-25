$('.minput').on('keydown', function (event) {
    // console.log(event.which);
    if (event.which === 13) {
        additem();
        newList()
    }
});
// $('.nameBar').sortable({
//     handle: '.handle'
// });//add edit button
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
        console.log('no name');
    }
    else {
        $('.listContain').append('<div class="lists" id="' + listID + '">' +
            '<div class="nameBar">' +
            '<h1 class="listName" contenteditable="true">' + myListName + '</h1>' +

            // '<button onclick="removeList()">delete</button> </div>' +
            '<input class="minput" type="text" placeholder="List Item Here">' +
            '<button onclick="clearlist(this)">Clear the List</button>' +
            // '<button class="checked">Clear Checked items</button>' +
            '<i onclick="additem(this)" class="additem far fa-plus-square fa-lg"></i>' +
            '<i class="kill fas fa-bomb fa-lg"></i>' +
            '<div class="contain">' +
            '</div></div>'
        );
        $('.newListName').val('');

        $('.kill').click(function () {
            $(this).parent().animate({
                opacity: 0,
                left: "+=50"
            }, 800, function () {
                $(this).parent().remove();
            });
            //$(this).remove();

        });
        // function additem () {
        //     let myname = $('.minput').val();
        //     console.log(myname);
        //     $(this).parent().append('<div class="row">' +
        //         '<span contenteditable="true">' + myname + '</span>' +
        //         '<i class="box far fa-square"></i><i class=" trash fas fa-ban"></i> ' +
        //         '<i class=" handle fas fa-sort"></i></div></div>'
        //     );
        //     $('.minput').val('');
        //
        //
        //     $('.trash').click(function () {
        //
        //         $(this).parent().parent().animate({
        //             opacity: 0,
        //             left: "+=50"
        //         }, 800, function () {
        //             $(this).remove();
        //         });
        //
        //     });
        //     $('.box').click(function () {
        //
        //         $(this).parent().addClass('checkedRow');
        //         $(this).replaceWith('<i class="checkBox far fa-check-square"></i>')
        //     });
        //     $('.checkBox').click(function () {
        //
        //         $(this).parent().removeClass('checkedRow');
        //         $(this).replaceWith('<i class="box far fa-square"></i>')
        //     })
        //
        // }
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

function clearlist(element) {
    $(element).parent().find('.row').animate({
        opacity: 0,
        left: "+=50"
    }, 800, function () {
        $(element).parent().find('.row').remove()
    });

}


function additem(element) {
    let myname = $(element).parent().find('.minput').val();
    console.log(myname);
    $(element).parent().append('<div class="row">' +
        '<span contenteditable="true">' + myname + '</span>' +
        '<i onclick="check(this)" class="far fa-square"></i><i class=" trash fas fa-ban"></i> ' +
        '</div>'
        // <i class=" handle fas fa-sort"></i>
    );
    $('.minput').val('');
    let numChildren = $('.contain').children().length;
    console.log(numChildren);

    $('.trash').click(function () {

        $(this).parent().animate({
            opacity: 0,
            left: "+=50"
        }, 800, function () {
            $(this).remove();
        });

    });



}
function check(element) {

    $(element).parent().addClass('checkedRow');
    $(element).replaceWith('<i onclick="uncheck(this)" class="far fa-check-square"></i>')
}
function uncheck(element) {

    $(element).parent().removeClass('checkedRow');
    $(element).replaceWith('<i onclick="check(this)" class="far fa-square"></i>')
}

//create array to hold lists

//create an object that holds an array of tasks

//
