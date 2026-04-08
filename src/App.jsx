import heroImg from './assets/ilustracion_inventario.webp'
import { MdInventory, MdAnalytics } from "react-icons/md";
import { FaCogs } from "react-icons/fa";
import { BsCartX } from "react-icons/bs";

function App() {

  return (
    <>
      <header className='bg-blue-600 h-16 flex justify-center items-center w-full border-black border-b-2 border-b-blue-700'>
        <p className='text-center font-bold text-lg '>
          Sebastian Medina
        </p>
      </header>

      <body className='bg-linear-to-b from-black via-sky-950 to-blue-950'>
        <div className='text-white flex justify-between px-48 gap-12 py-24'>
          <div className='flex-col flex justify-center items-baseline gap-8'>
            <h1 className='text-4xl font-bold'>
              Sistema web para gestionar el inventario, ventas  
              y predicción de stock para una ferretería
            </h1>
            <p>
              Solución orientada a optimizar el control de productos, registrar ventas, apoyar la reposición y habilitar ventas online.
            </p>
            <div className='flex gap-4'>
              <a href='https://github.com/SebaMD/actividad_2_lab_TDD' className='font-bold bg-blue-700 px-4 py-2 border-2 border-blue-700 rounded-md hover:bg-red-500 transition-all hover:scale-110 text-white shadow-lg'> {/*la a se usa para enlaces*/}
                Ir al proyecto
              </a>
              <a className='font-medium border-blue-500 px-4 py-2 border-2 rounded-md hover:bg-red-200 transition-all hover:scale-110 text-blue-500 shadow-lg'>
                Ver funcionalidades
              </a>
            </div>
          </div>
          <img src={heroImg} alt="logo" className='w-110 rounded-2xl'/>
        </div>

        <div className='text-center border-t-2 border-t-gray-700 py-12 px-48 gap-8 mt-8'>
          <h2 className='text-white text-3xl font-bold mb-4'>Problemas en el control de stock y ventas en ferreterías</h2>
          <p className='text-gray-300 max-w-xl mx-auto text-center'>La ferretería no cuenta con un sistema eficiente para controlar su inventario y ventas. Esto genera errores, falta de información y pérdidas económicas, además de limitar su crecimiento al no tener ventas online.</p>

          <div className='text-start flex flex-col flex-wrap gap-4 mt-8'>
            <div className='bg-black border border-gray-700 rounded-md transition-all hover:border-blue-500 px-8 py-8 flex flex-row gap-4 flex-1 min-w-md hover:scale-104 shadow-lg'>
              <span>
                <MdInventory className='size-8 text-blue-800'/>
              </span>
              <div>
                <h3 className='text-white text-lg font-semibold flex flex-row gap-4 mb-2'>
                  Falta de precisión en el control de stock
                </h3>
                <p className='text-gray-400'>
                  El control de inventario no se realiza de manera adecuada, lo que genera información inconsistente sobre la disponibilidad de productos. Esto provoca pérdidas de ventas, sobrestock o quiebres de inventario debido a reposiciones realizadas de forma manual.
                </p>
              </div>
            </div>

            <div className='bg-black border border-gray-700 rounded-md transition-all hover:border-blue-500 px-8 py-8 flex flex-row gap-4 flex-1 min-w-md hover:scale-104 shadow-lg'>
                <span>
                  <MdAnalytics className='size-8 text-blue-800'/>
                </span>
                <div>
                  <h3 className='text-white text-lg font-semibold flex flex-row gap-4 mb-2'>
                    Baja capacidad de análisis
                  </h3>
                  <p className='text-gray-400'>
                    El sistema actual no permite analizar correctamente la información de ventas, dificultando identificar productos más vendidos, patrones de consumo y resultados del negocio. Esto limita la toma de decisiones y aumenta el riesgo de errores.
                  </p>
                </div>
            </div>

            <div className="bg-black border border-gray-700 rounded-md transition-all hover:border-blue-500 px-8 py-8 flex flex-row gap-4 flex-1 min-w-md hover:scale-104 shadow-lg">
              <span>
                <FaCogs className='size-8 text-blue-800'/>
              </span>
              <div>
                <h3 className="text-white text-lg font-semibold flex flex-row gap-4 mb-2">
                  Procesos poco optimizados
                </h3>
                <p className="text-gray-400">
                  La gestión del negocio presenta un bajo nivel de automatización, lo que implica realizar tareas de forma manual. Esto reduce la eficiencia operativa y aumenta la probabilidad de errores en los procesos diarios.
                </p>
              </div>
            </div>

            <div className="bg-black border border-gray-700 rounded-md transition-all hover:border-blue-500 px-8 py-8 flex flex-row gap-4 flex-1 min-w-md hover:scale-104 shadow-lg">
              <span>
                <BsCartX className='size-8 text-blue-800'/>
              </span>
              <div>
                <h3 className="text-white text-lg font-semibold flex flex-row gap-4 mb-2">
                  Ausencia de un apartado de ventas online
                </h3>
                <p className="text-gray-400">
                  La ferretería no cuenta con una plataforma de ventas online, lo que limita su alcance y reduce sus oportunidades de crecimiento en un mercado cada vez más digital.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='text-white flex justify-between border-t-2 border-t-gray-700 px-60 gap-12 py-8'>
          <img src={heroImg} alt="logo" className='w-110 rounded-3xl py-4'/>
          <div className='text-center py-12 mt-8'>
            <h2 className='text-white text-3xl font-bold mb-4'>Solución propuesta</h2>
            <p className='text-gray-300 max-w-xl mx-auto text-center'>Se propone el desarrollo de un sistema web orientado a la gestión de inventario y ventas para una ferretería, diseñado para optimizar los procesos del negocio y mejorar el control de stock. La solución permitirá visualizar información en tiempo real, analizar datos de ventas y predecir la reposición de productos, facilitando la toma de decisiones. Además, incorporará un canal de ventas online, aumentando el alcance y competitividad del negocio.</p>
          </div>
        </div>

        <div className='text-start grid grid-cols-2 mt-8 py-12 px-48 gap-4'>
          <div className='bg-black border border-gray-700 rounded-md transition-all hover:border-blue-500 px-8 py-8 flex flex-row gap-4 flex-1 min-w-md hover:scale-104 shadow-lg'>
            <span>
              <MdInventory className='size-8 text-blue-800'/>
            </span>
            <div>
              <h3 className='text-white text-lg font-semibold flex flex-row gap-4 mb-2'>
                Control de inventario en tiempo real
              </h3>
              <p className='text-gray-400'>
                Permite conocer la disponibilidad de productos de forma precisa y actualizada, evitando quiebres de stock o sobreinventario.
              </p>
            </div>
          </div>

          <div className='bg-black border border-gray-700 rounded-md transition-all hover:border-blue-500 px-8 py-8 flex flex-row gap-4 flex-1 min-w-md hover:scale-104 shadow-lg'>
            <span>
              <MdAnalytics className='size-8 text-blue-800'/>
            </span>
            <div>
              <h3 className='text-white text-lg font-semibold flex flex-row gap-4 mb-2'>
                Análisis de ventas
              </h3>
              <p className='text-gray-400'>
                Entrega información clara sobre productos más vendidos y comportamiento de compra, facilitando la toma de decisiones.
              </p>
            </div>
          </div>

          <div className="bg-black border border-gray-700 rounded-md transition-all hover:border-blue-500 px-8 py-8 flex flex-row gap-4 flex-1 min-w-md hover:scale-104 shadow-lg">
            <span>
              <FaCogs className='size-8 text-blue-800'/>
            </span>
            <div>
              <h3 className="text-white text-lg font-semibold flex flex-row gap-4 mb-2">
                Automatización de procesos
              </h3>
              <p className="text-gray-400">
                Reduce tareas manuales y errores, mejorando la eficiencia operativa del negocio.
              </p>
            </div>
          </div>

          <div className="bg-black border border-gray-700 rounded-md transition-all hover:border-blue-500 px-8 py-8 flex flex-row gap-4 flex-1 min-w-md hover:scale-104 shadow-lg">
            <span>
              <BsCartX className='size-8 text-blue-800'/>
            </span>
            <div>
              <h3 className="text-white text-lg font-semibold flex flex-row gap-4 mb-2">
                Ventas online
              </h3>
              <p className="text-gray-400">
                Incorpora una plataforma digital para ampliar el alcance del negocio y aumentar las oportunidades de venta.
              </p>
            </div>
          </div>

          <div className="bg-black border col-span-2 border-gray-700 rounded-md transition-all hover:border-blue-500 px-8 py-8 flex flex-row gap-4 flex-1 min-w-md hover:scale-104 shadow-lg">
            <span>
              <BsCartX className='size-8 text-blue-800'/>
            </span>
            <div>
              <h3 className="text-white text-lg font-semibold flex flex-row gap-4 mb-2">
                Predicción de stock
              </h3>
              <p className="text-gray-400">
                Sugiere reposiciones basadas en el historial de ventas, anticipando la demanda de productos.
              </p>
            </div>
          </div>
        </div>
      </body>
    </>
  )
}

export default App
