const pacientes = [
	{
		paciente: {
			nombre: 'Manuel',
			edad: 25,
			sexo: 'H'
		},
		diasIngresado: 3,
		dieta: 'Baja en fibra'
	},
	{
		paciente: {
			nombre: 'Marta',
			edad: 56,
			sexo: 'M'
		},
		diasIngresado: 5,
		dieta: 'Diabetes'
	},
	{
		paciente: {
			nombre: 'Julia',
			edad: 38,
			sexo: 'M'
		},
		diasIngresado: 1,
		dieta: 'Sin sal'
	},
	{
		paciente: {
			nombre: 'Esteban',
			edad: 40,
			sexo: 'H'
		},
		diasIngresado: 3,
		dieta: 'Diabetes'
	},
	{
		paciente: {
			nombre: 'Arturo',
			edad: 19,
			sexo: 'H'
		},
		diasIngresado: 2,
		dieta: 'Baja en fibra'
	},
	{
		paciente: {
			nombre: 'Isabel',
			edad: 63,
			sexo: 'M'
		},
		diasIngresado: 6,
		dieta: 'Sin sal'
	}
];

datosHospital(pacientes);

function datosHospital(lista) {
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	const edad = lista.filter(lista => lista.paciente.edad >= 18);
	const dieta = lista.filter(lista => lista.paciente.sexo === "H" && lista.dieta === "Diabetes");
	const totalDiasIngreso = lista.diasIngresado.reduce(reducer);
	const mediaEdadMujeres = 1;


	console.log(totalDiasIngreso);

	const resultados = {
		nPacientes: lista.length,
		nMayoresEdad: edad.length,
		nHombresDiabeticos: dieta.length,
		totalDiasIngreso: "",
		mediaEdadMujeres: ""
	}


}


/* nPacientes: (número de pacientes),
nMayoresEdad: (número de pacientes mayores de edad),
nHombresDiabeticos: (número de pacientes hombres con dieta para diabetes),
totalDiasIngreso: (suma de los días de ingreso de todos los pacientes),
mediaEdadMujeres: (edad media de las pacientes mujeres) */
