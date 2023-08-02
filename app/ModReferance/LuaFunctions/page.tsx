import NavLink from '../../Components/navLink';
import Footer from '../../Components/footer';
import style from '../../Components/page.module.css';

export default function luaFunctions() {
	return (
		<main>
			<div className={style.main}>
				<NavLink />
				<div className={style.description}>
					<h1>CC2 Lua Functions and Patterns</h1>
					<section>
						<article>
							<h2>Native Functions</h2>
							<p>
								These are functions that lua scripts can call to interact with the core
								C/C++ game process, such as getting the ID or type of the currently
								controlled vehicle, the angle the current camera is pointing or to issue
								a production order. Most of these functions are named like
								<code>update_*</code> such as
								<code>update_get_camera_heading()</code>
							</p>
							<p>
								The functions we know about (because they are in use in the mod dev kit)
								are recorded here Some of the more commonly used functions and object
								types are captured below:
							</p>
						</article>
						<article>
							<h3>e_active_input = update_get_active_input_type()</h3>
							<pre>
								<code>
									is_keyboard = update_get_active_input_type() == e_active_input.keyboard
								</code>
							</pre>
							<p>
								Will return the current input mode value as one of
								<code>e_active_input</code>
							</p>
						</article>
						<article>
							<h3>string = update_get_loc(e_loc)</h3>
							<pre>
								<code>lang_pause = update_get_loc(e_loc.interaction_pause)</code>
							</pre>
							<p>
								Will return the localised string from one of the index values defined in
								<code>e_loc</code>
							</p>
						</article>
						<article>
							<h3>Vehicle = update_get_screen_vehicle()</h3>
							<p>
								Returns the Vehicle object handle for the vehicle that the screen is
								attached to.
							</p>
						</article>
						<article>
							<h3>update_play_sound(e_audio_effect_type)</h3>
							<pre>
								<code>update_play_sound(e_audio_effect_type.telemetry_2_radar)</code>
							</pre>
							<p>
								Will trigger playback of one of the wav clips defined in
								<code>e_audio_effect_type</code>.
							</p>
							<p>
								Note, this is only provided when you are on-foot. this function is not
								mapped when you are using an attached vehicle camera.
							</p>
						</article>
						<article>
							<h3>update_set_screen_state_exit()</h3>
							<p>
								When called, the current screen/camera is exited. Eg, if you are viewing
								a camera from a vehicle control seat, you are returned to the control
								screen. If you are on the control screen, you are exited from the screen
								and remain in the seat.
							</p>
						</article>
					</section>
					<section>
						<article>
							<h2>Vehicle</h2>
							<p>
								Vehicle objects are one of the main ways we can interact with the game
								engine. They have a number of methods that we can use to find their
								type, location, speed, health, and loadout configuration etc.
							</p>
							<p>
								Unfortunately, not all of the scripts are able to access all of the
								possible vehicle methods. For example, the HUD scripting is unable to
								read waypoint data from a vehicle.
							</p>
						</article>
						<article>
							<h3>ref = v:get()</h3>
							<p>
								Appears alot, I am not sure what this does, it may be a form of locking.
								It seems related to populating the lua object with up-to-date values
								from the native engine.
							</p>
							<p>
								The most common pattern is to skip doing something with the vehicle if
								this returns <code>nil</code>. eg:
							</p>
							<pre>
								<code>
									if vehicle:get() == nil or g_is_connected == false then
									update_add_ui_interaction(update_get_loc(e_loc.interaction_cancel),
									e_game_input.back) elseif g_is_map_overlay == false then
									update_add_ui_interaction(update_get_loc(e_loc.interaction_exit),
									e_game_input.back) end
								</code>
							</pre>
						</article>
						<article>
							<h3>e_game_object_type = v:get_definition_index()</h3>
							<p>
								Returns the <code>e_game_object_type</code> of the vehicle.
							</p>
						</article>
						<article>
							<h3>bool = v:get_is_docked()</h3>
							<p>Returns true if this vehicle is docked.</p>
						</article>
						<article>
							<h3>bool = v:get_is_visible()</h3>
							<p>Returns true the vehicle is visible to the current team.</p>
						</article>
						<article>
							<h3>Position = v:get_position()</h3>
							<p>Gets the Position object for the vehicle</p>
						</article>
						<article>
							<h3>int = v:get_waypoint_count()</h3>
							<p>Get the number of waypoints (does not work in HUD script)</p>
						</article>
						<article>
							<h3>Waypoint = v:get_waypoint(num)</h3>
							<p>Get a waypoint (does not work in HUD script)</p>
						</article>
					</section>
					<section>
						<article>
							<h2>Position</h2>
							<p>Represent a 3d map location.</p>
							<p>
								Note, when obtains from a Vehicle object, x is latitude, y is altitude
								and z is longitude. Position objects obtained for waypoints on the
								holomap seem to swap y and z.
							</p>
						</article>
						<article>
							<h2>float = p:x()</h2>
							<p>Gets x as a float</p>
						</article>
						<article>
							<h2>float = p:z()</h2>
							<p>Gets y as a float</p>
						</article>
						<article>
							<h2>float = p:y()</h2>
							<p>Gets z as a float</p>
						</article>
					</section>
				</div>
			</div>
			<Footer />
		</main>
	);
}
