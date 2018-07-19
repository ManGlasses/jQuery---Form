function createSelectTypeRestaurant(selectorId) {

    $.each(dataLUTResType, function () {
        $(selectorId).append($('<option></option>')
            .val(this.id)
            .text(this.name))
    })

    // let checkRestaurant = new Array(dataTblRestaurant.length + 1)
    // checkRestaurant.fill(0)

    // let _restaurantType = dataTblRestaurant.map((item) => {
    //     checkRestaurant[item.restaurantType]++
    //     if (checkRestaurant[item.restaurantType] == 1) {
    //         return {
    //             restaurantType: item.restaurantType,
    //             restaurantTypeName: item.restaurantTypeName
    //         }
    //     }
    // })

    // _restaurantType = _restaurantType.filter((item) => {
    //     return item != undefined || item != null
    // })

    // $.each(_restaurantType, function () {
    //     $(selectorId).append(`
    //         <option value="${this.restaurantType}">${this.restaurantTypeName}</option> 
    //     `)
    // })

}

function selectedTypeRestaurant() {
    // ถ้าเลือก all ให้แสดงค่าทั้งหมดลง table
    if ($('#selRestaurantTypeShow').val() == 0) {
        createTableRestaurant(dataTblRestaurant)
    }

    else {
        let _restaurant = dataTblRestaurant.filter((item) => {
            return item.restaurantType == $('#selRestaurantTypeShow').val()
        })

        createTableRestaurant(_restaurant)
    }
}

$(function () {

    createSelectTypeRestaurant('#selRestaurantTypeShow')

    // แสดงค่าใน table ตาม type restaurant ที่เลือก
    $('#selRestaurantTypeShow').selectmenu({

        // เมื่อค่าเปลี่ยนแปลง ใน select box ของการเลือก type reataurant
        change: function () {
            selectedTypeRestaurant()
        }
    })

})
