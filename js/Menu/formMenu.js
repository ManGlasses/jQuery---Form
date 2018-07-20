function setFormMenu(idMenu) {

    // เก็บค่าที่แถวที่ click ไป
    let _menu = dataTblMenu.find((item) => {
        return item.id == idMenu
    })

    // แสดงค่าแถวที่ click ไป บน form
    $('#txtMenuName').val(_menu.name)

    $('#selMenuTypeEdit').empty()
    createSelectTypeMenu('#selMenuTypeEdit')
    $('#selMenuTypeEdit').children()
        .filter(`[value='${_menu.categoryId}']`)
        .attr('selected', 'selected')

    $('#txtMenuPrice').val(_menu.price)

    idEditMenu = idMenu
}

function btnSaveMenu_onClick() {

    // Save Menu
    $('#btnSaveMenu').click(function () {
        if (idEditMenu != null) {
            let r = confirm('ต้องการบันทึกข้อมูลหรือไม่')
            if (r) {
                let _menu = dataTblMenu.find((item) => {
                    return item.id == idEditMenu
                })

                _menu.name = $('#txtMenuName').val()

                _menu.categoryId = $('#selMenuTypeEdit').val()
                _menu.categoryName = $('#selMenuTypeEdit')
                    .children()
                    .filter(`[value='${$("#selMenuTypeEdit").val()}']`)
                    .text()

                _menu.price = $('#txtMenuPrice').val()

                alert('บันทึกข้อมูลเรียบร้อย')

                selectedTypeMenu()
                $('#txtMenuName').txtMenuNameAutoComplete()
            }
        }
    })
}

function btnCancelMenu_onClick() {

    // Cancel Restaurant
    $('#btnCancelMenu').click(function () {
        $('#txtMenuName').val('')
        $('#txtMenuPrice').val('')
        idEditMenu = null
    })
}
