// ใช้ในการ แก้ไข restaurant
let idEditRestaurant

$(function () {

    // สร้างตัวเลือกการแสดงของ Restaurant Type
    createSelectTypeRestaurant('#selRestaurantTypeShow')

    // ผูก event change 
    $('#selRestaurantTypeShow').selectmenu({
        change: function () {
            selectedTypeRestaurant()
        }
    })

    // สร้างตาราง Restaurant
    createTableRestaurant(dataTblRestaurant)

    // add new restaurant
    $('#btnAddNewRestaurant').click(function () {
        if (confirm('ต้องการเพิ่มข้อมูลหรือไม่')) {
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

    // สร้างตัวเลือกของ Restaurant Type เพื่อแก้ไข
    createSelectTypeRestaurant('#selRestaurantTypeEdit')

    // Save Restaurant
    $('#btnSaveRestaurant').click(function () {
        if (idEditRestaurant != null) {
            if (confirm('ต้องการบันทึกข้อมูลหรือไม่')) {
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

    // update ค่าที่ แนะนำการเลือกชื่อ restaurant
    txtRestaurantNameAutoComplete()

})