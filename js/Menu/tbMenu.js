function createTableMenu(data) {
    $.each(data, (index, item) => {
        $('#dataTableMenu').append(`
        <tr>
            <td>${item.name}</td>
            <td>${item.categoryName}</td>
            <td>${item.price}</td>
            <td><input id="btnEditMenu${index}" onclick="setFormMenu(${item.id})" type="button" value="Edit" /></td>
            <td><input id="btnDeleteMenu${index}" onclick="deleteRowMenu('${index}', '${item.id}')" type="button" value="Delete" /></td>
        </tr>
        `).find('td:nth-child(3)').css('text-align', 'right')
    })

}

function deleteRowMenu(indexRowMenu, idMenu) {

    let r = confirm('ต้องการลบข้อมูลหรือไม่')
    if (r) {
        $(`#btnDeleteMenu${indexRowMenu}`).parentsUntil('tbody').remove()

        let index = dataTblMenu.findIndex(item => item.id == idMenu)

        alert('ลบข้อมูลเรียบร้อย')

        dataTblMenu.splice(index, 1)
        selectedTypeMenu()
    }

}