let idEditMenu
let currentIdMenu

function showMenu(idRestaurant) {

    currentIdMenu = dataTblMenu.length

    // เก็บค่าที่แถวที่ click ไป
    let _restaurant = dataTblRestaurant.find((item) => {
        return item.id == idRestaurant
    })

    $('#menu').empty()

    // ชื่อร้าน
    $('#menu').append($('<div></div>')
        .append($('<h3></h3>')
            .text(`${_restaurant.name}'s Menu`)
        )
    )

    // กล่องเลือกประเภท menu
    $('#menu').append($('<div></div>')
        .append('<label>Select Menu Type : </label>')
        .append($('<select id="selMenuTypeShow"></select>')
            .append($('<option></option>')
                .val(0)
                .attr('selected', 'selected')
                .text('All')
            )
        )
    )
    createSelectTypeMenu('#selMenuTypeShow')
    $('#selMenuTypeShow').selectmenu({

        // เมื่อค่าเปลี่ยนแปลง ใน select box ของการเลือก type reataurant
        change: () => {
            selectedTypeMenu()
        }
    })

    // ตารางแสดง menu
    $('#menu').append($('<div></div>')
        .append($('<table></table>')
            .addClass('table')
            .append($('<thead></thead>')
                .append($('<tr></tr>')
                    .addClass('bgBlue')
                    .css('color', 'white')
                    .append($('<th></th>')
                        .text('Name')
                    )
                    .append($('<th></th>')
                        .text('Type')
                    )
                    .append($('<th></th>')
                        .text('Price(Baht)')
                    )
                    .append($('<th></th>')
                        .text(' ')
                    )
                    .append($('<th></th>')
                        .text(' ')
                    )
                )
            )
            .append('<tbody id="dataTableMenu"></tbody>')
        )
    )
    createTableMenu(dataTblMenu)

    // ปุ่ม add new menu
    $('#menu').append($('<div></div>')
        .append($('<input id="btnAddNewMenu" />')
            .attr('type', 'button')
            .val('Add New Menu')
        )
    )

    // form menu
    $('#menu').append($('<div></div>')
        .append($('<label></label>')
            .text('Name : ')
        )
        .append($('<input id="txtMenuName" />')
            .attr('type', 'text')
            .txtMenuNameAutoComplete()
        )
    )

    $('#menu').append($('<div></div>')
        .append($('<label></label>')
            .text('Type : ')
        )
        .append('<select id="selMenuTypeEdit"></select>')
    )
    createSelectTypeMenu('#selMenuTypeEdit')

    $('#menu').append($('<div></div>')
        .append($('<label></label>')
            .text('Price : ')
        )
        .append($('<input id="txtMenuPrice" />')
            .attr('type', 'text')
            .attr('size', '3')
        )
        .append($('<label></label>')
            .text(' Baht')
        )
    )

    // Add new menu
    $('#btnAddNewMenu').click(function () {

        if (confirm('ต้องการเพิ่มข้อมูลหรือไม่')) {
            dataTblMenu.push({
                id: ++currentIdMenu,
                name: $('#txtMenuName').val(),
                categoryId: $('#selMenuTypeEdit').val(),
                categoryName: $('#selMenuTypeEdit')
                    .children(`[value='${$("#selMenuTypeEdit").val()}']`)
                    .text(),
                price: $('#txtMenuPrice').val()
            })

            alert('เพิ่มข้อมูลเรียบร้อย')

            selectedTypeMenu()
            $('#txtMenuName').txtMenuNameAutoComplete()
        }
    })

    $('#menu').append($('<div></div>')
        .append($('<input id="btnSaveMenu" />')
            .attr('type', 'button')
            .val('Save')
        )
        .append($('<input id="btnCancelMenu" />')
            .attr('type', 'button')
            .val('Cancel')
        )
    )
    btnSaveMenu_onClick()
    btnCancelMenu_onClick()

}