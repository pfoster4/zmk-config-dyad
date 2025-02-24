// This via file isn't right!!!
// I only realized this after routing my traces in KiCAD. Luckily, it's super easy to delete the bad footprint and replace directly in KiCAD.
// Proceed at your own risk with this footprint. 

// Via
// Nets
//		net: the net this via should be connected to

module.exports = {
    params: {
      net: {type: 'net', value: 'net'}
    },
    body: p => `
      (module VIA-0.6mm (layer F.Cu) (tedit 591DBFB0)
      ${p.at /* parametric position */}

      ${'' /* via */}
      (pad 1 thru_hole circle (at 0 0) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.net})
      )
    `
}
