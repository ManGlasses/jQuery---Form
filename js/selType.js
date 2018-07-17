$(function () {

    $.each(dataTblRestaurant, (index, item) => {
        $('#selType').append(`
            <option value="${item.restaurantType}">${item.restaurantTypeName}</option> 
        `)
    })

    $('#selType').selectmenu({
        change: function () {
            $('#dataTable').empty()
            if ($(this).val() == 0) {
                showAllDataTable()
            }
            else {
                let _restaurantType = dataTblRestaurant.filter((item) => {
                    return item.restaurantType == $('#selType').val()
                })

                $.each(_restaurantType, (index, item) => {
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
        }
    })

})
