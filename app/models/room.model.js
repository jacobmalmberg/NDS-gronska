/**
 * Creates a room with the given name.
 * @param {String} name - The name of the room.
 */
function Room(name) {
    this.name = name;
    this.messages = [];
    this.users = [];

    this.addMessage = function(message){
      this.messages.push(message);
    };
}

module.exports = Room;