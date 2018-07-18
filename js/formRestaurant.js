function setFormValue(idRestaurant) {

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

}