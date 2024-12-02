let boxLocations = [];

let currentCycle = [];
let previousCycles = [];

let currentMap = undefined;

const SetBoxLocations = (map) => {
    boxLocations = GetLocations(map);
}

const AddToCycle = (location, skip) => {
    let finalBox = location + (skip == true ? " (skipped)" : "");

    if (IsLocationTracked(location)) {
        RemoveFromCycle(location, GetLocElement(location));
        return;
    }

    if (IsLocationTracked(finalBox)) {
        RemoveFromCycle(finalBox, GetLocElement(location));
        return;
    }

    if (IsLocationSkipTracked(finalBox)) {
        RemoveFromCycle(finalBox, GetLocElement(location));
        return;
    }

    currentCycle.push(finalBox);

    let element = GetLocElement(location);

    // frontend
    UpdateCycleFrontend(element, location, skip);

    // new cycle
    if (currentCycle.length >= boxLocations.length)
    {
        NewCycle();
    }
}

const ClearCurrentCycle = () => {
    currentCycle = [];
    ClearFrontendCycle();
}

const NewCycle = () => {
    document.getElementById("prev-cycles").style.display = "block";
    previousCycles.push(currentCycle);
    AddPrevCycle(currentCycle);
    ClearCurrentCycle();
}

const RemoveFromCycle = (location, element) => {
    let index = currentCycle.indexOf(location);
    if (index > -1) {
        currentCycle.splice(index, 1);
    }
    
    if (!location.endsWith("(skipped)")) {
        index = currentCycle.indexOf(location + " (skipped)");
        if (index > -1) {
            currentCycle.splice(index, 1);
        }
    }

    UpdateCycleFrontend(element, location, false);
}

const IsLocationTracked = (location) => {
    for (let i = 0; i < currentCycle.length; i++) {
        if (location.startsWith(currentCycle[i])) {
            return true;
        }
        if (currentCycle[i] == location) {
            return true;
        }
    }

    return false;
}

const IsLocationSkipTracked = (location) => {
    for (let i = 0; i < currentCycle.length; i++) {
        if (currentCycle[i] == location + " (skipped)") {
            return true;
        }
    }

    return false;
}