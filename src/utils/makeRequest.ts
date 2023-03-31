var nameObject = ""
var presetObject = ""

function makeRequest(name: string, preset: string) {
  nameObject = name;
  presetObject = preset;
}

export { nameObject, presetObject, makeRequest }