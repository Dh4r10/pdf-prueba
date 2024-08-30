import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from '@react-pdf/renderer';
import ministerioLogo from '/public/img/logo_minis.png';
import CursoCell from './components/CursoCell';
import { valuesPrint } from './valuesPrint';
import Firmas from './components/Firmas';

const styles = StyleSheet.create({
  page: {
    padding: 18,
    border: '1px solid black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    border: '1px solid black',
    paddingBottom: 2,
    paddingTop: 2,
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
  },
  headerText: {
    width: '80%',
    textAlign: 'center',
    marginRight: 190,
  },
  section: {
    borderBottom: '1px solid black',
    botderRight: '1px solid black',
    borderLeft: '1px solid black',
    fontSize: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottom: '1px solid black',
    padding: 2,
    backgroundColor: '#D3D3D3',
  },
  sectionHeaderText: {
    fontWeight: 'bold',
    fontSize: 12,
    paddingTop: 6,
    paddingBottom: 6,
  },
  row: {
    flexDirection: 'row',
    borderBottom: '1px solid black',
  },
  cell: {
    borderRight: '1px solid black',
    flexDirection: 'row',
    fontSize: 8,
  },
  rowCell: {
    borderRight: '1px solid black',
    flexDirection: 'row',
    fontSize: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 8,
  },
  yellowCell: {
    backgroundColor: '#FFFF00',
  },
  grayCell: {
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  textBold: {
    fontWeight: 'bold',
  },
  textTransform: {
    transform: 'matrix(0, -1, 1, 0, 0, 0)',
  },
  footer: {
    marginTop: 30,
    fontSize: 8,
  },
});

function PDF() {
  return (
    <Document>
      <Page size="A3" orientation="landscape" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.logo}>
            <Image src={ministerioLogo} />
          </View>
          <View style={styles.headerText}>
            <Text style={[styles.textBold, { fontSize: 16 }]}>
              REGISTRO DE MATRÍCULA
            </Text>
            <Text style={{ fontSize: 14 }}>EDUCACIÓN SUPERIOR TECNOLÓGICA</Text>
            <Text style={{ fontSize: 12 }}>PERIODO LECTIVO: 2016 - I</Text>
          </View>
        </View>
        <View style={[styles.section, { borderBottom: 0 }]}>
          <View
            style={[styles.sectionHeader, { borderRight: '1px solid black' }]}
          >
            <Text style={styles.sectionHeaderText}>
              Datos del instituto de educación superior
            </Text>
          </View>

          {/* Fila 1 */}
          <View style={styles.row}>
            <View style={[styles.cell, { width: '60%' }]}>
              <View
                style={[
                  styles.cell,
                  styles.yellowCell,
                  styles.text,
                  { width: '25%' },
                ]}
              >
                <Text style={{ padding: 6 }}>Nombre del IES/IEST</Text>
              </View>
              <View style={[styles.text, { width: '75%' }]}>
                <Text style={{ padding: 6 }}></Text>
              </View>
            </View>
            <View style={[styles.cell, { width: '40%' }]}>
              <View
                style={[
                  styles.cell,
                  styles.text,
                  styles.yellowCell,
                  { width: '33%' },
                ]}
              >
                <Text style={{ padding: 6 }}>Programa de estudios</Text>
              </View>
              <View style={[styles.text, { width: '67%' }]}>
                <Text style={{ padding: 6 }}></Text>
              </View>
            </View>
          </View>

          {/* Fila 2 */}
          <View style={styles.row}>
            <View style={[styles.cell, { width: '60%' }]}>
              <View style={[styles.cell, { width: '50%' }]}>
                <View
                  style={[styles.cell, styles.yellowCell, { width: '50.1%' }]}
                >
                  <Text style={{ padding: 6 }}>Tipo de gestion</Text>
                </View>
                <View style={[styles.cell, { width: '49.9%', borderRight: 0 }]}>
                  <Text style={{ padding: 6 }}></Text>
                </View>
              </View>
              <View
                style={[
                  styles.cell,
                  { width: '50%', borderLeft: 0, borderRight: 0 },
                ]}
              >
                <View
                  style={[
                    styles.cell,
                    styles.yellowCell,
                    { width: '50.1%', borderLeft: 0 },
                  ]}
                >
                  <Text style={{ padding: 6 }}>Código modular</Text>
                </View>
                <View style={[styles.cell, { width: '49.9%', borderRight: 0 }]}>
                  <Text style={{ padding: 6 }}></Text>
                </View>
              </View>
            </View>
            <View style={[styles.cell, { width: '40%' }]}>
              <View
                style={[
                  styles.cell,
                  styles.text,
                  styles.yellowCell,
                  { width: '33%' },
                ]}
              >
                <Text style={{ padding: 6 }}>Mencion (Si fuera el caso)</Text>
              </View>
              <View style={[styles.text, { width: '67%' }]}>
                <Text style={{ padding: 6 }}></Text>
              </View>
            </View>
          </View>

          {/* Fila 3 */}
          <View style={styles.row}>
            <View style={[styles.cell, { width: '60%' }]}>
              <View
                style={[
                  styles.cell,
                  styles.yellowCell,
                  styles.text,
                  { width: '50%' },
                ]}
              >
                <Text style={{ padding: 6 }}>
                  Resolución de licenciamiento y/o autorización (tipo, número y
                  fecha)
                </Text>
              </View>
              <View style={[styles.text, { width: '50%' }]}>
                <Text style={{ padding: 6 }}></Text>
              </View>
            </View>
            <View style={[styles.cell, { width: '40%' }]}>
              <View
                style={[
                  styles.cell,
                  styles.text,
                  styles.yellowCell,
                  { width: '33%' },
                ]}
              >
                <Text style={{ padding: 6 }}>Nivel formativo</Text>
              </View>
              <View style={[styles.text, { width: '67%' }]}>
                <Text style={{ padding: 6 }}></Text>
              </View>
            </View>
          </View>

          {/* Fila 4 */}
          <View style={styles.row}>
            <View style={[styles.cell, { width: '60%' }]}>
              <View
                style={[
                  styles.cell,
                  styles.yellowCell,
                  styles.text,
                  { width: '50%' },
                ]}
              >
                <Text style={{ padding: 6 }}>
                  Resolución de renovación y/o revalidación (tipo, número y
                  fecha)
                </Text>
              </View>
              <View style={[styles.text, { width: '50%' }]}>
                <Text style={{ padding: 6 }}></Text>
              </View>
            </View>
            <View style={[styles.cell, { width: '40%' }]}>
              <View
                style={[
                  styles.cell,
                  styles.text,
                  styles.yellowCell,
                  { width: '33%' },
                ]}
              >
                <Text style={{ padding: 6 }}>Periodo académico</Text>
              </View>
              <View style={[styles.text, { width: '12%' }]}>
                <Text style={{ padding: 6 }}></Text>
              </View>
              <View
                style={[
                  styles.cell,
                  styles.text,
                  styles.yellowCell,
                  { width: '30%', borderLeft: '1px solid black' },
                ]}
              >
                <Text style={{ padding: 6 }}>Fecha inicio y termino</Text>
              </View>
              <View style={[styles.text, { width: '25%' }]}>
                <Text style={{ padding: 6 }}></Text>
              </View>
            </View>
          </View>

          {/* Fila 5 */}
          <View style={styles.row}>
            <View style={[styles.cell, { width: '60%' }]}>
              <View style={[styles.cell, styles.text, { width: '50%' }]}>
                <View
                  style={[styles.cell, styles.yellowCell, { width: '50.1%' }]}
                >
                  <Text style={{ padding: 6 }}>
                    Direccion del IES/IEST (Sede principal)
                  </Text>
                </View>
                <View style={[styles.cell, { width: '49.9%', borderRight: 0 }]}>
                  <Text style={{ padding: 6 }}></Text>
                </View>
              </View>
              <View
                style={[
                  styles.text,
                  { width: '50%', flexDirection: 'row', borderRight: 0 },
                ]}
              >
                <View
                  style={[
                    styles.cell,
                    styles.text,
                    styles.yellowCell,
                    { width: '25%' },
                  ]}
                >
                  <Text style={{ padding: 6 }}>Filial</Text>
                </View>
                <View style={[styles.text, { width: '25%' }]}>
                  <Text style={{ padding: 6 }}></Text>
                </View>
                <View
                  style={[
                    styles.cell,
                    styles.text,
                    styles.yellowCell,
                    { width: '25%', borderLeft: '1px solid black' },
                  ]}
                >
                  <Text style={{ padding: 6 }}>Local</Text>
                </View>
                <View style={[styles.text, { width: '25%' }]}>
                  <Text style={{ padding: 6 }}></Text>
                </View>
              </View>
            </View>
            <View style={[styles.cell, { width: '40%' }]}>
              <View
                style={[
                  styles.cell,
                  styles.text,
                  styles.yellowCell,
                  { width: '33%' },
                ]}
              >
                <Text style={{ padding: 6 }}>Turno</Text>
              </View>
              <View style={[styles.text, { width: '27%' }]}>
                <Text style={{ padding: 6 }}></Text>
              </View>
              <View
                style={[
                  styles.cell,
                  styles.text,
                  styles.yellowCell,
                  { width: '20%', borderLeft: '1px solid black' },
                ]}
              >
                <Text style={{ padding: 6 }}>Sección/aula</Text>
              </View>
              <View style={[styles.text, { width: '20%' }]}>
                <Text style={{ padding: 6 }}></Text>
              </View>
            </View>
          </View>

          {/* Fila 6 */}
          <View style={styles.row}>
            <View style={[styles.cell, { width: '100%' }]}>
              <View
                style={[
                  styles.cell,
                  styles.text,
                  { width: '30%', flexDirection: 'column', height: 90 },
                ]}
              >
                <View
                  style={[
                    styles.cell,
                    {
                      height: '25%',
                      borderBottom: '1px solid black',
                      borderRight: 0,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.text,
                      styles.cell,
                      styles.yellowCell,
                      { width: '30%' },
                    ]}
                  >
                    <Text style={{ padding: 6 }}>Departamento</Text>
                  </View>
                  <View style={[styles.text, { width: '55%', borderRight: 0 }]}>
                    <Text style={{ padding: 6 }}></Text>
                  </View>
                  <View
                    style={[
                      styles.text,
                      styles.cell,
                      styles.yellowCell,
                      {
                        width: '15%',
                        borderRight: 0,
                        borderLeft: '1px solid black',
                      },
                    ]}
                  >
                    <Text style={{ padding: 6 }}>DRE/GRE</Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.cell,
                    {
                      height: '50%',
                      borderBottom: '1px solid black',
                      borderRight: 0,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.text,
                      styles.cell,
                      { width: '85.3%', flexDirection: 'column' },
                    ]}
                  >
                    <View
                      style={[
                        styles.text,
                        styles.cell,
                        {
                          height: '50%',
                          width: '100%',
                          borderBottom: '1px solid black',
                          borderRight: 0,
                        },
                      ]}
                    >
                      <View
                        style={[
                          styles.text,
                          styles.cell,
                          styles.yellowCell,
                          {
                            width: '35.3%',
                          },
                        ]}
                      >
                        <Text style={{ padding: 6 }}>Provincia</Text>
                      </View>
                      <View
                        style={[
                          styles.text,
                          styles.cell,
                          {
                            width: '64.7%',
                            borderRight: 0,
                          },
                        ]}
                      >
                        <Text style={{ padding: 6 }}></Text>
                      </View>
                    </View>
                    <View
                      style={[
                        styles.text,
                        styles.cell,
                        {
                          height: '50%',
                          width: '100%',
                          borderRight: 0,
                        },
                      ]}
                    >
                      <View
                        style={[
                          styles.text,
                          styles.cell,
                          styles.yellowCell,
                          {
                            width: '35.3%',
                          },
                        ]}
                      >
                        <Text style={{ padding: 6 }}>Distrito</Text>
                      </View>
                      <View
                        style={[
                          styles.text,
                          styles.cell,
                          {
                            width: '64.7%',
                            borderRight: 0,
                          },
                        ]}
                      >
                        <Text style={{ padding: 6 }}></Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.text,
                      styles.cell,
                      styles.yellowCell,
                      { width: '14.7%', borderRight: 0, alignItems: 'center' },
                    ]}
                  >
                    <Text style={{ padding: 6 }}>Ambito</Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.cell,
                    {
                      height: '25%',
                      borderRight: 0,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.text,
                      styles.cell,
                      styles.yellowCell,
                      { width: '30%' },
                    ]}
                  >
                    <Text style={{ padding: 6 }}>Centro poblado</Text>
                  </View>
                  <View style={[styles.text, { width: '55%', borderRight: 0 }]}>
                    <Text style={{ padding: 6 }}></Text>
                  </View>
                  <View
                    style={[
                      styles.text,
                      styles.cell,
                      styles.yellowCell,
                      {
                        width: '15%',
                        borderRight: 0,
                        borderLeft: '1px solid black',
                      },
                    ]}
                  >
                    <Text style={{ padding: 6 }}>Dirección</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.text, { width: '70%', height: 90 }]}>
                <View
                  style={{ height: '25%', borderBottom: '1px solid black' }}
                >
                  <Text style={{ padding: 6 }}></Text>
                </View>
                <View
                  style={[
                    styles.cell,
                    {
                      height: '25%',
                      borderBottom: '1px solid black',
                      borderRight: 0,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.text,
                      styles.cell,
                      styles.yellowCell,
                      { width: '10.7%' },
                    ]}
                  >
                    <Text style={{ padding: 6 }}>Vraem</Text>
                  </View>
                  <View style={[styles.text, { width: '75%', borderRight: 0 }]}>
                    <Text style={{ padding: 6 }}></Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.cell,
                    {
                      height: '25%',
                      borderBottom: '1px solid black',
                      borderRight: 0,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.text,
                      styles.cell,
                      styles.yellowCell,
                      { width: '10.7%' },
                    ]}
                  >
                    <Text style={{ padding: 6 }}>Huallaga</Text>
                  </View>
                  <View style={[styles.text, { width: '75%', borderRight: 0 }]}>
                    <Text style={{ padding: 6 }}></Text>
                  </View>
                </View>
                <View style={{ height: '25%' }}>
                  <Text style={{ padding: 6 }}></Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* ITERACIÓN DE PLAN DE ESTUDIOS */}
        <View style={[styles.section, { borderBottom: 0 }]}>
          {/* ITERACIÓN DE CURSOS */}
          <View style={[styles.row, { height: 160 }]}>
            <View style={[styles.cell, styles.grayCell, { width: '2%' }]}>
              <Text>Nº</Text>
            </View>
            <View
              style={[
                styles.cell,
                styles.grayCell,
                { width: '6.95%', textAlign: 'center' },
              ]}
            >
              <Text style={{ padding: 6 }}>
                Número de documento de identidad
              </Text>
            </View>
            <View
              style={[
                styles.cell,
                styles.grayCell,
                { width: '21.02%', textAlign: 'center' },
              ]}
            >
              <Text style={{ padding: 6 }}>
                APELLIDOS Y NOMBRES (en orden alfabético)
              </Text>
            </View>
            <View
              style={[
                styles.cell,
                styles.grayCell,
                { width: '3%', textAlign: 'center' },
              ]}
            >
              <Text style={{ padding: 6 }}>Sexo (F/M)</Text>
            </View>
            <View
              style={[
                styles.cell,
                styles.grayCell,
                { width: '3%', textAlign: 'center' },
              ]}
            >
              <Text style={{ padding: 6 }}>Edad</Text>
            </View>
            <View
              style={[
                styles.cell,
                styles.grayCell,
                { width: '6%', textAlign: 'center' },
              ]}
            >
              <Text style={{ padding: 6 }}>
                Persona con discapacidad (SI/NO)
              </Text>
            </View>
            {valuesPrint.cursos.map((curso, item) => {
              return (
                <CursoCell
                  styles={styles}
                  nombreCurso={curso.nombre}
                  item={item + 1}
                  key={curso.id}
                />
              );
            })}
            <View
              style={[
                styles.cell,
                styles.grayCell,
                {
                  width: '10.03%',
                  textAlign: 'center',
                  flexDirection: 'column',
                  borderRight: 0,
                },
              ]}
            >
              <View
                style={[
                  styles.cell,
                  {
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}
              >
                <Text
                  style={{
                    padding: 6,

                    fontSize: 7,
                  }}
                >
                  Observaciones
                </Text>
              </View>
            </View>
          </View>

          {/* ITERACIÓN DE ALUMNOS */}
          {valuesPrint.alumnos.map((alumno, item) => (
            <View key={alumno.id} style={styles.row}>
              <View style={[styles.rowCell, { width: '2%' }]}>
                <Text style={{ padding: 6 }}>{item + 1}</Text>
              </View>
              <View style={[styles.rowCell, { width: '6.95%' }]}>
                <Text>{alumno.dni}</Text>
              </View>
              <View
                style={[
                  styles.rowCell,
                  {
                    width: '21.02%',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                  },
                ]}
              >
                <Text style={{ textAlign: 'left', padding: 6 }}>
                  {alumno.nombre}
                </Text>
              </View>
              <View style={[styles.rowCell, { width: '3%' }]}>
                <Text>{alumno.sexo}</Text>
              </View>
              <View style={[styles.rowCell, { width: '3%' }]}>
                <Text>{alumno.edad}</Text>
              </View>
              <View style={[styles.rowCell, { width: '6%' }]}>
                <Text>{alumno.personaDiscapacidad}</Text>
              </View>
              <View style={[styles.rowCell, { width: '4%' }]}>
                <Text>{!!alumno.curso_1 ? 'X' : ''}</Text>
              </View>
              <View style={[styles.rowCell, { width: '4%' }]}>
                <Text>{!!alumno.curso_2 ? 'X' : ''}</Text>
              </View>
              <View style={[styles.rowCell, { width: '4%' }]}>
                <Text>{!!alumno.curso_3 ? 'X' : ''}</Text>
              </View>
              <View style={[styles.rowCell, { width: '4%' }]}>
                <Text>{!!alumno.curso_4 ? 'X' : ''}</Text>
              </View>
              <View style={[styles.rowCell, { width: '4%' }]}>
                <Text>{!!alumno.curso_5 ? 'X' : ''}</Text>
              </View>
              <View style={[styles.rowCell, { width: '4%' }]}>
                <Text>{!!alumno.curso_6 ? 'X' : ''}</Text>
              </View>
              <View style={[styles.rowCell, { width: '4%' }]}>
                <Text>{!!alumno.curso_7 ? 'X' : ''}</Text>
              </View>
              <View style={[styles.rowCell, { width: '4%' }]}>
                <Text>{!!alumno.curso_8 ? 'X' : ''}</Text>
              </View>
              <View style={[styles.rowCell, { width: '4%' }]}>
                <Text>{!!alumno.curso_9 ? 'X' : ''}</Text>
              </View>
              <View style={[styles.rowCell, { width: '4%' }]}>
                <Text>{!!alumno.curso_10 ? 'X' : ''}</Text>
              </View>
              <View style={[styles.rowCell, { width: '4%' }]}>
                <Text>{!!alumno.curso_11 ? 'X' : ''}</Text>
              </View>
              <View style={[styles.rowCell, { width: '4%' }]}>
                <Text>{!!alumno.curso_12 ? 'X' : ''}</Text>
              </View>
              <View
                style={[
                  styles.rowCell,
                  {
                    width: '10.03%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                  },
                ]}
              >
                <Text style={{ textAlign: 'left', padding: 5 }}>
                  {alumno.observaciones}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View wrap={false} style={[styles.footer]}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
          >
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text>Lugar y fecha:</Text>
              <Text>{'  '}</Text>
              <Text>YURIMAGUAS, 14 de Mayo de 2022.</Text>
            </View>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Firmas firmante={'Director General'} />
            <Firmas firmante={'Jefe de Unidad Académica'} />
            <Firmas firmante={'Secretario Académico'} />
          </View>
          <View style={{ display: 'flex', paddingTop: 40 }}>
            <Text style={{ padding: 6 }}>
              NOTA: La inscripción de los estudiantes se hará en orden
              alfabético, cuidando de anotar: 1° Apellido paterno, 2° Apellido
              materno y 3° Nombres del matriculado, tal como figura en su
              documento de identidad. (*) Para el caso de los planes de estudios
              por asignatura deben registrar la denominación de la asignatura .
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default PDF;
