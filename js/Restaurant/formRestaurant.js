let idEditRestaurant

function setFormRestaurant(idRestaurant) {

    // เก็บค่าที่แถวที่ click ไป
    let _restaurant = dataTblRestaurant.find((item) => {
        return item.id == idRestaurant
    })

    // แสดงค่าแถวที่ click ไป บน form
    $('#txtRestaurantName').val(_restaurant.name)

    $('#selRestaurantTypeEdit').empty()
    createSelectTypeRestaurant('#selRestaurantTypeEdit')
    $('#selRestaurantTypeEdit').children()
        .filter(`[value='${_restaurant.restaurantType}']`)
        .attr('selected', 'selected')

    $('#txtareaRestaurantDetail').val(_restaurant.detail)

    idEditRestaurant = idRestaurant
}

$(function () {

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
})
