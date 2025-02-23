module.exports = {
    params: {
        designator: 'S', // for Switch
        side: 'B',
        pos: {type: 'net', value: 'pos'},
        neg: {type: 'net', value: 'neg'}
    },
    body: p => `

    (module SM02_STSS_TB (layer F.Cu) (tstamp 5BF2CC94)

        ${p.at /* parametric position */}
        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

        ${'' /* outline */}
        (fp_line (start -2 2.125) (end 2 2.125) (layer Dwgs.User) (width 0.15))
        (fp_line (start 2 2.125) (end 2 -2.125) (layer Dwgs.User) (width 0.15))
        (fp_line (start 2 -2.125) (end -2 -2.125) (layer Dwgs.User) (width 0.15))
        (fp_line (start -2 -2.125) (end -2 2.125) (layer Dwgs.User) (width 0.15))

        ${'' /* pins */}
        (pad 1 smd rect (at -1.8 -1.425 ${p.rot}) (size 1.2 1.8) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.pos.str})
        (pad 2 smd rect (at 1.8 -1.425 ${p.rot}) (size 1.2 1.8) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.neg.str})
        (pad 3 smd rect (at -0.5 2.45 ${p.rot}) (size 0.6 1.55) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.pos.str})
        (pad 4 smd rect (at 0.5 2.45 ${p.rot}) (size 0.6 1.55) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.neg.str})
    )

    `
}
