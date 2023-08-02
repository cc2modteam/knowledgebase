import NavLink from '../../Components/navLink';
import Footer from '../../Components/footer';
import style from '../../Components/page.module.css';

export default function luaGlobalVars() {
	return (
		<main>
			<div className={style.main}>
				<NavLink />
				<div className={style.description}>
					<h1>Mod Reference Lua Global vars</h1>
					<p>
						The following is the output from running the lua "dump globals" example
						program when added to a control screen
					</p>
					<pre>
						<code>
							local seen={}
							function dump(t,i) seen[t]=true local s={}
							local n=0 for k in pairs(t) do n=n+1 s[n]=k end table.sort(s) for k,v in
							ipairs(s) do print(i,v) v=t[v] if type(v)=="table" and not seen[v] then
							dump(v,i.."\t") end end end print("----------------") dump(_G,"")
						</code>
					</pre>
					<p>output:</p>
					<pre>
						<code>
							MM_LOG _G _VERSION assert atlas_icons bay_marker column_ammo column_angle
							column_audio column_capture_progress column_control_mode
							column_controlling_peer column_currency column_difficulty column_distance
							column_fuel column_gamepad column_joystick column_laser column_load
							column_locked column_message column_parachute column_pending column_power
							column_profile column_propulsion column_repair column_save
							column_stabilisation_mode column_stock column_team_capture
							column_team_control column_time column_transit column_trash
							column_warehouse column_weapon column_weight countdown_0 countdown_1
							countdown_2 countdown_3 countdown_4 countdown_5 countdown_6 countdown_7
							countdown_8 countdown_9 crosshair damage_bg damage_bl damage_br
							damage_bridge damage_fl damage_fr damage_hull damage_thruster
							facialhair_a facialhair_a_side facialhair_b facialhair_b_side
							facialhair_c facialhair_c_side facialhair_d facialhair_d_side
							facialhair_e facialhair_e_side facialhair_f facialhair_f_side
							facialhair_g facialhair_g_side facialhair_h facialhair_h_side female_a
							female_a_side female_b female_b_side female_c female_c_side female_d
							female_d_side female_e female_e_side female_f female_f_side female_g
							female_g_side female_h female_h_side female_head female_head_side flag_cn
							flag_de flag_en flag_es flag_fr flag_jp flag_pt flag_ru gamepad_icon_a
							gamepad_icon_b gamepad_icon_back gamepad_icon_dpad gamepad_icon_dpad_down
							gamepad_icon_dpad_left gamepad_icon_dpad_right gamepad_icon_dpad_up
							gamepad_icon_lb gamepad_icon_ls gamepad_icon_lt gamepad_icon_rb
							gamepad_icon_rs gamepad_icon_rt gamepad_icon_special_dpad_all
							gamepad_icon_special_dpad_lr gamepad_icon_special_dpad_ud
							gamepad_icon_special_ls gamepad_icon_special_ls_lr
							gamepad_icon_special_ls_ud gamepad_icon_special_rs
							gamepad_icon_special_rs_lr gamepad_icon_special_rs_ud gamepad_icon_start
							gamepad_icon_x gamepad_icon_y gauge help_button_blue help_button_breaker
							help_button_covered help_button_green help_button_grey
							help_button_grey_small help_button_red help_button_switch
							help_icon_indicator help_screen holomap_icon_carrier holomap_missile
							hud_audio hud_audio_small hud_bracket hud_capsule_armed
							hud_capsule_deployed hud_compass_indicator hud_gun_crosshair
							hud_horizon_cursor hud_horizon_high hud_horizon_low hud_horizon_mid
							hud_impact_marker hud_manual_control hud_target hud_target_friendly
							hud_target_locked hud_target_locked_friendly hud_target_missile
							hud_target_offscreen hud_target_offscreen_friendly hud_ticker_large
							hud_ticker_small hud_warning hud_zoom_indicator hud_zoom_indicator_2
							icon_ammo icon_attachment_16_air_bomb_1 icon_attachment_16_air_bomb_2
							icon_attachment_16_air_bomb_3 icon_attachment_16_air_bomb_4
							icon_attachment_16_air_chaingun icon_attachment_16_air_fuel
							icon_attachment_16_air_missile_1 icon_attachment_16_air_missile_2
							icon_attachment_16_air_missile_3 icon_attachment_16_air_missile_4
							icon_attachment_16_air_missile_tv icon_attachment_16_air_radar
							icon_attachment_16_air_torpedo icon_attachment_16_air_torpedo_decoy
							icon_attachment_16_air_torpedo_noisemaker
							icon_attachment_16_camera_aircraft icon_attachment_16_camera_large
							icon_attachment_16_deployable_droid
							icon_attachment_16_logistics_container_100mm
							icon_attachment_16_logistics_container_120mm
							icon_attachment_16_logistics_container_20mm
							icon_attachment_16_logistics_container_30mm
							icon_attachment_16_logistics_container_40mm
							icon_attachment_16_logistics_container_fuel
							icon_attachment_16_logistics_container_ir_missile icon_attachment_16_none
							icon_attachment_16_radar_golfball icon_attachment_16_rocket_pod
							icon_attachment_16_small_camera icon_attachment_16_small_camera_obs
							icon_attachment_16_small_flare
							icon_attachment_16_smoke_launcher_explosive
							icon_attachment_16_smoke_launcher_stream
							icon_attachment_16_sonic_pulse_generator
							icon_attachment_16_turret_artillery icon_attachment_16_turret_ciws
							icon_attachment_16_turret_droid icon_attachment_16_turret_gimbal
							icon_attachment_16_turret_main_battle_cannon
							icon_attachment_16_turret_main_gun icon_attachment_16_turret_main_gun_2
							icon_attachment_16_turret_main_gun_light
							icon_attachment_16_turret_main_heavy_cannon
							icon_attachment_16_turret_missile icon_attachment_16_turret_robots
							icon_attachment_16_unknown icon_attachment_air_bomb_1
							icon_attachment_air_bomb_2 icon_attachment_air_bomb_3
							icon_attachment_air_bomb_4 icon_attachment_air_chaingun
							icon_attachment_air_fuel icon_attachment_air_missile_1
							icon_attachment_air_missile_2 icon_attachment_air_missile_3
							icon_attachment_air_missile_4 icon_attachment_air_missile_tv
							icon_attachment_air_radar icon_attachment_air_torpedo
							icon_attachment_air_torpedo_decoy icon_attachment_air_torpedo_noisemaker
							icon_attachment_camera_aircraft icon_attachment_camera_large
							icon_attachment_deployable_droid
							icon_attachment_logistics_container_100mm
							icon_attachment_logistics_container_120mm
							icon_attachment_logistics_container_20mm
							icon_attachment_logistics_container_30mm
							icon_attachment_logistics_container_40mm
							icon_attachment_logistics_container_fuel
							icon_attachment_logistics_container_ir_missile
							icon_attachment_radar_golfball icon_attachment_rocket_pod
							icon_attachment_small_camera icon_attachment_small_camera_obs
							icon_attachment_small_flare icon_attachment_smoke_launcher_explosive
							icon_attachment_smoke_launcher_stream
							icon_attachment_sonic_pulse_generator icon_attachment_turret_artillery
							icon_attachment_turret_ciws icon_attachment_turret_droid
							icon_attachment_turret_gimbal icon_attachment_turret_main_battle_cannon
							icon_attachment_turret_main_gun icon_attachment_turret_main_gun_2
							icon_attachment_turret_main_gun_light
							icon_attachment_turret_main_heavy_cannon icon_attachment_turret_missile
							icon_attachment_turret_robots icon_attack_type_airlift
							icon_attack_type_any icon_attack_type_bomb_double
							icon_attack_type_bomb_single icon_attack_type_gun
							icon_attack_type_missile_double icon_attack_type_missile_single
							icon_attack_type_rockets icon_attack_type_torpedo_single
							icon_chassis_16_barge icon_chassis_16_carrier icon_chassis_16_droid
							icon_chassis_16_land_turret icon_chassis_16_robot_dog
							icon_chassis_16_rotor_large icon_chassis_16_rotor_small
							icon_chassis_16_ship_heavy icon_chassis_16_ship_light
							icon_chassis_16_spaceship icon_chassis_16_wheel_large
							icon_chassis_16_wheel_medium icon_chassis_16_wheel_mule
							icon_chassis_16_wheel_small icon_chassis_16_wing_large
							icon_chassis_16_wing_small icon_chassis_deployable_droid
							icon_chassis_rotor_large icon_chassis_rotor_small
							icon_chassis_sea_ship_light icon_chassis_shuttle icon_chassis_turret
							icon_chassis_unknown icon_chassis_wheel_large icon_chassis_wheel_medium
							icon_chassis_wheel_mule icon_chassis_wheel_small icon_chassis_wing_large
							icon_chassis_wing_small icon_control_mode icon_controlling_peer
							icon_deploy_vehicle icon_exclamation icon_fuel icon_health
							icon_item_16_ammo_100mm icon_item_16_ammo_120mm icon_item_16_ammo_160mm
							icon_item_16_ammo_20mm icon_item_16_ammo_30mm icon_item_16_ammo_40mm
							icon_item_16_ammo_aa_missile icon_item_16_ammo_cruise_missile
							icon_item_16_ammo_flare icon_item_16_ammo_missile
							icon_item_16_ammo_rocket icon_item_16_ammo_smoke
							icon_item_16_ammo_sonic_pulse icon_item_16_fuel_barrel icon_pause
							icon_play icon_stabilisation_mode icon_stop icon_tree_next
							joystick_icon_a1 joystick_icon_a2 joystick_icon_a3 joystick_icon_a4
							joystick_icon_a5 joystick_icon_a6 joystick_icon_a7 joystick_icon_a8
							joystick_icon_b1 joystick_icon_b10 joystick_icon_b11 joystick_icon_b12
							joystick_icon_b13 joystick_icon_b14 joystick_icon_b15 joystick_icon_b16
							joystick_icon_b17 joystick_icon_b18 joystick_icon_b19 joystick_icon_b2
							joystick_icon_b20 joystick_icon_b21 joystick_icon_b22 joystick_icon_b23
							joystick_icon_b24 joystick_icon_b25 joystick_icon_b26 joystick_icon_b27
							joystick_icon_b28 joystick_icon_b29 joystick_icon_b3 joystick_icon_b30
							joystick_icon_b31 joystick_icon_b32 joystick_icon_b33 joystick_icon_b34
							joystick_icon_b35 joystick_icon_b36 joystick_icon_b37 joystick_icon_b38
							joystick_icon_b39 joystick_icon_b4 joystick_icon_b40 joystick_icon_b41
							joystick_icon_b42 joystick_icon_b43 joystick_icon_b44 joystick_icon_b45
							joystick_icon_b46 joystick_icon_b47 joystick_icon_b48 joystick_icon_b5
							joystick_icon_b6 joystick_icon_b7 joystick_icon_b8 joystick_icon_b9
							male_a male_a_side male_b male_b_side male_c male_c_side male_d
							male_d_side male_f male_f_side male_g male_g_side male_h male_h_side
							male_head male_head_side map_icon_air map_icon_attack map_icon_barge
							map_icon_camera map_icon_carrier map_icon_circle_9
							map_icon_command_center map_icon_crosshair map_icon_damage_indicator
							map_icon_droid map_icon_factory map_icon_factory_barge
							map_icon_factory_chassis_air map_icon_factory_chassis_land
							map_icon_factory_fuel map_icon_factory_large_munitions
							map_icon_factory_small_munitions map_icon_factory_turrets
							map_icon_factory_utility map_icon_island map_icon_last_known_pos
							map_icon_load map_icon_logistic_node map_icon_loop map_icon_low_ammo
							map_icon_low_fuel map_icon_missile map_icon_missile_outline
							map_icon_robot_dog map_icon_ship map_icon_surface
							map_icon_surface_capture map_icon_torpedo map_icon_torpedo_decoy
							map_icon_turret map_icon_unload map_icon_vehicle_control map_icon_visible
							map_icon_warehouse map_icon_waypoint microprose mouse_icon_lmb
							mouse_icon_mmb mouse_icon_rmb mouse_icon_special_drag
							mouse_icon_special_lr mouse_icon_special_scroll mouse_icon_special_ud
							screen_compass_background screen_compass_dial_overlay
							screen_compass_dial_pivot screen_compass_tilt_front_pivot
							screen_compass_tilt_side_pivot screen_propulsion_carrier
							screen_propulsion_gauge screen_radar_air screen_radar_land
							screen_radar_missile screen_weapon_aa screen_weapon_missile
							screen_weapon_missile_cruise screen_weapon_shell self_destruct tab_border
							text_back text_confirm text_del text_ellipsis text_shift text_space begin
							begin_get_screen_name begin_get_ui_region_index begin_load
							begin_load_inventory_data callback_script_event clamp clamp_str
							clip_line_to_rect collectgarbage color8 color8_eq color8_lerp color_black
							color_button_bg color_button_bg_inactive color_empty color_enemy
							color_friendly color_grey_dark color_grey_mid color_highlight
							color_status_bad color_status_dark_green color_status_dark_red
							color_status_ok color_status_warning color_white countif debug debug
							gethook getinfo getlocal getmetatable getregistry getupvalue getuservalue
							sethook setlocal setmetatable setupvalue setuservalue traceback upvalueid
							upvaluejoin dofile e_active_input gamepad keyboard e_attack_type airlift
							any bomb_double bomb_single count deploy gun missile_double
							missile_single none order_cruise_missile order_main_gun rockets
							torpedo_single e_audio_effect_type _110mmtankcannon
							_30mmarmouredvehiclecannon ambience_ocean_loop ambience_rain_loop
							ambience_rain_loop_heavy ambience_wind_loop_high ambience_wind_loop_low
							ambience_wind_loop_medium artillery_cannon button_metal_1 button_metal_2
							carrier_loop count crane_loop door_1 door_2 elevator_end elevator_loop
							engine_end flare_launch missile_launch missile_loop robotics_end
							robotics_loop robotics_rotate_end robotics_rotate_loop rotor_heavy_loop
							rotor_loop ship_loop telemetry_1_radar telemetry_2_radar telemetry_3
							telemetry_4 telemetry_5 telemetry_6 telemetry_7 ui_beep_1 ui_beep_2
							ui_beep_3 ui_beep_4 ui_beep_5 vulcan_minigun_end vulcan_minigun_loop
							wheel_heavy_loop wheel_loop wheel_medium_loop wheel_water_drive wing_loop
							e_barge_action_type idle load travel unload wait e_barge_destination_type
							none tile vehicle waypoint e_carrier_order_operation delete modify
							e_chat_message_type player player_team server_notification e_game_input
							UNUSED_0 UNUSED_1 attachment_fire attachment_primary axis_look_x
							axis_look_y axis_move_x axis_move_y axis_vehicle_pitch axis_vehicle_roll
							axis_vehicle_throttle axis_vehicle_yaw back camera_zoom chat
							chat_cycle_mode chat_team count crouch dpad_down dpad_left dpad_right
							dpad_up help interact_a interact_a_alt interact_b look_down look_left
							look_right look_up map_overlay move_down move_left move_right move_up
							pause screen_pointer_1 select_attachment_1 select_attachment_10
							select_attachment_2 select_attachment_3 select_attachment_4
							select_attachment_5 select_attachment_6 select_attachment_7
							select_attachment_8 select_attachment_9 select_attachment_next
							select_attachment_prev sprint text_backspace text_enter text_enter_alt
							text_shift text_space toggle_control_mode toggle_stabilisation_mode voice
							e_game_object_attachment_type camera count hardpoint_large
							hardpoint_small plate_huge plate_large plate_logistics_container
							plate_small plate_small_inverted e_game_object_type airfield
							attachment_camera attachment_camera_observation attachment_camera_plane
							attachment_camera_vehicle_control attachment_deployable_droid
							attachment_flare_launcher attachment_fuel_tank_plane
							attachment_hardpoint_bomb_1 attachment_hardpoint_bomb_2
							attachment_hardpoint_bomb_3 attachment_hardpoint_missile_aa
							attachment_hardpoint_missile_ir attachment_hardpoint_missile_laser
							attachment_hardpoint_missile_tv attachment_hardpoint_torpedo
							attachment_hardpoint_torpedo_decoy
							attachment_hardpoint_torpedo_noisemaker
							attachment_logistics_container_100mm attachment_logistics_container_120mm
							attachment_logistics_container_20mm attachment_logistics_container_30mm
							attachment_logistics_container_40mm attachment_logistics_container_fuel
							attachment_logistics_container_ir_missile attachment_radar_awacs
							attachment_radar_golfball attachment_smoke_launcher_explosive
							attachment_smoke_launcher_stream attachment_sonic_pulse_generator
							attachment_turret_15mm attachment_turret_30mm attachment_turret_40mm
							attachment_turret_artillery attachment_turret_battle_cannon
							attachment_turret_carrier_camera attachment_turret_carrier_ciws
							attachment_turret_carrier_flare_launcher
							attachment_turret_carrier_main_gun attachment_turret_carrier_missile
							attachment_turret_carrier_missile_silo attachment_turret_carrier_torpedo
							attachment_turret_carrier_torpedo_decoy attachment_turret_ciws
							attachment_turret_droid attachment_turret_gimbal_30mm
							attachment_turret_heavy_cannon attachment_turret_missile
							attachment_turret_plane_chaingun attachment_turret_robot_dog_capsule
							attachment_turret_rocket_pod bomb_1 bomb_2 bomb_3 bomb_fuel_tank
							chassis_air_rotor_heavy chassis_air_rotor_heavy_broken
							chassis_air_rotor_light chassis_air_rotor_light_broken
							chassis_air_wing_heavy chassis_air_wing_heavy_broken
							chassis_air_wing_light chassis_air_wing_light_broken chassis_carrier
							chassis_carrier_broken chassis_deployable_droid
							chassis_deployable_droid_broken chassis_land_robot_dog
							chassis_land_turret chassis_land_turret_broken chassis_land_wheel_heavy
							chassis_land_wheel_heavy_broken chassis_land_wheel_light
							chassis_land_wheel_light_broken chassis_land_wheel_medium
							chassis_land_wheel_medium_broken chassis_land_wheel_mule
							chassis_land_wheel_mule_broken chassis_sea_barge chassis_sea_barge_broken
							chassis_sea_lifeboat chassis_sea_ship_heavy chassis_sea_ship_heavy_broken
							chassis_sea_ship_light chassis_sea_ship_light_broken chassis_spaceship
							chassis_spaceship_menu count drydock missile_1 missile_2 missile_3
							missile_4 missile_5 missile_cruise missile_robot_dog_payload
							missile_robot_dog_payload_debris missile_tv tablet torpedo torpedo_decoy
							torpedo_noisemaker torpedo_sonar_buoy e_game_state main_menu
							main_simulation e_input action_a action_b back chat chat_cycle_mode
							chat_team down left pointer_1 right text_backspace text_enter text_shift
							text_space up e_input_action press release e_inventory_item ammo_100mm
							ammo_120mm_artillery ammo_160mm_artillery ammo_20mm ammo_30mm ammo_40mm
							ammo_cruise_missile ammo_flare ammo_rocket ammo_smoke ammo_sonic_pulse
							attachment_camera attachment_camera_observation attachment_camera_plane
							attachment_camera_vehicle_control attachment_flare_launcher
							attachment_fuel_tank_plane attachment_radar_awacs
							attachment_radar_golfball attachment_smoke_launcher_explosive
							attachment_smoke_launcher_stream attachment_sonic_pulse
							attachment_turret_30mm attachment_turret_40mm attachment_turret_artillery
							attachment_turret_battle_cannon attachment_turret_ciws
							attachment_turret_gimbal_30mm attachment_turret_heavy_cannon
							attachment_turret_missile attachment_turret_plane_chaingun
							attachment_turret_rocket_pod count deployable_droid fuel_barrel
							hardpoint_bomb_1 hardpoint_bomb_2 hardpoint_bomb_3 hardpoint_missile_aa
							hardpoint_missile_ir hardpoint_missile_laser hardpoint_missile_tv
							hardpoint_torpedo hardpoint_torpedo_decoy hardpoint_torpedo_noisemaker
							support_ship_light_aa support_ship_light_gun support_ship_light_missile
							support_ship_light_torpedo support_turret_ciws support_turret_gun
							support_turret_missile vehicle_barge vehicle_rotor_heavy
							vehicle_rotor_light vehicle_wheel_heavy vehicle_wheel_light
							vehicle_wheel_medium vehicle_wheel_mule vehicle_wing_heavy
							vehicle_wing_light virus_module e_loc BACK_opens_pause_menu aa_armed
							aa_status accessibility achievement_4_shield achievement_air_1
							achievement_air_2 achievement_air_3 achievement_barges
							achievement_camera_1 achievement_camera_2 achievement_camera_3
							achievement_campaign_win achievement_carrier_collision
							achievement_carrier_kill achievement_cruise_missile
							achievement_deploy_vehicles achievement_desc_4_shield
							achievement_desc_air_1 achievement_desc_air_2 achievement_desc_air_3
							achievement_desc_barges achievement_desc_camera_1
							achievement_desc_camera_2 achievement_desc_camera_3
							achievement_desc_campaign_win achievement_desc_carrier_collision
							achievement_desc_carrier_kill achievement_desc_cruise_missile
							achievement_desc_deploy_vehicles achievement_desc_escape_pod
							achievement_desc_friendly achievement_desc_inside_job
							achievement_desc_island_1 achievement_desc_island_2
							achievement_desc_island_3 achievement_desc_land_1 achievement_desc_land_2
							achievement_desc_land_3 achievement_desc_maelstrom
							achievement_desc_multiplayer achievement_desc_naval_1
							achievement_desc_naval_2 achievement_desc_naval_3
							achievement_desc_order_1 achievement_desc_order_2
							achievement_desc_order_3 achievement_desc_self_destruct
							achievement_desc_top_gun achievement_escape_pod achievement_friendly
							achievement_inside_job achievement_island_1 achievement_island_2
							achievement_island_3 achievement_land_1 achievement_land_2
							achievement_land_3 achievement_maelstrom achievement_multiplayer
							achievement_naval_1 achievement_naval_2 achievement_naval_3
							achievement_order_1 achievement_order_2 achievement_order_3
							achievement_self_destruct achievement_top_gun acronym_kilometers
							acronym_meters acronym_milliseconds acronym_thousand activate
							activation_delay actuated_camera ai ai_teams air_chassis air_sea_radar
							air_vehicle air_vehicle_additional_fuel air_vehicle_cannon
							air_vehicle_observation_camera aircraft_chaingun
							aircraft_mounted_chaingun airlift_waypoint airlock alarm_off alarm_on
							alarm_status albatross_chassis all_purpose_vehicle ambience ammo_100mm
							ammo_120mm_shell ammo_160mm_shell ammo_20mm ammo_30mm ammo_40mm
							ammo_aa_missile ammo_cruise_missile ammo_flare ammo_missile ammo_rocket
							ammo_smoke ammo_sonic_pulse anti_air_missile anti_missile_flares
							antialiasing artillery_ammunition artillery_gun artilley_munition
							attachment attack_any_weapon attack_bomb_double attack_bomb_single
							attack_gun attack_missile_double attack_missile_single attack_rockets
							attack_torpedo_single balance_end balance_start barge base_difficulty
							battle_cannon bear_chassis bearing bloom blueprint blueprints
							breaker_crane breaker_lift breaker_main breaker_propulsion breaker_radar
							breaker_repair breaker_weapons bridge_light brightness_down brightness_up
							building_assets button button_hold_on_deck call_lift camera_aircraft
							camera_fixed_control camera_observation cancel_production
							cannon_ammunition captain_seat captured_island carrier carrier_stock
							carriers_per_human_team chain_gun_ammunition chassis chat_global
							chat_message_server chat_team ciws_armed ciws_bl_armed ciws_br_armed
							ciws_fl_armed ciws_fr_armed ciws_status close collect_order
							collect_surplus color combo_disabled combo_enabled command_center compass
							confirm confirm_ban_player confirm_disable_all_mods confirm_self_destruct
							confirm_upload_mod connecting connection_lost container_of_fuel_1000l
							control_mode_auto control_mode_manual control_mode_off
							control_mode_override controls copied_to_clipboard copy_code
							corridor_light count countermeasure_armed countermeasures crane_status
							creating_world crew_joined crew_left cruise_missile cruise_missile_armed
							cryo_pod currency_report damage damage_repair deck_spotlight_front
							deck_spotlight_rear delivery_log deploy deploy_a1_a8 deploy_air_0
							deploy_air_1 deploy_air_2 deploy_air_3 deploy_air_4 deploy_air_5
							deploy_air_6 deploy_air_7 deploy_droid deploy_island_hacking_bots
							deploy_land_0 deploy_land_1 deploy_land_2 deploy_land_3 deploy_land_4
							deploy_land_5 deploy_land_6 deploy_land_7 deploy_s1_s8 deploy_waypoint
							deployable_droid depth_sonar destroyed detects_vehicles_within_10000m
							dial disable disabled disconnect_reason_banned
							disconnect_reason_incorrect_password
							disconnect_reason_kicked_from_session disconnect_reason_network_error
							disconnect_reason_server_full disconnect_reason_server_stopped
							disconnected_from_server door door_freight door_safety_hatch door_shutter
							door_sliding down droid_retired elevator_status empty empty_attachment
							enable enemy engine_rpm engine_start engine_status engine_stop
							engine_temp esc_to_cancel eyes_level_with_horizon facial
							factory_air_chassis factory_barge factory_fuel factory_large_munitions
							factory_small_munitions factory_surface_chassis factory_turrets
							factory_utility fast_jet_aircraft female flare_fire flare_launcher
							flare_launcher_armed floor_1 floor_2 floor_3 floor_4 floor_5 floor_6
							floor_7 focus_carrier focus_world following_mod_will_be_overwritten
							forward_firing_rocket fov fuel fuel_1000l fuel_efficiency fuel_level
							fuel_tank_aircraft fuel_valve fullscreen fully_powered gamma gender
							ground_vehicle_cannon ground_vehicle_observation_camera gun_ammunition
							hardpoint_bomb hardpoint_bomb_1 hardpoint_bomb_2 hardpoint_bomb_3
							hardpoint_bomb_4 hardpoint_missile
							hardpoint_missile_3_REMOVED_FROM_LOCALISATION hardpoint_missile_aa
							hardpoint_missile_aa_desc hardpoint_missile_ir hardpoint_missile_ir_desc
							hardpoint_missile_laser hardpoint_missile_laser_desc hardpoint_missile_tv
							hardpoint_missile_tv_desc hardpoint_torpedo hardpoint_torpedo_decoy
							hardpoint_torpedo_decoy_desc hardpoint_torpedo_desc
							hardpoint_torpedo_noisemaker hardpoint_torpedo_noisemaker_desc headlights
							headlights_down headlights_up heavy_cannon heavy_lift_rotor
							heavy_platform helm help high holds_up_to_12_missiles
							holds_up_to_4_missiles holomap holomap_mode_cartographic holomap_mode_fog
							holomap_mode_ocean_current holomap_mode_ocean_depth
							holomap_mode_precipitation holomap_mode_wind horizontal hp hud
							hud_notification_vehicle human_teams hundred_mm_cannon in_barges
							in_warehouses incompatible incompatible_mods_warning indicator
							indicator_holding indicator_led initialising input_attachment_fire
							input_attachment_primary input_attachment_secondary input_axis_look_x
							input_axis_look_y input_axis_move_x input_axis_move_y
							input_axis_vehicle_pitch input_axis_vehicle_roll
							input_axis_vehicle_throttle input_axis_vehicle_yaw input_back
							input_back_alt_REMOVED_FROM_LOCALIZATION input_backspace
							input_camera_zoom input_chat input_chat_cycle_mode input_chat_team
							input_crouch input_cycle_target input_dpad_down input_dpad_left
							input_dpad_right input_dpad_up input_enter input_help input_interact_a
							input_interact_a_alt input_interact_b input_interact_c input_invert
							input_look_down input_look_left input_look_right input_look_up
							input_map_overlay input_pause input_screen_lmb input_select_attachment_1
							input_select_attachment_10 input_select_attachment_2
							input_select_attachment_3 input_select_attachment_4
							input_select_attachment_5 input_select_attachment_6
							input_select_attachment_7 input_select_attachment_8
							input_select_attachment_9 input_select_attachment_next
							input_select_attachment_prev input_sprint input_text_shift
							input_text_space input_toggle_control input_toggle_stabilisation
							input_unhandled input_voice input_walk_down input_walk_left
							input_walk_right input_walk_up interact interaction_add_waypoint
							interaction_auto interaction_back interaction_bearing interaction_camera
							interaction_cancel interaction_carrier interaction_clear_target
							interaction_close interaction_confirm interaction_cycle_weapon
							interaction_deploy interaction_disable interaction_enable
							interaction_exit interaction_exit_seat interaction_fire
							interaction_hide_map interaction_highlight interaction_lock_target
							interaction_manual interaction_map_options interaction_navigate
							interaction_next_page interaction_page interaction_pan interaction_pause
							interaction_pitch interaction_prev_page interaction_rebind
							interaction_respawn interaction_roll interaction_scroll
							interaction_select interaction_select_attachment interaction_set_waypoint
							interaction_show_map interaction_stabilisation interaction_steer
							interaction_throttle interaction_vehicle interaction_waypoint
							interaction_yaw interaction_zoom interaction_zoom_level
							inventory_logistics invite_code_desc ir_countermeasure_flare
							ir_guided_missile island island_captured island_captures island_control
							island_difficulty island_has_no_defenses_available island_lost islands
							item_name item_production join_team kitchen_light land_chassis
							large_munitions last_known_position launch_countermeasure launch_shuttle
							launch_torpedo left light_rotor light_scout_vehicle lights
							lights_exterior lights_interior load_game_error_incompatible_version
							load_game_error_parse_fail load_game_error_read_fail
							load_game_error_unknown load_game_failed load_noisemaker load_torpedo
							loading loading_game loading_game_data loading_mods loading_order
							loading_stock loading_surplus loading_world loadout loadout_complete
							loadout_default loadout_minimal logistics_barge logistics_support_vehicle
							long_range_100mm_cannon long_range_120mm_artillery loop_waypoint
							lounge_light low low_ammo low_fuel main_gun_armed main_shadow
							maintain_heading maintain_heading_enabled male manta_chassis
							manual_cctv_overview_1 manual_cctv_overview_2 manual_cctv_screens_1
							manual_currenct_report_overview_1 manual_currenct_report_overview_2
							manual_currenct_report_overview_3 manual_currenct_report_overview_4
							manual_currency_report_overview_1 manual_currency_report_overview_2
							manual_currency_report_overview_3 manual_currency_report_overview_4
							manual_currency_report_screens_1 manual_defensive_weapons_aa_missile_1
							manual_defensive_weapons_aa_missile_2 manual_defensive_weapons_buttons_aa
							manual_defensive_weapons_buttons_ciws
							manual_defensive_weapons_buttons_missile
							manual_defensive_weapons_ciws_guns_1 manual_defensive_weapons_ciws_guns_2
							manual_defensive_weapons_overview_1 manual_defensive_weapons_overview_2
							manual_defensive_weapons_screens_aa manual_defensive_weapons_screens_ciws
							manual_delivery_log_overview_1 manual_delivery_log_overview_2
							manual_delivery_log_screens_1 manual_game_objectives_capturing_1
							manual_game_objectives_capturing_2 manual_game_objectives_capturing_3
							manual_game_objectives_objectives_1 manual_game_objectives_objectives_2
							manual_game_objectives_objectives_3 manual_helm_buttons_activate
							manual_helm_buttons_engine_start manual_helm_buttons_engine_stop
							manual_helm_buttons_headlights manual_helm_buttons_headlights_up_down
							manual_helm_buttons_maintain_heading
							manual_helm_buttons_navigation_lights manual_helm_buttons_reverse
							manual_helm_buttons_side_thrusters manual_helm_buttons_silence
							manual_helm_buttons_steering_lock manual_helm_overview
							manual_helm_screens_compass manual_helm_screens_depth_sonar
							manual_helm_screens_navigation manual_helm_screens_propulsion
							manual_holomap_buttons_cartographic manual_holomap_buttons_focus_carrier
							manual_holomap_buttons_focus_world manual_holomap_buttons_fog
							manual_holomap_buttons_ocean_current manual_holomap_buttons_ocean_depth
							manual_holomap_buttons_on_off manual_holomap_buttons_precipitation
							manual_holomap_buttons_wind manual_holomap_notifications_1
							manual_holomap_notifications_2 manual_holomap_overview_1
							manual_holomap_overview_2 manual_inventory_overview_1
							manual_inventory_screens_1 manual_inventory_tab_barges_1
							manual_inventory_tab_barges_2 manual_inventory_tab_map_1
							manual_inventory_tab_map_2 manual_inventory_tab_map_3
							manual_inventory_tab_map_4 manual_inventory_tab_map_5
							manual_inventory_tab_map_6_REMOVED_FROM_LOCALIZATION
							manual_inventory_tab_stock_1 manual_inventory_tab_stock_2
							manual_logistics_barges_1 manual_logistics_barges_2
							manual_logistics_barges_3 manual_logistics_blueprints_1
							manual_logistics_blueprints_2 manual_logistics_factories_1
							manual_logistics_overview_1 manual_logistics_warehouses_1
							manual_logistics_warehouses_2_REMOVED_FROM_LOCALIZATION
							manual_naval_weapons_buttons_activation_delay
							manual_naval_weapons_buttons_bearing
							manual_naval_weapons_buttons_countermeasure_armed
							manual_naval_weapons_buttons_countermeausre_armed
							manual_naval_weapons_buttons_launch_conutermeasure
							manual_naval_weapons_buttons_launch_countermeasure
							manual_naval_weapons_buttons_launch_torpedo
							manual_naval_weapons_buttons_load_noisemaker
							manual_naval_weapons_buttons_load_torpedo
							manual_naval_weapons_buttons_torpedo_armed manual_naval_weapons_decoy_1
							manual_naval_weapons_decoy_2 manual_naval_weapons_noisemaker_1
							manual_naval_weapons_noisemaker_2 manual_naval_weapons_overview_1
							manual_naval_weapons_overview_2
							manual_naval_weapons_screens_air_sea_radar manual_naval_weapons_torpedo_1
							manual_naval_weapons_torpedo_2 manual_power_buttons_lift
							manual_power_buttons_main manual_power_buttons_propulsion
							manual_power_buttons_radar manual_power_buttons_repair
							manual_power_buttons_weapons manual_power_overview_1
							manual_power_overview_2 manual_power_overview_3 manual_power_screens
							manual_repair_hull_damage_1 manual_repair_hull_damage_2
							manual_repair_hull_damage_3 manual_repair_overview_1
							manual_repair_overview_2 manual_repair_overview_3
							manual_repair_repairing_1 manual_repair_repairing_2 manual_repair_screens
							manual_self_destruct_overview_1 manual_self_destruct_overview_2
							manual_ship_log_overview_1 manual_ship_log_overview_2
							manual_ship_log_overview_3 manual_ship_log_screens_1
							manual_support_weapons_buttons_flare
							manual_support_weapons_buttons_flare_fire
							manual_support_weapons_buttons_main_gun
							manual_support_weapons_buttons_missile manual_support_weapons_overview_1
							manual_support_weapons_overview_2 manual_support_weapons_overview_3
							manual_support_weapons_screens_support_weapons
							manual_support_weapons_screens_viewing_scope
							manual_vehicle_control_button_hold_air manual_vehicle_control_buttons_a
							manual_vehicle_control_buttons_s manual_vehicle_control_map_menus_1
							manual_vehicle_control_map_menus_2 manual_vehicle_control_map_menus_3
							manual_vehicle_control_map_menus_4 manual_vehicle_control_overview
							manual_vehicle_control_screens_air_traffic
							manual_vehicle_control_screens_vehicle_control
							manual_vehicle_control_waypoints_1 manual_vehicle_control_waypoints_2
							manual_vehicle_control_waypoints_3 manual_vehicle_control_waypoints_4
							manual_vehicle_control_waypoints_5 manual_vehicle_loadout_attachments_1
							manual_vehicle_loadout_attachments_2 manual_vehicle_loadout_chassis_1
							manual_vehicle_loadout_chassis_2 manual_vehicle_loadout_overview_1
							manual_vehicle_loadout_overview_2 manual_vehicle_loadout_overview_3
							manual_vehicle_loadout_screens manual_vehicle_operation_attachments_1
							manual_vehicle_operation_attachments_2
							manual_vehicle_operation_attachments_3
							manual_vehicle_operation_multiplayer_1
							manual_vehicle_operation_multiplayer_2
							manual_vehicle_operation_multiplayer_3
							manual_vehicle_operation_overview_1 manual_vehicle_operation_overview_2
							manual_vehicle_operation_vehicles_1 manual_vehicle_operation_vehicles_2
							manual_vehicle_operation_vehicles_3 manual_vehicle_operation_vehicles_4
							map_mode map_submode master master_switch max_players med missile
							missile_1_armed missile_2_armed missile_fire mod mod_visibility
							mod_visibility_friends mod_visibility_private mod_visibility_public
							mouse_flight_mode mouse_flight_mode_disabled mouse_flight_mode_roll_pitch
							mouse_flight_mode_yaw_pitch mouse_flight_sensitivity_pitch
							mouse_flight_sensitivity_roll mouse_flight_sensitivity_yaw
							mouse_joystick_mode mouse_joystick_mode_motion mouse_joystick_mode_offset
							mule_chassis music mute navigation navigation_lights
							needlefish_chassis_aa needlefish_chassis_aa_desc needlefish_chassis_desc
							needlefish_chassis_gun needlefish_chassis_gun_desc
							needlefish_chassis_missile needlefish_chassis_missile_desc
							needlefish_chassis_torpedo needlefish_chassis_torpedo_desc
							network_connection_timeout_in network_error
							network_error_connection_timeout network_error_failed_to_connect
							network_error_failed_to_connect_to_socket
							network_error_failed_to_create_address
							network_error_failed_to_create_socket
							network_error_server_stopped_responding network_error_unknown_error
							network_waiting_for_server no_attack_options_available
							no_local_mods_found no_mods_installed no_mods_published no_power none
							null ocean_foam off on_off open passenger_seat password pending_order
							peterl_chassis pilot pilot_seat players power press_button_to_bind
							press_key_to_bind propulsion push push_button_a push_button_arrow
							push_button_b_blue push_button_b_green push_button_b_grey
							push_button_b_red push_button_c push_button_cover quantity radar_awacs
							radar_golfball radar_golfball_desc razorbill_chassis rebind
							regenerate_code regenerated_invite_code remote_hacking_robot
							requesting_support resolution restart_to_apply_changes reverse right
							rocket_pod room_light rotatable_camera rudder runway_lights_edge
							runway_lights_end runway_lights_start scale scout_wing_aircraft screen
							screen_air_traffic screen_cctv screen_compass screen_currency
							screen_delivery_log screen_glow screen_inventory screen_large
							screen_large_map screen_loading screen_log screen_menu_game
							screen_menu_language screen_menu_options screen_menu_profile
							screen_menu_quit screen_navigation screen_power screen_propulsion
							screen_radar screen_repair screen_scope screen_self_destruct screen_shake
							screen_small screen_small_map screen_tablet screen_transmissions
							screen_vehicle_control screen_vehicle_loadout screen_viewing_scope
							screen_weapons_aa screen_weapons_ciws screen_weapons_support
							screen_weapons_vision_radar seal_chassis seat self_destruct_panel server
							seven_segment sfx sharing_power ship ship_log shuttle shuttle_escape
							shuttle_pilot shuttle_pod side_thrusters silence sit skin small_munitions
							smoke_launcher_explosive smoke_launcher_stream sonic_pulse_generator
							spaceship spaceship_airlock spaceship_shuttle speed spot_shadow
							stabilisation_off stabilisation_stabilised stabilisation_tracking
							starting_islands steering_lock steering_lock_enabled story_01_01
							story_01_02 story_01_03 story_01_04 story_01_05 story_01_06 story_01_07
							story_01_title story_02_01 story_02_02 story_02_03 story_02_04
							story_02_05 story_02_title story_03_01 story_03_02 story_03_03
							story_03_04 story_03_05 story_03_title story_04_01 story_04_02
							story_04_03 story_04_04 story_04_05 story_04_06 story_04_07
							story_04_title story_05_01 story_05_02 story_05_03 story_05_04
							story_05_05 story_05_06 story_05_07 story_05_title story_06_01
							story_06_02 story_06_03 story_06_04 story_06_05 story_06_06
							story_06_title story_07_01 story_07_02 story_07_03 story_07_04
							story_07_05 story_07_06 story_07_07 story_07_08 story_07_09 story_07_10
							story_07_title story_08_01 story_08_02 story_08_03 story_08_04
							story_08_05 story_08_06 story_08_07 story_08_title story_09_01
							story_09_02 story_09_03 story_09_04 story_09_05 story_09_06
							story_09_title story_10_01 story_10_02 story_10_title story_11_01
							story_11_02 story_11_03 story_11_title subtitles support_cancelled
							support_complete support_failed support_logistics_vessel support_weapons
							surface_vehicle surface_vehicle_with_virus_bots target_locked
							targets_missiles_and_air_vehicles team_voice_indicators teams throttle
							toggle_button_a toggle_button_b toggle_button_c toggle_button_d
							toggle_key tooltips torpedo torpedo_armed torpedo_decoy
							torpedo_noisemaker trees turn_off turn_on turret turret_30mm turret_40mm
							turret_chassis_ciws turret_chassis_ciws_desc turret_chassis_gun
							turret_chassis_gun_desc turret_chassis_missile
							turret_chassis_missile_desc turret_ciws turret_gimbal_30mm turret_missile
							turrets tut_activate_lift_crane_power tut_activate_power_breaker
							tut_activate_propulsion_power tut_activate_weapon_power tut_arm_main_gun
							tut_capture_deploy_albatross tut_capture_island_using_seal_and_virus_bots
							tut_carrier_activate_power tut_carrier_launch_carrier
							tut_carrier_reach_bridge tut_carrier_start_engines
							tut_carrier_travel_to_island tut_carrier_use_elevator
							tut_carrier_use_helm tut_carrier_use_nav_screens tut_close_pause_menu
							tut_complete_message_line_1 tut_complete_message_line_2
							tut_complete_message_line_3 tut_complete_title
							tut_cycle_support_weapon_to_carrier_gun
							tut_decrease_throttle_to_stop_carrier
							tut_deploy_all_surface_vehicles_near_enemy_island tut_deploy_carrier
							tut_drag_from_deployed_vehicles_to_place_waypoints
							tut_enable_stabilisation tut_exit_screen tut_exit_viewing_scope
							tut_fire_carrier_gun tut_get_in_shuttle tut_increase_throttle
							tut_intro_launch_shuttle tut_intro_reach_shuttle tut_intro_use_pilot_seat
							tut_intro_use_shuttle tut_intro_use_transmission tut_launch_shuttle
							tut_navigate_to_an_enemy_island
							tut_observe_island_and_tag_any_visible_enemy_units tut_open_pause_menu
							tut_play_transmission tut_reach_bridge tut_reach_shuttle
							tut_select_manual_tab tut_select_observation_camera
							tut_set_camera_to_manual_control_mode tut_start_engines tut_use_elevator
							tut_use_helm tut_use_navigation_screen tut_use_pilot_seat
							tut_use_transmission_screen tut_use_vehicle_control_screen
							tut_use_viewing_scope tut_wait_for_surface_vehicles_to_deploy
							tut_wait_for_transmission_to_end tutorial tutorial_unavailable type ui
							ui_scale ui_show_mouse_joystick_on_hud ultra unknown_attachment
							unloading_order unloading_stock unlocked unlocked_blueprints
							unlocked_blueprints_all unlocked_blueprints_default
							unlocked_blueprints_none up upload_complete upload_error
							upload_error_failed_to_copy_content
							upload_error_failed_to_delete_upload_folder upload_error_invalid_manifest
							upload_error_no_content upload_error_no_thumbnail
							upload_error_reupload_steam_mod upload_error_unexpected_content_format
							upload_error_unknown_error upload_error_upload_failed
							upload_error_upload_in_progress uploading upp_100mm_cannon
							upp_15mm_cannon upp_20mm_auto_cannon upp_30mm_cannon upp_30mm_gimbal
							upp_40mm_cannon upp_a_air upp_a_msl upp_aa upp_aa_missiles upp_abort
							upp_accessibility upp_acronym_air upp_acronym_alpha upp_acronym_auto
							upp_acronym_beta upp_acronym_charlie upp_acronym_delta upp_acronym_manual
							upp_acronym_meters upp_acronym_override upp_acronym_surface
							upp_acronym_vehicle_name_handle upp_acronym_weapon_back_left
							upp_acronym_weapon_back_right upp_acronym_weapon_front_left
							upp_acronym_weapon_front_right upp_acronym_weapon_left
							upp_acronym_weapon_right upp_actions upp_activate upp_active
							upp_actuated_camera upp_air upp_air_traffic upp_air_traffic_holding
							upp_air_traffic_landing upp_air_traffic_launch upp_air_traffic_queued
							upp_air_traffic_taxi upp_alb upp_albatross upp_all_purpose_vehicle
							upp_alpha upp_alpha_go upp_alt upp_altitude upp_ammo upp_anti_air_cannon
							upp_any upp_apply upp_arm_1 upp_arm_2 upp_arm_3 upp_arm_4 upp_armed
							upp_artillery_gun upp_attachments upp_attack_selector upp_attack_target
							upp_attack_type_cruise_missile upp_attack_type_main_gun upp_audio
							upp_audio_play upp_audio_stop upp_auto upp_awacs_radar_system
							upp_ban_player upp_barge upp_barge_delivery_log upp_barge_id upp_barges
							upp_bear upp_ber upp_bindings_buttons upp_bindings_keys
							upp_blueprint_unlocked upp_blueprints upp_blueprints_unlocked upp_body
							upp_bomb_1 upp_bomb_2 upp_bomb_3 upp_bomb_4 upp_bomb_double
							upp_bomb_single upp_bot upp_bravo upp_bravo_go upp_brg upp_bridge
							upp_busy upp_buttons upp_camera upp_campaign upp_cancel
							upp_cancel_production upp_cancelled upp_capturing_islands upp_carrier
							upp_cartographic upp_cctv upp_center_to_carrier upp_center_to_vehicle
							upp_charlie upp_charlie_go upp_chassis upp_ciws_guns upp_clear upp_code
							upp_collect_surplus upp_collision upp_color upp_command_center
							upp_compass_e upp_compass_n upp_compass_s upp_compass_w upp_complete
							upp_confirm upp_connect upp_connect_to upp_connecting upp_construct
							upp_construct_defenses upp_constructing upp_contents upp_continue
							upp_control_bot upp_control_bots upp_credits upp_crr upp_crr_flr
							upp_crr_gun upp_crs_msl upp_currency_report upp_custom upp_damage_status
							upp_damaged upp_day upp_defensive_weapons upp_deliver_order
							upp_delivery_log upp_delta upp_delta_go upp_deploy_vehicle
							upp_deployable_droid upp_deployed upp_destroyed upp_details
							upp_disable_all upp_discard_items upp_dismiss upp_display
							upp_dmg_critical upp_docked upp_down upp_drd upp_droid upp_empty
							upp_engaged upp_engine upp_external_fuel_tank upp_facial upp_factories
							upp_failed upp_fast_jet_aircraft upp_female upp_fixed_camera
							upp_flight_invert upp_fog upp_forward upp_fuel upp_game
							upp_game_objectives upp_game_settings upp_game_type upp_gamepad
							upp_gender upp_gimbal_camera upp_gnd_art upp_go_code_alpha
							upp_go_code_bravo upp_go_code_charlie upp_go_code_delta upp_graphics
							upp_guided upp_guided_msl upp_gun upp_hair upp_heavy_cannon
							upp_heavy_lift_rotor upp_heavy_patrol_ship upp_heavy_platform upp_helm
							upp_help upp_holding_pattern upp_holomap upp_host upp_host_saved_game
							upp_hull upp_hull_damage upp_human upp_icbm upp_id upp_idle upp_impact
							upp_inactive upp_input_category_player upp_input_category_vehicle
							upp_installed_mods upp_interference upp_inventory upp_invert
							upp_invite_code upp_ip upp_ip_address upp_ir_countermeasures
							upp_island_captured upp_island_lost upp_island_names
							upp_island_team_colors upp_join upp_join_invite_code upp_join_ip_address
							upp_join_public_server upp_join_steam_friends upp_keyboard upp_kg
							upp_kick_player upp_kmh upp_knots upp_launch_carrier upp_lck
							upp_lift_crane upp_light_patrol_ship upp_light_rotor
							upp_light_scout_vehicle upp_load upp_load_game upp_load_stock upp_loadout
							upp_local_mods upp_locked upp_log upp_logistics upp_logistics_carrier
							upp_logistics_container_100mm upp_logistics_container_120mm
							upp_logistics_container_20mm upp_logistics_container_30mm
							upp_logistics_container_40mm upp_logistics_container_fuel
							upp_logistics_container_ir_missile upp_logistics_support_vehicle
							upp_lsr_off upp_lsr_on upp_male upp_manta upp_manual upp_map upp_map_key
							upp_map_menus upp_map_mode upp_missile upp_missile_1 upp_missile_2
							upp_missile_3 upp_missile_4 upp_missile_array upp_missile_double
							upp_missile_single upp_missile_tv upp_mnt upp_mods upp_mouse
							upp_mouse_flight upp_mouse_flight_invert upp_mouse_flight_sensitivity
							upp_msl upp_msl_incoming upp_mul upp_mule upp_multiplayer
							upp_multiplayer_game_type upp_mute_voice upp_naval_anti_air_cannon
							upp_naval_camera upp_naval_cruise_missile upp_naval_flare_launcher
							upp_naval_gun upp_naval_missile_array upp_naval_weapons upp_ndl
							upp_needlefish upp_network_error upp_new_game upp_new_transmission
							upp_new_workshop_item upp_no upp_no_ammo upp_no_friend_games_found
							upp_no_power upp_no_public_servers_found upp_no_transmissions upp_none
							upp_notifications upp_objectives upp_observation_camera upp_ocean_current
							upp_ocean_depth upp_offline upp_online upp_operation upp_options
							upp_order upp_orders upp_out_of_range upp_out_of_stock upp_overview
							upp_overwrite_save upp_paste upp_payload upp_pending upp_petrel upp_port
							upp_power upp_precipitation upp_press_any_key upp_press_any_key_newline
							upp_profile upp_propulsion upp_ptr upp_public_invite upp_public_servers
							upp_quality upp_queue upp_quit upp_quit_to_desktop upp_radar
							upp_radar_active upp_radar_disabled upp_radar_golfball upp_range
							upp_razorbill upp_ready upp_recent_transactions upp_refitting upp_repair
							upp_repairing upp_report_issue upp_reset upp_return_to_bridge upp_reverse
							upp_rocket_pod upp_rockets upp_rzr upp_save upp_save_game upp_save_name
							upp_save_slots upp_scout_wing_aircraft upp_screens upp_seal upp_sel
							upp_select_chassis upp_self_destruct upp_self_destruct_in upp_sensitivity
							upp_server_settings upp_settings_gameplay upp_ship_log
							upp_show_destination upp_show_grid upp_show_on_map upp_singleplayer
							upp_size upp_skin upp_smoke_launcher_explosive upp_smoke_launcher_stream
							upp_sonic_pulse_generator upp_spd upp_speed upp_stall upp_start
							upp_stationary_turret upp_status upp_steam_friends upp_steam_mods
							upp_stock upp_support_barge upp_support_weapons upp_sure upp_surface
							upp_swd upp_swordfish upp_system upp_tab_barges upp_tab_map upp_tab_stock
							upp_teams upp_throttle upp_tilt upp_torpedo upp_torpedo_decoy
							upp_torpedo_noisemaker upp_tracking upp_transmissions upp_travel
							upp_travel_to_carrier upp_trt upp_turret upp_turret_droid upp_type upp_ui
							upp_unavailable upp_unknown upp_unload upp_unmute_voice upp_up
							upp_update_existing_item upp_upload upp_upload_to_workshop
							upp_vehicle_control upp_vehicle_hud upp_vehicle_loadout
							upp_vehicle_operation upp_vehicle_team_colors upp_vehicle_throttle_mode
							upp_vehicles upp_visibility upp_volume upp_vr upp_wait_alpha
							upp_wait_bravo upp_wait_charlie upp_wait_delta upp_wait_group upp_waiting
							upp_walrus upp_warehouses upp_warning upp_waypoint upp_waypoints
							upp_weapons upp_wep upp_wind upp_wlr upp_yes use utility
							vehicle_bay_light vehicle_control vehicle_control_camera
							vehicle_destroyed vehicle_salvage vehicle_self_destructed
							vehicle_throttle_mode_absolute vehicle_throttle_mode_air
							vehicle_throttle_mode_ground vehicle_throttle_mode_relative
							vehicle_waypoint vertical viewing_scope virus_bot virus_bot_retired
							virus_control_capsule virus_module visible_to_enemy voice voice_indicator
							vr_controller_tooltips vr_move_mode vr_move_mode_smooth
							vr_move_mode_teleport vr_recenter vr_screen_tilt vr_smooth_move_speed
							vr_smooth_rotate_speed vr_tablet_index vr_world_scale vsync
							waiting_for_details walrus_chassis warehouse workshop_agreement
							e_map_notification_type barge_collection barge_delivery
							blueprint_unlocked currency_captured_islands currency_destroyed_vehicle
							currency_island_capture currency_refunded_production
							currency_spend_on_production enemy_vehicle_destroyed island_captured
							island_lost team_droid_retired team_player_joined team_player_left
							team_vehicle_destroyed team_vehicle_self_destructed
							team_virus_bot_retired e_message_box_type count none tutorial_end_good
							e_mod_type steam user e_mod_visibility friends private public
							e_mouse_flight_mode disabled roll_pitch yaw_pitch e_mouse_joystick_mode
							motion offset e_network_connect_type steam_id token
							e_objective_display_type capture_island none open_pause_menu
							e_simulation_screen_state game vehicle_camera
							e_team_target_consuming_type attachment missile none e_team_target_error
							busy count damaged destroyed inactive no_ammo no_power none out_of_range
							unavailable e_team_target_state active cancelled complete failed pending
							e_team_target_weapon_type carrier_cruise_missile carrier_flare
							carrier_main_gun count ground_artillery guided_missile
							e_ui_interaction_special air_pitch air_roll air_throttle air_yaw
							cancel_rebind chat count gamepad_dpad_all gamepad_dpad_lr gamepad_dpad_ud
							gamepad_scroll info info_desc interact_a_no_alt land_steer land_throttle
							map_drag map_pan map_zoom mouse_lr mouse_ud mouse_wheel pause
							vehicle_zoom e_vehicle_dock_state dock_queue docked docking docking_taxi
							pending_undock undock_holding undocked undocking e_waypoint_type
							barge_load_tile barge_unload_carrier deploy dock move support error fd
							findif format_quantity g_animation_time g_blend_tick g_blink_timer
							g_boot_counter g_camera_pos_x g_camera_pos_y g_camera_size
							g_color_airlift_order g_color_attack_order g_color_resupply
							g_color_waypoint g_command_center_ui is_place_turret
							selected_facility_queue_item selected_item selected_panel g_cursor_pos_x
							g_cursor_pos_y g_drag clear command_center_id is_drag island_id
							production_index set_command_center set_island_production
							set_island_turret_spawn set_vehicle set_vehicle_waypoint
							turret_spawn_index vehicle_id waypoint_id g_drag_distance g_go_code
							g_go_code_time g_highlighted clear command_center_id island_id
							production_index set_command_center set_island_production
							set_island_turret_spawn set_vehicle set_vehicle_waypoint
							turret_spawn_index vehicle_id waypoint_id g_input_w g_input_x g_input_y
							g_input_z g_is_camera_pos_initialised g_is_drag_pan_map g_is_ignore_tap
							g_is_island_team_colors g_is_mouse_mode g_is_on g_is_pointer_hovered
							g_is_pointer_pressed g_is_render_grid g_is_vehicle_team_colors
							g_item_categories 0 icon index item_count items 1 category cost desc icon
							index mass name time transfer_duration 2 category cost desc icon index
							mass name time transfer_duration 3 category cost desc icon index mass
							name time transfer_duration 4 category cost desc icon index mass name
							time transfer_duration name 1 icon index item_count items 1 category cost
							desc icon index mass name time transfer_duration 2 category cost desc
							icon index mass name time transfer_duration 3 category cost desc icon
							index mass name time transfer_duration 4 category cost desc icon index
							mass name time transfer_duration 5 category cost desc icon index mass
							name time transfer_duration 6 category cost desc icon index mass name
							time transfer_duration 7 category cost desc icon index mass name time
							transfer_duration 8 category cost desc icon index mass name time
							transfer_duration 9 category cost desc icon index mass name time
							transfer_duration name 2 icon index item_count items 1 category cost desc
							icon index mass name time transfer_duration 2 category cost desc icon
							index mass name time transfer_duration 3 category cost desc icon index
							mass name time transfer_duration 4 category cost desc icon index mass
							name time transfer_duration 5 category cost desc icon index mass name
							time transfer_duration 6 category cost desc icon index mass name time
							transfer_duration 7 category cost desc icon index mass name time
							transfer_duration 8 category cost desc icon index mass name time
							transfer_duration 9 category cost desc icon index mass name time
							transfer_duration 10 category cost desc icon index mass name time
							transfer_duration 11 category cost desc icon index mass name time
							transfer_duration 12 category cost desc icon index mass name time
							transfer_duration name 3 icon index item_count items 1 category cost desc
							icon index mass name time transfer_duration 2 category cost desc icon
							index mass name time transfer_duration 3 category cost desc icon index
							mass name time transfer_duration 4 category cost desc icon index mass
							name time transfer_duration 5 category cost desc icon index mass name
							time transfer_duration 6 category cost desc icon index mass name time
							transfer_duration 7 category cost desc icon index mass name time
							transfer_duration 8 category cost desc icon index mass name time
							transfer_duration 9 category cost desc icon index mass name time
							transfer_duration 10 category cost desc icon index mass name time
							transfer_duration 11 category cost desc icon index mass name time
							transfer_duration name 4 icon index item_count items 1 category cost desc
							icon index mass name time transfer_duration 2 category cost desc icon
							index mass name time transfer_duration 3 category cost desc icon index
							mass name time transfer_duration 4 category cost desc icon index mass
							name time transfer_duration 5 category cost desc icon index mass name
							time transfer_duration 6 category cost desc icon index mass name time
							transfer_duration 7 category cost desc icon index mass name time
							transfer_duration 8 category cost desc icon index mass name time
							transfer_duration 9 category cost desc icon index mass name time
							transfer_duration 10 category cost desc icon index mass name time
							transfer_duration 11 category cost desc icon index mass name time
							transfer_duration 12 category cost desc icon index mass name time
							transfer_duration name 5 icon index item_count items 1 category cost desc
							icon index mass name time transfer_duration 2 category cost desc icon
							index mass name time transfer_duration 3 category cost desc icon index
							mass name time transfer_duration 4 category cost desc icon index mass
							name time transfer_duration name 6 icon index item_count items 1 category
							cost desc icon index mass name time transfer_duration 2 category cost
							desc icon index mass name time transfer_duration 3 category cost desc
							icon index mass name time transfer_duration 4 category cost desc icon
							index mass name time transfer_duration name 7 icon index item_count items
							1 category cost desc icon index mass name time transfer_duration name 8
							icon index item_count items 1 category cost desc icon index mass name
							time transfer_duration name g_item_count g_item_data 0 1 2 3 4 5 6 7 8 9
							10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33
							34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55
							category cost desc icon index mass name time transfer_duration 56
							category cost desc icon index mass name time transfer_duration 57
							category cost desc icon index mass name time transfer_duration 58 59 60
							g_map_render_mode g_menu_overlay_factor g_next_pos_x g_next_pos_y
							g_next_size g_pointer_pos_prev g_pointer_pos_x g_pointer_pos_y
							g_prev_pos_x g_prev_pos_y g_prev_size g_screen_h g_screen_index
							g_screen_vehicle_pos g_screen_w g_selected_child_vehicle_id
							g_selected_vehicle_ui confirm_self_destruct g_selection
							attack_target_vehicle_id clear command_center_id is_selection map
							set_attack_target_vehicle set_command_center set_map set_vehicle
							set_vehicle_waypoint vehicle_id waypoint_id g_self_destruct_modes
							countdown input locked ready g_tut_is_carrier_selected
							g_tut_is_context_menu_open g_tut_selected_vehicle_id
							g_tut_selected_waypoint_id g_tut_undocking_vehicle_id g_ui
							animation_timer delta_time input_action input_action_held
							input_action_repeat input_action_repeat_time input_left input_left_held
							input_left_repeat input_left_repeat_time input_pointer_1
							input_pointer_1_held input_pointer_1_repeat input_pointer_1_repeat_time
							input_right input_right_held input_right_repeat input_right_repeat_time
							input_scroll_dy input_scroll_gamepad_dy input_text_backspace
							input_text_backspace_held input_text_backspace_repeat
							input_text_backspace_repeat_time input_text_enter input_text_enter_held
							input_text_enter_repeat input_text_enter_repeat_time input_text_shift
							input_text_shift_held input_text_space input_text_space_held
							input_text_space_repeat input_text_space_repeat_time is_mouse_hovered
							is_select_next is_select_next_held is_select_next_repeat
							is_select_next_repeat_time is_select_prev is_select_prev_held
							is_select_prev_repeat is_select_prev_repeat_time mouse_x mouse_y
							region_stack window_col_active window_col_inactive window_stack windows
							g_viewing_vehicle_id gamma_correct
							get_attachment_data_by_definition_index get_attachment_icons
							get_attack_type_icon get_carrier_bay_name
							get_chassis_data_by_definition_index
							get_chassis_image_by_definition_index get_gamepad_axis_icon
							get_gamepad_button_icon get_grid_spacing
							get_icon_data_by_definition_index get_is_collapse_islands
							get_is_highlighting_dragged_item get_is_map_movement_allowed
							get_is_placing_turret get_is_render_ammo_indicator
							get_is_render_fuel_indicator get_is_vehicle_air
							get_is_vehicle_airliftable get_is_vehicle_droid_deploy_available
							get_is_vehicle_enterable get_is_vehicle_land
							get_is_vehicle_robot_dog_deploy_available get_is_vehicle_sea
							get_is_vehicle_type_waypoint_capable get_is_vehicle_waypoint_available
							get_island_team_color get_pointer_icon get_screen_from_world
							get_tab_colors get_ui_vehicle_chassis_attachments get_vehicle_capability
							get_vehicle_has_robot_dogs get_vehicle_logistics_capabilities
							get_vehicle_team_color get_vehicle_weapon_range
							get_world_delta_from_screen get_world_from_screen getmetatable iff
							imgui_barge_inventory_table imgui_carrier_docking_bays
							imgui_character_options imgui_checkbox_toggle imgui_combo_custom
							imgui_facility_inventory_table imgui_item_button imgui_item_description
							imgui_key_icon_width imgui_list_item_blink imgui_menu_focus_overlay
							imgui_menu_overlay imgui_options_menu imgui_render_key_icon
							imgui_table_entry imgui_table_entry_grid imgui_table_header
							imgui_vehicle_chassis_loadout imgui_vehicle_inventory_table input_axis
							input_event input_pointer input_scroll input_selection input_zoom_camera
							invlerp invlerp_clamp ipairs join_strings lerp lib_imgui __index
							begin_nav_row begin_ui begin_window begin_window_dialog button
							button_group checkbox combo combo_color8 create_ui divider end_nav_row
							end_ui end_window end_window_dialog example_nav_row get_create_window
							get_is_item_selected get_is_scroll_drag get_region get_window header
							hoverable image input_event input_pointer input_scroll
							input_scroll_gamepad is_hovered is_item_selected keybinding keyboard
							list_item list_item_wrap mod_details pop_region pop_window push_region
							push_window reset_scroll save_slot selectable selector server_details
							set_item_selected set_scroll slider spacer stat stat_button text
							text_basic textbox load loadfile math abs acos asin atan ceil cos deg exp
							floor fmod huge log max maxinteger min mininteger modf pi rad random
							randomseed sin sqrt tan tointeger type ult mult_alpha next pairs parse
							parse_bool parse_f32 parse_s32 pcall point_in_rect print purchase_turret
							rawequal rawget rawlen rawset remap remap_clamp render_button_bg
							render_button_bg_outline render_currency_display render_cursor_info
							render_dashed_line render_map_scale render_selection
							render_selection_attack_target render_selection_carrier
							render_selection_command_center render_selection_map
							render_selection_vehicle render_selection_waypoint render_tab
							render_tooltip render_ui_chassis_definition_description
							render_vehicle_tooltip round_down select setmetatable string byte char
							dump find format gmatch gsub len lower match pack packsize rep reverse
							sub unpack upper table concat insert move pack remove sort unpack
							table_count tonumber tostring type
							ui_render_selection_carrier_vehicle_overview undock_by_bay_index update
							update_add_ui_interaction update_add_ui_interaction_special
							update_boot_override update_create_workshop_mod update_cursor_state
							update_get_active_input_type update_get_angle_2d
							update_get_attachment_ammo_item_type update_get_attachment_option
							update_get_attachment_option_count update_get_attachment_option_hidden
							update_get_connect_address update_get_currency_log
							update_get_currency_log_count update_get_definition_vehicle_stats
							update_get_delivery_log update_get_delivery_log_count
							update_get_friend_games update_get_game_input_category
							update_get_game_input_count update_get_game_input_name
							update_get_game_settings update_get_gfx_resolution_modes
							update_get_hair_color_options update_get_host_connect_token
							update_get_host_max_players update_get_host_password
							update_get_input_binding_gamepad_axis
							update_get_input_binding_gamepad_button
							update_get_input_binding_is_axis_inverted
							update_get_input_binding_joystick_axis
							update_get_input_binding_joystick_button
							update_get_input_binding_joystick_connected
							update_get_input_binding_joystick_guid
							update_get_input_binding_joystick_name
							update_get_input_binding_keyboard_key
							update_get_input_binding_keyboard_pointer update_get_input_category_name
							update_get_input_gamepad_axis_value update_get_input_joystick_axis_count
							update_get_input_joystick_axis_value update_get_input_joystick_connected
							update_get_input_joystick_guid update_get_input_joystick_name
							update_get_is_focus_local update_get_is_input_rebindable_gamepad
							update_get_is_input_rebindable_gamepad_as_axis
							update_get_is_input_rebindable_keyboard update_get_is_multiplayer
							update_get_is_notification_holomap_set
							update_get_is_show_vr_multiplayer_warning update_get_is_vr
							update_get_join_ip update_get_join_password update_get_key_name
							update_get_loc update_get_loc_value update_get_local_peer_id
							update_get_local_team_id update_get_logic_tick
							update_get_map_destroyed_vehicle update_get_map_destroyed_vehicle_count
							update_get_map_vehicle_by_id update_get_map_vehicle_by_index
							update_get_map_vehicle_count update_get_map_vehicle_index_by_id
							update_get_map_vehicle_position_relate_to_parent_vehicle
							update_get_missile_by_index update_get_missile_count
							update_get_mod_details update_get_mod_incompatible_active_mods
							update_get_mod_workshop_upload_status update_get_new_game_base_difficulty
							update_get_new_game_blueprints update_get_new_game_carrier_count_per_team
							update_get_new_game_is_tutorial update_get_new_game_island_count
							update_get_new_game_island_count_per_team
							update_get_new_game_loadout_type update_get_new_game_team_count_ai
							update_get_new_game_team_count_human update_get_notification_holomap
							update_get_notification_log update_get_notification_log_count
							update_get_ocean_current_velocity update_get_ocean_depth_factor
							update_get_peer_count update_get_peer_id update_get_peer_index_by_id
							update_get_peer_is_admin update_get_peer_name update_get_peer_team
							update_get_pointer_name update_get_projectile_by_index
							update_get_projectile_count update_get_rebinding_gamepad
							update_get_rebinding_keyboard
							update_get_resource_inventory_category_count
							update_get_resource_inventory_category_data
							update_get_resource_inventory_item_count
							update_get_resource_inventory_item_data
							update_get_resource_item_for_definition update_get_resource_item_hidden
							update_get_resource_item_hidden_facility_production
							update_get_resource_item_name update_get_resource_item_production_time
							update_get_resource_item_weight update_get_resource_items_for_category
							update_get_respawn_carrier_id update_get_save_slots
							update_get_screen_input update_get_screen_state_active
							update_get_screen_team_id update_get_screen_vehicle
							update_get_server_list update_get_server_meta update_get_server_name
							update_get_skin_color_options update_get_team update_get_team_color
							update_get_team_transmission_count update_get_team_transmission_name
							update_get_tile_by_id update_get_tile_by_index update_get_tile_count
							update_get_time_since_epoch update_get_transmission_playback_progress
							update_get_transmission_playing_index update_get_vehicle_by_id
							update_get_version update_get_weapon_line_by_index
							update_get_weapon_line_count update_get_weather_fog_factor
							update_get_weather_lightning_factor
							update_get_weather_precipitation_factor update_get_weather_wind_velocity
							update_get_workshop_published_mods update_interaction_ui
							update_launch_carrier update_map_dismiss_notification update_play_sound
							update_play_transmission update_refresh_workshop_published_mods
							update_screen_overrides update_self_destruct_override
							update_set_connect_address update_set_go_code update_set_host_max_players
							update_set_host_password update_set_is_mod_enabled update_set_join_ip
							update_set_join_password update_set_new_game_base_difficulty
							update_set_new_game_blueprints update_set_new_game_carrier_count_per_team
							update_set_new_game_is_tutorial update_set_new_game_island_count
							update_set_new_game_island_count_per_team
							update_set_new_game_loadout_type update_set_new_game_team_count_ai
							update_set_new_game_team_count_human
							update_set_screen_background_is_render_islands
							update_set_screen_background_type update_set_screen_camera_attach_vehicle
							update_set_screen_camera_cull_distance
							update_set_screen_camera_is_render_map_vehicles
							update_set_screen_camera_is_render_ocean
							update_set_screen_camera_lod_level
							update_set_screen_camera_pos_orientation
							update_set_screen_camera_render_attached_vehicle
							update_set_screen_map_position_scale update_set_screen_state_exit
							update_set_screen_vehicle_control_id update_set_server_name
							update_stop_transmission update_string_from_epoch update_ui_add_triangle
							update_ui_begin_triangles update_ui_circle update_ui_end_triangles
							update_ui_event update_ui_format_peer_display_name
							update_ui_get_image_size update_ui_get_offset update_ui_get_text_size
							update_ui_image update_ui_image_power update_ui_image_rot update_ui_line
							update_ui_pop_alpha update_ui_pop_clip update_ui_pop_offset
							update_ui_pop_scale update_ui_push_alpha update_ui_push_clip
							update_ui_push_offset update_ui_push_scale update_ui_rectangle
							update_ui_rectangle_outline update_ui_set_back_color
							update_ui_set_text_color update_ui_text update_ui_text_scale
							update_update_workshop_mod utf8 char charpattern codepoint codes len
							offset vec2 vec2_angle vec2_clamp_to_rect vec2_dist vec2_dist_sq vec2_dot
							vec2_in_rect vec2_length vec2_length_sq vec2_lerp vec2_normal vec3
							vec3_dist vec3_dist_sq vec3_dot vec3_length vec3_length_sq vec3_normal
							vec4 xpcall
						</code>
					</pre>
				</div>
			</div>
			<Footer />
		</main>
	);
}
