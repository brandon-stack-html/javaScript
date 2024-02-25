//  let codigoDeAcceso;

//  if (boleto === 'vip') {
//     codigoDeAcceso = 'VIP-123-456';
//  } else {
//     codigoDeAcceso = 'REGULAR-456-789';
//  }
const boleto = 'vip';

const codigoDeAcceso = boleto === 'vip' ? 'VIP-123-456' : 'REGULAR-456-789';

boleto === 'vip' 
? 
console.log('tu boleto es de tipo VIP')
:
console.log('tu boleto es de tipo REGULAR');