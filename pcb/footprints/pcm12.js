module.exports = {
    params: {
        designator: 'S', // for Switch
        side: 'B',
        one: {type: 'net', value: 'one'},
        two: {type: 'net', value: 'two'},
        three: {type: 'net', value: 'three'}
    },
    body: p => `

    (module pcm12 (layer F.Cu) (tstamp 5BF2CC94)

        ${p.at /* parametric position */}
        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

        ${'' /* pins */}
        (pad 1 smd rect (at 2 -2.225 ${p.rot}) (size 1 0.6) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.one.str})
        (pad 2 smd rect (at 2 -0.775 ${p.rot}) (size 1 0.6) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.two.str})
        (pad 3 smd rect (at 2 2.225 ${p.rot}) (size 1 0.6) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.three.str})
        (pad "" smd rect (at 1.15 3.7 ${p.rot}) (size 0.7 1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) )
        (pad "" smd rect (at 1.15 -3.7 ${p.rot}) (size 0.7 1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask))
        (pad "" smd rect (at -1.15 3.7 ${p.rot}) (size 0.7 1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask))
        (pad "" smd rect (at -1.15 -3.7 ${p.rot}) (size 0.7 1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask))
    )

    `
}
