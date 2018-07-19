function createTableRestaurant(data) {
    $('#dataTableRestaurant').empty()

    $.each(data, (index, item) => {
        $('#dataTableRestaurant').append(`
        <tr>
            <td>${item.name}</td>
            <td>${item.restaurantTypeName}</td>
            <td><input id="btnViewMenu${index}" onclick="showMenu('${item.id}')" type="button" value="View Menu" /></td>
            <td><input id="btnEditRestaurant${index}" onclick="setFormRestaurant('${item.id}')" type="button" value="Edit" /></td>
            <td><input id="btnDeleteRestaurant${index}" onclick="deleteRowRestaurant('${index}', '${item.id}')" type="button" value="Delete" /></td>
        </tr>
        `)
    })
}

function deleteRowRestaurant(indexRowRestaurant, idRestaurant) {

    let r = confirm('ต้องการลบข้อมูลหรือไม่')
    if (r) {
        $(`#btnDeleteRestaurant${indexRowRestaurant}`).parentsUntil('tbody').remove()

        let index = dataTblRestaurant.findIndex(item => item.id == idRestaurant)

        alert('ลบข้อมูลเรียบร้อย')

        dataTblRestaurant.splice(index, 1)
        selectedTypeRestaurant()
    }

}

$(function () {
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
        }
    })
})