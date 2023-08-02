import NavLink from '../../Components/navLink';
import Footer from '../../Components/footer';
import style from '../../Components/page.module.css';

export default function attachments() {
	return (
		<main>
			<div className={style.main}>
				<NavLink />
				<div className={style.description}>
					<h1>Game Objects - Attachments</h1>
					<p>
						See{' '}
						<a
							href="https://github.com/cc2modteam/cc2me/blob/master/cc2me/savedata/constants.py#L93"
							target={'_blank'}
						>
							cc2me/savedata/constants.py#L93
						</a>
					</p>
					<article>
						<h3>AWACS = 41</h3>
						<p>Aircraft Radar.</p>
					</article>
					<article>
						<h3>AirObsCam = 39</h3>
					</article>
					<article>
						<h3>BattleDroids = 100</h3>
						<p>Mule deployable droid box.</p>
					</article>
					<article>
						<h3>Bomb0 = 31</h3>
					</article>
					<article>
						<h3>Bomb1 = 32</h3>
					</article>
					<article>
						<h3>Bomb2 = 33</h3>
					</article>
					<article>
						<h3>CIWS = 24</h3>
						<p>
							Ground-mounted anti-missile/anti-aircraft defence. Only has 100 shots in
							it's magazine but is deadly against slow moving aircraft.
						</p>
						<p>
							When under manual control you can still shoot at ground units with these
							but they only inflict a very minor amount of damage (a CIWS turret will
							take nearly 5 minutes of constant fire to kill a Bear)
						</p>
					</article>
					<article>
						<h3>ShipCruiseMissile = 28</h3>
					</article>
					<article>
						<h3>ShipCounterMeasure = 76</h3>
					</article>
					<article>
						<h3>ShipFlare = 29</h3>
						<p>
							When used by the carrier, consumes regular "flares" from stock to provide
							illumunation. Unfortunately flares launched this way do not have any
							impact on incoming heat guided missiles.
						</p>
					</article>
					<article>
						<h3>ShipCIWS = 26</h3>
						<p>
							CIWS gun for ships, unlike ground CIWS these tend to be mounted on
							attachments that have movement limits. They can only aim and fire within
							the allowed arc (see the chassis xml <code>attachment</code> for carrier
							and fish)
						</p>
					</article>
					<article>
						<h3>ShipCam = 30</h3>
						<p>
							This is the observation camera mounted on the carrier. It seems
							functionally identical to the Observation camera for ground units except
							it has a physically larger model. With save editing this can be mounted
							on every other unit and works.
						</p>
					</article>
					<article>
						<h3>DriverSeat = 38</h3>
						<p>
							Special implicit attachment that all player-drivable units are spawned
							with in slot 0
						</p>
					</article>
					<article>
						<h3>Flares = 43</h3>
					</article>
					<article>
						<h3>FuelTank = 42</h3>
						<p>Aircraft drop tank. Contains 1000l of fuel.</p>
					</article>
					<article>
						<h3>Gun100mm = 18</h3>
					</article>
					<article>
						<h3>Gun120mm = 19</h3>
					</article>
					<article>
						<h3>ShipGun160mm = 20</h3>
					</article>
					<article>
						<h3>Gun15mm = 87</h3>
						<p>
							Tiny turret, most often seen on 1-shield islands, actually fires 30mm
							ammo.
						</p>
						<p>
							Unlike the other turrets you can write lua scripting to equip this on any
							docked unit regardless of the fact you can't have them in stock. Several
							mods make use of this to allow these turrets to be equipped on ground
							units (or the Carrier).
						</p>
					</article>
					<article>
						<h3>Gun20mm = 21</h3>
						<p>Aircraft 20mm gun, very accurate.</p>
					</article>
					<article>
						<h3>Gun30mm = 17</h3>
					</article>
					<article>
						<h3>Gun40mm = 85</h3>
					</article>
					<article>
						<h3>MissileAA = 36</h3>
						<p>Single AA missile hardpoint.</p>
					</article>
					<article>
						<h3>MissileAALauncher = 27</h3>
						<p>
							Warship AA missile launcher, sadly only works when mounted on Needlefish,
							Swordfish or the carrier (and powered on) When mounted on a land turret
							or ground unit, it never fires.
						</p>
					</article>
					<article>
						<h3>MissileIR = 34</h3>
					</article>
					<article>
						<h3>MissileIRLauncher = 25</h3>
						<p>
							Re-loadable IR missile launcher (has a magazine for 4 missiles). Often
							seen on Seals, Walrus and Ground Turrets.
						</p>
					</article>
					<article>
						<h3>MissileLaser = 35</h3>
						<p>
							Operated similar to the cruise missile except that it is air-launched and
							has a relatively short range. Deals low damage (2 are required to kill a
							Seal). The lua scripting hints at different laser codes, which are
							probably used internally to allow multiple pilots to shoot at different
							laser targets.
						</p>
						<p>
							Like the TV missile they trigger automatic flare launchers but are not
							otherwise impacted by them.
						</p>
						<p>The AI never seems to fire these</p>
					</article>
					<article>
						<h3>MissileTV = 72</h3>
						<p>
							Player controllable guided missile, similar in spirit to the Wire-Guided
							missile of CC1 or the AGM-65 Maverick missile.
						</p>
						<p>
							Like other missiles, it triggers flare launchers but is not impacted by
							them.
						</p>
						<p>The AI never seems to fire these.</p>
					</article>
					<article>
						<h3>Noisemaker = 73</h3>
					</article>
					<article>
						<h3>ObsCam = 37</h3>
					</article>
					<article>
						<h3>Radar = 81</h3>
					</article>
					<article>
						<h3>Rearm100mm = 93</h3>
						<p>Resupply box for Mule</p>
					</article>
					<article>
						<h3>Rearm120mm = 94</h3>
						<p>Resupply box for Mule</p>
					</article>
					<article>
						<h3>Rearm20mm = 90</h3>
						<p>Resupply box for Mule</p>
					</article>
					<article>
						<h3>Rearm30mm = 91</h3>
						<p>Resupply box for Mule</p>
					</article>
					<article>
						<h3>Rearm40mm = 92</h3>
						<p>Resupply box for Mule</p>
					</article>
					<article>
						<h3>RearmIR = 96</h3>
						<p>Resupply box for Mule</p>
					</article>
					<article>
						<h3>Refuel = 95</h3>
						<p>Resupply fuel tank for Mule</p>
					</article>
					<article>
						<h3>RocketPod = 22</h3>
						<p>
							Explosive rocket launcher, contains 19 rockets. Lots of fun but can be
							tricky to aim.
						</p>
						<p>Like missiles, it also triggers flare launchers.</p>
						<p>
							Rockets can sometimes malfunction and veer off target significantly.
						</p>
						<p>
							CIWS does not seem to try to intercept these, but they may just be too
							fast.
						</p>
					</article>
					<article>
						<h3>SmallCam = 40</h3>
					</article>
					<article>
						<h3>SmokeBomb = 83</h3>
					</article>
					<article>
						<h3>SmokeTrail = 84</h3>
					</article>
					<article>
						<h3>SonicPulse = 82</h3>
					</article>
					<article>
						<h3>Torpedo = 70</h3>
					</article>
					<article>
						<h3>TorpedoCountermesure = 74</h3>
					</article>
					<article>
						<h3>ShipTorpedo = 75</h3>
					</article>
					<article>
						<h3>VirusBot = 23</h3>
					</article>
					<article>
						<h3>Autocannon = 99</h3>
						<p>The gun used by the combat droid. Very high rate of damage.</p>
					</article>
				</div>
			</div>
			<Footer />
		</main>
	);
}
