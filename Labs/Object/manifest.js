
function normalizeUnits(manifest) {
  const newManifest = { ...manifest };

  if (manifest.unit === "lb") {
    newManifest.weight = manifest.weight * 0.45;
  }

  newManifest.unit = "kg";

  return newManifest;
}


function validateManifest(manifest) {
  const errors = {};

  // Validate containerId
  if (!Object.hasOwn(manifest, "containerId")) {
    errors.containerId = "Missing";
  } else if (
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    errors.containerId = "Invalid";
  }

  // Validate destination
  if (!Object.hasOwn(manifest, "destination")) {
    errors.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  // Validate weight
  if (!Object.hasOwn(manifest, "weight")) {
    errors.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    errors.weight = "Invalid";
  }

  // Validate unit
  if (!Object.hasOwn(manifest, "unit")) {
    errors.unit = "Missing";
  } else if (
    manifest.unit !== "kg" &&
    manifest.unit !== "lb"
  ) {
    errors.unit = "Invalid";
  }

  // Validate hazmat
  if (!Object.hasOwn(manifest, "hazmat")) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}


function processManifest(manifest) {
  const errors = validateManifest(manifest);

  if (Object.keys(errors).length === 0) {
    const normalizedManifest = normalizeUnits(manifest);

    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalizedManifest.weight} kg`);

  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
}
