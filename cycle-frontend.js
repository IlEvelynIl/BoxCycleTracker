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

const UpdateCycleFrontend = (element, skip) => {
    let IsTracked = hasClass(element, "tracked") || hasClass(element, "skip-tracked");

    if (IsTracked) {
        RemoveTracked(element);
    } else {
        AddTracked(element, skip);
    }
}

const ClearFrontendCycle = () => {
    const trackerItems = document.querySelector(".location-tracker").children;
    for (let i = 0; i < trackerItems.length; i++) {
        RemoveTracked(trackerItems[i]);
    }
}

const AddPrevCycle = (cycle) => {
    let locationDiv = "";
    cycle.forEach(boxLocation => {
        const skipped = boxLocation.includes(" (skipped)");
        let color = "rgb(6, 161, 71)";

        if (skipped) {
            color = "rgb(133, 3, 3)";
        }

        let imageName = boxLocation.replace(" (skipped)", '');

        let locationButton = `<button class="map-button" style="background-color: ${color}" id="${boxLocation}">
                                    <img src="./img/maps/${currentMap}/${imageName}.webp">
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