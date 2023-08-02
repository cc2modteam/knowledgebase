import NavLink from '../../Components/navLink';
import Footer from '../../Components/footer';
import style from '../../Components/page.module.css';

export default function specialItems() {
	return (
		<main>
			<div className={style.main}>
				<NavLink />
				<div className={style.description}>
					<h1>Special Objects</h1>
					<article>
						<h2>Units</h2>
						<table>
							<tr>
								<th>Unit</th>
								<th>Can Resupply</th>
								<th>Can Airlift</th>
								<th>Can Launch*</th>
							</tr>
							<tr>
								<td>Carrier</td>
								<td>Ship fuel/ammo</td>
								<td></td>
								<td>Air/Gnd/Lifeboat</td>
							</tr>
							<tr>
								<td>Mule</td>
								<td>Gnd fuel/ammo</td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td>Petrel</td>
								<td></td>
								<td>Gnd</td>
								<td></td>
							</tr>
							<tr>
								<td>Drydock</td>
								<td></td>
								<td></td>
								<td>Carrier</td>
							</tr>
						</table>
						<p>
							*If attached in a <code>vehicle attachments</code> slot, these units can
							be launched.
						</p>
					</article>
					<article>
						<h2>Attachments</h2>
						<table>
							<tr>
								<th>Item</th>
								<th>Inventory**</th>
								<th>Reloads</th>
							</tr>
							<tr>
								<td>15mm turret</td>
								<td>infinite supply</td>
								<td>uses 30mm</td>
							</tr>
							<tr>
								<td>virus bot</td>
								<td></td>
								<td>virus bot</td>
							</tr>
							<tr>
								<td>160mm gun</td>
								<td>infinite supply</td>
								<td></td>
							</tr>
							<tr>
								<td>160mm gun</td>
								<td>infinite supply</td>
								<td></td>
							</tr>
							<tr>
								<td>naval Torpedo launcher</td>
								<td>infinite supply</td>
								<td></td>
							</tr>
							<tr>
								<td>naval Camera</td>
								<td>infinite supply</td>
								<td></td>
							</tr>
							<tr>
								<td>naval Flare launcher</td>
								<td>infinite supply</td>
								<td></td>
							</tr>
							<tr>
								<td>naval countermeasures</td>
								<td>infinite supply</td>
								<td></td>
							</tr>
							<tr>
								<td>Cruise Missile launcher</td>
								<td>infinite supply</td>
								<td></td>
							</tr>
						</table>
						<p>
							**By editing the Lua scripts you can attach some items in the loadout
							screen regardless of stock levels
						</p>
					</article>
				</div>
			</div>
			<Footer />
		</main>
	);
}
