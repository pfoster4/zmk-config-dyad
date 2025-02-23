# Dyad Keyboard

![alt text](images/dyad-overview.png)
*A compact, wireless, split ergonomic keyboard designed with travel and simplicity in mind.*

## Features
- **Wireless w/ Dongle** powered by ZMK firmware for work computers without bluetooth
- **34-key split layout** with 3x5 columnn staggered keys and two thumb keys per half
- **Super long battery life (9-12 month estimate)** with 850 mAh batteries in each half as peripherals
- **Simple and clean aesthetic** with components hidden out of sight and no unnecessary features
- **Reed switch + magnet system** for conventient stowing and power control
- **Ambients Silent Choc switches and LDSA low-profile keycaps**

## Table of Contents
- [Keymap](#keymap)
- [Parts List](#parts-list)
- [Build Guide](#build-guide)
- [Firmware Setup](#firmware-setup)
- [How to Flash Firmware](#how-to-flash-firmware)
- [Helpful Resources](#helpful-resources)

## Keymap
This keymap is a modified version of [Miryoku](https://github.com/manna-harbour/miryoku), a layered layout architecture intended for 3x5 keyboard halves with three thumb keys. We need to find a way to replicate the third thumb key Dyad only has two thumb keys. This is accomplished by using key combos. Tapping or holding both thumb keys on one half will perform the same behavior as the missing third thumb key. Additional combos are added for convenience. 

This keymap has six non-default layers to access full functionality of the keyboard: a number layer, symbol layer, function key layer, mouse control layer, navigation layer, and media control layer. Each layer is accessed by holding down the thumb keys as shown in the keymap diagram below. 

![alt text](images/keymap.png)

## Parts List
Many of these components have acceptable alternatives, just double check the PCB footprint requirements.

| Component | Description | Quantity |
|-----------|-------------|----------|
| PCBs | Custom-designed FR4 PCB (see pcb folder) | 1x of each half |
| Microcontrollers | [Seeed Studio XIAO nRF52840](https://www.mouser.com/ProductDetail/Seeed-Studio/102010448?qs=Znm5pLBrcAJ5g%252BWAkitg4w%3D%3D&countryCode=US&currencyCode=USD) | 2x (BT) or 3x (Dongle) |
| Key Switches | [Choc Switches](https://lowprokb.ca/products/ambients-silent-choc-switches) | 34x |
| Keycaps | [Low Profile LSDA Caps](https://lowprokb.ca/collections/keycaps/products/ldsa-low-profile-blank-keycaps) | 34x |
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
| 3D Printed Cases | [My preferred filament](https://www.amazon.com/dp/B08142W8XV?ref=ppx_yo2ov_dt_b_fed_asin_title) | ~60g |

## Build Guide
Section in progress.
1. **Solder Components**
   - Attach diodes, microcontroller, and reed switches.
   - Install magnets for power switching.
2. **Assemble the Case**
3. **Install Switches and Keycaps**
4. **Test Connections**
   - Verify each key press is registered correctly.
5. **Flash Firmware** (see [How to Flash Firmware](#how-to-flash-firmware))

## Firmware Setup
Section in progress.
- This keyboard runs **ZMK Firmware**.
- Modify your keymap in `config`.
- More details in [ZMK Docs](https://zmk.dev/docs).

## How to Flash Firmware
Section in progress.
1. Download the latest `.uf2` firmware build.
2. Connect your keyboard via USB.
3. Place it in bootloader mode (double-tap reset button).
4. Drag and drop the firmware file onto the device.
5. Reboot and test.

## Helpful Resources
- [Dyad CAD files](https://cad.onshape.com/documents/7f572f5029fef8eead929f6f/w/3338eb399b68b4bec0be7aa8/e/8d690b2dc0af4d791bdff9ef?renderMode=1&uiState=67ba591a8b0f840d79069d80)
- [ZMK Keymap Editor](https://nickcoutsos.github.io/keymap-editor/)
- [ZMK Docs](https://zmk.dev/docs)
- [Keyboard PCB Design Guide](https://github.com/ruiqimao/keyboard-pcb-guide)
- [FlatFootFox's Ergogen and KiCAD Guide](https://flatfootfox.com/ergogen-introduction/)
- [DIY Split Keyboard Guide](https://thomasbaart.nl/build-guide/)
- [Ergonomic Keyboard Community](https://www.reddit.com/r/ErgoMechKeyboards/)

---
