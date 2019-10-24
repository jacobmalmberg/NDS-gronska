/**
 * Creates an assistant with the given name.
 */
function vaxt(id, rabatt_id, namn, bildnamn, polygon, intro, vatten, lage, hojd, blommar, naring, jordman, typ) {
    this.id = id;
    this.rabatt_id = rabatt_id;
    this.namn = namn;
    this.bildnamn = bildnamn;
    this.polygon = polygon;
    this.intro = intro;
    this.vatten = vatten;
    this.lage = lage;
    this.hojd = hojd;
    this.blommar = blommar;
    this.naring = naring;
    this.jordman = jordman;
    this.typ = typ;
}

module.exports = vaxt;
