const pacientes = [
	{
		paciente: {
			nombre: "Manuel",
			edad: 25,
			sexo: "H"
		},
		diasIngresado: 3,
		dieta: "Baja en fibra"
	},
	{
		paciente: {
			nombre: "Marta",
			edad: 56,
			sexo: "M"
		},
		diasIngresado: 5,
		dieta: "Diabetes"
	},
	{
		paciente: {
			nombre: "Julia",
			edad: 38,
			sexo: "M"
		},
		diasIngresado: 1,
		dieta: "Sin sal"
	},
	{
		paciente: {
			nombre: "Esteban",
			edad: 40,
			sexo: "H"
		},
		diasIngresado: 3,
		dieta: "Diabetes"
	},
	{
		paciente: {
			nombre: "Arturo",
			edad: 19,
			sexo: "H"
		},
		diasIngresado: 2,
		dieta: "Baja en fibra"
	},
	{
		paciente: {
			nombre: "Isabel",
			edad: 63,
			sexo: "M"
		},
		diasIngresado: 6,
		dieta: "Sin sal"
	}
];

datosHospital(pacientes);

function datosHospital(lista) {
	const reducer = (acc, currentValue) => acc + currentValue;

	const edad = lista.filter(lista => lista.paciente.edad >= 18);
	const dieta = lista.filter(lista => lista.paciente.sexo === "H" && lista.dieta === "Diabetes");
	const totalDiasIngreso = lista.map(lista => lista.diasIngresado).reduce(reducer);
	const mediaEdadMujeres = (lista.filter(lista => lista.paciente.sexo === "M").map(lista => lista.paciente.edad).reduce(reducer) / lista.filter(lista => lista.paciente.sexo === "M").length);

	console.log(mediaEdadMujeres);

	return resultados = {
		nPacientes: lista.length,
		nMayoresEdad: edad.length,
		nHombresDiabeticos: dieta.length,
		totalDiasIngreso,
		mediaEdadMujeres: ""
	};
}
