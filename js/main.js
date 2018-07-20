let idEditRestaurant

$(function () {

    createSelectTypeRestaurant('#selRestaurantTypeShow')

    // แสดงค่าใน table ตาม type restaurant ที่เลือก
    $('#selRestaurantTypeShow').selectmenu({

        // เมื่อค่าเปลี่ยนแปลง ใน select box ของการเลือก type reataurant
        change: function () {
            selectedTypeRestaurant()
        }
    })

    createTableRestaurant(dataTblRestaurant)

    $('#btnAddNewRestaurant').click(function () {
        let r = confirm('ต้องการเพิ่มข้อมูลหรือไม่')
        if (r) {
            dataTblRestaurant.push({
                id: dataTblRestaurant.length + 1,
                name: $('#txtRestaurantName').val(),
                restaurantType: $('#selRestaurantTypeEdit').val(),
                restaurantTypeName: $('#selRestaurantTypeEdit')
                    .children(`[value='${$("#selRestaurantTypeEdit").val()}']`)
                    .text(),
                detail: $('#txtareaRestaurantDetail').val()
            })

            alert('เพิ่มข้อมูลเรียบร้อย')

            selectedTypeRestaurant()
            txtRestaurantNameAutoComplete()
        }
    })

    createSelectTypeRestaurant('#selRestaurantTypeEdit')

    // Save Restaurant
    $('#btnSaveRestaurant').click(function () {
        if (idEditRestaurant != null) {
            let r = confirm('ต้องการบันทึกข้อมูลหรือไม่')
            if (r) {
                let _restaurant = dataTblRestaurant.find((item) => {
                    return item.id == idEditRestaurant
                })

                _restaurant.name = $('#txtRestaurantName').val()

                _restaurant.restaurantType = $('#selRestaurantTypeEdit').val()
                _restaurant.restaurantTypeName = $('#selRestaurantTypeEdit')
                    .children(`[value='${$("#selRestaurantTypeEdit").val()}']`)
                    .text()

                _restaurant.detail = $('#txtareaRestaurantDetail').val()

                alert('บันทึกข้อมูลเรียบร้อย')

                selectedTypeRestaurant()
                txtRestaurantNameAutoComplete()
            }
        }
    })

    // Cancel Restaurant
    $('#btnCancelRestaurant').click(function () {
        $('#txtRestaurantName').val('')
        $('#txtareaRestaurantDetail').val('')
        idEditRestaurant = null
    })

    txtRestaurantNameAutoComplete()

})