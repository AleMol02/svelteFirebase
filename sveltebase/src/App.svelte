<script>
	let product = {
		id: "",
		nombre: "",
		descripcion: "",
		categoria: "",
		imagenURL: "",
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		console.log(e);
	};
</script>

<main>
	<!-- on:evento cuando se envie el formulario-->
	<form on:submit>
		<!-- bind:value=variable cada cambio del input se sincorniza con la variable previamente declarada en el código -->
		<input
			bind:value={product.nombre}
			id="nombre"
			type="text"
			placeholder="Nombre del producto"
		/>
		<textarea
			bind:value={product.descripcion}
			id="descripcion"
			rows="3"
			placeholder="Descripción del producto"
		/>
		<input
			bind:value={product.imagenURL}
			type="url"
			id="imagen-url"
			placeholder="https://amazon.com/..."
		/>
		<select bind:value={product.categoria} id="categoria">
			<option value="gpu">GPUs</option>
			<option value="cpu">CPUs</option>
			<option value="cajas">Cajas ATX y otras</option>
			<option value="mb">Tarjetas Base</option>
			<option value="ram">RAM</option>
			<option value="rl"
				>Refrijeración Líquida (las de aire son muy feas)</option
			>
			<option value="rgb">Lucecitas</option>
		</select>
		<button> Guardar </button>
	</form>
</main>

<style>
</style>
