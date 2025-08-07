
let color = await localforage.getItem("main-color")
if(!color) color = "#743E3E";

const setColor = (value) => {
    color = value
    $("#color-style").html(`:root{--main-color:${value};}`);
};
setColor(color);

$("#color-select").on("input", (e) => {
    setColor(e.target.value);
});

window.addEventListener("unload",async () => {
    await localforage.setItem("main-color",color)
});
