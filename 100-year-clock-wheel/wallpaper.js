let result = {
    "start_date": "20250806",
    "end_date": "20250807",
    "url": "https://www.bing.com/th?id=OHR.GasparillaLight_ZH-CN6855683859_UHD.jpg",
    "copyright": "加斯帕里拉岛灯塔后导标灯, 博卡格兰德, 佛罗里达州, 美国 (© Wiltser/Getty Images)",
    "copyright_link": "https://www.bing.com/search?q=%E7%BE%8E%E5%9B%BD%E5%9B%BD%E5%AE%B6%E7%81%AF%E5%A1%94%E6%97%A5&form=hpcapt&mkt=zh-cn"
};
const storedResult = await localforage.getItem("bing");
if(storedResult) result = storedResult
$("body").css("background-image",`url(${result.url})`)

try {
    const res = await fetch(
        "https://bing.biturl.top/?resolution=UHD&format=json&index=0&mkt=zh-CN"
    );
    const json = await res.json();
    console.log("Bing Wallpaper Response: ",json);
    result = json
    localforage.setItem("bing",result);
} catch (e) {
    console.log("Bing Wallpaper fetch failed:  ",e);
}
$("#bg").attr("src",`${result.url}`)
$("#bg").attr("alt",`${result.copyright}`)



