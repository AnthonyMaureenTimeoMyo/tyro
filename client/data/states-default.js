import objectAssign from 'object-assign';

const defaultFill = '#f2f2f2';

const statesDefaults = {
  AL: { fillColor: defaultFill, value: '' },
  AK: { fillColor: defaultFill, value: '' },
  AZ: { fillColor: defaultFill, value: '' },
  AR: { fillColor: defaultFill, value: '' },
  CA: { fillColor: defaultFill, value: '' },
  CO: { fillColor: defaultFill, value: '' },
  CT: { fillColor: defaultFill, value: '' },
  DE: { fillColor: defaultFill, value: '' },
  DC: { fillColor: defaultFill, value: '' },
  FL: { fillColor: defaultFill, value: '' },
  GA: { fillColor: defaultFill, value: '' },
  HI: { fillColor: defaultFill, value: '' },
  ID: { fillColor: defaultFill, value: '' },
  IL: { fillColor: defaultFill, value: '' },
  IN: { fillColor: defaultFill, value: '' },
  IA: { fillColor: defaultFill, value: '' },
  KS: { fillColor: defaultFill, value: '' },
  KY: { fillColor: defaultFill, value: '' },
  LA: { fillColor: defaultFill, value: '' },
  ME: { fillColor: defaultFill, value: '' },
  MD: { fillColor: defaultFill, value: '' },
  MA: { fillColor: defaultFill, value: '' },
  MI: { fillColor: defaultFill, value: '' },
  MN: { fillColor: defaultFill, value: '' },
  MS: { fillColor: defaultFill, value: '' },
  MO: { fillColor: defaultFill, value: '' },
  MT: { fillColor: defaultFill, value: '' },
  NE: { fillColor: defaultFill, value: '' },
  NV: { fillColor: defaultFill, value: '' },
  NH: { fillColor: defaultFill, value: '' },
  NJ: { fillColor: defaultFill, value: '' },
  NM: { fillColor: defaultFill, value: '' },
  NY: { fillColor: defaultFill, value: '' },
  NC: { fillColor: defaultFill, value: '' },
  ND: { fillColor: defaultFill, value: '' },
  OH: { fillColor: defaultFill, value: '' },
  OK: { fillColor: defaultFill, value: '' },
  OR: { fillColor: defaultFill, value: '' },
  PA: { fillColor: defaultFill, value: '' },
  PR: { fillColor: defaultFill, value: '' },
  RI: { fillColor: defaultFill, value: '' },
  SC: { fillColor: defaultFill, value: '' },
  SD: { fillColor: defaultFill, value: '' },
  TN: { fillColor: defaultFill, value: '' },
  TX: { fillColor: defaultFill, value: '' },
  UT: { fillColor: defaultFill, value: '' },
  VT: { fillColor: defaultFill, value: '' },
  VA: { fillColor: defaultFill, value: '' },
  WA: { fillColor: defaultFill, value: '' },
  WV: { fillColor: defaultFill, value: '' },
  WI: { fillColor: defaultFill, value: '' },
  WY: { fillColor: defaultFill, value: '' },
};
// adding new properties into the statesDefault obj
Object.keys(statesDefaults).forEach((element) => {
  // console.log(statesDefaults[element]);
  statesDefaults[element]['salary'] = null;
  statesDefaults[element]['application'] = 0;
});
export default statesDefaults;
