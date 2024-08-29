import ministerioLogo from '/public/img/logo_minis.png'

const valuesPrint = {
  tipoGestion: 'Privada',
  codigoModular: '531133',
  cursos: [
    {
      id: 1,
      nombre: 'Diseño de Software',
      unidad_didactica_1: 'Interes',
      unidad_didactica_2: 'Creatividad',
      alumnos: [
        { id: 1, dni: '12345678', nombres: 'Juan Perez', sexo: 'M', edad: 20 },
        { id: 2, dni: '87654321', nombres: 'Maria Lopez', sexo: 'F', edad: 22 }
      ]
    },
    {
      id: 2,
      nombre: 'Gestion de Proyectos',
      unidad_didactica_1: 'Valores',
      unidad_didactica_2: 'Imaginacion',
      alumnos: [
        {
          id: 4,
          dni: '33345678',
          nombres: 'Diego Francisco',
          sexo: 'M',
          edad: 25
        },
        { id: 7, dni: '91654321', nombres: 'Sofia Lopez', sexo: 'F', edad: 21 }
      ]
    }
  ]
}

function App() {
  return (
    <div className='mx-36 border border-black'>
      <header className='flex items-center justify-between border-b border-black '>
        <div className='w-[15%] flex items-center'>
          <img src={ministerioLogo} alt='LOGO' className='w-full' />
        </div>
        <div className='w-[85%] text-center mr-48'>
          <h1 className='text-lg font-bold'>REGISTRO DE MATRÍCULA</h1>
          <h2 className='text-md'>EDUCACIÓN SUPERIOR TECNOLÓGICA</h2>
          <h3 className='text-sm'>PERIODO LECTIVO: 2016 - I</h3>
        </div>
      </header>

      <section className='border-b text-sm'>
        <div className='flex justify-center border-b border-black p-2 bg-gray-300'>
          <p className='font-semibold text-sm'>
            Datos del instituto de educación superior
          </p>
        </div>

        {/* Fila 1 */}
        <div className='flex border-b border-black'>
          <div className='flex w-[60%]'>
            <div className='w-[25%] bg-[#FFFF00] p-2 border-r  border-black'>
              Nombre del IES/IEST:
            </div>
            <div className='w-[75%] border p-2'></div>
          </div>
          <div className='flex w-[40%]'>
            <div className='w-1/3 bg-[#FFFF00] p-2 border-r border-l border-black'>
              Programa de estudios:
            </div>
            <div className='w-2/3 border p-2'></div>
          </div>
        </div>

        {/* Fila 2 */}
        <div className='flex border-b border-black'>
          <div className='flex w-[60%]'>
            <div className='flex w-[50%] '>
              <div className='w-[50%] bg-[#FFFF00] p-2 border-r border-black'>
                Tipo de gestion:
              </div>
              <div className='w-[50%] border p-2'>
                {valuesPrint.tipoGestion}
              </div>
            </div>
            <div className='flex w-[50%]'>
              <div className='w-[30%] bg-[#FFFF00] p-2 border-r border-l border-black'>
                Codigo modular:
              </div>
              <div className='w-[70%] border p-2'></div>
            </div>
          </div>
          <div className='flex w-[40%]'>
            <div className='w-1/3 bg-[#FFFF00] p-2 border-r border-l border-black'>
              Mencion (Si fuera el caso):
            </div>
            <div className='w-2/3 border p-2'></div>
          </div>
        </div>

        {/* Fila 3 */}
        <div className='flex border-b border-black'>
          <div className='flex w-[60%]'>
            <div className='w-[50.1%] bg-[#FFFF00] p-2 border-r border-black'>
              Resolución de licenciamiento y/o autorización (tipo, número y
              fecha):
            </div>
            <div className='w-[49.9%] border p-2'></div>
          </div>
          <div className='flex w-[40%]'>
            <div className='w-1/3 bg-[#FFFF00] p-2 border-r border-l border-black'>
              Nivel formativo:
            </div>
            <div className='w-2/3 border p-2'></div>
          </div>
        </div>

        {/* Fila 4 */}
        <div className='flex border-b border-black'>
          <div className='flex w-[60%]'>
            <div className='w-[50.1%] bg-[#FFFF00] p-2 border-r border-black'>
              Resolución de renovación y/o revalidación (tipo, número y fecha)
            </div>
            <div className='w-[49.9%] border p-2'></div>
          </div>
          <div className='flex w-[40%]'>
            <div className='flex w-[50%]'>
              <div className='w-[66.6%] bg-[#FFFF00] p-2 border-r border-l border-black'>
                Periodo académico:
              </div>
              <div className='w-[33.4%] border p-2'></div>
            </div>
            <div className='flex w-[50%]'>
              <div className='w-[50%] bg-[#FFFF00] p-2 border-r border-l border-black'>
                Fecha inicio y termino:
              </div>
              <div className='w-[50%] border p-2'></div>
            </div>
          </div>
        </div>

        {/* Fila 5 */}
        <div className='flex border-b border-black'>
          <div className='flex w-[60%]'>
            <div className='flex w-[50.1%] bg-[#FFFF00]'>
              <div className='flex w-[70%] p-2'>
                Lugar donde se presta el servicio educativo
              </div>
              <div className='flex w-[30%] border-l border-r border-black p-2'>
                Sede principal
              </div>
            </div>
            <div className='flex w-[49.9%] border'>
              <div className='flex w-[50%]'>
                <div className='flex w-[50%] p-2 justify-center'></div>
                <div className='flex w-[50%] p-2 justify-center bg-[#FFFF00] border-r border-l border-black'>
                  Filial
                </div>
              </div>
              <div className='flex w-[50%]'>
                <div className='flex w-[50%] p-2 justify-center'></div>
                <div className='flex w-[50%] p-2 justify-center bg-[#FFFF00] border-r border-l border-black'>
                  Local
                </div>
                <div className='flex w-[50%] p-2 justify-center'></div>
              </div>
            </div>
          </div>
          <div className='flex w-[40%]'>
            <div className='flex w-[70%]'>
              <div className='w-[47.6%] bg-[#FFFF00] p-2 border-r border-l border-black'>
                Turno
              </div>
              <div className='w-[52.4%] border p-2'></div>
            </div>
            <div className='flex w-[30%]'>
              <div className='w-[50%] bg-[#FFFF00] p-2 border-r border-l border-black'>
                Seccion/aula
              </div>
              <div className='w-[50%] border p-2'></div>
            </div>
          </div>
        </div>

        {/* Fila 6 */}
        <div className='flex border-b border-black'>
          <div className='flex w-[60%]'>
            <div className='flex flex-col w-[50.1%] '>
              <div className='flex w-[100%]'>
                <div className='flex border-b border-r w-[100%] border-black'>
                  <div className='flex w-[25%] border-r border-black p-2 bg-[#FFFF00]'>
                    Departamento
                  </div>
                  <div className='flex w-[60%] p-2'></div>
                  <div className='flex w-[15%] border-l p-2 border-black bg-[#FFFF00]'>
                    DRE/GRE
                  </div>
                </div>
              </div>
              <div className='flex w-[100%]'>
                <div className='flex flex-col w-[84.9%]'>
                  <div className='flex border-b border-black'>
                    <div className='flex bg-[#FFFF00] border-r p-2 border-black w-[29.4%]'>
                      Provincia
                    </div>
                    <div className='flex p-2 w-[70.6%]'></div>
                  </div>
                  <div className='flex'>
                    <div className='flex bg-[#FFFF00] border-r p-2 border-black w-[29.4%]'>
                      Distrito
                    </div>
                    <div className='flex p-2 w-[70.6%]'></div>
                  </div>
                </div>
                <div className='flex w-[15.1%] border-l border-r  justify-center items-center border-black bg-[#FFFF00]'>
                  Ambito
                </div>
              </div>
              <div className='flex w-[100%]'>
                <div className='flex border-t border-r w-[100%] border-black'>
                  <div className='flex w-[25%] border-r border-black p-2 bg-[#FFFF00]'>
                    Centro poblado
                  </div>
                  <div className='flex w-[60%] p-2'></div>
                  <div className='flex w-[15%] border-l p-2 border-black bg-[#FFFF00]'>
                    Dirección
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col w-[49.9%] '>
              <div className='flex h-[25%] border-b border-black w-[100%] p-2'></div>
              <div className='flex w-[100%]'>
                <div className='flex flex-col w-[100%]'>
                  <div className='flex border-b border-black'>
                    <div className='flex bg-[#FFFF00] border-r p-2 border-black w-[29.4%]'>
                      Vraem
                    </div>
                    <div className='flex p-2 w-[70.6%]'></div>
                  </div>
                  <div className='flex'>
                    <div className='flex bg-[#FFFF00] border-r p-2 border-black w-[29.4%]'>
                      Huallaga
                    </div>
                    <div className='flex p-2 w-[70.6%]'></div>
                  </div>
                </div>
              </div>
              <div className='flex h-[25%] border-t border-black w-[100%] p-2'></div>
            </div>
          </div>
          <div className='flex w-[40%] justify-center items-center border-l border-black'>
            <p>UNIDADES DIDÁCTICAS</p>
          </div>
        </div>
      </section>

      {valuesPrint.cursos.map((curso) => {
        return (
          <section key={curso.id}>
            <div className='flex  text-sm h-56'>
              <div className='flex w-[2%] p-2 justify-center items-center text-center border-r border-b border-black bg-gray-300'>
                Nº
              </div>
              <div className='flex w-[5.5%] p-2 justify-center items-center text-center border-r border-b border-black bg-gray-300'>
                Número de documento de identidad
              </div>
              <div className='flex w-[40.5%] p-2 justify-center items-center text-center border-r border-b border-black bg-gray-300'>
                APELLIDOS Y NOMBRES (en orden alfabético)
              </div>
              <div className='flex w-[3%] p-2 justify-center items-center text-center border-r border-b border-black bg-gray-300'>
                SEXO (F/M)
              </div>
              <div className='flex w-[3%] p-2 justify-center items-center text-center border-r border-b border-black bg-gray-300'>
                EDAD
              </div>
              <div className='text-xs flex flex-col w-[6.05%] border-r border-b border-black'>
                <div className='flex h-[84.6%] justify-center items-center w-[100%] text-center border-b border-black bg-gray-300'>
                  PERSONA CON DISCAPACIDAD
                </div>
                <div className='flex h-[15.4%] w-[100%] bg-gray-300'>
                  <div className='flex w-[50%] p-2 justify-center items-center text-center border-r border-black'>
                    Si
                  </div>
                  <div className='flex w-[50%] p-2 justify-center items-center text-center '>
                    No
                  </div>
                </div>
              </div>
              <div className='flex w-[39.95%] border-black  border-b'>
                <div className='flex w-[85%] border-r border-black '>
                  <div className='flex flex-col w-[9.09%] border-r border-black'>
                    <div className='flex h-[84.5%] justify-center items-center transform -rotate-90 origin-center whitespace-nowrap'>
                      {curso.unidad_didactica_1}
                    </div>
                    <div className='flex h-[15.5%] border-t border-black justify-center items-center bg-gray-300'>
                      2
                    </div>
                  </div>
                  <div className='flex flex-col w-[9.09%] border-r border-black'>
                    <div className='flex h-[84.5%] justify-center items-center transform -rotate-90 origin-center whitespace-nowrap'>
                      {curso.unidad_didactica_2}
                    </div>
                    <div className='flex h-[15.5%] border-t border-black justify-center items-center bg-gray-300'>
                      2
                    </div>
                  </div>
                  <div className='flex flex-col w-[9.09%] border-r border-black'>
                    <div className='flex h-[84.5%] justify-center items-center transform -rotate-90 origin-center whitespace-nowrap'></div>
                    <div className='flex h-[15.5%] border-t border-black justify-center items-center bg-gray-300'>
                      3
                    </div>
                  </div>
                  <div className='flex flex-col w-[9.09%] border-r border-black'>
                    <div className='flex h-[84.5%] justify-center items-center transform -rotate-90 origin-center whitespace-nowrap'></div>
                    <div className='flex h-[15.5%] border-t border-black justify-center items-center bg-gray-300'>
                      4
                    </div>
                  </div>
                  <div className='flex flex-col w-[9.09%] border-r border-black'>
                    <div className='flex h-[84.5%] justify-center items-center transform -rotate-90 origin-center whitespace-nowrap'></div>
                    <div className='flex h-[15.5%] border-t border-black justify-center items-center bg-gray-300'>
                      5
                    </div>
                  </div>
                  <div className='flex flex-col w-[9.09%] border-r border-black'>
                    <div className='flex h-[84.5%] justify-center items-center transform -rotate-90 origin-center whitespace-nowrap'></div>
                    <div className='flex h-[15.5%] border-t border-black justify-center items-center bg-gray-300'>
                      6
                    </div>
                  </div>
                  <div className='flex flex-col w-[9.09%] border-r border-black'>
                    <div className='flex h-[84.5%] justify-center items-center transform -rotate-90 origin-center whitespace-nowrap'></div>
                    <div className='flex h-[15.5%] border-t border-black justify-center items-center bg-gray-300'>
                      7
                    </div>
                  </div>
                  <div className='flex flex-col w-[9.09%] border-r border-black'>
                    <div className='flex h-[84.5%] justify-center items-center transform -rotate-90 origin-center whitespace-nowrap'></div>
                    <div className='flex h-[15.5%] border-t border-black justify-center items-center bg-gray-300'>
                      8
                    </div>
                  </div>
                  <div className='flex flex-col w-[9.09%] border-r border-black'>
                    <div className='flex h-[84.5%] justify-center items-center transform -rotate-90 origin-center whitespace-nowrap'></div>
                    <div className='flex h-[15.5%] border-t border-black justify-center items-center bg-gray-300'>
                      9
                    </div>
                  </div>
                  <div className='flex flex-col w-[9.09%] border-r border-black'>
                    <div className='flex h-[84.5%] justify-center items-center transform -rotate-90 origin-center whitespace-nowrap'></div>
                    <div className='flex h-[15.5%] border-t border-black justify-center items-center bg-gray-300'>
                      10
                    </div>
                  </div>
                  <div className='flex flex-col w-[9.09%] '>
                    <div className='flex h-[84.5%] justify-center items-center transform -rotate-90 origin-center whitespace-nowrap'></div>
                    <div className='flex h-[15.5%] border-t border-black justify-center items-center bg-gray-300'>
                      11
                    </div>
                  </div>
                </div>
                <div className='flex w-[15%] justify-center items-center bg-gray-300'>
                  <p className='font-semibold text-xs'>Observaciones</p>
                </div>
              </div>
            </div>

            {/* Filas de datos */}
            {curso.alumnos.map((alumno, item) => {
              return (
                <div className='flex border-b border-black' key={alumno.id}>
                  <div className='flex h-8 w-[2%] justify-center border-r border-black '>
                    {item}
                  </div>
                  <div className='flex h-8 w-[5.5%] justify-center  border-r border-black'>
                    {alumno.dni}
                  </div>
                  <div className='flex h-8 w-[40.5%] justify-start px-2 border-r border-black'>
                    {alumno.nombres}
                  </div>
                  <div className='flex h-8 w-[3%] justify-center border-r border-black'>
                    {alumno.sexo}
                  </div>
                  <div className='flex h-8 w-[3%] justify-center border-r border-black'></div>
                  <div className='flex h-8 w-[2.95%] justify-center border-r border-black'></div>
                  <div className='flex h-8 w-[3.1%] justify-center border-r border-black'></div>
                  <div className='flex h-8 w-[3.06%] justify-center border-r border-black'></div>
                  <div className='flex h-8 w-[3.1%] justify-center border-r border-black'></div>
                  <div className='flex h-8 w-[3.06%] justify-center border-r border-black'></div>
                  <div className='flex h-8 w-[3.1%] justify-center border-r border-black'></div>
                  <div className='flex h-8 w-[3.1%] justify-center border-r border-black'></div>
                  <div className='flex h-8 w-[3.06%] justify-center border-r border-black'></div>
                  <div className='flex h-8 w-[3.1%] justify-center border-r border-black'></div>
                  <div className='flex h-8 w-[3.06%] justify-center border-r border-black'></div>
                  <div className='flex h-8 w-[3.1%] justify-center border-r border-black'></div>
                  <div className='flex h-8 w-[3.06%] justify-center border-r border-black'></div>
                  <div className='flex h-8 w-[3.2%] justify-center border-r border-black'></div>
                  <div className='flex h-8 w-[5.91%] justify-center '></div>
                </div>
              )
            })}

            {/* Más filas según sea necesario */}
          </section>
        )
      })}
    </div>
  )
}

export default App
