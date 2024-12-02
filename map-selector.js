document.addEventListener("DOMContentLoaded", () => AddMaps());

const getMapHtmlContent = (map, callback) => {
    const isFive = map === "FIVE"
    const text = isFive ? "\"FIVE\"" : map

    return `<button class="map-button" onclick="${callback}">
                <img src="./img/maps/${map}/thumbnail.webp">
                <p>${text}</p>
            </button>`;
}

const AddMaps = () => {
    const maps = [
        "Kino Der Toten",
        "FIVE",
        "Ascension",
        "Call of The Dead",
        "Shangri-La",
        "Moon",
        "Nacht Der Untoten",
        "Verruckt",
        "Shi No Numa",
        "Der Riese"
    ];

    const nachtCallBack = `Nacht();`;
    const callback = (map) =>  `SelectMap('${map}'); SetBoxLocations('${map}');`;

    maps.map((map, index) => {
        const onClick = index === 6 ? nachtCallBack : callback(map)
        const button = getMapHtmlContent(map, onClick)
        document.querySelector(".map-selector").innerHTML += button;
    })
}

const SelectMap = (map) => {
    currentMap = map;
    previousCycles = [];
    currentCycle = [];
    document.getElementById("prev-cycles").innerHTML = "";

    document.querySelector(".map-selector").style.display = "none";
    document.getElementById("map-name").innerText = map;

    // bring the toolbar buttons up
    document.getElementById("toolbar").style.display = "block";

    let mapLocations = GetLocations(map);

    // make it visible
    document.querySelector(".location-tracker").style.display = "block";

    // clear it before we add the new locations
    document.querySelector(".location-tracker").innerHTML = "";

    mapLocations.forEach(boxLocation => {
        let button = `<button class="map-button" id="${boxLocation}" onclick="AddToCycle('${boxLocation}', false)" oncontextmenu="AddToCycle('${boxLocation}', true); return false;">
                        <img src="./img/maps/${map}/${boxLocation}.webp">
                        <p id="${boxLocation}-location-num" class="location-num"></p>
                        <p class="location-name">${boxLocation}</p>
                      </button>`;
        document.querySelector(".location-tracker").innerHTML += button;
    });
}

const ReturnToMapSelector = () => {
    // set box locations to nothing
    boxLocations = [];
    // dismiss prev cycles tab
    DismissPrevCycles();
    // tracker invisible
    document.querySelector(".location-tracker").style.display = "none";
    // map selector visible
    document.querySelector(".map-selector").style.display = "block";
    // set text back to default
    document.getElementById("map-name").innerText = "Select Map";
    // no toolbar
    document.getElementById("toolbar").style.display = "none";
}

const DismissInfo = () => {
    document.querySelector(".cycle-tech-info").style.display = "none";
}

// Kappa
const Nacht = () => {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}