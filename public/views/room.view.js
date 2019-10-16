Vue.component('route-room', {
    data() {
        return {
            room: this.$route.params.roomName,
            entries: [],
            socket: null,
            input: '',
            user: {
                name: ''
            }
        }
    },
    methods: {
        send() {
            this.socket.emit("update", {room: this.room, update: this.input, username: this.user.name});
            this.input = '';
        }
    },
    created() {
        fetch(`/api/room/${this.room}`)
            .then(res => res.json())
            .then(data => {
                this.entries = data.list;
                this.socket.emit("join", {name: this.room, username: this.user.name});
            })
        
        this.socket = io().connect();
        this.socket.on('update', data => {
            console.log("update", data);
            this.entries.push(data.username + ": " + data.update);
        });
        this.socket.on('join', data => {
            console.log("join", data);
            this.entries.push(data.username + " joined the channel");
        });
    },
    template: `
    <div class="container">
        <section class="col-md-10 col-md-offset-1">
            <div class="row" style="text-align: center;">
                <h1>{{ room }}</h1>
            </div>
            <div style="border: 2px solid black">
                <div v-for="entry in entries">
                    {{ entry }} <br>
                </div>
            </div>

            <form v-on:submit.prevent="send()">
                <input v-model="input" class="form-control" type="text" required autofocus>
            </form>
        </section>
    </div>
	`
});