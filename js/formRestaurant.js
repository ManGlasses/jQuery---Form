function setFormValue(idRestaurant) {

    // เก็บค่าที่แถวที่ click ไป
    let _restaurant = dataTblRestaurant.find((item) => {
        return item.id == idRestaurant
    })

    // แสดงค่าแถวที่ click ไป บน form
    $('#txtRestaurantName').val(_restaurant.name)

    $('#selRestaurantTypeEdit').empty()
    createSelectTypeRestaurant('#selRestaurantTypeEdit')

    $('#txtareaRestaurantDetail').val(_restaurant.detail)

}