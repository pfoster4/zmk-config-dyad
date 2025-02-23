module.exports = {
    params: {
        designator: 'S', // for Switch
        side: 'B',
        nine: {type: 'net', value: 'nine'},
        eight: {type: 'net', value: 'eight'},
        seven: {type: 'net', value: 'seven'},
        six: {type: 'net', value: 'six'},
        five: {type: 'net', value: 'five'},
        four: {type: 'net', value: 'four'},
        three: {type: 'net', value: 'three'},
        two: {type: 'net', value: 'two'},
        GND_2_pin: {type: 'net', value: 'GND_2_pin'},
        GND_1_pin: {type: 'net', value: 'GND_1_pin'},
        zero: {type: 'net', value: 'zero'},
        one: {type: 'net', value: 'one'}

    },
    body: p => `

    (module header (layer F.Cu) (tstamp 5BF2CC94)

        ${p.at /* parametric position */}
        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

        ${'' /* pins */}
        (pad 1 smd rect (at -13.97 1.655 ${p.rot}) (size 1 2.51) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.nine.str})
        (pad 2 smd rect (at -11.43 -1.655 ${p.rot}) (size 1 2.51) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.eight.str})
        (pad 3 smd rect (at -8.89 1.655 ${p.rot}) (size 1 2.51) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.seven.str})
        (pad 4 smd rect (at -6.35 -1.655 ${p.rot}) (size 1 2.51) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.six.str})
        (pad 5 smd rect (at -3.81 1.655 ${p.rot}) (size 1 2.51) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.five.str})
        (pad 6 smd rect (at -1.27 -1.655 ${p.rot}) (size 1 2.51) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.four.str})
        (pad 7 smd rect (at 1.27 1.655 ${p.rot}) (size 1 2.51) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.three.str})
        (pad 8 smd rect (at 3.81 -1.655 ${p.rot}) (size 1 2.51) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.two.str})
        (pad 9 smd rect (at 6.35 1.655 ${p.rot}) (size 1 2.51) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.GND_2_pin.str})
        (pad 10 smd rect (at 8.89 -1.655 ${p.rot}) (size 1 2.51) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.GND_1_pin.str})
        (pad 11 smd rect (at 11.43 1.655 ${p.rot}) (size 1 2.51) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.zero.str})
        (pad 12 smd rect (at 13.97 -1.655 ${p.rot}) (size 1 2.51) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.one.str})
    )

    `
}
