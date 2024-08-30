import React from 'react';
import { Text, View } from '@react-pdf/renderer';

const CursoCell = ({ item, nombreCurso, styles }) => {
  return (
    <View
      style={[
        styles.cell,
        styles.grayCell,
        { width: '4%', textAlign: 'center', flexDirection: 'column' },
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
        <View
          style={{
            backgroundColor: 'red',
            height: '100%',
            position: 'relative',
          }}
        >
          <Text
            style={[
              {
                fontSize: 7,
                transform: 'matrix(0, -1, 1, 0, 0, 0)',
                // backgroundColor: 'blue',
                width: 130,
                position: 'absolute',
                top: -7,
                right: 2,
              },
            ]}
          >
            {nombreCurso}
          </Text>
        </View>
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
        <Text style={{ padding: 6 }}>{item}</Text>
      </View>
    </View>
  );
};

export default CursoCell;
