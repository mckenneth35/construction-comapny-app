import keyMirror from 'keymirror';

export const SPECIALTY_TYPES = keyMirror({
    EXCAVATION: null,
    PLUMBING: null,
    ELECTRICAL: null,
    FIRE_SAFETY: null,
});

export const SPECIALTY_TYPES_NAME = {
    [SPECIALTY_TYPES.EXCAVATION]: 'Excavation',
    [SPECIALTY_TYPES.PLUMBING]: 'Plumbing',
    [SPECIALTY_TYPES.ELECTRICAL]: 'Electrical',
    [SPECIALTY_TYPES.FIRE_SAFETY]: 'Fire Safety',
};

export const DEFAULT_CHECKED_SPECIALTY_TYPES = {
    [SPECIALTY_TYPES.EXCAVATION]: false,
    [SPECIALTY_TYPES.PLUMBING]: false,
    [SPECIALTY_TYPES.ELECTRICAL]: false,
    [SPECIALTY_TYPES.FIRE_SAFETY]: false,
};

export const SPECIALTY_TYPES_TAG_COLOR_THEME = {
    [SPECIALTY_TYPES.EXCAVATION]: 'grey-theme',
    [SPECIALTY_TYPES.PLUMBING]: 'blue-theme',
    [SPECIALTY_TYPES.ELECTRICAL]: 'yellow-theme',
    [SPECIALTY_TYPES.FIRE_SAFETY]: 'orange-theme',
};
