// dismiss welcome msg
document.getElementById("dismiss-button").addEventListener("click", () => DismissInfo());
// close prev cycles
document.getElementById("close-button").addEventListener("click", () => DismissPrevCycles());
// back to maps
document.getElementById("back-button").addEventListener("click", () => ReturnToMapSelector());
// show previous cycles
document.getElementById("show-prev-button").addEventListener("click", () => ShowPrevCycles());
// reset current cycle
document.getElementById("reset-cycle-button").addEventListener("click", () => ClearCurrentCycle());

const UpdateCycleFrontend = (element, location, skip) => {
    let IsTracked = hasClass(element, "tracked") || hasClass(element, "skip-tracked");
    location = location.replace(" (skipped)", '');

    if (IsTracked) {
        RemoveTracked(element);
        document.getElementById(`${location}-location-num`).style.visibility = "hidden";
    } else {
        AddTracked(element, skip);
        document.getElementById(`${location}-location-num`).style.visibility = "visible";
    }

    UpdateLocationNums();
}

const UpdateLocationNums = () => {
    let mapLocations = GetLocations(currentMap);

    for (let i = 0; i < mapLocations.length; i++) {
        let cycleLocation = currentCycle[i];
        let locationIndex = currentCycle.indexOf(cycleLocation);

        if (locationIndex > -1) {
            document.getElementById(`${cycleLocation}-location-num`).innerText = locationIndex + 1;
        }
    }
}

const ClearFrontendCycle = () => {
    const trackerItems = document.querySelector(".location-tracker").children;
    for (let i = 0; i < trackerItems.length; i++) {
        RemoveTracked(trackerItems[i]);
    }
    ClearLocationNums();
}

const ClearLocationNums = () => {
    let mapLocations = GetLocations(currentMap);

    for (let i = 0; i < mapLocations.length; i++) {
        let mapLocation = mapLocations[i];
        document.getElementById(`${mapLocation}-location-num`).style.visibility = "hidden";
    }
}

const AddPrevCycle = (cycle) => {
    let locationDiv = "";
    cycle.forEach(boxLocation => {
        const skipped = boxLocation.includes(" (skipped)");
        let color = "rgb(6, 161, 71)";
        let index = cycle.indexOf(boxLocation) + 1;

        if (skipped) {
            color = "rgb(133, 3, 3)";
        }

        let imageName = boxLocation.replace(" (skipped)", '');

        let locationButton = `<button class="map-button" style="background-color: ${color}">
                                    <img src="./img/maps/${currentMap}/${imageName}.webp">
                                    <p class="location-num" style="visibility: visible; position: absolute; width: 20px; height: 20px;">${index}</p>
                                    <p style="margin-top: 3px;">${boxLocation}</p>
                                </button>`;
        locationDiv += `${locationButton}`;
    });
    document.getElementById("prev-cycles").innerHTML += `<h2>Cycle #${previousCycles.length}</h2>${locationDiv}<br><br>`;
}

const DismissPrevCycles = () => {
    document.querySelector(".prev-cycles").style.display = "none";
}

const ShowPrevCycles = () => {
    document.querySelector(".prev-cycles").style.display = "block";
}

const AddTracked = (element, skip) => {
    if (skip == true) {
        element.classList.add("skip-tracked");
    } else {
        element.classList.add("tracked");
    }
}

const RemoveTracked = (element) => {
    let trackSkipped = "skip-tracked";

    if (hasClass(element, trackSkipped)) {
        element.classList.remove("skip-tracked");
    } else {
        element.classList.remove("tracked");
    }
}

const GetLocElement = (map) => {
    const trackerItems = document.querySelector(".location-tracker").children;
    for (let i = 0; i < trackerItems.length; i++) {
        let location = trackerItems[i].id;
        if (location == map) {
            return trackerItems[i];
        }
    }
}

const hasClass = (element, className) => {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}