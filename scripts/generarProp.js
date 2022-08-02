const propiedad = sessionStorage.getItem("propiedad");
const slide = document.querySelector("[data-active]");

const img = document.createElement("img");
let src;
let texto = {};

switch (propiedad) {
	case "Propiedad 1":
		src = "./img/assets/fotosparacarrousel1/Cabildo-4ºA.png";
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
			`Posee piso técnico y el cieloraso es flotante con placas removibles, con artefactos de iluminación colocados. Hay instalados en la oficina dos (2) equipos de Aire Acondicionado centrales frío-calor marca Westric Modelos EF-005 (5TR) con su correspondiente tendido de cañerías de alimentación. Los sectores sanitarios tienen las instalaciones eléctricas y sanitarias totalmente instaladas. En cuanto a la instalación eléctrica, el piso se entrega con el cableado que llega a la oficina a un tablero general, del cual salen circuitos para la iluminación, tomas-corrientes y Aire acondicionado.`,
			`El núcleo sanitario está constituído por dos baños con antecámara y un office. El revestimiento de dicho núcleo sanitario está realizado tanto piso como paredes en mármol, y los artefactos existentes constan de una mesada de mármol con doble bacha en un sector compartido, y doble juego de inodoro y bidet, cada uno con su mesada con bacha individual privada, además de la mesada de bachas compartidas. El edificio está emplazado en un excelente punto de la ciudad, con muy buena conectividad, en zona muy comercial, y de fácil acceso. Frente al mismo hay diversas paradas de Metrobus, y está a 100 metros del ingreso a la terminal del subte de la Línea "D", estación "Congreso de Tucumán".`,
			`La oficina forma parte de un excelente edificio de Oficinas Comerciales construído con cuidadas terminaciones. Cuenta con vigilancia presencial de lunes a viernes 8:00 a 20:00 y sábados de 8:00 a 14:00 horas. Paralelamente, tiene instalado el sistema de vigilancia "Ojo de Halcón" las 24 horas del día; posee un circuito cerrado de cámaras de seguridad ubicadas en los palieres de cada piso y controladas por el personal de Seguridad de Planta baja, quien asimismo visualiza en tiempo real el estado del tablero de los detectores de humo instalados en cada oficina.`,
			`El edificio cuenta con dos ascensores pertenecientes al grupo ThyssenKrupp. El edificio cuenta con una Playa de Estacionamiento en su planta baja, por lo que la rapidez del acceso y su comodidad son un importante valor agregado para el inmueble. Dicha playa provee las cocheras que se incluyen en las locaciones de las oficinas, como asimismo la opción de solicitar estacionamiento por hora para cocheras adicionales y/o para visitantes de las empresas.`,
			`Se desarrolló en un sector del piso 4° del edificio un área de Amenities destinada a los usuarios del edificio. Este espacio permite que personas que desarrollan su actividad en el edificio tengan la posibilidad de acceder y disfrutar de un Sector de uso común destinado al descanso, networking y sociabilización, trabajos personales, reuniones, etc., con servicio de Bar, Sala de Reuniones y Sala de Directorio.`,
		];
		break;
	case "Propiedad 2":
		src = "./img/assets/fotosparacarrousel1/Cabildo-4ºC.png";
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
			`Posee piso técnico y el cieloraso es flotante con placas removibles, con artefactos de iluminación colocados. Hay instalado en la oficina un equipo de Aire Acondicionado central frío-calor marca Westric Modelo EF-005 (5TR) con su correspondiente tendido de cañerías de alimentación. Los sectores sanitarios tienen las instalaciones eléctricas y sanitarias totalmente instaladas. En cuanto a la instalación eléctrica, el piso se entrega con el cableado que llega a la oficina a un tablero general, del cual salen circuitos para la iluminación, tomas-corrientes y Aire acondicionado.`,
			`El núcleo sanitario está constituído por dos baños con antecámara y un office. El revestimiento de dicho núcleo sanitario está realizado tanto piso como paredes en mármol, y los artefactos existentes constan de una mesada de mármol con doble bacha en un sector compartido, y doble juego de inodoro y bidet, cada uno con su mesada con bacha individual, además de la mesada de bachas compartidas.`,
			`El edificio está emplazado en un excelente punto de la ciudad, con muy buena conectividad, en zona muy comercial, y de fácil acceso. Frente al mismo hay diversas paradas de Metrobus, y está a 100 metros del ingreso a la terminal del subte de la Línea "D", estación "Congreso de Tucumán".`,
			`La oficina forma parte de un excelente edificio de Oficinas Comerciales construído con cuidadas terminaciones. Cuenta con vigilancia presencial de lunes a viernes 8:00 a 20:00 y sábados de 8:00 a 14:00 horas. Paralelamente, tiene instalado el sistema de vigilancia "Ojo de Halcón" las 24 horas del día; posee un circuito cerrado de cámaras de seguridad ubicadas en los palieres de cada piso y controladas por el personal de Seguridad de Planta baja, quien asimismo visualiza en tiempo real el estado del tablero de los detectores de humo instalados en cada oficina. El edificio cuenta con dos ascensores pertenecientes al grupo ThyssenKrupp.`,
			`El edificio cuenta con una Playa de Estacionamiento en su planta baja, por lo que la rapidez del acceso y su comodidad son un importante valor agregado para el inmueble. Dicha playa provee las cocheras que se incluyen en las locaciones de las oficinas, como asimismo la opción de solicitar estacionamiento por hora para cocheras adicionales y/o para visitantes de las empresas.`,
			`Se desarrolló en un sector del piso 4° del edificio un área de Amenities destinada a los usuarios del edificio. Este espacio permite que personas que desarrollan su actividad en el edificio tengan la posibilidad de acceder y disfrutar de un Sector de uso común destinado al descanso, networking y sociabilización, trabajos personales, reuniones, etc., con servicio de Bar, Sala de Reuniones y Sala de Directorio.`,
		];
		break;
	case "Propiedad 3":
		src = "./img/assets/fotosparacarrousel1/Cabildo-5º.png";
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
			`Posee piso técnico y el cieloraso es flotante con placas removibles, con artefactos de iluminación colocados. Hay instalados en la oficina cuatro equipos de Aire Acondicionado central frío-calor marca Westric Modelo EF-005 (5TR) con su correspondiente tendido de cañerías de alimentación. Los sectores sanitarios tienen las instalaciones eléctricas y sanitarias totalmente instaladas. En cuanto a la instalación eléctrica, el piso se entrega con el cableado que llega a la oficina a un tablero general, del cual salen circuitos para la iluminación, tomas-corrientes y Aire acondicionado.`,
			`Los núcleos sanitarios están constituídos cada uno por dos baños con antecámara y un office. El revestimiento de dicho núcleo sanitario está realizado tanto piso como paredes en mármol, y los artefactos existentes en cada núcleo constan de una mesada de mármol con doble bacha en un sector compartido, y doble juego de inodoro y bidet, cada uno con su mesada con bacha individual, además de la mesada de bachas compartidas.`,
			`El edificio está emplazado en un excelente punto de la ciudad, con muy buena conectividad, en zona muy comercial, y de fácil acceso. Frente al mismo hay diversas paradas de Metrobus, y está a 100 metros del ingreso a la terminal del subte de la Línea "D", estación "Congreso de Tucumán".`,
			`La oficina forma parte de un excelente edificio de Oficinas Comerciales construído con cuidadas terminaciones. Cuenta con vigilancia presencial de lunes a viernes 8:00 a 20:00 y sábados de 8:00 a 14:00 horas. Paralelamente, tiene instalado el sistema de vigilancia "Ojo de Halcón" las 24 horas del día; posee un circuito cerrado de cámaras de seguridad ubicadas en los palieres de cada piso y controladas por el personal de Seguridad de Planta baja, quien asimismo visualiza en tiempo real el estado del tablero de los detectores de humo instalados en cada oficina. El edificio cuenta con dos ascensores pertenecientes al grupo ThyssenKrupp.`,
			`El edificio cuenta con una Playa de Estacionamiento en su planta baja, por lo que la rapidez del acceso y su comodidad son un importante valor agregado para el inmueble. Dicha playa provee las cocheras que se incluyen en las locaciones de las oficinas, como asimismo la opción de solicitar estacionamiento por hora para cocheras adicionales y/o para visitantes de las empresas. Se desarrolló en un sector del piso 4° del edificio un área de Amenities destinada a los usuarios del edificio. Este espacio permite que personas que desarrollan su actividad en el edificio tengan la posibilidad de acceder y disfrutar de un Sector de uso común destinado al descanso, networking y sociabilización, trabajos personales, reuniones, etc., con servicio de Bar, Sala de Reuniones y Sala de Directorio.`,
		];
		break;
	case "Propiedad 4":
		src = "./img/assets/fotosparacarrousel1/Cabildo-6º.png";
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
			`Posee piso técnico y el cieloraso es flotante con placas removibles, con artefactos de iluminación colocados. Hay instalados en la oficina cuatro equipos de Aire Acondicionado central frío-calor marca Westric Modelo EF-005 (5TR) con su correspondiente tendido de cañerías de alimentación. Los sectores sanitarios tienen las instalaciones eléctricas y sanitarias totalmente instaladas. En cuanto a la instalación eléctrica, el piso se entrega con el cableado que llega a la oficina a un tablero general, del cual salen circuitos para la iluminación, tomas-corrientes y Aire acondicionado.`,
			`Los núcleos sanitarios están constituídos cada uno por dos baños con antecámara y un office. El revestimiento de dicho núcleo sanitario está realizado tanto piso como paredes en mármol, y los artefactos existentes en cada núcleo constan de una mesada de mármol con doble bacha en un sector compartido, y doble juego de inodoro y bidet, cada uno con su mesada con bacha individual, además de la mesada de bachas compartidas.`,
			`El edificio está emplazado en un excelente punto de la ciudad, con muy buena conectividad, en zona muy comercial, y de fácil acceso. Frente al mismo hay diversas paradas de Metrobus, y está a 100 metros del ingreso a la terminal del subte de la Línea "D", estación "Congreso de Tucumán".`,
			`La oficina forma parte de un excelente edificio de Oficinas Comerciales construído con cuidadas terminaciones. Cuenta con vigilancia presencial de lunes a viernes 8:00 a 20:00 y sábados de 8:00 a 14:00 horas. Paralelamente, tiene instalado el sistema de vigilancia "Ojo de Halcón" las 24 horas del día; posee un circuito cerrado de cámaras de seguridad ubicadas en los palieres de cada piso y controladas por el personal de Seguridad de Planta baja, quien asimismo visualiza en tiempo real el estado del tablero de los detectores de humo instalados en cada oficina. El edificio cuenta con dos ascensores pertenecientes al grupo ThyssenKrupp.`,
			`El edificio cuenta con una Playa de Estacionamiento en su planta baja, por lo que la rapidez del acceso y su comodidad son un importante valor agregado para el inmueble. Dicha playa provee las cocheras que se incluyen en las locaciones de las oficinas, como asimismo la opción de solicitar estacionamiento por hora para cocheras adicionales y/o para visitantes de las empresas. Se desarrolló en un sector del piso 4° del edificio un área de Amenities destinada a los usuarios del edificio. Este espacio permite que personas que desarrollan su actividad en el edificio tengan la posibilidad de acceder y disfrutar de un Sector de uso común destinado al descanso, networking y sociabilización, trabajos personales, reuniones, etc., con servicio de Bar, Sala de Reuniones y Sala de Directorio.`,
		];
		break;
	case "Propiedad 5":
		src = "./img/assets/fotosparacarrousel1/Cabildo-9ºA.png";
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
			`Posee piso técnico y el cieloraso es flotante con placas removibles, con artefactos de iluminación colocados. Hay instalados en la oficina cuatro equipos de Aire Acondicionado central frío-calor marca Westric Modelo EF-005 (5TR) con su correspondiente tendido de cañerías de alimentación. Los sectores sanitarios tienen las instalaciones eléctricas y sanitarias totalmente instaladas. En cuanto a la instalación eléctrica, el piso se entrega con el cableado que llega a la oficina a un tablero general, del cual salen circuitos para la iluminación, tomas-corrientes y Aire acondicionado.`,
			`Los núcleos sanitarios están constituídos cada uno por dos baños con antecámara y un office. El revestimiento de dicho núcleo sanitario está realizado tanto piso como paredes en mármol, y los artefactos existentes en cada núcleo constan de una mesada de mármol con doble bacha en un sector compartido, y doble juego de inodoro y bidet, cada uno con su mesada con bacha individual, además de la mesada de bachas compartidas.`,
			`El edificio está emplazado en un excelente punto de la ciudad, con muy buena conectividad, en zona muy comercial, y de fácil acceso. Frente al mismo hay diversas paradas de Metrobus, y está a 100 metros del ingreso a la terminal del subte de la Línea "D", estación "Congreso de Tucumán".`,
			`La oficina forma parte de un excelente edificio de Oficinas Comerciales construído con cuidadas terminaciones. Cuenta con vigilancia presencial de lunes a viernes 8:00 a 20:00 y sábados de 8:00 a 14:00 horas. Paralelamente, tiene instalado el sistema de vigilancia "Ojo de Halcón" las 24 horas del día; posee un circuito cerrado de cámaras de seguridad ubicadas en los palieres de cada piso y controladas por el personal de Seguridad de Planta baja, quien asimismo visualiza en tiempo real el estado del tablero de los detectores de humo instalados en cada oficina. El edificio cuenta con dos ascensores pertenecientes al grupo ThyssenKrupp.`,
			`El edificio cuenta con una Playa de Estacionamiento en su planta baja, por lo que la rapidez del acceso y su comodidad son un importante valor agregado para el inmueble. Dicha playa provee las cocheras que se incluyen en las locaciones de las oficinas, como asimismo la opción de solicitar estacionamiento por hora para cocheras adicionales y/o para visitantes de las empresas. Se desarrolló en un sector del piso 4° del edificio un área de Amenities destinada a los usuarios del edificio. Este espacio permite que personas que desarrollan su actividad en el edificio tengan la posibilidad de acceder y disfrutar de un Sector de uso común destinado al descanso, networking y sociabilización, trabajos personales, reuniones, etc., con servicio de Bar, Sala de Reuniones y Sala de Directorio.`,
		];
		break;
	case "Propiedad 6":
		src = "./img/assets//fotosparacarrousel1/Cabildo-9ºB.png";
		break;
	case "Propiedad 7":
		src = "img/assets/fotosparacarrousel2/Haiti-PB.png";
		break;
	case "Propiedad 8":
		src = "./img/assets/fotosparacarrousel2/Haiti-1º.png";
		break;
	case "Propiedad 9":
		src = "./img/assets/fotosparacarrousel2/Haiti-2º-y-3º.png";
		break;
	case "Propiedad 10":
		src = "img/assets/fotosparacarrousel3/Humboldt-3º.png";
		break;
	case "Propiedad 11":
		src = "img/assets/fotosparacarrousel3/Humboldt-4º.png";
		break;
	case "Propiedad 12":
		src = "img/assets/fotosparacarrousel3/Humboldt-5º.png";
		break;
	case "Propiedad 13":
		src = "img/assets/fotosparacarrousel3/Humboldt-6º.png";
		break;
	case "Propiedad 14":
		src = "img/assets/fotosparacarrousel3/Humboldt-7º.png";
		break;
	case "Propiedad 15":
		src = "img/assets/fotosparacarrousel4/Olleros-1º.png";
		break;
	case "Propiedad 16":
		src = "img/assets/fotosparacarrousel4/Olleros-2º.png";
		break;
	case "Propiedad 17":
		src = "img/assets/fotosparacarrousel4/Olleros-3º.png";
		break;
	case "Propiedad 18":
		src = "img/assets/fotosparacarrousel4/Olleros-4º.png";
		break;
	default:
		break;
}

img.src = src;

slide.appendChild(img);
