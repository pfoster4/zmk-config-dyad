# Dyad Keyboard - Build Guide
This section is still being filled out. 

[Link to main page](https://github.com/dyad-keeb/zmk-config-dyad/tree/main/README.md).

## Table of Contents
- [Tools List](#tools-list)
- [Install the Press-fit Nuts](#press-nuts)
- [Install the Spring Pins](#spring-pins)
- [Solder Diodes, Power and Reset Switch, and Battery Connector](#pre-stove-solder)
- [Pre-tin the Microcontroller Pads](#microcontroller-pretin)
- [Solder on the Microcontroller with a "Hotplate"](#stove-time)
- [Perform Continuity Tests](#continuity-tests)
- [Solder in the Key Switches](#key-switches)
- [Trim the Protruding Pins that will be Behind the Battery](#pin-trim)
- [Flash the Firmware](#firmware-flash)
- [Insert the Magnets and Install the Case Backs](#install-case)
- [Enjoy your Keyboard!](#enjoy)

## Tools List

| Component | Comment |
|-----------|-------------|
| Soldering Iron | A very fine soldering iron tip is preferred for surface mount connections. |
| Precision Tip Tweezers | These are very useful for orienting and holding the small components. |
| Hotplate | This is necessary to solder otherwise inaccessible connections between the microcontroller and PCB (I used my gas stove and a piece of aluminum). |
| Parallel Jaw Pliers | These aren't strictly necessary, but I found them very helpful for installing the press-fit nuts and spring pins into the PCB. |
| Hex Key | You'll need a tool to install whichever screws you decide on. The screws I've listed in the parts list take a 0.050" hex key. |
| Flush Cutters | These are used for cutting down some protruding pins from the back of the PCB where the battery is going to rest. |
| Multimeter | This is useful for double checking your components and workmanship, as well as troubleshooting. |

## Install the Press-fit Nuts

I designed Dyad to use press-fit nuts and spring pins so we can attach directly to the back of the PCB without any exposed mounting hardware (the holes in the PCB are covered by the key switches on the other side) or having to wrap around the edges. The press-fit nuts are low-profile, easy to install, and rock solid. The spring pins provide tight, precise alignment with high shear strength, allowing us to use fewer and smaller screws while still keeping everything secure.  

It's best to start the build with the press-fit nuts since they require some force to install, and you don’t want to risk slipping and damaging other components. The nuts I’ve linked in the parts list actually cut into the PCB material as they’re inserted, creating enough friction to stay put permanently. Once they’re in, they’re *in*. The key is to go slow and prevent the PCB from flexing too much during installation.  

I found that parallel jaw pliers work great for pressing the nuts into place. Since I was worried about putting too much stress on the PCB, I used a small aluminum plate as a backing to distribute the force evenly. In some cases, I had to work one side of the nut down first and then the other. The goal is to get them perfectly flush with the PCB surface with no gaps.  

![Press-fit nuts installed](images/press-nuts.png)  

Once the nuts are in, we can move on to installing the spring pins–so don’t put those pliers away just yet.  

## Install the Spring Pins

Spring pins are designed to be squeezed when installed, meaning that once they’re in, they constantly push outward against the walls of the hole. This allows for a bit more tolerance in both the PCB and the printed case while still benefiting from a strong double press-fit connection.  

That doesn’t mean they’re easy to install! The pin needs to be compressed so its diameter is smaller than the hole, while also being aligned and pushed in—all at the same time. It sounds easier than it is. But with persistence and patience, they *will* go in. And it’s worth it, because they’re the secret to making the case-to-PCB attachment feel so solid.  

### Tips for Installation  

I found it helpful to take extra time to carefully align the pin in the pliers before attempting to push it into the PCB. If it’s not well aligned, it will pivot around when pressed against the PCB, making installation harder. Once the pin is in place, it’s very secure and won’t come out without intentional effort.  

After the spring pins have started to insert into the PCB holes, a slight twisting motion can help bring them to full depth. It also helps to have the PCB resting on a solid, flat surface—like the aluminum plate used earlier. Insert the pins until they are flush with the top side of the PCB, but *not* protruding. Key switches will still need to be installed from the front in a later step.  

Once the spring pins are in, we’re ready to start soldering electrical components.  

> **Note:** I installed my spring pins much later in the build process, so you’ll see them *missing* in some of the next photos. I recommend not doing what I did—install them right after the press-fit nuts.

## Solder Diodes, Power and Reset Switch, and Battery Connector

Now we're going to solder everything *except* the microcontroller and key switches. Since all of these components are surface-mount, a precision tip for your soldering iron will be extremely helpful. 

If you're already familiar with using solder paste and hot plates, then you probably don't need to read the next couple sections. You can still read on to get a good laugh out of the scrappy way I got it done with what was on hand.

### Recommended Soldering Steps  

1. **Pre-tin one half of the pads.** Use a small amount of solder—less is better than too much, since you can always add more later.  
2. **Place the component.** Hold it in place with tweezers while melting the pre-tinned pad with your soldering iron. Ensure the component is flush against the board and the other lead is aligned with its pad. Remove the soldering iron *before* letting go of the component, and allow a few seconds for the solder to solidify.  
3. **Solder the second pad.** Heat the second pad and lead for a few seconds, then apply a tiny dip of solder to match the first side. Hold the iron in place briefly to let the solder flow properly into the joint.  
4. **Repeat for all remaining components, excluding the microcontroller and key switches.**  

> **Note:** Be sure to trim any plastic alignment nubs that may be sticking out from the bottom of your components. I didn’t include holes for them in the PCB layout because I didn’t want them showing through the other side. If these nubs aren’t removed, the component won’t sit flush against the PCB.  

For components with more than two solder pads, start by soldering *one* pad to hold the component in place. Then follow the same process for the remaining pads. The power slider switch and battery socket connector have extra pads beyond their electrical connections—be sure to solder *all* of them. These extra solder points help structurally secure the components to the board, reinforcing them against repeated use.  

![alt text](images/hand-solder-pre-board-2.png)  

Alignment isn’t *super* critical at this stage. You might notice some of your components look a little crooked—that's fine! In the next step, we'll use a hot plate, which will reflow the solder and allow surface tension to pull everything into place for a cleaner final look.

## Pre-tin the Microcontroller Pads

Next, we're prepping the board to solder the microcontroller using a hot plate. Technically, the "proper" way to do this is with solder paste and a reflow station, but I'll admit—I don't have that setup. Instead, I made it work with regular solder wire, the same aluminum plate we've been using, and a gas stove.  

What we're doing here is applying a *tiny* amount of solder to each pad where the microcontroller will sit. You can see in the image below just how little is needed—it's just barely domed. Less is definitely better in this case, because any excess solder could create a short between the microcontroller and the PCB. These two boards will be pressed *right* up against each other, so there's not much room for excess material without spreading into a wide, but thin layer.  

![alt text](images/hand-solder-pre-board.png)  

Be sure to pre-tin the three smaller pads in the middle of the two rows—these are for the reset button and battery terminals. These pads are completely inaccessible with a soldering iron once the microcontroller is placed, which is why we're using the hot plate method.  

For comparison, the Totem keyboard also uses Seeed Studio’s XIAO microcontrollers but gets around this issue by cutting holes through the PCB, allowing builders to solder from the reverse side into cross-sectioned vias. That’s a totally valid approach, and it lets you stick to just using a soldering iron. But personally, I really don’t like how it looks, and since I wasn’t planning on covering this section with a case anyway... here we are.  

Ready for the fun part?

## Solder on the Microcontroller with a "Hotplate"

I imagine there are probably some safety precautions I *should* be writing into this section. And I’m sure there are people who actually know what they’re doing who are screaming at their screens right now. Just don’t be stupid and burn something down. Keep a constant eye on the temperatures.  

Now, we’re going to heat the entire PCB evenly to melt all the solder at once, rather than going pad by pad with a soldering iron. This will reflow the pre-tinned solder pads under the microcontroller, pulling it down onto the PCB and properly joining the three otherwise inaccessible pads. At the same time, all the other solder joints will melt, allowing surface tension to help shift any slightly misaligned components into place.  

The way I set this up was by placing the aluminum plate I've used so far directly over a stove burner, putting the PCB on top of that, and aligning the microcontroller as precisely as possible over its pads. The plate I used was about half an inch thick, so even at full gas, it still took a couple of minutes for the PCB to reach solder-melting temperature. I actually couldn't get the temperature high enough on my smallest burner—aluminum is just *too* good at convective cooling—so I had to switch to a medium burner.  

Throughout this process, I tracked the temperature of the upward-facing enamel layer of the PCB using a kitchen probe thermometer. Over a couple of minutes, I let the temperature rise to about 150°C. Around this point, I could gently poke at the components with tweezers and see them shift—confirming that the solder had melted.  

![alt text](images/solder-stove-temp.png)  

One pretty interesting thing I noticed was the significant centering effect of surface tension on the microcontroller. Even when I nudged it slightly to the side, it snapped right back into position like it was on springs.  

Once the solder starts to melt, I recommend moving quickly. You just need to verify that all components have properly wetted and are in the correct position—then cut the heat! Be careful not to let the temperature rise too high. I saw a bit of smoke around 170°C but managed to shut things down before any permanent damage occurred.  

Beyond overheating, the biggest risk is leaving the board at an elevated temperature for *too* long. On my first board half, I used the small burner and tried following a hot plate temperature profile I found in a component datasheet. That profile had a target temperature of around 260°C, which I couldn’t even get close to. I ended up holding the board at 150–170°C for about 10 minutes before calling it quits. In hindsight, that was *super* unnecessary—so don’t do that. On the second board half, I used a larger burner, reached ~150°C much faster, and minimized the time spent at elevated temperature.  

The next step is to verify that all components still function properly and that our solder connections are solid.  

## Perform Continuity Tests

![alt text](images/post-board-solder-continuity-tests.png)


## Solder in the Key Switches

![alt text](images/first-look-with-keys.png)


## Trim the Protruding Pins that will be Behind the Battery

![alt text](images/pins-pre-trim.png)
![alt text](images/pins-post-trim.png)


## Flash the Firmware

![alt text](images/ready-for-case-back.png)


## Insert the Magnets and Install the Case Backs

![alt text](images/case-print-post-desupporting.png)
![alt text](images/dyad-bottom.png)


## Enjoy your Keyboard!

![alt text](images/dyad-overview.png)
![alt text](images/dyad-back.png)
![alt text](images/dyad-stowed.png)


---

[Back to main README page](https://github.com/dyad-keeb/zmk-config-dyad/tree/main/README.md).
