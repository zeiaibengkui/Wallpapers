let result = {
    start_date: "20250805",
    end_date: "20250806",
    url: "https://www.bing.com/th?id=OHR.BabyLemur_ZH-CN6617977758_UHD.jpg",
    copyright:
        "环尾狐猴幼崽在玩自己的尾巴‌, 马达加斯加 (© Andy Rouse/Nature Picture Library)",
    copyright_link:
        "https://www.bing.com/search?q=%E7%8E%AF%E5%B0%BE%E7%8B%90%E7%8C%B4%E2%80%8C&form=hpcapt&mkt=zh-cn",
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



