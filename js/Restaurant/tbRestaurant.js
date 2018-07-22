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
    if (confirm('ต้องการลบข้อมูลหรือไม่')) {
        $(`#btnDeleteRestaurant${indexRowRestaurant}`).parentsUntil('tbody').remove()

        let index = dataTblRestaurant.findIndex(item => item.id == idRestaurant)

        alert('ลบข้อมูลเรียบร้อย')

        idEditRestaurant = idEditRestaurant == idRestaurant ? null : idEditRestaurant

        dataTblRestaurant.splice(index, 1)
        selectedTypeRestaurant()
    }

}
