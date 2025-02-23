module.exports = {
    params: {
        designator: 'S', // for Switch
        side: 'B',
        ten: {type: 'net', value: 'ten'},
        sixteen: {type: 'net', value: 'sixteen'},
        fourteen: {type: 'net', value: 'fourteen'},
        fifteen: {type: 'net', value: 'fifteen'},
        eighteen: {type: 'net', value: 'eighteen'},
        nineteen: {type: 'net', value: 'nineteen'},
        twenty: {type: 'net', value: 'twenty'},
        twentyone: {type: 'net', value: 'twentyone'},
        VCC_pin: {type: 'net', value: 'VCC_pin'},
        RST_pin: {type: 'net', value: 'RST_pin'},
        GND_3_pin: {type: 'net', value: 'GND_3_pin'},
        RAW_pin: {type: 'net', value: 'RAW_pin'}

    },
    body: p => `

    (module header (layer F.Cu) (tstamp 5BF2CC94)

        ${p.at /* parametric position */}
        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

        ${'' /* pins */}
        (pad 1 smd rect (at -13.97 -1.655 ${p.rot}) (size 1 2.51) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.ten.str})
        (pad 2 smd rect (at -11.43 1.655 ${p.rot}) (size 1 2.51) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.sixteen.str})
        (pad 3 smd rect (at -8.89 -1.655 ${p.rot}) (size 1 2.51) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.fourteen.str})
        (pad 4 smd rect (at -6.35 1.655 ${p.rot}) (size 1 2.51) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.fifteen.str})
        (pad 5 smd rect (at -3.81 -1.655 ${p.rot}) (size 1 2.51) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.eighteen.str})
        (pad 6 smd rect (at -1.27 1.655 ${p.rot}) (size 1 2.51) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.nineteen.str})
        (pad 7 smd rect (at 1.27 -1.655 ${p.rot}) (size 1 2.51) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.twenty.str})
        (pad 8 smd rect (at 3.81 1.655 ${p.rot}) (size 1 2.51) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.twentyone.str})
        (pad 9 smd rect (at 6.35 -1.655 ${p.rot}) (size 1 2.51) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.VCC_pin.str})
        (pad 10 smd rect (at 8.89 1.655 ${p.rot}) (size 1 2.51) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.RST_pin.str})
        (pad 11 smd rect (at 11.43 -1.655 ${p.rot}) (size 1 2.51) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.GND_3_pin.str})
        (pad 12 smd rect (at 13.97 1.655 ${p.rot}) (size 1 2.51) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.RAW_pin.str})
    )

    `
}
