import { Dom } from "./Libs.js";

let Src = {
    // New src content added here

    // * New Images added here
    arrow_1: new Dom("#arrow_1"),
    arrow_2: new Dom("#arrow_2"),
    bat_list_1: new Dom("#bat_list_1"),
    bat_list_1_heading: new Dom("#bat_list_1_heading"),
    bat_list_2: new Dom("#bat_list_2"),
    bat_list_2_heading: new Dom("#bat_list_2_heading"),
    bgimag: new Dom("#bgimag"),
    binding_key: new Dom("#binding_key"),
    black_arrow_1: new Dom("#black_arrow_1"),
    black_arrow_2: new Dom("#black_arrow_2"),
    blank_box: new Dom("#blank_box"),
    btn_check_connection: new Dom("#btn_check_connection"),
    btn_check_physical_damage: new Dom("#btn_check_physical_damage"),
    btn_start_rectifying: new Dom("#btn_start_rectifying"),
    btn_start_tracing_1: new Dom("#btn_start_tracing_1"),
    btn_start_tracing_2: new Dom("#btn_start_tracing_2"),
    DE2_porblem1_issue1_multi_meter_full: new Dom("#DE2_porblem1_issue1_multi_meter_full"),
    drone_3d_img: new Dom("#drone_3d_img"),
    drone_back_side: new Dom("#drone_back_side"),
    drone_front_side: new Dom("#drone_front_side"),
    drone_front_side_after_removing_upper_plate: new Dom("#drone_front_side_after_removing_upper_plate"),
    drone_without_pmu: new Dom("#drone_without_pmu"),
    esc: new Dom("#esc"),
    ESC1_capacitor_of_esc: new Dom("#ESC1_capacitor_of_esc"),
    ESC1_zoom_1_esc_front: new Dom("#ESC1_zoom_1_esc_front"),
    ESC1_zoom_2_esc_back: new Dom("#ESC1_zoom_2_esc_back"),
    ESC2_zoom_1_connections: new Dom("#ESC2_zoom_1_connections"),
    ESC2_zoom_2_connection_visible: new Dom("#ESC2_zoom_2_connection_visible"),
    ESC2_zoom_3_loose_wire: new Dom("#ESC2_zoom_3_loose_wire"),
    flight_controller_zoom_img: new Dom("#flight_controller_zoom_img"),
    front_page_box: new Dom("#front_page_box"),
    fullfinal_drone: new Dom("#fullfinal_drone"),
    homepage_battery_issue: new Dom("#homepage_battery_issue"),
    intro_page: new Dom("#intro_page"),
    issue_1: new Dom("#issue_1"),
    issue_2: new Dom("#issue_2"),
    issue_bat: new Dom("#issue_bat"),
    issue_battery_listings: new Dom("#issue_battery_listings"),
    issue_esc: new Dom("#issue_esc"),
    issue_fc: new Dom("#issue_fc"),
    issue_motor: new Dom("#issue_motor"),
    issue_pmu: new Dom("#issue_pmu"),
    issue_rr: new Dom("#issue_rr"),
    issue_rreceiver: new Dom("#issue_rreceiver"),
    mask: new Dom("#mask"),
    mmb: new Dom("#mmb"),
    motor: new Dom("#motor"),
    pmuwithwire: new Dom("#pmuwithwire"),
    pmuzoom: new Dom("#pmuzoom"),
    pmu_img: new Dom("#pmu_img"),
    pmu_lifted: new Dom("#pmu_lifted"),
    pmu_zoom_img_pmu: new Dom("#pmu_zoom_img_pmu"),
    popup_1: new Dom("#popup_1"),
    popup_2: new Dom("#popup_2"),
    problem1_issue1_motor_check_multimeter_probe_moved_1: new Dom("#problem1_issue1_motor_check_multimeter_probe_moved_1"),
    problem1_issue1_motor_check_multimeter_probe_moved_2: new Dom("#problem1_issue1_motor_check_multimeter_probe_moved_2"),
    problem1_issue1_motor_check_multimeter_probe_moved_3: new Dom("#problem1_issue1_motor_check_multimeter_probe_moved_3"),
    problem1_issue1_motor_check_multimeter_probe_moved_4: new Dom("#problem1_issue1_motor_check_multimeter_probe_moved_4"),
    problem1_issue1_zoom_1_motor_front: new Dom("#problem1_issue1_zoom_1_motor_front"),
    problem1_issue1_zoom_2_motor_back: new Dom("#problem1_issue1_zoom_2_motor_back"),
    problem1_issue1_zoom_3_motor_yellow_wire_moved: new Dom("#problem1_issue1_zoom_3_motor_yellow_wire_moved"),
    problem1_issue1_zoom_4_motor_black_wire_moved: new Dom("#problem1_issue1_zoom_4_motor_black_wire_moved"),
    problem1_issue1_zoom_5_motor_red_wire_moved: new Dom("#problem1_issue1_zoom_5_motor_red_wire_moved"),
    problem2_issue2_battery_only: new Dom("#problem2_issue2_battery_only"),
    problem2_issue2_battery_removed_drone: new Dom("#problem2_issue2_battery_removed_drone"),
    problem2_issue2_belt_opend: new Dom("#problem2_issue2_belt_opend"),
    problem2_issue2_dean_plug_unpluged: new Dom("#problem2_issue2_dean_plug_unpluged"),
    problem2_issue2_fc_and_rx_only: new Dom("#problem2_issue2_fc_and_rx_only"),
    problem2_issue2_gluegun: new Dom("#problem2_issue2_gluegun"),
    problem2_issue2_gluegun2: new Dom("#problem2_issue2_gluegun2"),
    problem2_issue2_gluepoint: new Dom("#problem2_issue2_gluepoint"),
    problem2_issue2_gps_sided: new Dom("#problem2_issue2_gps_sided"),
    problem2_issue2_gunintro: new Dom("#problem2_issue2_gunintro"),
    problem2_issue2_handrod_wire: new Dom("#problem2_issue2_handrod_wire"),
    problem2_issue2_only_bottom_plate: new Dom("#problem2_issue2_only_bottom_plate"),
    problem2_issue2_silverhand: new Dom("#problem2_issue2_silverhand"),
    problem2_issue2_sm1: new Dom("#problem2_issue2_sm1"),
    problem2_issue2_soldpoint: new Dom("#problem2_issue2_soldpoint"),
    problem2_issue2_soldrod: new Dom("#problem2_issue2_soldrod"),
    problem2_issue2_soldstand: new Dom("#problem2_issue2_soldstand"),
    problem2_issue2_upper_plate_only: new Dom("#problem2_issue2_upper_plate_only"),
    problem2_issue2_upper_plate_removed_drone: new Dom("#problem2_issue2_upper_plate_removed_drone"),
    problem2_issue2_zoom_1_upper_plate_removed_drone: new Dom("#problem2_issue2_zoom_1_upper_plate_removed_drone"),
    problem2_issue2_zoom_2_helper_zoom_view_loose_wire: new Dom("#problem2_issue2_zoom_2_helper_zoom_view_loose_wire"),
    problem2_issue2_zoom_2_zoom_view_loose_wire: new Dom("#problem2_issue2_zoom_2_zoom_view_loose_wire"),
    problem2_issue2_zoom_3_zoom_view_loose_wire_placed: new Dom("#problem2_issue2_zoom_3_zoom_view_loose_wire_placed"),
    problem2_issue2_zoom_4_helper_zoom_view_loose_wire_soldered: new Dom("#problem2_issue2_zoom_4_helper_zoom_view_loose_wire_soldered"),
    problem2_issue2_zoom_4_zoom_view_loose_wire_soldered: new Dom("#problem2_issue2_zoom_4_zoom_view_loose_wire_soldered"),
    problem2_issue2_zoom_5_zoom_view_soldered_wire_glued: new Dom("#problem2_issue2_zoom_5_zoom_view_soldered_wire_glued"),
    problem2_issue2_zoom_view_loose_wire: new Dom("#problem2_issue2_zoom_view_loose_wire"),
    problem2_issue2_zoom_view_loose_wire_placed: new Dom("#problem2_issue2_zoom_view_loose_wire_placed"),
    problem2_issue2_zoom_view_loose_wire_soldered: new Dom("#problem2_issue2_zoom_view_loose_wire_soldered"),
    problem2_issue2_zoom_view_soldered_wire_glued: new Dom("#problem2_issue2_zoom_view_soldered_wire_glued"),
    problem_1: new Dom("#problem_1"),
    problem_1_battery: new Dom("#problem_1_battery"),
    problem_1_battery_puffed: new Dom("#problem_1_battery_puffed"),
    problem_1_drone_front_image: new Dom("#problem_1_drone_front_image"),
    problem_1_drone_front_with_pmu_image: new Dom("#problem_1_drone_front_with_pmu_image"),
    problem_1_drone_front_zoom_image: new Dom("#problem_1_drone_front_zoom_image"),
    problem_1_drone_front_zoom_image_2: new Dom("#problem_1_drone_front_zoom_image_2"),
    problem_1_pmu_zoom_img_2: new Dom("#problem_1_pmu_zoom_img_2"),
    problem_1_soldering_iron_of_connector: new Dom("#problem_1_soldering_iron_of_connector"),
    problem_2: new Dom("#problem_2"),
    receiver_zoom_img: new Dom("#receiver_zoom_img"),
    red000: new Dom("#red000"),
    red001: new Dom("#red001"),
    red002: new Dom("#red002"),
    red005: new Dom("#red005"),
    red006: new Dom("#red006"),
    red1: new Dom("#red1"),
    right_tick_1: new Dom("#right_tick_1"),
    right_tick_2: new Dom("#right_tick_2"),
    right_tick_3: new Dom("#right_tick_3"),
    right_tick_4: new Dom("#right_tick_4"),
    round_arrow: new Dom("#round_arrow"),
    step_1_arrow_image_1: new Dom("#step_1_arrow_image_1"),
    step_1_arrow_image_2: new Dom("#step_1_arrow_image_2"),
    tab_1: new Dom("#tab_1"),
    tab_2: new Dom("#tab_2"),
    tab_3: new Dom("#tab_3"),
    tab_4: new Dom("#tab_4"),
    tab_5: new Dom("#tab_5"),
    tab_6: new Dom("#tab_6"),
    tab_dot: new Dom("#tab_dot"),
    tie: new Dom("#tie"),
    tie_tied: new Dom("#tie_tied"),
    transmitter: new Dom("#transmitter"),
    wire4arm_pmufix: new Dom("#wire4arm_pmufix"),
    zoompmu: new Dom("#zoompmu"),
    zoom_battery_with_bcg_and_border: new Dom("#zoom_battery_with_bcg_and_border"),
    zoom_dean_plug: new Dom("#zoom_dean_plug"),
    zoom_pmu_open_tie: new Dom("#zoom_pmu_open_tie"),
    zoom_pmu_without_pmu: new Dom("#zoom_pmu_without_pmu"),
    zoom_pmu_without_ziptie: new Dom("#zoom_pmu_without_ziptie"),
    zoom_pmu_ziptie: new Dom("#zoom_pmu_ziptie"),
    zoom_without_battery_and_border: new Dom("#zoom_without_battery_and_border"),

    // * New Videos added here
    battery_remove: new Dom("#battery_remove"),
    binding: new Dom("#binding"),
    esc_connection: new Dom("#esc_connection"),
    esc_replacement: new Dom("#esc_replacement"),
    motor_yellow_wire: new Dom("#motor_yellow_wire"),
    pmu_iron_soldering: new Dom("#pmu_iron_soldering"),
    remove_upper_plate: new Dom("#remove_upper_plate"),
    send_dropping: new Dom("#send_dropping"),
    yoke_front_to_back: new Dom("#yoke_front_to_back"),
    yoke_front_to_side: new Dom("#yoke_front_to_side"),
}

export default Src;
