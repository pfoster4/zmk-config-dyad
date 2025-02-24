# Dyad Keyboard

![alt text](images/dyad-overview.png)
![alt text](images/dyad-stowed.png)
*A compact, wireless, split ergonomic keyboard designed with travel and simplicity in mind.*

## Features
- **Wireless w/ Dongle** powered by ZMK firmware for work computers without bluetooth
- **34-key split layout** with 3x5 columnn staggered keys and two thumb keys per half
- **Super long battery life estimated at 9-12 months** with 850 mAh batteries in each half as peripherals 
- **Simple and clean look** with components hidden out of sight and no unnecessary features
- **Reed switch + magnets** for travel convenience 
- **Ambients Silent Choc switches and LDSA low-profile keycaps**

## Table of Contents
- [Why does this Exist?](#why-me)
- [Keymap](#keymap)
- [Parts List](#parts-list)
- [Build Guide](#build-guide)
- [Helpful Resources](#helpful-resources)

## Why does this Exist?
I designed Dyad because I couldn't find another keyboard that had exactly what I needed, without all the extra stuff I didn't. Also, let's be honest–if you're here, you either have the same sickness as me, or a morbid (and very niche) sense of curiosity. 

I travel a lot for work, and have been using a Piantor keyboard for the last year or so. Unfortunately, I plugged it in with the TRRS cable only partially inserted and fried one of the microcontrollers. I decided to take the opportunity as an excuse to design my own board from scratch. 

Wires are cumbersome and can be annoying. Obviously this thing needs to be wireless. I move around between computers at work, and none of them have built in bluetooth. Using a dongle solves this, making both halves peripherals instead of host devices. This balances power usage and extends battery life. I found the Seeed Studio XIAO nRF52840 microcontroller to be a great option for this. It's super small, has BLE functionality, and is relatively cheap. I found a small USB-C to USB-A adapter that fit inside a recess I put in the case, so everything packs together nicely. 

I wanted to maximize my battery life. I like simple keyboards. Extra features like OLEDs are cool, but they still draw power and reduce battery life. Dyad is intentionally very simple in its features, which helps strive towards a keyboard that rarely needs charging. 

I didn't like having an exposed microcontroller on the front of the board. It's very easy to short the pins with a drop of coffee (oops), and the microcontoller takes up precious real estate for what could otherwise be a smaller profile. Instead of mounting the microcontroller on top like most builds, I soldered it directly to the back of the PCB–no headers, no cutouts, no exposed pins. The XIAO board does require diodes at this key count, but there's still plenty of room to fit a 850 mAh battery, and get a subtle but noticable five degree tenting angle for better wrist ergonomics. 

Finally, I like the idea of magnets holding the two keyboard halves together like a few other board designers have done. I wanted to take it a step further and introduce reed switches in a normally closed configuration to the power circuits. This makes it impossible to forget to leave the board on or accidentally send keypresses when traveling, since the circuit will switch open whenever the two keyboard halves are magnetically latched together. Is this a bit gimmicky? Sure. But is it useful? I think so! If you'd prefer, you can bridge the dedicated solder pads instead of using a reed switch, and just rely on the normal slider switch. The magnetic attachment and automatic power management make Dyad especially convenient for travel–no worrying about whether it's on or off. 

The result? A wireless, travel-friendly, durable split keyboard that stays charged for ages and looks pretty good doing it. 

## Keymap
This keymap is a modified version of [Miryoku](https://github.com/manna-harbour/miryoku), a layered layout architecture intended for 3x5 keyboard halves with three thumb keys. We need to find a way to replicate the third thumb key Dyad only has two thumb keys. This is accomplished by using key combos. Tapping or holding both thumb keys on one half will perform the same behavior as the missing third thumb key. Additional combos are added for convenience.

This keymap has six non-default layers to access full functionality of the keyboard: a number layer, symbol layer, function key layer, mouse control layer, navigation layer, and media control layer. Each layer is accessed by holding down the thumb keys as shown in the keymap diagram below.

![alt text](images/keymap2.png)

## Parts List
Many of these components have acceptable alternatives. Be sure to double check the PCB footprint requirements before deviating.

| Component | Description | Quantity |
|-----------|-------------|----------|
| PCBs | [Custom-designed Dyad PCBs](https://github.com/dyad-keeb/zmk-config-dyad/tree/main/pcb/zip%20files) | 1x of each half |
| Microcontrollers | [Seeed Studio XIAO nRF52840](https://www.mouser.com/ProductDetail/Seeed-Studio/102010448?qs=Znm5pLBrcAJ5g%252BWAkitg4w%3D%3D&countryCode=US&currencyCode=USD) | 2x (BT) or 3x (Dongle) |
| Key Switches | [Choc Switches (Ambients Silent Twilights)](https://lowprokb.ca/products/ambients-silent-choc-switches) | 34x |
| Keycaps | [Low Profile LSDA Caps (1u blanks)](https://lowprokb.ca/collections/keycaps/products/ldsa-low-profile-blank-keycaps) | 34x |
| Diodes | [SMD Diodes](https://www.mouser.com/ProductDetail/Micro-Commercial-Components-MCC/MMSZ5246B-TP?qs=ZNK0BnemlqEr9Va1g49r5g%3D%3D&countryCode=US&currencyCode=USD) | 34x |
| Power Switches | [SLW-66527511-SMT-TR](https://www.mouser.com/ProductDetail/Same-Sky/SLW-66527511-SMT-TR?qs=1Kr7Jg1SGW%252BCp04CqrZlUg%3D%3D&countryCode=US&currencyCode=USD) | 2x |
| Batteries | [ASR00036 850 mAh](https://www.mouser.com/ProductDetail/TinyCircuits/ASR00036?qs=byeeYqUIh0Mizxtsp6GM5A%3D%3D) | 2x |
| Battery Connectors | [SM02B-SRSS-TB](https://www.mouser.com/ProductDetail/JST-Commercial/SM02B-SRSS-TBLFSN?qs=cdbOS8ANM9BWPfwllEYjZw%3D%3D) | 2x |
| Reset Buttons | [B3U-1000P-B](https://www.mouser.com/ProductDetail/Omron-Electronics/B3U-1000P-B?qs=AO7BQMcsEu6QxhKppRpaJA%3D%3D) | 2x |
| Reed Switches (optional) | [MK24-B-2-OE](https://www.mouser.com/ProductDetail/MEDER-electronic/MK24-B-2-OE?qs=E8j%2FIcuE3oXcUsXW7SbUjw%3D%3D&countryCode=US&currencyCode=USD) | 2x |
| Magnets | [Magnets, 10mm x 5mm x 2mm](https://www.amazon.com/dp/B0B6VKY7Y2?ref_=ppx_hzsearch_conn_dt_b_fed_asin_title_4) | 10x |
| Press-Fit Nuts | [2-56 Thread for 0.147" Dia Hole](https://www.mcmaster.com/94648A310/) | 4x |
| Spring Pins | [1/16" Dia x 3/16" Long](https://www.mcmaster.com/98296A015/) | 8x |
| Screws | [2-56 Thread x 1/8" Long](https://www.mcmaster.com/92949A174/) | 2x |
| Grippy Bumpers | [1/4" Dia x 1/16" Thick](https://www.amazon.com/dp/B07R17T68B?ref_=ppx_hzsearch_conn_dt_b_fed_asin_title_2) | 10x |
| Dongle Adapter | [USB-C male to USB-A male](https://www.amazon.com/dp/B0CFLWC8G1?ref=ppx_yo2ov_dt_b_fed_asin_title) | 1x |
| 3D Printed Cases | [Case files](https://github.com/dyad-keeb/zmk-config-dyad/tree/main/case) and [my preferred filament](https://www.amazon.com/dp/B08142W8XV?ref=ppx_yo2ov_dt_b_fed_asin_title) | ~60g |

## Build Guide
Read the Dyad build guide [here](https://github.com/dyad-keeb/zmk-config-dyad/tree/main/build-guide.md).

## Helpful Resources
- [Dyad CAD files](https://cad.onshape.com/documents/7f572f5029fef8eead929f6f/w/3338eb399b68b4bec0be7aa8/e/8d690b2dc0af4d791bdff9ef?renderMode=1&uiState=67ba591a8b0f840d79069d80)
- [ZMK Keymap Editor](https://nickcoutsos.github.io/keymap-editor/)
- [ZMK Docs](https://zmk.dev/docs)
- [Keyboard PCB Design Guide](https://github.com/ruiqimao/keyboard-pcb-guide)
- [FlatFootFox's Ergogen and KiCAD Guide](https://flatfootfox.com/ergogen-introduction/)
- [DIY Split Keyboard Guide](https://thomasbaart.nl/build-guide/)
- [Ergonomic Keyboard Community](https://www.reddit.com/r/ErgoMechKeyboards/)

---
