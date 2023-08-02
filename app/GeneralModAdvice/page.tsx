import NavLink from '../Components/navLink';
import Footer from '../Components/footer';
import style from '../Components/page.module.css';

export default function generalModAdvice() {
	return (
		<main>
			<div className={style.main}>
				<NavLink />
				<div className={style.description}>
					<article>
						<h1>Carrier Command 2 Mods</h1>
						<p>
							CC2's mod system works by replacing individual files. You cannot enable
							two mods if they both contain the same file (eg the same lua script, game
							object mesh, sound or 3d shader etc)
						</p>
					</article>
					<article>
						<h2>CC2 Mod Capability</h2>
						<p>
							Most mods are concerned with how the various control screens on the
							carrier work.
						</p>
						<p>Some alter the various vehicle HUD camera behaviours.</p>
						<p>
							A not-exhaustive snapshot of some of the things people have managed to
							mod include:
						</p>
						<dl>
							<dt>Control Screens</dt>
							<dd>Extra waypoint options</dd>
							<dd>
								Vehicle loadout options/limit (eg, change how hardpoints can be used)
							</dd>
							<dd>Adding extra control screens to the carrier/units</dd>
							<dt>Vehicle HUD Camera Views</dt>
							<dd>Show more details about targets in camera views</dd>
							<dd>Fuel-remaining timers</dd>
							<dd>More target lock options</dd>
							<dt>Vehicle options</dt>
							<dd>Add/move unit hardpoints</dd>
							<dt>Weapon physics</dt>
							<dd>Naval gunfire spread</dd>
							<dd>Missile/Torpedo speeds</dd>
							<dt>Visuals/Audio</dt>
							<dd>Skins</dd>
							<dd>New 3d models for units</dd>
							<dd>New weapon sound effects</dd>
						</dl>
					</article>
					<article>
						<h2>Limitations</h2>
						<p>Things that we cannot do (yet) that often are requested.</p>
						<dl>
							<dt>Change weapon ammo capacity</dt>
							<dt>Change weapon damage</dt>
							<dt>Change unit hitpoints/fuel capacity</dt>
							<dt>Create new units</dt>
							<dt>Land aircraft on islands / barges / needlefish</dt>
						</dl>
						<p>
							Not all screen scripts have access to the same native functions, eg:
						</p>
						<table>
							<tr>
								<th>script</th>
								<th>enter vehicles</th>
								<th>play sounds</th>
							</tr>
							<tr>
								<td>screen_vehicle_control.lua</td>
								<td>yes</td>
								<td>no</td>
							</tr>
							<tr>
								<td>screen_radar.lua</td>
								<td>no</td>
								<td>yes</td>
							</tr>
							<tr>
								<td>screen_weapons_anti_air.lua</td>
								<td>no</td>
								<td>yes</td>
							</tr>
							<tr>
								<td>vehicle_hud.lua</td>
								<td>no/sorta</td>
								<td>no</td>
							</tr>
						</table>
					</article>
				</div>
			</div>
			<Footer />
		</main>
	);
}
