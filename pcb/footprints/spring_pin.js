// Via Mounting Hole
// Nets
//		net: the net this via should be connected to

module.exports = {
    params: {
        side: 'B',
    },
    body: p => `
      (module THRU-1p85mm (layer F.Cu) (tedit 591DBFB0)

      ${p.at /* parametric position */}
      (pad "" np_thru_hole circle (at 0 0) (size 1.6 1.6) (drill 1.6) (layers *.Cu *.Mask))
      )
    `
}
