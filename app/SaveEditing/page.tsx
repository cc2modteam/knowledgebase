import NavLink from '../Components/navLink';
import Footer from '../Components/footer';
import style from '../Components/page.module.css';

export default function saveEditing() {
	return (
		<main>
			<div className={style.main}>
				<NavLink />
				<div className={style.description}>
					<article>
						<h1>Save Editing</h1>
						<p>
							Editing the save.xml files opens up a lot of possibilities, but can lead
							to the game crashing if you change too much (or too little)
						</p>
						<p>Some of the things that can be done by editing the save files are:</p>
						<dl>
							<dt>Give human teams Swordfish (or any number of other units)</dt>
							<dt>Mounting any weapon on an aircraft/ship/turret</dt>
							<dt>Change vehicle ammunition and hitpoints</dt>
							<dt>Add/Remove islands (up to the hard limit of 64)</dt>
							<dt>Modify the carrier and island inventory</dt>
							<dt>Change island production types</dt>
							<dt>Change island biomes</dt>
						</dl>
						<p>There are two community supported map editors:</p>
						<dl>
							<dt>
								<a href="https://github.com/cc2modteam/cc2me"> cc2me </a>- Add/Remove
								islands units and alter weapon attachments and ammunition counts
							</dt>
							<dt>
								<a href="https://bitbucket.org/Developpeur3d/carrier-command-2-saves-editor/src/master/">
									carrier command 2 saves editor
								</a>{' '}
								- Add/Remove islands, alter carrier inventory and island blueprint types
							</dt>
						</dl>
					</article>
				</div>
			</div>
			<Footer />
		</main>
	);
}
