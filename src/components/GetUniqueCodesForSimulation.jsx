/**
 * Gets all unique evaluation codes for a selected simulation.
 * @param {Array} assignments - Array of assignment objects from Google Sheets
 * @param {string} selectedSimulation - e.g., "Simulasi 1"
 * @returns {Array<string>} Array of unique code strings e.g. ["U02", "U03", "U06", ...]
 */

export function getUniqueCodesForSimulation(assignments, selectedSimulation) {
    if (!assignments || !selectedSimulation) return [];

    const uniqueCodes = new Set();

    assignments
        .filter((item) => item.simulation === selectedSimulation)
        .forEach((item) => {
        if (item.evalCodes) {
            // Split by whitespace and trim
            const codes = item.evalCodes.trim().split(/\s+/);
            codes.forEach((code) => {
            if (code) uniqueCodes.add(code);
            });
        }
        });

    return Array.from(uniqueCodes);
}