<template>
	<h1>About Page</h1>
    <hr>
    <h2>{{ name }}</h2>

    <button @click="onChangeName">Cambia el nombre</button>
</template>

<script>
export default {

    data() {
        return {
            name: 'Maxim'
        }
    },
    methods:{
        onChangeName(){
            console.log('Se cambiará el nombre a Maximiian')
            this.name = 'Maximilian'
        }
    },

	beforeCreate() {
		console.log("beforeCreate");
	},
	created() {
        // Buen punto para hacer llamadas http
        this.name = 'Juan Ca'
		console.log("created");
	},
	beforeMount() {
		console.log("beforeMount");
	},
	mounted() {
		console.log("mounted");
	},
	beforeUpdate() {
		console.log("beforeUpdate");
	},
	updated() {
		console.log("updated");
	},
    beforeUnmount() {
        console.log("beforeUnmount");
    },
    unmounted() {
        console.log("unmounted");
    },
	activated() {
		console.log("activated");
	},
	deactivated() {
		console.log("deactivated");
	},
	errorCaptured() {
		console.log("errorCaptured");
	},
	renderTracked() {
		console.log("renderTracked");
	},
	renderTriggered() {
		console.log("renderTriggered");
	},
};
</script>
