// USB Type C ATMega32U4
// Params

module.exports = {
  nets: {
    RAW: 'RAW',
    GND: 'GND',
    RST: 'RST',
    VCC: 'VCC',
    LED: 'LED',
    A4: 'A4',
    A5: 'A5',
    P21: 'P21',
    P20: 'P20',
    P19: 'P19',
    P18: 'P18',
    P15: 'P15',
    P14: 'P14',
    P16: 'P16',
    P13: 'P13',
    P11: 'P11',
    P10: 'P10',
    P1: 'P1',
    P0: 'P0',
    P2: 'P2',
    P3: 'P3',
    P4: 'P4',
    P5: 'P5',
    P6: 'P6',
    P7: 'P7',
    P8: 'P8',
    P9: 'P9',
  },
  params: {
    class: 'MCU'
  },
  body: p => {
    const standard = `
      (module Elite-C (layer F.Cu) (tedit 5BDF551E)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
	  (fp_text reference U1 (at 0 1.625) (layer F.SilkS) hide
		(effects (font (size 1.2 1.2) (thickness 0.2032)))
	  )
	  (fp_text value Elite-C (at 0 0) (layer F.SilkS) hide
		(effects (font (size 1.2 1.2) (thickness 0.2032)))
	  )
	  (fp_line (start -12.7 6.35) (end -12.7 8.89) (layer B.SilkS) (width 0.15))
	  (fp_line (start -15.24 6.35) (end -12.7 6.35) (layer B.SilkS) (width 0.15))
	  
	  
        ${''/* pin names */}
        (fp_text user RAW (at -13.97 5.2 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GND (at -11.43 5.2 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user RST (at -8.89 5.2 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user VCC (at -6.35 5.2 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user P21 (at -3.81 5.2 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user P20 (at -1.27 5.2 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user P19 (at 1.27 5.2 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user P18 (at 3.81 5.2 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user P15 (at 6.35 5.2 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user P14 (at 8.89 5.2 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user P16 (at 10.73 5.2 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
      
        (fp_text user P01 (at -13.97 -5.2 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user P00 (at -11.43 -5.2 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GND (at -8.89 -5.2 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GND (at -6.35 -5.2 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user P02 (at -3.81 -5.2 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user P03 (at -1.27 -5.2 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user P04 (at 1.27 -5.2 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user P05 (at 3.81 -5.2 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user P06 (at 6.35 -5.2 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user P07 (at 8.89 -5.2 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user P08 (at 10.73 -5.2 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))

	  (fp_text user P09 (at 12.4 -6.1 135 unlocked) (layer F.SilkS)
		(effects (font (size 0.6 0.6) (thickness 0.15)))
	  )
	  (fp_text user P09 (at 12.4 -6.1 135 unlocked) (layer B.SilkS)
		(effects (font (size 0.6 0.6) (thickness 0.15)) (justify mirror))
	  )
	  (fp_text user P10 (at 12.4 6.1 45) (layer B.SilkS)
		(effects (font (size 0.6 0.6) (thickness 0.15)) (justify mirror))
	  )
	  (fp_text user P10 (at 12.4 6.1 45) (layer F.SilkS)
		(effects (font (size 0.6 0.6) (thickness 0.15)))
	  )


	  (fp_text user P11 (at 12.1 -4.5 90) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
	  (fp_text user LED (at 11.9 -2.54 90) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
	  (fp_text user P13 (at 11.9 0 90) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
	  (fp_text user A4 (at 11.9 2.54 90) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
	  (fp_text user A5 (at 12.1 4.5 90) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))

	  (fp_text user P11 (at 12.1 -4.5 90) (layer B.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15)) (justify mirror)))
	  (fp_text user LED (at 11.9 -2.54 90) (layer B.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15)) (justify mirror)))
	  (fp_text user P13 (at 11.9 0 90) (layer B.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15)) (justify mirror)))
	  (fp_text user A4 (at 11.9 2.54 90) (layer B.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15)) (justify mirror)))
	  (fp_text user A5 (at 12.1 4.5 90) (layer B.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15)) (justify mirror)))


	  (fp_line (start -15.24 8.89) (end 15.24 8.89) (layer F.SilkS) (width 0.15))
	  (fp_line (start 15.24 8.89) (end 15.24 -8.89) (layer F.SilkS) (width 0.15))
	  (fp_line (start 15.24 -8.89) (end -15.24 -8.89) (layer F.SilkS) (width 0.15))
	  (fp_line (start -15.24 6.35) (end -12.7 6.35) (layer F.SilkS) (width 0.15))
	  (fp_line (start -12.7 6.35) (end -12.7 8.89) (layer F.SilkS) (width 0.15))
	  (fp_line (start 15.24 -8.89) (end -17.78 -8.89) (layer B.SilkS) (width 0.15))
	  (fp_line (start 15.24 8.89) (end 15.24 -8.89) (layer B.SilkS) (width 0.15))
	  (fp_line (start -17.78 8.89) (end 15.24 8.89) (layer B.SilkS) (width 0.15))
	  (fp_line (start -17.78 -8.89) (end -17.78 8.89) (layer B.SilkS) (width 0.15))
	  (fp_line (start -15.24 -8.89) (end -17.78 -8.89) (layer F.SilkS) (width 0.15))
	  (fp_line (start -17.78 -8.89) (end -17.78 8.89) (layer F.SilkS) (width 0.15))
	  (fp_line (start -17.78 8.89) (end -15.24 8.89) (layer F.SilkS) (width 0.15))
	  (fp_line (start -14.224 -3.556) (end -14.224 3.81) (layer Dwgs.User) (width 0.2))
	  (fp_line (start -14.224 3.81) (end -19.304 3.81) (layer Dwgs.User) (width 0.2))
	  (fp_line (start -19.304 3.81) (end -19.304 -3.556) (layer Dwgs.User) (width 0.2))
	  (fp_line (start -19.304 -3.556) (end -14.224 -3.556) (layer Dwgs.User) (width 0.2))
	  (fp_line (start -15.24 6.35) (end -15.24 8.89) (layer B.SilkS) (width 0.15))
	  (fp_line (start -15.24 6.35) (end -15.24 8.89) (layer F.SilkS) (width 0.15))


	  (pad 1 thru_hole rect (at -13.97 7.62 ${p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.RAW.str})
	  (pad 2 thru_hole circle (at -11.43 7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.GND.str})
	  (pad 3 thru_hole circle (at -8.89 7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.RST.str})
	  (pad 4 thru_hole circle (at -6.35 7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.VCC.str})
	  (pad 5 thru_hole circle (at -3.81 7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.P21.str})
	  (pad 6 thru_hole circle (at -1.27 7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.P20.str})
	  (pad 7 thru_hole circle (at 1.27 7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.P19.str})
	  (pad 8 thru_hole circle (at 3.81 7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.P18.str})
	  (pad 9 thru_hole circle (at 6.35 7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.P15.str})
	  (pad 10 thru_hole circle (at 8.89 7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.P14.str})
	  (pad 11 thru_hole circle (at 11.43 7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.P16.str})
	  (pad 12 thru_hole circle (at 13.97 7.3914 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.P10.str})

	  (pad 13 thru_hole circle (at -13.97 -7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.P1.str})
	  (pad 14 thru_hole circle (at -11.43 -7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.P0.str})
	  (pad 15 thru_hole circle (at -8.89 -7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.GND.str})
	  (pad 16 thru_hole circle (at -6.35 -7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.GND.str})
	  (pad 17 thru_hole circle (at -3.81 -7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.P2.str})
	  (pad 18 thru_hole circle (at -1.27 -7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.P3.str})
	  (pad 19 thru_hole circle (at 1.27 -7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.P4.str})
	  (pad 20 thru_hole circle (at 3.81 -7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.P5.str})
	  (pad 21 thru_hole circle (at 6.35 -7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.P6.str})
	  (pad 22 thru_hole circle (at 8.89 -7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.P7.str})
	  (pad 23 thru_hole circle (at 11.43 -7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.P8.str})
	  (pad 24 thru_hole circle (at 13.97 -7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.P9.str})

	  (pad 29 thru_hole circle (at 13.97 -5.08 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.P11.str})
	  (pad 28 thru_hole circle (at 13.97 -2.54 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.LED.str})
	  (pad 27 thru_hole circle (at 13.97 0 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.P13.str})
	  (pad 26 thru_hole circle (at 13.97 2.54 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A4.str})
	  (pad 25 thru_hole circle (at 13.97 5.08 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.A5.str})
	)`
      return `${standard}`
  }
}