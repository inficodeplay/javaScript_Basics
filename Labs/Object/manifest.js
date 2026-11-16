const manifest = {
    containerId: 1,
    destination: "Monterey, California, USA",
    weight: 5,
    unit: "lb",
    hazmat: false
}

function normalizeUnits(manifest)
{
    let cp_manifest = manifest.slice();

    if(manifest.unit === "lb")
    {
        cp_manifest.weight = manifest.weight*0.45;
        cp_manifest.unit = "kg";
    }

    return cp_manifest;
}

// console.log(normalizeUnits(manifest))
let cp_manifest = Object.assign(manifest);
cp_manifest.weight = "kg"
console.log(cp_manifest)
console.log(manifest)
// console.log(Object.entries(manifest))