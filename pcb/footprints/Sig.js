module.exports = {
    params: {
        designator: 'S', // for Switch
        side: 'F',
    },
    body: p => `

    (module Sig (layer F.Cu) (tstamp 5BF2CC94)

        ${p.at /* parametric position */}

        (fp_text value "01" (at 0 0) (layer F.SilkS) (effects (font (size 1.5 1.5) (thickness 0.2))(justify left top)))

    )

    `
}
