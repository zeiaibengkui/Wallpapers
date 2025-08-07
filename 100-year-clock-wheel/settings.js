$("#color-select").on("input",(e) => {
    $("#color-style").html(`:root{--main-color:${e.target.value};}`)
})