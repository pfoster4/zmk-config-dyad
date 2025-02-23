module.exports = {
    params: {
        designator: 'S', // for Switch
        side: 'B',
        pos: {type: 'net', value: 'pos'},
        neg: {type: 'net', value: 'neg'},
    },
    body: p => `

    (module SM02_STSS_TB (layer F.Cu) (tstamp 5BF2CC94)

        ${p.at /* parametric position */}

        ${'' /* pins */}
        (pad "" smd rect (at -1.8 -1.425 ${p.rot}) (size 1.2 1.8) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask))
        (pad "" smd rect (at 1.8 -1.425 ${p.rot}) (size 1.2 1.8) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask))
        (pad 1 smd rect (at -0.5 2.45 ${p.rot}) (size 0.6 1.55) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.neg.str})
        (pad 2 smd rect (at 0.5 2.45 ${p.rot}) (size 0.6 1.55) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.pos.str})
    )

    `
}
