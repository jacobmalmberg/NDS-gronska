/**
 * Creates a timeslot with the given name.
 */
function time_slot(assistant_id, date, time) {
    this.assistant_id = assistant_id;
    this.id = null;
    this.date = date;
    this.time = time;
    this.booked_by = "";
    this.reserved = false;
}

module.exports = time_slot;
