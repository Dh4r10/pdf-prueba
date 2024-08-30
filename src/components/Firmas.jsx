import React from 'react';
import { Text, View } from '@react-pdf/renderer';

const Firmas = ({ firmante }) => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '33,33%',
      }}
    >
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            height: 100,
            width: 100,
            borderBottom: '1px dashed black',
          }}
        ></View>
        <Text style={{ textAlign: 'center', paddingTop: 8, fontSize: 9 }}>
          {firmante}
        </Text>
        <Text style={{ textAlign: 'center', fontSize: 6 }}>
          Sello, firma, post firma
        </Text>
      </View>
    </View>
  );
};

export default Firmas;
