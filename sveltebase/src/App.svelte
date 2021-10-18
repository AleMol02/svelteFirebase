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
		console.log(product);
	};
</script>

<main>
	<h1>Esto deberia ser un H1</h1>
	<button>Esto deberia ser un boton</button>
	<h2>Esto un h2</h2>
	<!-- Caja principal formulario-->
	<div class="p-4 shadow-md rounded-md text-left" style="max-width: 400px;">
		<!-- on:evento cuando se envie el formulario-->
		<form on:submit={onSubmitHandler}>
			<!-- bind:value=variable cada cambio del input se sincorniza con la variable previamente declarada en el código -->
			<label for="nombre">Nombre del producto</label>
			<input
				bind:value={product.nombre}
				id="nombre"
				type="text"
				placeholder="Nombre del producto"
			/>
			<label for="descripcion">Descripción</label>
			<textarea
				bind:value={product.descripcion}
				id="descripcion"
				rows="3"
				placeholder="Descripción del producto"
			/>
			<label for="imagen-url">Imagen del producto</label>
			<input
				bind:value={product.imagenURL}
				type="url"
				id="imagen-url"
				placeholder="https://amazon.com/..."
			/>
			<label for="categoria">Categoría</label>
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
			<hr class="my-2"/>
			<button class="ml-5 bg-indigo-200 py-2 px-3 border border-indigo-500 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-indigo-500 hover:text-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:text-gray-700 focus:bg-indigo-200"> Guardar </button>
		</form>
	</div>
	<!-- Fin Caja principal formulario-->
</main>

<style>
</style>
