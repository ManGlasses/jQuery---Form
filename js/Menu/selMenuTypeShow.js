function createSelectTypeMenu(selectorId) {
    $.each(dataLUTMenuType, function () {
        $(selectorId).append($('<option></option>')
            .val(this.id)
            .text(this.name))
    })
}

function selectedTypeMenu() {
    // ล้างค่าใน table
    $('#dataTableMenu').empty()

    // ถ้าเลือก all ให้แสดงค่าทั้งหมดลง table
    if ($('#selMenuTypeShow').val() == 0) {
        createTableMenu(dataTblMenu)
    }

    else {

        let _menu = dataTblMenu.filter((item) => {
            return item.categoryId == $('#selMenuTypeShow').val()
        })

        createTableMenu(_menu)
    }
}

// $.fn.onChangeSelectTypeMenu = function () {
//     $(this).selectmenu({

//         // เมื่อค่าเปลี่ยนแปลง ใน select box ของการเลือก type reataurant
//         change: () => {
//             selectedTypeMenu(this)
//         }
//     })

//     return $(this)
// }
