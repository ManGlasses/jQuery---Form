$(function () {
    let availableRestaurantName = dataTblRestaurant.map((item) => {
        return item.name
    })

    $('#txtRestaurantName').autocomplete({
        source: availableRestaurantName
    })
})
