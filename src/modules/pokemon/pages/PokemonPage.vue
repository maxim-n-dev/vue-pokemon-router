<template>
	<h1>Pokemon: #{{ id }}</h1>
    <div v-if="pokemon" class="">
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
    </div>
</template>

<script>
export default {
	props: {
		id: {
			type: Number,
			required: true,
		},
	},
	data() {
		return {
			// id: this.$route.params.id
			pokemon: null,
		};
	},
	methods: {
		async getPokemon() {
			try {
				const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then((res) => res.json());

				this.pokemon = pokemon;
			} catch (error) {
				this.$router.push('/')
			}
		},
	},
    watch: {
        id() {
            this.getPokemon()
        }
    },

	created() {
        //Se puede sacar el id de la ruta o de los props

        
		// const { id } = this.$route.params
		// console.log(id)
		// this.id = id
		// console.log(this.$attrs)
		this.getPokemon();
	},
};
</script>

<style>
img {
    width: 200px;
    height: 200px;
}
</style>
