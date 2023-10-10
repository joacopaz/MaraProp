const propiedad = sessionStorage.getItem("propiedad");
// In case there is no session storage bump to home page
if (!propiedad) {
	location.href = "./index.html";
}
const slide = document.querySelector("[data-active]");
const slides = document.querySelector(".slides");

// Code to hide the carrousel nav buttons to avoid image breaking in case of no other images present
const moreThanOneSlide = slides.children.length > 1;
if (!moreThanOneSlide) {
	const carrouselButtons = document.querySelectorAll("[data-carrousel-button]");
	carrouselButtons.forEach((button) => {
		button.style.display = "none";
	});
}

// Image to be appended into the first slide
const img = document.createElement("img");
let src;
let texto = {};

// Switch to generate object according to the sessionStorage selection
switch (propiedad) {
	case "Propiedad 1":
		src = "./img/assets/fotosparacarrousel1/Cabildo-4ºA.webp";
		texto.pdf = "./img/assets/fichas/Cabildo 4ºA.pdf";
		texto.ubicacion = "AV. CABILDO 2677, BELGRANO 4°A";
		texto.tipo = "OFICINA ADMINISTRATIVA Y COMERCIAL";
		texto.alquilerMensual = "U$S 4.320,- + IVA";
		texto.expensas = "$58.000,-";
		texto.antiguedad = "15 AÑOS";
		texto.pisos = 12;
		texto.superficie = "240 M²";
		texto.medidas = ["FRENTE: 12,00 M. L", "FONDO: 21,50 M. L"];
		texto.banios = "1 NÚCLEO SANITARIO";
		texto.cocheras = 1;
		texto.descripcion = [
			`La oficina consta de una planta con divisiones al frente y al contrafrente junto con un sector central libre. Tanto el frente como el contrafrente del semi piso son vidriados.`,
			`Posee piso técnico y el cielorraso es flotante con placas removibles, con artefactos de iluminación colocados. Hay instalados en la oficina dos (2) equipos de Aire Acondicionado centrales frío-calor marca Westric Modelos EF-005 (5TR) con su correspondiente tendido de cañerías de alimentación. Los sectores sanitarios tienen las instalaciones eléctricas y sanitarias totalmente instaladas. En cuanto a la instalación eléctrica, el piso se entrega con el cableado que llega a la oficina a un tablero general, del cual salen circuitos para la iluminación, tomas-corrientes y Aire acondicionado.`,
			`El núcleo sanitario está constituido por dos baños con antecámara y un office. El revestimiento de dicho núcleo sanitario está realizado tanto piso como paredes en mármol, y los artefactos existentes constan de una mesada de mármol con doble bacha en un sector compartido, y doble juego de inodoro y bidet, cada uno con su mesada con bacha individual privada, además de la mesada de bachas compartidas. El edificio está emplazado en un excelente punto de la ciudad, con muy buena conectividad, en zona muy comercial, y de fácil acceso. Frente al mismo hay diversas paradas de Metrobus, y está a 100 metros del ingreso a la terminal del subte de la Línea "D", estación "Congreso de Tucumán".`,
			`La oficina forma parte de un excelente edificio de Oficinas Comerciales construido con cuidadas terminaciones. Cuenta con vigilancia presencial de lunes a viernes 8:00 a 20:00 y sábados de 8:00 a 14:00 horas. Paralelamente, tiene instalado el sistema de vigilancia "Ojo de Halcón" las 24 horas del día; posee un circuito cerrado de cámaras de seguridad ubicadas en los palieres de cada piso y controladas por el personal de Seguridad de Planta baja, quien asimismo visualiza en tiempo real el estado del tablero de los detectores de humo instalados en cada oficina.`,
			`El edificio cuenta con dos ascensores pertenecientes al grupo ThyssenKrupp. El edificio cuenta con una Playa de Estacionamiento en su planta baja, por lo que la rapidez del acceso y su comodidad son un importante valor agregado para el inmueble. Dicha playa provee las cocheras que se incluyen en las locaciones de las oficinas, como asimismo la opción de solicitar estacionamiento por hora para cocheras adicionales y/o para visitantes de las empresas.`,
			`Se desarrolló en un sector del piso 4° del edificio un área de Amenities destinada a los usuarios del edificio. Este espacio permite que personas que desarrollan su actividad en el edificio tengan la posibilidad de acceder y disfrutar de un Sector de uso común destinado al descanso, networking y socialización, trabajos personales, reuniones, etc., con servicio de Bar, Sala de Reuniones y Sala de Directorio.`,
		];
		break;
	case "Propiedad 2":
		src = "./img/assets/fotosparacarrousel1/Cabildo-4ºC.webp";
		texto.pdf = "./img/assets/fichas/Cabildo 4ºC.pdf";
		texto.ubicacion = "AV. CABILDO 2677, BELGRANO 4°C";
		texto.tipo = "OFICINA ADMINISTRATIVA Y COMERCIAL";
		texto.alquilerMensual = "U$S 1.260,- + IVA";
		texto.expensas = "$18.000,-";
		texto.antiguedad = "15 AÑOS";
		texto.pisos = 12;
		texto.superficie = "70 M²";
		texto.medidas = ["ANCHO: 10,00 M. L", "FONDO: 7,00 M. L"];
		texto.banios = "1 NÚCLEO SANITARIO COMPARTIDO";
		texto.cocheras = "DISPONIBLES PARA ALQUILER";
		texto.descripcion = [
			`La oficina consta de una planta con tres divisiones al contrafrente de perímetro trasero vidriado, junto con un sector central libre.`,
			`Posee piso técnico y el cielorraso es flotante con placas removibles, con artefactos de iluminación colocados. Hay instalado en la oficina un equipo de Aire Acondicionado central frío-calor marca Westric Modelo EF-005 (5TR) con su correspondiente tendido de cañerías de alimentación. Los sectores sanitarios tienen las instalaciones eléctricas y sanitarias totalmente instaladas. En cuanto a la instalación eléctrica, el piso se entrega con el cableado que llega a la oficina a un tablero general, del cual salen circuitos para la iluminación, tomas-corrientes y Aire acondicionado.`,
			`El núcleo sanitario está constituido por dos baños con antecámara y un office. El revestimiento de dicho núcleo sanitario está realizado tanto piso como paredes en mármol, y los artefactos existentes constan de una mesada de mármol con doble bacha en un sector compartido, y doble juego de inodoro y bidet, cada uno con su mesada con bacha individual, además de la mesada de bachas compartidas.`,
			`El edificio está emplazado en un excelente punto de la ciudad, con muy buena conectividad, en zona muy comercial, y de fácil acceso. Frente al mismo hay diversas paradas de Metrobus, y está a 100 metros del ingreso a la terminal del subte de la Línea "D", estación "Congreso de Tucumán".`,
			`La oficina forma parte de un excelente edificio de Oficinas Comerciales construido con cuidadas terminaciones. Cuenta con vigilancia presencial de lunes a viernes 8:00 a 20:00 y sábados de 8:00 a 14:00 horas. Paralelamente, tiene instalado el sistema de vigilancia "Ojo de Halcón" las 24 horas del día; posee un circuito cerrado de cámaras de seguridad ubicadas en los palieres de cada piso y controladas por el personal de Seguridad de Planta baja, quien asimismo visualiza en tiempo real el estado del tablero de los detectores de humo instalados en cada oficina. El edificio cuenta con dos ascensores pertenecientes al grupo ThyssenKrupp.`,
			`El edificio cuenta con una Playa de Estacionamiento en su planta baja, por lo que la rapidez del acceso y su comodidad son un importante valor agregado para el inmueble. Dicha playa provee las cocheras que se incluyen en las locaciones de las oficinas, como asimismo la opción de solicitar estacionamiento por hora para cocheras adicionales y/o para visitantes de las empresas.`,
			`Se desarrolló en un sector del piso 4° del edificio un área de Amenities destinada a los usuarios del edificio. Este espacio permite que personas que desarrollan su actividad en el edificio tengan la posibilidad de acceder y disfrutar de un Sector de uso común destinado al descanso, networking y socialización, trabajos personales, reuniones, etc., con servicio de Bar, Sala de Reuniones y Sala de Directorio.`,
		];
		break;
	case "Propiedad 3":
		src = "./img/assets/fotosparacarrousel1/Cabildo-5º.webp";
		texto.pdf = "./img/assets/fichas/Cabildo 5º.pdf";
		texto.ubicacion = "AV. CABILDO 2677, BELGRANO 5°";
		texto.tipo = "OFICINA ADMINISTRATIVA Y COMERCIAL";
		texto.alquilerMensual = "U$S 9.360,- + IVA";
		texto.expensas = "$125.000,-";
		texto.antiguedad = "15 AÑOS";
		texto.pisos = 12;
		texto.superficie = "520 M²";
		texto.medidas = ["FRENTE: 24,20 M. L", "FONDO: 21,50 M. L"];
		texto.banios = "2 NÚCLEOS SANITARIOS";
		texto.cocheras = 1;
		texto.descripcion = [
			`La oficina consta de una planta libre en casi toda su superficie, salvo en un sector del contrafrente del ala norte. Tanto el frente como el contrafrente son vidriados.`,
			`Posee piso técnico y el cielorraso es flotante con placas removibles, con artefactos de iluminación colocados. Hay instalados en la oficina cuatro equipos de Aire Acondicionado central frío-calor marca Westric Modelo EF-005 (5TR) con su correspondiente tendido de cañerías de alimentación. Los sectores sanitarios tienen las instalaciones eléctricas y sanitarias totalmente instaladas. En cuanto a la instalación eléctrica, el piso se entrega con el cableado que llega a la oficina a un tablero general, del cual salen circuitos para la iluminación, tomas-corrientes y Aire acondicionado.`,
			`Los núcleos sanitarios están constituidos cada uno por dos baños con antecámara y un office. El revestimiento de dicho núcleo sanitario está realizado tanto piso como paredes en mármol, y los artefactos existentes en cada núcleo constan de una mesada de mármol con doble bacha en un sector compartido, y doble juego de inodoro y bidet, cada uno con su mesada con bacha individual, además de la mesada de bachas compartidas.`,
			`El edificio está emplazado en un excelente punto de la ciudad, con muy buena conectividad, en zona muy comercial, y de fácil acceso. Frente al mismo hay diversas paradas de Metrobus, y está a 100 metros del ingreso a la terminal del subte de la Línea "D", estación "Congreso de Tucumán".`,
			`La oficina forma parte de un excelente edificio de Oficinas Comerciales construido con cuidadas terminaciones. Cuenta con vigilancia presencial de lunes a viernes 8:00 a 20:00 y sábados de 8:00 a 14:00 horas. Paralelamente, tiene instalado el sistema de vigilancia "Ojo de Halcón" las 24 horas del día; posee un circuito cerrado de cámaras de seguridad ubicadas en los palieres de cada piso y controladas por el personal de Seguridad de Planta baja, quien asimismo visualiza en tiempo real el estado del tablero de los detectores de humo instalados en cada oficina. El edificio cuenta con dos ascensores pertenecientes al grupo ThyssenKrupp.`,
			`El edificio cuenta con una Playa de Estacionamiento en su planta baja, por lo que la rapidez del acceso y su comodidad son un importante valor agregado para el inmueble. Dicha playa provee las cocheras que se incluyen en las locaciones de las oficinas, como asimismo la opción de solicitar estacionamiento por hora para cocheras adicionales y/o para visitantes de las empresas. Se desarrolló en un sector del piso 4° del edificio un área de Amenities destinada a los usuarios del edificio. Este espacio permite que personas que desarrollan su actividad en el edificio tengan la posibilidad de acceder y disfrutar de un Sector de uso común destinado al descanso, networking y socialización, trabajos personales, reuniones, etc., con servicio de Bar, Sala de Reuniones y Sala de Directorio.`,
		];
		break;
	case "Propiedad 4":
		src = "./img/assets/fotosparacarrousel1/Cabildo-6º.webp";
		texto.pdf = "./img/assets/fichas/Cabildo 6º.pdf";
		texto.ubicacion = "AV. CABILDO 2677, BELGRANO 6°";
		texto.tipo = "OFICINA ADMINISTRATIVA Y COMERCIAL";
		texto.alquilerMensual = "U$S 9.620,- + IVA";
		texto.expensas = "$125.000,-";
		texto.antiguedad = "15 AÑOS";
		texto.pisos = 12;
		texto.superficie = "520 M²";
		texto.medidas = ["FRENTE: 24,20 M. L", "FONDO: 21,50 M. L"];
		texto.banios = "2 NÚCLEOS SANITARIOS";
		texto.cocheras = 1;
		texto.descripcion = [
			`La oficina consta de despachos ubicados perimetralmente en frente y laterales de piso, quedando dos sectores centrales libres. Tanto el frente como el contrafrente son vidriados.`,
			`Posee piso técnico y el cielorraso es flotante con placas removibles, con artefactos de iluminación colocados. Hay instalados en la oficina cuatro equipos de Aire Acondicionado central frío-calor marca Westric Modelo EF-005 (5TR) con su correspondiente tendido de cañerías de alimentación. Los sectores sanitarios tienen las instalaciones eléctricas y sanitarias totalmente instaladas. En cuanto a la instalación eléctrica, el piso se entrega con el cableado que llega a la oficina a un tablero general, del cual salen circuitos para la iluminación, tomas-corrientes y Aire acondicionado.`,
			`Los núcleos sanitarios están constituidos cada uno por dos baños con antecámara y un office. El revestimiento de dicho núcleo sanitario está realizado tanto piso como paredes en mármol, y los artefactos existentes en cada núcleo constan de una mesada de mármol con doble bacha en un sector compartido, y doble juego de inodoro y bidet, cada uno con su mesada con bacha individual, además de la mesada de bachas compartidas.`,
			`El edificio está emplazado en un excelente punto de la ciudad, con muy buena conectividad, en zona muy comercial, y de fácil acceso. Frente al mismo hay diversas paradas de Metrobus, y está a 100 metros del ingreso a la terminal del subte de la Línea "D", estación "Congreso de Tucumán".`,
			`La oficina forma parte de un excelente edificio de Oficinas Comerciales construido con cuidadas terminaciones. Cuenta con vigilancia presencial de lunes a viernes 8:00 a 20:00 y sábados de 8:00 a 14:00 horas. Paralelamente, tiene instalado el sistema de vigilancia "Ojo de Halcón" las 24 horas del día; posee un circuito cerrado de cámaras de seguridad ubicadas en los palieres de cada piso y controladas por el personal de Seguridad de Planta baja, quien asimismo visualiza en tiempo real el estado del tablero de los detectores de humo instalados en cada oficina. El edificio cuenta con dos ascensores pertenecientes al grupo ThyssenKrupp.`,
			`El edificio cuenta con una Playa de Estacionamiento en su planta baja, por lo que la rapidez del acceso y su comodidad son un importante valor agregado para el inmueble. Dicha playa provee las cocheras que se incluyen en las locaciones de las oficinas, como asimismo la opción de solicitar estacionamiento por hora para cocheras adicionales y/o para visitantes de las empresas. Se desarrolló en un sector del piso 4° del edificio un área de Amenities destinada a los usuarios del edificio. Este espacio permite que personas que desarrollan su actividad en el edificio tengan la posibilidad de acceder y disfrutar de un Sector de uso común destinado al descanso, networking y socialización, trabajos personales, reuniones, etc., con servicio de Bar, Sala de Reuniones y Sala de Directorio.`,
		];
		break;
	case "Propiedad 5":
		src = "./img/assets/fotosparacarrousel1/Cabildo-9ºA.webp";
		texto.pdf = "./img/assets/fichas/Cabildo 9ºA.pdf";
		texto.ubicacion = "AV. CABILDO 2677, BELGRANO 9°A";
		texto.tipo = "OFICINA ADMINISTRATIVA Y COMERCIAL";
		texto.alquilerMensual = "U$S 4.320,- + IVA";
		texto.expensas = "$58.000,-";
		texto.antiguedad = "15 AÑOS";
		texto.pisos = 12;
		texto.superficie = "240 M²";
		texto.medidas = ["FRENTE: 24,20 M. L", "FONDO: 21,50 M. L"];
		texto.banios = "2 NÚCLEOS SANITARIOS";
		texto.cocheras = 1;
		texto.descripcion = [
			`La oficina consta de despachos ubicados perimetralmente en frente y laterales de piso, quedando dos sectores centrales libres. Tanto el frente como el contrafrente son vidriados.`,
			`Posee piso técnico y el cielorraso es flotante con placas removibles, con artefactos de iluminación colocados. Hay instalados en la oficina cuatro equipos de Aire Acondicionado central frío-calor marca Westric Modelo EF-005 (5TR) con su correspondiente tendido de cañerías de alimentación. Los sectores sanitarios tienen las instalaciones eléctricas y sanitarias totalmente instaladas. En cuanto a la instalación eléctrica, el piso se entrega con el cableado que llega a la oficina a un tablero general, del cual salen circuitos para la iluminación, tomas-corrientes y Aire acondicionado.`,
			`Los núcleos sanitarios están constituidos cada uno por dos baños con antecámara y un office. El revestimiento de dicho núcleo sanitario está realizado tanto piso como paredes en mármol, y los artefactos existentes en cada núcleo constan de una mesada de mármol con doble bacha en un sector compartido, y doble juego de inodoro y bidet, cada uno con su mesada con bacha individual, además de la mesada de bachas compartidas.`,
			`El edificio está emplazado en un excelente punto de la ciudad, con muy buena conectividad, en zona muy comercial, y de fácil acceso. Frente al mismo hay diversas paradas de Metrobus, y está a 100 metros del ingreso a la terminal del subte de la Línea "D", estación "Congreso de Tucumán".`,
			`La oficina forma parte de un excelente edificio de Oficinas Comerciales construido con cuidadas terminaciones. Cuenta con vigilancia presencial de lunes a viernes 8:00 a 20:00 y sábados de 8:00 a 14:00 horas. Paralelamente, tiene instalado el sistema de vigilancia "Ojo de Halcón" las 24 horas del día; posee un circuito cerrado de cámaras de seguridad ubicadas en los palieres de cada piso y controladas por el personal de Seguridad de Planta baja, quien asimismo visualiza en tiempo real el estado del tablero de los detectores de humo instalados en cada oficina. El edificio cuenta con dos ascensores pertenecientes al grupo ThyssenKrupp.`,
			`El edificio cuenta con una Playa de Estacionamiento en su planta baja, por lo que la rapidez del acceso y su comodidad son un importante valor agregado para el inmueble. Dicha playa provee las cocheras que se incluyen en las locaciones de las oficinas, como asimismo la opción de solicitar estacionamiento por hora para cocheras adicionales y/o para visitantes de las empresas. Se desarrolló en un sector del piso 4° del edificio un área de Amenities destinada a los usuarios del edificio. Este espacio permite que personas que desarrollan su actividad en el edificio tengan la posibilidad de acceder y disfrutar de un Sector de uso común destinado al descanso, networking y socialización, trabajos personales, reuniones, etc., con servicio de Bar, Sala de Reuniones y Sala de Directorio.`,
		];
		break;
	case "Propiedad 6":
		src = "./img/assets//fotosparacarrousel1/Cabildo-9ºB.webp";
		texto.pdf = "./img/assets/fichas/Cabildo 9ºB.pdf";
		texto.ubicacion = "AV. CABILDO 2677, BELGRANO 9°B";
		texto.tipo = "OFICINA ADMINISTRATIVA Y COMERCIAL";
		texto.alquilerMensual = "U$S 4.680,- + IVA";
		texto.expensas = "$66.000,-";
		texto.antiguedad = "15 AÑOS";
		texto.pisos = 12;
		texto.superficie = "260 M²";
		texto.medidas = ["FRENTE: 12,00 M. L", "FONDO: 22,00 M. L"];
		texto.banios = "1 NÚCLEO SANITARIO";
		texto.cocheras = 1;
		texto.descripcion = [
			`La oficina consta de seis despachos ubicados perimetralmente en el frente y lateral del semi piso, quedando un sector libre al contrafrente. Tanto el frente como el contrafrente del semipiso son vidriados.`,
			`Posee piso técnico y el cielorraso es flotante con placas removibles, con artefactos de iluminación colocados. Hay instalados en la oficina dos (2) equipos de Aire Acondicionado centrales frío-calor marca Westric Modelo EF-005 (5TR) con su correspondiente tendido de cañerías de alimentación. Los sectores sanitarios tienen las instalaciones eléctricas y sanitarias totalmente instaladas. En cuanto a la instalación eléctrica, el piso se entrega con el cableado que llega a la oficina a un tablero general, del cual salen circuitos para la iluminación, tomas-corrientes y Aire acondicionado.`,
			`El núcleo sanitario está constituido por dos baños con antecámara y un office. El revestimiento de dicho núcleo sanitario está realizado tanto piso como paredes en mármol, y los artefactos existentes constan de una mesada de mármol con doble bacha en un sector compartido, y doble juego de inodoro y bidet, cada uno con su mesada con bacha individual privada, además de la mesada de bachas compartidas.`,
			`El edificio está emplazado en un excelente punto de la ciudad, con muy buena conectividad, en zona muy comercial, y de fácil acceso. Frente al mismo hay diversas paradas de Metrobus, y está a 100 metros del ingreso a la terminal del subte de la Línea "D", estación "Congreso de Tucumán".`,
			`La oficina forma parte de un excelente edificio de Oficinas Comerciales construido con cuidadas terminaciones. Cuenta con vigilancia presencial de lunes a viernes 8:00 a 20:00 y sábados de 8:00 a 14:00 horas. Paralelamente, tiene instalado el sistema de vigilancia "Ojo de Halcón" las 24 horas del día; posee un circuito cerrado de cámaras de seguridad ubicadas en los palieres de cada piso y controladas por el personal de Seguridad de Planta baja, quien asimismo visualiza en tiempo real el estado del tablero de los detectores de humo instalados en cada oficina. El edificio cuenta con dos ascensores pertenecientes al grupo ThyssenKrupp.`,
			`El edificio cuenta con una Playa de Estacionamiento en su planta baja, por lo que la rapidez del acceso y su comodidad son un importante valor agregado para el inmueble. Dicha playa provee las cocheras que se incluyen en las locaciones de las oficinas, como asimismo la opción de solicitar estacionamiento por hora para cocheras adicionales y/o para visitantes de las empresas. Se desarrolló en un sector del piso 4° del edificio un área de Amenities destinada a los usuarios del edificio. Este espacio permite que personas que desarrollan su actividad en el edificio tengan la posibilidad de acceder y disfrutar de un Sector de uso común destinado al descanso, networking y socialización, trabajos personales, reuniones, etc., con servicio de Bar, Sala de Reuniones y Sala de Directorio.`,
		];
		break;
	case "Propiedad 7":
		src = "img/assets/fotosparacarrousel2/Haiti-PB.webp";
		texto.pdf = null;
		texto.ubicacion = `N/A`;
		texto.tipo = `N/A`;
		texto.alquilerMensual = `N/A`;
		texto.expensas = `N/A`;
		texto.antiguedad = `N/A`;
		texto.pisos = `N/A`;
		texto.superficie = `N/A`;
		texto.medidas = [`N/A`];
		texto.banios = `N/A`;
		texto.cocheras = `N/A`;
		texto.descripcion = [`N/A`];
		break;
	case "Propiedad 8":
		src = "./img/assets/fotosparacarrousel2/Haiti-1º.webp";
		texto.pdf = null;
		texto.ubicacion = `N/A`;
		texto.tipo = `N/A`;
		texto.alquilerMensual = `N/A`;
		texto.expensas = `N/A`;
		texto.antiguedad = `N/A`;
		texto.pisos = `N/A`;
		texto.superficie = `N/A`;
		texto.medidas = [`N/A`];
		texto.banios = `N/A`;
		texto.cocheras = `N/A`;
		texto.descripcion = [`N/A`];
		break;
		break;
	case "Propiedad 9":
		src = "./img/assets/fotosparacarrousel2/Haiti-2º-y-3º.webp";
		texto.pdf = null;
		texto.ubicacion = `N/A`;
		texto.tipo = `N/A`;
		texto.alquilerMensual = `N/A`;
		texto.expensas = `N/A`;
		texto.antiguedad = `N/A`;
		texto.pisos = `N/A`;
		texto.superficie = `N/A`;
		texto.medidas = [`N/A`];
		texto.banios = `N/A`;
		texto.cocheras = `N/A`;
		texto.descripcion = [`N/A`];
		break;
		break;
	case "Propiedad 10":
		src = "img/assets/fotosparacarrousel3/Humboldt-3º.webp";
		texto.pdf = null;
		texto.ubicacion = `N/A`;
		texto.tipo = `N/A`;
		texto.alquilerMensual = `N/A`;
		texto.expensas = `N/A`;
		texto.antiguedad = `N/A`;
		texto.pisos = `N/A`;
		texto.superficie = `N/A`;
		texto.medidas = [`N/A`];
		texto.banios = `N/A`;
		texto.cocheras = `N/A`;
		texto.descripcion = [`N/A`];
		break;
		break;
	case "Propiedad 11":
		src = "img/assets/fotosparacarrousel3/Humboldt-4º.webp";
		texto.pdf = null;
		texto.ubicacion = `N/A`;
		texto.tipo = `N/A`;
		texto.alquilerMensual = `N/A`;
		texto.expensas = `N/A`;
		texto.antiguedad = `N/A`;
		texto.pisos = `N/A`;
		texto.superficie = `N/A`;
		texto.medidas = [`N/A`];
		texto.banios = `N/A`;
		texto.cocheras = `N/A`;
		texto.descripcion = [`N/A`];
		break;
		break;
	case "Propiedad 12":
		src = "img/assets/fotosparacarrousel3/Humboldt-5º.webp";
		texto.pdf = null;
		texto.ubicacion = `N/A`;
		texto.tipo = `N/A`;
		texto.alquilerMensual = `N/A`;
		texto.expensas = `N/A`;
		texto.antiguedad = `N/A`;
		texto.pisos = `N/A`;
		texto.superficie = `N/A`;
		texto.medidas = [`N/A`];
		texto.banios = `N/A`;
		texto.cocheras = `N/A`;
		texto.descripcion = [`N/A`];
		break;
		break;
	case "Propiedad 13":
		src = "img/assets/fotosparacarrousel3/Humboldt-6º.webp";
		texto.pdf = null;
		texto.ubicacion = `N/A`;
		texto.tipo = `N/A`;
		texto.alquilerMensual = `N/A`;
		texto.expensas = `N/A`;
		texto.antiguedad = `N/A`;
		texto.pisos = `N/A`;
		texto.superficie = `N/A`;
		texto.medidas = [`N/A`];
		texto.banios = `N/A`;
		texto.cocheras = `N/A`;
		texto.descripcion = [`N/A`];
		break;
		break;
	case "Propiedad 14":
		src = "img/assets/fotosparacarrousel3/Humboldt-7º.webp";
		texto.pdf = null;
		texto.ubicacion = `N/A`;
		texto.tipo = `N/A`;
		texto.alquilerMensual = `N/A`;
		texto.expensas = `N/A`;
		texto.antiguedad = `N/A`;
		texto.pisos = `N/A`;
		texto.superficie = `N/A`;
		texto.medidas = [`N/A`];
		texto.banios = `N/A`;
		texto.cocheras = `N/A`;
		texto.descripcion = [`N/A`];
		break;
		break;
	case "Propiedad 15":
		src = "img/assets/fotosparacarrousel4/Olleros-1º.webp";
		texto.pdf = "./img/assets/fichas/Olleros Oficinas.pdf";
		texto.ubicacion = "OLLEROS 2387, BELGRANO 1°";
		texto.tipo = "OFICINA ADMINISTRATIVA Y COMERCIAL";
		texto.alquilerMensual = "U$S 5.000,- + IVA";
		texto.expensas = "EXPENSAS A CALCULAR";
		texto.antiguedad = "A ESTRENAR";
		texto.pisos = 4;
		texto.superficie = "294 M²";
		texto.medidas = [
			"FRENTE SOBRE AV. CABILDO: 13,00 M. L",
			"FRENTE SOBRE OLLEROS: 15,00 M. L",
		];
		texto.banios = "3";
		texto.cocheras = 0;
		texto.descripcion = [
			`Se trata de un excelente edificio de oficinas a estrenar.`,
			`El inmueble está ubicado estratégicamente sobre una de las principales arterias de la Ciudad de
			Buenos Aires, la Av. Cabildo al 700, haciendo esquina con la calle Olleros, a metros de la Línea D. Asimismo, dada la categoría de su ubicación, posee proximidad a múltiples paradas de Metrobus.
			Los espacios constan de plantas libres, sin paredes, columnas ni quiebres que dividan su superficie. Las oficinas son muy luminosas dado que su frente copia la línea municipal, desarrollado en esquina sin construcciones que obstruyan sus vistas ni la luz natural.`,
			`La carpintería tiene incluidas en su interior cortinas tipo veneciana que permiten abrir o cerrar de manera individual cada paño.`,
			`Cada piso tiene instalado el cielorraso, cuenta con artefactos de iluminación ya colocados y un
			equipo de aire acondicionado central.`,
			`Suelo de cemento apto para recibir la terminación adecuada acorde al rubro a desarrollar.`,
			`Todos los pisos tienen acceso a una importante y soleada terraza en la que se desarrollará a futuro algún servicio gastronómico.`,
			`Tiene fácil y rápido acceso a redes viales tales como la Av. Federico Lacroze, que conecta rápidamente tanto con la Avenida del Libertador y con Avenida Corrientes.`,
		];

		break;
	case "Propiedad 16":
		src = "img/assets/fotosparacarrousel4/Olleros-2º.webp";
		texto.pdf = "./img/assets/fichas/Olleros Oficinas.pdf";
		texto.ubicacion = "OLLEROS 2387, BELGRANO 2°";
		texto.tipo = "OFICINA ADMINISTRATIVA Y COMERCIAL";
		texto.alquilerMensual = "U$S 5.000,- + IVA";
		texto.expensas = "EXPENSAS A CALCULAR";
		texto.antiguedad = "A ESTRENAR";
		texto.pisos = 4;
		texto.superficie = "294 M²";
		texto.medidas = [
			"FRENTE SOBRE AV. CABILDO: 13,00 M. L",
			"FRENTE SOBRE OLLEROS: 15,00 M. L",
		];
		texto.banios = "3";
		texto.cocheras = 0;
		texto.descripcion = [
			`Se trata de un excelente edificio de oficinas a estrenar.`,
			`El inmueble está ubicado estratégicamente sobre una de las principales arterias de la Ciudad de
			Buenos Aires, la Av. Cabildo al 700, haciendo esquina con la calle Olleros, a metros de la Línea D. Asimismo, dada la categoría de su ubicación, posee proximidad a múltiples paradas de Metrobus.
			Los espacios constan de plantas libres, sin paredes, columnas ni quiebres que dividan su superficie. Las oficinas son muy luminosas dado que su frente copia la línea municipal, desarrollado en esquina sin construcciones que obstruyan sus vistas ni la luz natural.`,
			`La carpintería tiene incluidas en su interior cortinas tipo veneciana que permiten abrir o cerrar de manera individual cada paño.`,
			`Cada piso tiene instalado el cielorraso, cuenta con artefactos de iluminación ya colocados y un
			equipo de aire acondicionado central.`,
			`Suelo de cemento apto para recibir la terminación adecuada acorde al rubro a desarrollar.`,
			`Todos los pisos tienen acceso a una importante y soleada terraza en la que se desarrollará a futuro algún servicio gastronómico.`,
			`Tiene fácil y rápido acceso a redes viales tales como la Av. Federico Lacroze, que conecta rápidamente tanto con la Avenida del Libertador y con Avenida Corrientes.`,
		];
		break;
	case "Propiedad 17":
		src = "img/assets/fotosparacarrousel4/Olleros-3º.webp";
		texto.pdf = "./img/assets/fichas/Olleros Oficinas.pdf";
		texto.ubicacion = "OLLEROS 2387, BELGRANO 3°";
		texto.tipo = "OFICINA ADMINISTRATIVA Y COMERCIAL";
		texto.alquilerMensual = "U$S 5.000,- + IVA";
		texto.expensas = "EXPENSAS A CALCULAR";
		texto.antiguedad = "A ESTRENAR";
		texto.pisos = 4;
		texto.superficie = "294 M²";
		texto.medidas = [
			"FRENTE SOBRE AV. CABILDO: 13,00 M. L",
			"FRENTE SOBRE OLLEROS: 15,00 M. L",
		];
		texto.banios = "3";
		texto.cocheras = 0;
		texto.descripcion = [
			`Se trata de un excelente edificio de oficinas a estrenar.`,
			`El inmueble está ubicado estratégicamente sobre una de las principales arterias de la Ciudad de
			Buenos Aires, la Av. Cabildo al 700, haciendo esquina con la calle Olleros, a metros de la Línea D. Asimismo, dada la categoría de su ubicación, posee proximidad a múltiples paradas de Metrobus.
			Los espacios constan de plantas libres, sin paredes, columnas ni quiebres que dividan su superficie. Las oficinas son muy luminosas dado que su frente copia la línea municipal, desarrollado en esquina sin construcciones que obstruyan sus vistas ni la luz natural.`,
			`La carpintería tiene incluidas en su interior cortinas tipo veneciana que permiten abrir o cerrar de manera individual cada paño.`,
			`Cada piso tiene instalado el cielorraso, cuenta con artefactos de iluminación ya colocados y un
			equipo de aire acondicionado central.`,
			`Suelo de cemento apto para recibir la terminación adecuada acorde al rubro a desarrollar.`,
			`Todos los pisos tienen acceso a una importante y soleada terraza en la que se desarrollará a futuro algún servicio gastronómico.`,
			`Tiene fácil y rápido acceso a redes viales tales como la Av. Federico Lacroze, que conecta rápidamente tanto con la Avenida del Libertador y con Avenida Corrientes.`,
		];
		break;
	case "Propiedad 18":
		src = "img/assets/fotosparacarrousel4/Olleros-4º.webp";
		texto.pdf = "./img/assets/fichas/Olleros Oficinas.pdf";
		texto.ubicacion = "OLLEROS 2387, BELGRANO 4°";
		texto.tipo = "OFICINA ADMINISTRATIVA Y COMERCIAL";
		texto.alquilerMensual = "U$S 5.000,- + IVA";
		texto.expensas = "EXPENSAS A CALCULAR";
		texto.antiguedad = "A ESTRENAR";
		texto.pisos = 4;
		texto.superficie = "294 M²";
		texto.medidas = [
			"FRENTE SOBRE AV. CABILDO: 13,00 M. L",
			"FRENTE SOBRE OLLEROS: 15,00 M. L",
		];
		texto.banios = "3";
		texto.cocheras = 0;
		texto.descripcion = [
			`Se trata de un excelente edificio de oficinas a estrenar.`,
			`El inmueble está ubicado estratégicamente sobre una de las principales arterias de la Ciudad de
			Buenos Aires, la Av. Cabildo al 700, haciendo esquina con la calle Olleros, a metros de la Línea D. Asimismo, dada la categoría de su ubicación, posee proximidad a múltiples paradas de Metrobus.
			Los espacios constan de plantas libres, sin paredes, columnas ni quiebres que dividan su superficie. Las oficinas son muy luminosas dado que su frente copia la línea municipal, desarrollado en esquina sin construcciones que obstruyan sus vistas ni la luz natural.`,
			`La carpintería tiene incluidas en su interior cortinas tipo veneciana que permiten abrir o cerrar de manera individual cada paño.`,
			`Cada piso tiene instalado el cielorraso, cuenta con artefactos de iluminación ya colocados y un
			equipo de aire acondicionado central.`,
			`Suelo de cemento apto para recibir la terminación adecuada acorde al rubro a desarrollar.`,
			`Todos los pisos tienen acceso a una importante y soleada terraza en la que se desarrollará a futuro algún servicio gastronómico.`,
			`Tiene fácil y rápido acceso a redes viales tales como la Av. Federico Lacroze, que conecta rápidamente tanto con la Avenida del Libertador y con Avenida Corrientes.`,
		];
		break;
	default:
		break;
}
img.src = src;
slide.appendChild(img);
document.querySelector("[data-ubicacion]").textContent = texto.ubicacion;
document.querySelector("[data-tipo]").textContent = texto.tipo;
document.querySelector("[data-alquilerMensual]").textContent +=
	texto.alquilerMensual;
document.querySelector("[data-expensas]").textContent += texto.expensas;
document.querySelector("[data-antiguedad]").textContent += texto.antiguedad;
document.querySelector("[data-pisos]").textContent += texto.pisos;
document.querySelector("[data-superficie]").textContent += texto.superficie;
document.querySelector("[data-medidas]").textContent +=
	texto.medidas.join(", ");
document.querySelector("[data-banios]").textContent += texto.banios;
if (texto.cocheras) {
	document.querySelector("[data-cocheras]").textContent += texto.cocheras;
} else {
	document.querySelector("[data-cocheras-header]").style.display = "none";
	document.querySelector("[data-cocheras]").style.display = "none";
}
document.querySelector("[data-descripcion]").textContent +=
	texto.descripcion.join("\r\n");
if (texto.pdf) {
	const pdf = document.createElement("div");
	pdf.classList.add("pdf");
	document.querySelector(".property").appendChild(pdf);
	const pdfImg = document.createElement("img");
	pdfImg.src = "./img/pdf.png";
	pdf.appendChild(pdfImg);
	const pdfP = document.createElement("p");
	pdfP.textContent = "Descargar Ficha";
	pdf.appendChild(pdfP);
	pdf.addEventListener("click", () => {
		const link = document.createElement("a");
		const filePath = texto.pdf;
		link.href = filePath;
		link.download = texto.pdf.match(/fichas\/(.*)/)[1];
		link.click();
	});
}
