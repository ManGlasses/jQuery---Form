function createSelectTypeRestaurant(selectorId) {

    // เอาค่าที่ซ้ำออก
    let checkRestaurant = new Array(dataTblRestaurant.length + 1)
    checkRestaurant.fill(0)

    let _restaurantType = dataTblRestaurant.map((item) => {
        checkRestaurant[item.restaurantType]++
        if (checkRestaurant[item.restaurantType] == 1) {
            return {
                restaurantType: item.restaurantType,
                restaurantTypeName: item.restaurantTypeName
            }
        }
    })

    _restaurantType = _restaurantType.filter((item) => {
        return item != undefined || item != null
    })

    // แสดงค่าใน select box ของการเลือก type reataurant
    $.each(_restaurantType, function () {
        $(selectorId).append(`
            <option value="${this.restaurantType}">${this.restaurantTypeName}</option> 
        `)
    })

}

$(function () {

    createSelectTypeRestaurant('#selRestaurantTypeShow')

    // แสดงค่าใน table ตาม type restaurant ที่เลือก
    $('#selRestaurantTypeShow').selectmenu({

        // เมื่อค่าเปลี่ยนแปลง ใน select box ของการเลือก type reataurant
        change: function () {

            // ล้างค่าใน table
            $('#dataTable').empty()

            // ถ้าเลือก all ให้แสดงค่าทั้งหมดลง table
            if ($(this).val() == 0) {
                showAllDataTable()
            }

            else {

                let _restaurant = dataTblRestaurant.filter((item) => {
                    return item.restaurantType == $('#selRestaurantTypeShow').val()
                })

                // แสดงค่าใน table ตาม select box ของการเลือก type reataurant ที่เลือก
                $.each(_restaurant, (index, item) => {
                    $('#dataTable').append(`
                        <tr>
                            <td>${item.name}</td>
                            <td>${item.restaurantTypeName}</td>
                            <td><input id="btnViewMenu${index}" onclick="showMenu('${item.id}')" type="button" value="View Menu" /></td>
                            <td><input id="btnEditRestaurant${index}" onclick="setFormValue('${item.id}')" type="button" value="Edit" /></td>
                            <td><input id="btnDeleteRestaurant${index}" onclick="" type="button" value="Delete" /></td>
                        </tr>
                    `)
                })

                btnUiInTable()
            }
        }
    })

})
