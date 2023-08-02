import NavLink from '../Components/navLink';
import Footer from '../Components/footer';
import style from '../Components/page.module.css';

export default function luaScriptDebugging() {
	return (
		<main>
			<div className={style.main}>
				<NavLink />
				<div className={style.description}>
					<article>
						<h1>Debugging CC2 Lua scripts</h1>
						<p>
							When a script is running (ie, a screen is powered on or you are viewing a
							vehicle camera) you can insert <code>print()</code> statements into the
							lua to see what is going on. Normally when you run CC2 any output printed
							this way cannot be seen.
						</p>
						<p>
							The easiest method to see this output is to use a console application
							like Git Bash. Other methods such as running CC2 inside a programming IDE
							also work and allow you to see this output.
						</p>
					</article>
					<article>
						<h2>Developer Mode</h2>
						<p>
							When CC2 is launched with the extra <code>-dev</code> command-line option
							it will do some extra things that will help mod developers (and some
							things that wont help). With <code>-dev</code>, CC2 will re-load any
							local Lua script when it changes. This can be useful for rapid debug
							changes. If however you edit a game object XML file the game can crash
							when attempting to reload.
						</p>
					</article>
					<article>
						<h2>Using Git Bash for Debug output</h2>
						<p>
							Install <a href="https://gitforwindows.org/">Git for Windows</a>
						</p>
						<p>
							Once installed, open an explorer window and navigate to your Steam Apps
							folder (eg "C:\Program Files (x86)\Steam\steamapps\common\Carrier Command
							2") right-click on the folder and click "Git Bash Here".
						</p>
						<p>
							You should then see a black text window and a "prompt" output similar to:
						</p>
						<pre>
							<code>
								inb@DOWNSTAIRS MINGW64 /c/Program Files
								(x86)/Steam/steamapps/common/Carrier Command 2 $
							</code>
						</pre>
						<p>
							If you type <code>ls</code> and hit enter, you should see something
							similar to this:
						</p>
						<pre>
							<code>
								$ ls carrier_command.exe* dedicated_server.exe* openvr_api.dll*
								server_config.xml carrier_command_vr.exe* mod_dev_kit/ rom_0/
								steam_api.dll* mods/ saved_games/ steam_appid.txt
							</code>
						</pre>
						<p>
							From here, you should be able to start CC2 in developer mode and see the
							output of your <code>print()</code> statements: by typing{' '}
							<code>./carrier_command.exe -dev</code> and hitting enter. eg:
						</p>
						<pre>
							<code>$ ./carrier_command.exe -dev hello commander</code>
						</pre>
					</article>
					<article>
						<h2>Print and Formatting</h2>
						<p>
							Lua's <code>print()</code> statement will print a string or number, if
							you want more complex output, you will need to pass it a formatted string
							using <code>string.format()</code>. eg:
						</p>
						<pre>
							<code>
								print(string.format("heading = %d", math.floor(heading_degrees)))
							</code>
						</pre>
						<p>Will print output like:</p>
						<pre>
							<code>heading = 74</code>
						</pre>
					</article>
					<article>
						<h2>Catching Errors</h2>
						<p>
							Lua can intercept errors and give you feedback by making use of the{' '}
							<code>pcall()</code> function to make "protected calls" that won't crash
							the script.
						</p>
						<p>
							<code>pcall()</code> works by accepting a single "callable" argument,
							this can be the name of a function or can be an anonymous function. It
							returns two (or more) return values.
						</p>
						<p>
							If the function encountered an error, the first return value will be{' '}
							<code>false</code> and the second value will be the error (usually as a
							string). eg:
						</p>
						<pre>
							<code>
								status, err = pcall(function() print("hello") x = 10 / 0
								print(string.format("x = %d", x)) end) if not status then
								print(string.format("error - %s", err)) end
							</code>
						</pre>
						<p>The above code fragment should print output like:</p>
						<pre>
							<code>
								hello error - scripts/vehicle_hud.lua:232: bad argument #2 to 'format'
								(number has no integer representation)
							</code>
						</pre>
					</article>
				</div>
			</div>
			<Footer />
		</main>
	);
}
