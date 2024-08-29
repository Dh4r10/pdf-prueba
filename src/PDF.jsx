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
});

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
        { id: 2, dni: '87654321', nombres: 'Maria Lopez', sexo: 'F', edad: 22 },
      ],
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
          edad: 25,
        },
        { id: 7, dni: '91654321', nombres: 'Sofia Lopez', sexo: 'F', edad: 21 },
      ],
    },
  ],
};

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
              <View
                style={[
                  styles.cell,
                  styles.yellowCell,
                  styles.text,
                  { width: '50%', borderRight: 0 },
                ]}
              >
                <View style={[styles.cell, styles.text, { width: '70%' }]}>
                  <Text style={{ padding: 6 }}>
                    Lugar donde se presta el servicio educativo
                  </Text>
                </View>
                <View style={[styles.cell, styles.text, { width: '30%' }]}>
                  <Text style={{ padding: 6, borderRight: 0 }}>
                    Sede principal
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.text,
                  { width: '50%', flexDirection: 'row', borderRight: 0 },
                ]}
              >
                <View style={[styles.cell, styles.text, { width: '20%' }]}>
                  <Text style={{ padding: 6 }}></Text>
                </View>
                <View
                  style={[styles.text, styles.yellowCell, { width: '20%' }]}
                >
                  <Text style={{ padding: 6 }}>Filial</Text>
                </View>
                <View
                  style={[
                    styles.cell,
                    styles.text,
                    { width: '20%', borderLeft: '1px solid black' },
                  ]}
                >
                  <Text style={{ padding: 6 }}></Text>
                </View>
                <View
                  style={[styles.text, styles.yellowCell, { width: '20%' }]}
                >
                  <Text style={{ padding: 6, borderRight: '1px solid black' }}>
                    Local
                  </Text>
                </View>
                <View
                  style={[
                    styles.cell,
                    styles.text,
                    { width: '20%', borderLeft: 0, borderRight: 0 },
                  ]}
                >
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
            <View style={[styles.cell, { width: '60%' }]}>
              <View
                style={[
                  styles.cell,
                  styles.text,
                  { width: '50%', flexDirection: 'column', height: 90 },
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
              <View style={[styles.text, { width: '50%', height: 90 }]}>
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
                      { width: '25%' },
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
                      { width: '25%' },
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
            <View
              style={[
                styles.cell,
                styles.text,
                {
                  width: '40%',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}
            >
              <Text style={{ padding: 6 }}>UNIDADES DIDÁCTICAS</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
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
                { width: '39.05%', textAlign: 'center' },
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
                { width: '6%', textAlign: 'center', flexDirection: 'column' },
              ]}
            >
              <View
                style={[
                  styles.cell,
                  {
                    width: '100%',
                    height: '85%',
                    textAlign: 'center',
                    borderRight: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}
              >
                <Text style={{ padding: 6 }}>Persona con discapacidad</Text>
              </View>
              <View
                style={[
                  styles.cell,
                  {
                    width: '100%',
                    height: '15%',
                    textAlign: 'center',
                    borderRight: 0,
                    borderTop: '1px solid black',
                  },
                ]}
              >
                <View
                  style={[
                    styles.cell,
                    {
                      width: '50%',
                      textAlign: 'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                    },
                  ]}
                >
                  <Text style={{ padding: 6 }}>Si</Text>
                </View>
                <View
                  style={[
                    styles.cell,
                    {
                      width: '50%',
                      textAlign: 'center',
                      borderRight: 0,
                      justifyContent: 'center',
                      alignItems: 'center',
                    },
                  ]}
                >
                  <Text style={{ padding: 6 }}>No</Text>
                </View>
              </View>
            </View>
            <View
              style={[
                styles.cell,
                styles.grayCell,
                { width: '3%', textAlign: 'center', flexDirection: 'column' },
              ]}
            >
              <View
                style={[
                  styles.cell,
                  {
                    width: '100%',
                    height: '84.75%',
                    textAlign: 'center',
                    borderRight: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                  },
                ]}
              >
                <Text
                  style={{
                    padding: 6,
                    transform: 'rotate(270deg)',
                    fontSize: 7,
                  }}
                ></Text>
              </View>
              <View
                style={[
                  styles.cell,
                  {
                    width: '100%',
                    height: '15.25%',
                    textAlign: 'center',
                    borderRight: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTop: '1px solid black',
                  },
                ]}
              >
                <Text style={{ padding: 6 }}>2</Text>
              </View>
            </View>
            <View
              style={[
                styles.cell,
                styles.grayCell,
                { width: '3%', textAlign: 'center', flexDirection: 'column' },
              ]}
            >
              <View
                style={[
                  styles.cell,
                  {
                    width: '100%',
                    height: '84.75%',
                    textAlign: 'center',
                    borderRight: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                  },
                ]}
              >
                <Text
                  style={{
                    padding: 6,
                    transform: 'rotate(270deg)',
                    fontSize: 7,
                  }}
                ></Text>
              </View>
              <View
                style={[
                  styles.cell,
                  {
                    width: '100%',
                    height: '15.25%',
                    textAlign: 'center',
                    borderRight: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTop: '1px solid black',
                  },
                ]}
              >
                <Text style={{ padding: 6 }}>1</Text>
              </View>
            </View>
            <View
              style={[
                styles.cell,
                styles.grayCell,
                { width: '3%', textAlign: 'center', flexDirection: 'column' },
              ]}
            >
              <View
                style={[
                  styles.cell,
                  {
                    width: '100%',
                    height: '84.75%',
                    textAlign: 'center',
                    borderRight: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                  },
                ]}
              >
                <Text
                  style={{
                    padding: 6,
                    transform: 'rotate(270deg)',
                    fontSize: 7,
                  }}
                ></Text>
              </View>
              <View
                style={[
                  styles.cell,
                  {
                    width: '100%',
                    height: '15.25%',
                    textAlign: 'center',
                    borderRight: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTop: '1px solid black',
                  },
                ]}
              >
                <Text style={{ padding: 6 }}>3</Text>
              </View>
            </View>
            <View
              style={[
                styles.cell,
                styles.grayCell,
                { width: '3%', textAlign: 'center', flexDirection: 'column' },
              ]}
            >
              <View
                style={[
                  styles.cell,
                  {
                    width: '100%',
                    height: '84.75%',
                    textAlign: 'center',
                    borderRight: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                  },
                ]}
              >
                <Text
                  style={{
                    padding: 6,
                    transform: 'rotate(270deg)',
                    fontSize: 7,
                  }}
                ></Text>
              </View>
              <View
                style={[
                  styles.cell,
                  {
                    width: '100%',
                    height: '15.25%',
                    textAlign: 'center',
                    borderRight: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTop: '1px solid black',
                  },
                ]}
              >
                <Text style={{ padding: 6 }}>4</Text>
              </View>
            </View>
            <View
              style={[
                styles.cell,
                styles.grayCell,
                { width: '3%', textAlign: 'center', flexDirection: 'column' },
              ]}
            >
              <View
                style={[
                  styles.cell,
                  {
                    width: '100%',
                    height: '84.75%',
                    textAlign: 'center',
                    borderRight: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                  },
                ]}
              >
                <Text
                  style={{
                    padding: 6,
                    transform: 'rotate(270deg)',
                    fontSize: 7,
                  }}
                ></Text>
              </View>
              <View
                style={[
                  styles.cell,
                  {
                    width: '100%',
                    height: '15.25%',
                    textAlign: 'center',
                    borderRight: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTop: '1px solid black',
                  },
                ]}
              >
                <Text style={{ padding: 6 }}>5</Text>
              </View>
            </View>
            <View
              style={[
                styles.cell,
                styles.grayCell,
                { width: '3%', textAlign: 'center', flexDirection: 'column' },
              ]}
            >
              <View
                style={[
                  styles.cell,
                  {
                    width: '100%',
                    height: '84.75%',
                    textAlign: 'center',
                    borderRight: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                  },
                ]}
              >
                <Text
                  style={{
                    padding: 6,
                    transform: 'rotate(270deg)',
                    fontSize: 7,
                  }}
                ></Text>
              </View>
              <View
                style={[
                  styles.cell,
                  {
                    width: '100%',
                    height: '15.25%',
                    textAlign: 'center',
                    borderRight: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTop: '1px solid black',
                  },
                ]}
              >
                <Text style={{ padding: 6 }}>6</Text>
              </View>
            </View>
            <View
              style={[
                styles.cell,
                styles.grayCell,
                { width: '3%', textAlign: 'center', flexDirection: 'column' },
              ]}
            >
              <View
                style={[
                  styles.cell,
                  {
                    width: '100%',
                    height: '84.75%',
                    textAlign: 'center',
                    borderRight: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                  },
                ]}
              >
                <Text
                  style={{
                    padding: 6,
                    transform: 'rotate(270deg)',
                    fontSize: 7,
                  }}
                ></Text>
              </View>
              <View
                style={[
                  styles.cell,
                  {
                    width: '100%',
                    height: '15.25%',
                    textAlign: 'center',
                    borderRight: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTop: '1px solid black',
                  },
                ]}
              >
                <Text style={{ padding: 6 }}>7</Text>
              </View>
            </View>
            <View
              style={[
                styles.cell,
                styles.grayCell,
                { width: '3%', textAlign: 'center', flexDirection: 'column' },
              ]}
            >
              <View
                style={[
                  styles.cell,
                  {
                    width: '100%',
                    height: '84.75%',
                    textAlign: 'center',
                    borderRight: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                  },
                ]}
              >
                <Text
                  style={{
                    padding: 6,
                    transform: 'rotate(270deg)',
                    fontSize: 7,
                  }}
                ></Text>
              </View>
              <View
                style={[
                  styles.cell,
                  {
                    width: '100%',
                    height: '15.25%',
                    textAlign: 'center',
                    borderRight: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTop: '1px solid black',
                  },
                ]}
              >
                <Text style={{ padding: 6 }}>8</Text>
              </View>
            </View>
            <View
              style={[
                styles.cell,
                styles.grayCell,
                { width: '3%', textAlign: 'center', flexDirection: 'column' },
              ]}
            >
              <View
                style={[
                  styles.cell,
                  {
                    width: '100%',
                    height: '84.75%',
                    textAlign: 'center',
                    borderRight: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                  },
                ]}
              >
                <Text
                  style={{
                    padding: 6,
                    transform: 'rotate(270deg)',
                    fontSize: 7,
                  }}
                ></Text>
              </View>
              <View
                style={[
                  styles.cell,
                  {
                    width: '100%',
                    height: '15.25%',
                    textAlign: 'center',
                    borderRight: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTop: '1px solid black',
                  },
                ]}
              >
                <Text style={{ padding: 6 }}>9</Text>
              </View>
            </View>
            <View
              style={[
                styles.cell,
                styles.grayCell,
                { width: '3%', textAlign: 'center', flexDirection: 'column' },
              ]}
            >
              <View
                style={[
                  styles.cell,
                  {
                    width: '100%',
                    height: '84.75%',
                    textAlign: 'center',
                    borderRight: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                  },
                ]}
              >
                <Text
                  style={{
                    padding: 6,
                    transform: 'rotate(270deg)',
                    fontSize: 7,
                  }}
                ></Text>
              </View>
              <View
                style={[
                  styles.cell,
                  {
                    width: '100%',
                    height: '15.25%',
                    textAlign: 'center',
                    borderRight: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTop: '1px solid black',
                  },
                ]}
              >
                <Text style={{ padding: 6 }}>10</Text>
              </View>
            </View>
            <View
              style={[
                styles.cell,
                styles.grayCell,
                { width: '3%', textAlign: 'center', flexDirection: 'column' },
              ]}
            >
              <View
                style={[
                  styles.cell,
                  {
                    width: '100%',
                    height: '84.75%',
                    textAlign: 'center',
                    borderRight: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                  },
                ]}
              >
                <Text
                  style={{
                    padding: 6,
                    transform: 'rotate(270deg)',
                    fontSize: 7,
                  }}
                ></Text>
              </View>
              <View
                style={[
                  styles.cell,
                  {
                    width: '100%',
                    height: '15.25%',
                    textAlign: 'center',
                    borderRight: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTop: '1px solid black',
                  },
                ]}
              >
                <Text style={{ padding: 6 }}>11</Text>
              </View>
            </View>
            <View
              style={[
                styles.cell,
                styles.grayCell,
                { width: '3%', textAlign: 'center', flexDirection: 'column' },
              ]}
            >
              <View
                style={[
                  styles.cell,
                  {
                    width: '100%',
                    height: '84.75%',
                    textAlign: 'center',
                    borderRight: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                  },
                ]}
              >
                <Text
                  style={{
                    padding: 6,
                    transform: 'rotate(270deg)',
                    fontSize: 7,
                  }}
                ></Text>
              </View>
              <View
                style={[
                  styles.cell,
                  {
                    width: '100%',
                    height: '15.25%',
                    textAlign: 'center',
                    borderRight: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTop: '1px solid black',
                  },
                ]}
              >
                <Text style={{ padding: 6 }}>12</Text>
              </View>
            </View>
            <View
              style={[
                styles.cell,
                styles.grayCell,
                {
                  width: '4%',
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

          <View style={styles.row}>
            <View style={[styles.rowCell, { width: '2%' }]}>
              <Text style={{ padding: 6 }}>1</Text>
            </View>
            <View style={[styles.rowCell, { width: '6.95%' }]}>
              <Text>746231</Text>
            </View>
            <View style={[styles.rowCell, { width: '39.05%' }]}>
              <Text>asdadasd</Text>
            </View>
            <View style={[styles.rowCell, { width: '3%' }]}>
              <Text>M</Text>
            </View>
            <View style={[styles.rowCell, { width: '3%' }]}></View>
            <View style={[styles.rowCell, { width: '3%' }]}></View>
            <View style={[styles.rowCell, { width: '3%' }]}></View>
            <View style={[styles.rowCell, { width: '3%' }]}></View>
            <View style={[styles.rowCell, { width: '3%' }]}></View>
            <View style={[styles.rowCell, { width: '3%' }]}></View>
            <View style={[styles.rowCell, { width: '3%' }]}></View>
            <View style={[styles.rowCell, { width: '3%' }]}></View>
            <View style={[styles.rowCell, { width: '3%' }]}></View>
            <View style={[styles.rowCell, { width: '3%' }]}></View>
            <View style={[styles.rowCell, { width: '3%' }]}></View>
            <View style={[styles.rowCell, { width: '3%' }]}></View>
            <View style={[styles.rowCell, { width: '3%' }]}></View>
            <View style={[styles.rowCell, { width: '3%' }]}></View>
            <View style={[styles.rowCell, { width: '3%' }]}></View>
            <View style={[styles.rowCell, { width: '4%' }]}></View>
          </View>
        </View>

        {/* {valuesPrint.cursos.map((curso) => (
          <View key={curso.id} style={styles.section}>
            <View style={[styles.row, { height: 56 }]}>
              <View style={[styles.cell, styles.grayCell, { width: '2%' }]}>
                <Text>Nº</Text>
              </View>
              <View style={[styles.cell, styles.grayCell, { width: '5.5%' }]}>
                <Text>Número de documento de identidad</Text>
              </View>
              <View style={[styles.cell, styles.grayCell, { width: '40.5%' }]}>
                <Text>APELLIDOS Y NOMBRES (en orden alfabético)</Text>
              </View>
              <View style={[styles.cell, styles.grayCell, { width: '3%' }]}>
                <Text>SEXO (F/M)</Text>
              </View>
              <View style={[styles.cell, styles.grayCell, { width: '3%' }]}>
                <Text>EDAD</Text>
              </View>
              <View style={[styles.cell, styles.grayCell, { width: '6.05%' }]}>
                <Text>PERSONA CON DISCAPACIDAD</Text>
                <View style={{ flexDirection: 'row' }}>
                  <View
                    style={[styles.cell, styles.grayCell, { width: '50%' }]}
                  >
                    <Text>Si</Text>
                  </View>
                  <View
                    style={[styles.cell, styles.grayCell, { width: '50%' }]}
                  >
                    <Text>No</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.cell, { width: '39.95%' }]}>
                <View style={[styles.cell, { width: '85%' }]}>
                  <View style={[styles.cell, { width: '9.09%' }]}>
                    <Text>{curso.unidad_didactica_1}</Text>
                  </View>
                  <View style={[styles.cell, { width: '9.09%' }]}>
                    <Text>{curso.unidad_didactica_2}</Text>
                  </View>
            
                </View>
                <View style={[styles.cell, styles.grayCell, { width: '15%' }]}>
                  <Text>Observaciones</Text>
                </View>
              </View>
            </View>

            {curso.alumnos.map((alumno, item) => (
              <View key={alumno.id} style={styles.row}>
                <View style={[styles.cell, { width: '2%' }]}>
                  <Text>{item}</Text>
                </View>
                <View style={[styles.cell, { width: '5.5%' }]}>
                  <Text>{alumno.dni}</Text>
                </View>
                <View style={[styles.cell, { width: '40.5%' }]}>
                  <Text>{alumno.nombres}</Text>
                </View>
                <View style={[styles.cell, { width: '3%' }]}>
                  <Text>{alumno.sexo}</Text>
                </View>
                <View style={[styles.cell, { width: '3%' }]}></View>
                <View style={[styles.cell, { width: '2.95%' }]}></View>
                <View style={[styles.cell, { width: '3.1%' }]}></View>
                <View style={[styles.cell, { width: '3.06%' }]}></View>
                <View style={[styles.cell, { width: '3.1%' }]}></View>
                <View style={[styles.cell, { width: '3.06%' }]}></View>
                <View style={[styles.cell, { width: '3.1%' }]}></View>
                <View style={[styles.cell, { width: '3.1%' }]}></View>
                <View style={[styles.cell, { width: '3.06%' }]}></View>
                <View style={[styles.cell, { width: '3.1%' }]}></View>
                <View style={[styles.cell, { width: '3.06%' }]}></View>
                <View style={[styles.cell, { width: '3.1%' }]}></View>
                <View style={[styles.cell, { width: '3.06%' }]}></View>
                <View style={[styles.cell, { width: '3.2%' }]}></View>
                <View style={[styles.cell, { width: '5.91%' }]}></View>
              </View>
            ))}
          </View>
        ))} */}
      </Page>
    </Document>
  );
}

export default PDF;
