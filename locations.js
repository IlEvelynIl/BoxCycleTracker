const KinoLocations = [
    "Spawn",
    "Stage",
    "Theater",
    "Boiler Room",
    "Alley",
    "Fire Trap",
    "VIP Lounge",
    "Dining Room",
    "Dressing Room"
];
const FiveLocations = [
    "Olympia",
    "MPL",
    "War Room",
    "Bowie Knife",
    "Claymores",
    "Grenades"
];
const AscensionLocations = [
    "Spawn",
    "PHD",
    "Power",
    "PAP",
    "Claymores",
    "Staminup",
    "Speed Cola",
    "Mule Kick"
];
const COTDLocations = [
    "Spawn",
    "Power",
    "Mule Kick",
    "Staminup",
    "PHD",
    "Lighthouse"
];
const ShangLocations = [
    "Spawn",
    "AK74u",
    "Waterfall",
    "Power"
];
const MoonLocations = [
    "Spawn",
    "Power",
    "Bio Dome",
    "Mule Kick"
];
const NachtLocations = [ 
    "Help Room" // Kappa
];
const VerrucktLocations = [
    "Double Tap",
    "Power",
    "Jug",
    "STG",
    "Thompson"
];
const ShinoLocations = [
    "Thompson",
    "Carbine",
    "Storage",
    "Comm Room",
    "Fishing Hut",
    "Doctors Quarters",
];
const DerLocations = [
    "Tommy",
    "Power",
    "Type 100",
    "Trench Gun",
    "MP40",
    "Catwalk"
];

const GetLocations = (map) => {
    switch (map) {
        case "Kino Der Toten": {
            return KinoLocations;
        }
        case "FIVE": {
            return FiveLocations;
        }
        case "Ascension": {
            return AscensionLocations;
        }
        case "Call of The Dead": {
            return COTDLocations;
        }
        case "Shangri-La": {
            return ShangLocations;
        }
        case "Moon": {
            return MoonLocations;
        }
        case "Verruckt": {
            return VerrucktLocations;
        }
        case "Shi No Numa": {
            return ShinoLocations;
        }
        case "Der Riese": {
            return DerLocations;
        }
        default: {
            return NachtLocations;
        }
    }
}