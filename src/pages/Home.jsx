import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const modelos = [
    {
      nombre: "KIARA",
      edad: "25 años",
      pais: "Colombia",
      paisImagen: "src/assets/chicas/Bandera/españa.png",
      imagenes: [
        "src/assets/chicas/Kiara/kiara-1.png",
        "src/assets/chicas/Kiara/Kiara-3.png",
      ],
    },
    {
      nombre: "PAMELA",
      edad: "30 años",
      pais: "México",
      paisImagen: "src/assets/chicas/Bandera/colombia.png",
      imagenes: [
        "src/assets/chicas/Pamela/1.webp",
        "src/assets/chicas/Pamela/2.png",
      ],
    },
    {
      nombre: "ELIZELI",
      edad: "20 años",
      pais: "Argentina",
      paisImagen: "src/assets/chicas/Bandera/brazil.png",
      imagenes: [
        "src/assets/chicas/Elizeli/1.png",
        "src/assets/chicas/Elizeli/2.png",
      ],
    },
    {
      nombre: "SARA",
      edad: "22 años",
      pais: "Chile",
      paisImagen: "src/assets/chicas/Bandera/españa.png",
      imagenes: [
        "src/assets/chicas/Sara/1.png",
        "src/assets/chicas/Sara/2.png",
      ],
    },
    {
      nombre: "JULIANA",
      edad: "20 años",
      pais: "Perú",
      paisImagen: "src/assets/chicas/Bandera/brazil.png",
      imagenes: [
        "src/assets/chicas/Juliana/1.png",
        "src/assets/chicas/Juliana/2.png",
      ],
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <div className="container mx-auto mt-10 mb-1 flex items-center justify-center md:justify-center">
        <img src="src/assets/ESCRITORIO2.png" alt="" className="h-25" />
      </div>
      <div className="container mx-auto">

  <h2 className="font-bold text-gray-700 text-3xl text-center md:text-center">Agencia de modelos online</h2>
      </div>
      



      <div className="container mx-auto mt-3 justify-center pb-5">
        <h2 className="text-2xl font-bold font-[Poppins] text-center lg:text-start text-gray-700">
          ¿QUIÉNES SOMOS?
        </h2>

        <p className="font-[Poppins] text-center lg:text-start text-xl mt-1 text-gray-600">
          En nuestra empresa, ponemos a tu disposición una cuidada selección de
          modelos. Garantizamos la más estricta confidencialidad y seguridad
          para nuestros clientes.
        </p>

        <h2 className="text-2xl  font-bold font-[Poppins] text-center lg:text-start mt-1 text-gray-700">
          Descubre nuestras modelos:
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 container mx-auto p-4">
        {modelos.map((modelo, index) => (
          <div
            key={index}
            className="relative rounded-xl border-none bg-white shadow-2xl overflow-hidden transition-transform transform hover:scale-105"
          >
            <Slider {...settings}>
              {modelo.imagenes.map((img, idx) => (
                <div key={idx} className="h-100">
                  <img
                    src={img}
                    alt={modelo.nombre}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </Slider>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-800 via-gray-800 to-transparent text-center">
              <div className="flex items-center justify-center">
                <h2 className="text-lg font-semibold text-white mr-2">{modelo.nombre}</h2>
                <img
                  src={modelo.paisImagen}
                  alt={modelo.pais}
                  className="w-6 h-6" // Ajusta el tamaño según sea necesario
                />
              </div>
              <p className="text-lg text-white">{modelo.edad}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
