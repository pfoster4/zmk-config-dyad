module.exports = {
    params: {
        designator: 'S', // for Switch
        side: 'B',
        from: {type: 'net', value: 'from'},
        to: {type: 'net', value: 'to'}
    },
    body: p => `

    (module Reed (layer F.Cu) (tstamp 5BF2CC94)

        ${p.at /* parametric position */}

        ${'' /* pins */}
        (pad 1 thru_hole circle (at -10 0 ${p.rot}) (size 1.7 1.7) (drill 0.7 0.7) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.from.str})
        (pad 2 thru_hole circle (at 10 0 ${p.rot}) (size 1.7 1.7) (drill 0.7 0.7) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.to.str})
    )

    `
}
