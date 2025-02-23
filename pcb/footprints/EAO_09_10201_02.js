module.exports = {
  params: {
    designamiddler: 'S',
    left: undefined,
    middle: undefined,
    right: undefined
  },
  body: p => `

      (module EAO_09_10201 (layer F.Cu) (tedit 5DD50112)
      ${p.at /* parametric position */}

      ${''/* pins */}
      (pad 2 thru_hole circle (at 0 0 ${p.rot}) (size 1.562 1.562) (drill 0.8) (layers *.Cu *.Mask) ${p.middle.str})
      (pad 1 thru_hole circle (at 2.54 0 ${p.rot}) (size 1.562 1.562) (drill 0.8) (layers *.Cu *.Mask) ${p.left.str})
      (pad 3 thru_hole circle (at -2.54 0 ${p.rot}) (size 1.562 1.562) (drill 0.8) (layers *.Cu *.Mask) ${p.right.str})
    )

    `
}
