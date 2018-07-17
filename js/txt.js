$(function () {
    var availableNameRes = dataTblRestaurant.map((item) => {
        return item.name
    })
    var availableTypeRes = dataTblRestaurant.map((item) => {
        return item.restaurantTypeName
    })

    $('#txtNameRes').autocomplete({
        source: availableNameRes
    })
})
