import NavLink from '../../Components/navLink';
import Footer from '../../Components/footer';
import style from '../../Components/page.module.css';

export default function units() {
	return (
		<main>
			<div className={style.main}>
				<NavLink />
				<div className={style.description}>
					<h1>Game Objects - Units</h1>
					<p>
						See{' '}
						<a
							href="https://github.com/cc2modteam/cc2me/blob/master/cc2me/savedata/constants.py#L73"
							target={'_blank'}
						>
							cc2me/savedata/constants.py#L73
						</a>
					</p>
					<article>
						<h3>Albatross = 8</h3>
						<p>
							Classic fixed-wing aircraft. 4 weapon hardpoints, one aircraft turret
							mount, and no utility points.
						</p>
					</article>
					<article>
						<h3>Barge = 16</h3>
						<p>
							Carries cargo and fuel from islands to carriers. Can be driven by humans.
							Does not seem to consume fuel.
						</p>
					</article>
					<article>
						<h3>Bear = 6</h3>
						<p>
							Tracked vehicle, can mount 100mm guns and 120mm artillery, has 2 utility
							points.
						</p>
					</article>
					<article>
						<h3>Carrier = 0</h3>
						<p>The player carrier.</p>
						<p>
							14 x ship hardpoints (ship camera, naval gun, naval ciws, cruise missile,
							torpedoes, flare launcher etc)
						</p>
						<p>8 x ground unit bays 8 x air unit bays 1 x lifeboat bay</p>
						<p>
							The carrier is special in that air and ground units can be
							embarked/unloaded. It can also re-supply ships with fuel and ammunition.
						</p>
					</article>
					<article>
						<h3>Droid = 97</h3>
						<p>Combat droids deployed by the MULE</p>
						<p>
							Droids actually have 2x high-repeat 30mm guns that seem to deal MUCH more
							damage than the 40mm gun.
						</p>
					</article>
					<article>
						<h3>Jetty = 64</h3>
						<p>
							This is actually called "drydock" in the Lua. It is where your main
							carrier is launched from when you start a new game. It cannot be
							destroyed and cannot move.
						</p>
					</article>
					<article>
						<h3>Lifeboat = 57</h3>
						<p>
							The little orange escape pod on the port side of your Carrier. Through
							scripting you can deploy it but it cannot (yet) be driven around.
						</p>
					</article>
					<article>
						<h3>Manta = 10</h3>
						<p>
							Fast jet, 4 weapon hardpoints, 1 aircraft camera, 1 AWACS, 2 utility
							points.
						</p>
					</article>
					<article>
						<h3>Mule = 88</h3>
						<p>Ground support unit, 6 "special" resupply boxes.</p>
						<p>
							The Mule can re-supply fuel, IR missiles and ammunition to ground units
							(and ships I think - bredroll) but sadly not aircraft.
						</p>
					</article>
					<article>
						<h3>Needlefish = 77</h3>
						<p>
							Small warship, very fast, has 2 ship hardpoints. Can be mounted with any
							other normal weapon through save-editing.
						</p>
					</article>
					<article>
						<h3>Petrel = 14</h3>
						<p>
							Heavy-lift air transport, 4 wing hardpoints, 1 aircraft camera. Can
							airlift any ground unit (except turrets, droids or virus bots).
						</p>
						<p>
							Interesting fact, when carried by a Petrel, a ground unit is invulnerable
							and uses no fuel.
						</p>
						<p>
							Through save editing, can be made to carry aircraft or needlefish (though
							not for long).
						</p>
					</article>
					<article>
						<h3>Razorbill = 12</h3>
						<p>Small agile helo, 2 aircraft weapon points, 2 utility points.</p>
					</article>
					<article>
						<h3>Seal = 2</h3>
						<p>Standard light ground unit, 1 turret, 2 utility points</p>
					</article>
					<article>
						<h3>Swordfish = 79</h3>
						<p>Large warship, 3 naval hardpoints</p>
					</article>
					<article>
						<h3>Turret = 59</h3>
						<p>
							Buildable ground turret, vanilla game will carry IR missile, CIWS, 30mm,
							40mm or 15mm gun. Through save edits and/or XML changes they can carry
							and use other attachments
						</p>
					</article>
					<article>
						<h3>VirusBot = 58</h3>
						<p>
							The Boston Dynamics robot dog virus bot - see{' '}
							<a href="https://www.bostondynamics.com/products/spot" target={'_blank'}>
								Spot
							</a>
						</p>
					</article>
					<article>
						<h3>Walrus = 4</h3>
						<p>
							Standard medium ground unit, 1 turret, 2 utility points, more hitpoints
							than a seal
						</p>
					</article>
				</div>
			</div>
			<Footer />
		</main>
	);
}
