$.fn.txtMenuNameAutoComplete = function () {
    let availableMenuName = dataTblMenu.map((item) => {
        return item.name
    })

    $(this).autocomplete({
        source: availableMenuName
    })

    return $(this)
}
