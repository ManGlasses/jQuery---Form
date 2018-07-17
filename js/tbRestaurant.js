function showAllDataTable() {
    $.each(dataTblRestaurant, (index, item) => {
        $('#dataTable').append(`
        <tr>
            <td>${item.name}</td>
            <td>${item.restaurantTypeName}</td>
            <td><input id="btnViewMenu${index}" type="button" value="View Menu" /></td>
            <td><input id="btnEdit${index}" type="button" value="Edit" /></td>
            <td><input id="btnDelete${index}" type="button" value="Delete" /></td>
        </tr>
        `)
    })

    btnUiInTable()
}

$(function () {
    showAllDataTable()
})