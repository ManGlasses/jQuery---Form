function showAllDataTable() {
    $.each(dataTblRestaurant, (index, item) => {
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

$(function () {
    showAllDataTable()
})