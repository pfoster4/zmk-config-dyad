module.exports = {
    params: {
        designator: 'S', // for Switch
        side: 'B',
        fiveV: {type: 'net', value: 'fiveV'},
        GND_1: {type: 'net', value: 'GND_1'},
        threeV: {type: 'net', value: 'threeV'},
        d10: {type: 'net', value: 'd10'},
        d9: {type: 'net', value: 'd9'},
        d8: {type: 'net', value: 'd8'},
        d7: {type: 'net', value: 'd7'},
        d6: {type: 'net', value: 'd6'},
        d5: {type: 'net', value: 'd5'},
        d4: {type: 'net', value: 'd4'},
        d3: {type: 'net', value: 'd3'},
        d2: {type: 'net', value: 'd2'},
        d1: {type: 'net', value: 'd1'},
        d0: {type: 'net', value: 'd0'},
        rst: {type: 'net', value: 'rst'},
        batm: {type: 'net', value: 'batm'},
        batp: {type: 'net', value: 'batp'},
    },
    body: p => `

    (module header (layer F.Cu) (tstamp 5BF2CC94)

        ${p.at /* parametric position */}
        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 8.94 7.3) (thickness 0.15))))
        (fp_rect (start 10.4775 8.89) (end -10.4775 -8.89) (stroke (width 0.1) (type default)) (fill none) (layer "F.Fab"))
        (fp_rect (start 12 4.47) (end 4.7 -4.47) (stroke (width 0.1) (type default)) (fill none) (layer "F.Fab"))

        ${'' /* pins */}
        (pad 5V smd roundrect (at 7.555648 -8 ${p.rot}) (size 1.5 2) (roundrect_rratio 1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.fiveV.str})
        (pad GND smd roundrect (at 5.01648 -8 ${p.rot}) (size 1.5 2) (roundrect_rratio 1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.GND_1.str})
        (pad 3.3V smd roundrect (at 2.47648 -8 ${p.rot}) (size 1.5 2) (roundrect_rratio 1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.threeV.str})
        (pad D10 smd roundrect (at -0.06352 -8 ${p.rot}) (size 1.5 2) (roundrect_rratio 1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.d10.str})
        (pad D9 smd roundrect (at -2.60352 -8 ${p.rot}) (size 1.5 2) (roundrect_rratio 1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.d9.str})
        (pad D8 smd roundrect (at -5.14352 -8 ${p.rot}) (size 1.5 2) (roundrect_rratio 1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.d8.str})
        (pad D7 smd roundrect (at -7.68352 -8 ${p.rot}) (size 1.5 2) (roundrect_rratio 1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.d7.str})

        (pad D0 smd roundrect (at 7.555648 8 ${p.rot}) (size 1.5 2) (roundrect_rratio 1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.d6.str})
        (pad D1 smd roundrect (at 5.01648 8 ${p.rot}) (size 1.5 2) (roundrect_rratio 1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.d5.str})
        (pad D2 smd roundrect (at 2.47648 8 ${p.rot}) (size 1.5 2) (roundrect_rratio 1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.d4.str})
        (pad D3 smd roundrect (at -0.06352 8 ${p.rot}) (size 1.5 2) (roundrect_rratio 1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.d3.str})
        (pad D4 smd roundrect (at -2.60352 8 ${p.rot}) (size 1.5 2) (roundrect_rratio 1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.d2.str})
        (pad D5 smd roundrect (at -5.14352 8 ${p.rot}) (size 1.5 2) (roundrect_rratio 1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.d1.str})
        (pad D6 smd roundrect (at -7.68352 8 ${p.rot}) (size 1.5 2) (roundrect_rratio 1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.d0.str})

        (pad RST smd circle (at 6.0325 1.27) (size 1.7 1.7) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.rst.str})

        (pad BAT- smd roundrect (at 2.22071 4.44889 ${p.rot}) (size 1.1 2.2) (roundrect_rratio 0.25) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.batm.str})
        (pad BAT+ smd roundrect (at 0.31571 4.44889 ${p.rot}) (size 1.1 2.2) (roundrect_rratio 0.25) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.batp.str})
    )

    `
}
