/**
 * Creates an assistant with the given name.
 */
function rabatt(id, forening_id, x, y, width, height, polygon, jorddjup, ytskikt) {
    this.id = id;
    this.forening_id = forening_id;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.polygon = polygon;
    this.jorddjup = jorddjup;
    this.ytskikt = ytskikt;
}

module.exports = rabatt;
