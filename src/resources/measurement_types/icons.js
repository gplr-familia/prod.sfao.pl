import React from 'react';
import Icon from '@material-ui/core/Icon';

const choices = [
  { id: 'access_alarm' },
  { id: 'access_alarms' },
  { id: 'accessibility' },
  { id: 'accessible' },
  { id: 'access_time' },
  { id: 'account_balance' },
  { id: 'account_balance_wallet' },
  { id: 'account_box' },
  { id: 'account_circle' },
  { id: 'ac_unit' },
  { id: 'adb' },
  { id: 'add' },
  { id: 'add_alarm' },
  { id: 'add_alert' },
  { id: 'add_a_photo' },
  { id: 'add_box' },
  { id: 'add_circle' },
  { id: 'add_circle_outline' },
  { id: 'add_location' },
  { id: 'add_shopping_cart' },
  { id: 'add_to_photos' },
  { id: 'add_to_queue' },
  { id: 'adjust' },
  { id: 'airline_seat_flat' },
  { id: 'airline_seat_flat_angled' },
  { id: 'airline_seat_individual_suite' },
  { id: 'airline_seat_legroom_extra' },
  { id: 'airline_seat_legroom_normal' },
  { id: 'airline_seat_legroom_reduced' },
  { id: 'airline_seat_recline_extra' },
  { id: 'airline_seat_recline_normal' },
  { id: 'airplanemode_active' },
  { id: 'airplanemode_inactive' },
  { id: 'airplay' },
  { id: 'airport_shuttle' },
  { id: 'alarm' },
  { id: 'alarm_add' },
  { id: 'alarm_off' },
  { id: 'alarm_on' },
  { id: 'album' },
  { id: 'all_inclusive' },
  { id: 'all_out' },
  { id: 'android' },
  { id: 'announcement' },
  { id: 'apps' },
  { id: 'archive' },
  { id: 'arrow_back' },
  { id: 'arrow_downward' },
  { id: 'arrow_drop_down' },
  { id: 'arrow_drop_down_circle' },
  { id: 'arrow_drop_up' },
  { id: 'arrow_forward' },
  { id: 'arrow_upward' },
  { id: 'art_track' },
  { id: 'aspect_ratio' },
  { id: 'assessment' },
  { id: 'assignment' },
  { id: 'assignment_ind' },
  { id: 'assignment_late' },
  { id: 'assignment_return' },
  { id: 'assignment_returned' },
  { id: 'assignment_turned_in' },
  { id: 'assistant' },
  { id: 'assistant_photo' },
  { id: 'attach_file' },
  { id: 'attachment' },
  { id: 'attach_money' },
  { id: 'audiotrack' },
  { id: 'autorenew' },
  { id: 'av_timer' },
  { id: 'backspace' },
  { id: 'backup' },
  { id: 'battery20' },
  { id: 'battery30' },
  { id: 'battery50' },
  { id: 'battery60' },
  { id: 'battery80' },
  { id: 'battery90' },
  { id: 'battery_alert' },
  { id: 'battery_charging20' },
  { id: 'battery_charging30' },
  { id: 'battery_charging50' },
  { id: 'battery_charging60' },
  { id: 'battery_charging80' },
  { id: 'battery_charging90' },
  { id: 'battery_charging_full' },
  { id: 'battery_full' },
  { id: 'battery_std' },
  { id: 'battery_unknown' },
  { id: 'beach_access' },
  { id: 'beenhere' },
  { id: 'block' },
  { id: 'bluetooth' },
  { id: 'bluetooth_audio' },
  { id: 'bluetooth_connected' },
  { id: 'bluetooth_disabled' },
  { id: 'bluetooth_searching' },
  { id: 'blur_circular' },
  { id: 'blur_linear' },
  { id: 'blur_off' },
  { id: 'blur_on' },
  { id: 'book' },
  { id: 'bookmark' },
  { id: 'bookmark_border' },
  { id: 'border_all' },
  { id: 'border_bottom' },
  { id: 'border_clear' },
  { id: 'border_color' },
  { id: 'border_horizontal' },
  { id: 'border_inner' },
  { id: 'border_left' },
  { id: 'border_outer' },
  { id: 'border_right' },
  { id: 'border_style' },
  { id: 'border_top' },
  { id: 'border_vertical' },
  { id: 'branding_watermark' },
  { id: 'brightness1' },
  { id: 'brightness2' },
  { id: 'brightness3' },
  { id: 'brightness4' },
  { id: 'brightness5' },
  { id: 'brightness6' },
  { id: 'brightness7' },
  { id: 'brightness_auto' },
  { id: 'brightness_high' },
  { id: 'brightness_low' },
  { id: 'brightness_medium' },
  { id: 'broken_image' },
  { id: 'brush' },
  { id: 'bubble_chart' },
  { id: 'bug_report' },
  { id: 'build' },
  { id: 'burst_mode' },
  { id: 'business' },
  { id: 'business_center' },
  { id: 'cached' },
  { id: 'cake' },
  { id: 'call' },
  { id: 'call_end' },
  { id: 'call_made' },
  { id: 'call_merge' },
  { id: 'call_missed' },
  { id: 'call_missed_outgoing' },
  { id: 'call_received' },
  { id: 'call_split' },
  { id: 'call_to_action' },
  { id: 'camera' },
  { id: 'camera_alt' },
  { id: 'camera_enhance' },
  { id: 'camera_front' },
  { id: 'camera_rear' },
  { id: 'camera_roll' },
  { id: 'cancel' },
  { id: 'card_giftcard' },
  { id: 'card_membership' },
  { id: 'card_travel' },
  { id: 'casino' },
  { id: 'cast' },
  { id: 'cast_connected' },
  { id: 'center_focus_strong' },
  { id: 'center_focus_weak' },
  { id: 'change_history' },
  { id: 'chat' },
  { id: 'chat_bubble' },
  { id: 'chat_bubble_outline' },
  { id: 'check' },
  { id: 'check_box' },
  { id: 'check_box_outline_blank' },
  { id: 'check_circle' },
  { id: 'chevron_left' },
  { id: 'chevron_right' },
  { id: 'child_care' },
  { id: 'child_friendly' },
  { id: 'chrome_reader_mode' },
  { id: 'class' },
  { id: 'clear' },
  { id: 'clear_all' },
  { id: 'close' },
  { id: 'closed_caption' },
  { id: 'cloud' },
  { id: 'cloud_circle' },
  { id: 'cloud_done' },
  { id: 'cloud_download' },
  { id: 'cloud_off' },
  { id: 'cloud_queue' },
  { id: 'cloud_upload' },
  { id: 'code' },
  { id: 'collections' },
  { id: 'collections_bookmark' },
  { id: 'colorize' },
  { id: 'color_lens' },
  { id: 'comment' },
  { id: 'compare' },
  { id: 'compare_arrows' },
  { id: 'computer' },
  { id: 'confirmation_number' },
  { id: 'contact_mail' },
  { id: 'contact_phone' },
  { id: 'contacts' },
  { id: 'content_copy' },
  { id: 'content_cut' },
  { id: 'content_paste' },
  { id: 'control_point' },
  { id: 'control_point_duplicate' },
  { id: 'copyright' },
  { id: 'create' },
  { id: 'create_new_folder' },
  { id: 'credit_card' },
  { id: 'crop' },
  { id: 'crop169' },
  { id: 'crop32' },
  { id: 'crop54' },
  { id: 'crop75' },
  { id: 'crop_din' },
  { id: 'crop_free' },
  { id: 'crop_landscape' },
  { id: 'crop_original' },
  { id: 'crop_portrait' },
  { id: 'crop_rotate' },
  { id: 'crop_square' },
  { id: 'dashboard' },
  { id: 'data_usage' },
  { id: 'date_range' },
  { id: 'dehaze' },
  { id: 'delete' },
  { id: 'delete_forever' },
  { id: 'delete_sweep' },
  { id: 'description' },
  { id: 'desktop_mac' },
  { id: 'desktop_windows' },
  { id: 'details' },
  { id: 'developer_board' },
  { id: 'developer_mode' },
  { id: 'device_hub' },
  { id: 'devices' },
  { id: 'devices_other' },
  { id: 'dialer_sip' },
  { id: 'dialpad' },
  { id: 'directions' },
  { id: 'directions_bike' },
  { id: 'directions_boat' },
  { id: 'directions_bus' },
  { id: 'directions_car' },
  { id: 'directions_railway' },
  { id: 'directions_run' },
  { id: 'directions_subway' },
  { id: 'directions_transit' },
  { id: 'directions_walk' },
  { id: 'disc_full' },
  { id: 'dns' },
  { id: 'dock' },
  { id: 'domain' },
  { id: 'done' },
  { id: 'done_all' },
  { id: 'do_not_disturb' },
  { id: 'do_not_disturb_alt' },
  { id: 'do_not_disturb_off' },
  { id: 'do_not_disturb_on' },
  { id: 'donut_large' },
  { id: 'donut_small' },
  { id: 'drafts' },
  { id: 'drag_handle' },
  { id: 'drive_eta' },
  { id: 'dvr' },
  { id: 'edit' },
  { id: 'edit_location' },
  { id: 'eject' },
  { id: 'email' },
  { id: 'enhanced_encryption' },
  { id: 'equalizer' },
  { id: 'error' },
  { id: 'error_outline' },
  { id: 'euro_symbol' },
  { id: 'event' },
  { id: 'event_available' },
  { id: 'event_busy' },
  { id: 'event_note' },
  { id: 'event_seat' },
  { id: 'ev_station' },
  { id: 'exit_to_app' },
  { id: 'expand_less' },
  { id: 'expand_more' },
  { id: 'explicit' },
  { id: 'explore' },
  { id: 'exposure' },
  { id: 'exposure_neg1' },
  { id: 'exposure_neg2' },
  { id: 'exposure_plus1' },
  { id: 'exposure_plus2' },
  { id: 'exposure_zero' },
  { id: 'extension' },
  { id: 'face' },
  { id: 'fast_forward' },
  { id: 'fast_rewind' },
  { id: 'favorite' },
  { id: 'favorite_border' },
  { id: 'featured_play_list' },
  { id: 'featured_video' },
  { id: 'feedback' },
  { id: 'fiber_dvr' },
  { id: 'fiber_manual_record' },
  { id: 'fiber_new' },
  { id: 'fiber_pin' },
  { id: 'fiber_smart_record' },
  { id: 'file_download' },
  { id: 'file_upload' },
  { id: 'filter' },
  { id: 'filter1' },
  { id: 'filter2' },
  { id: 'filter3' },
  { id: 'filter4' },
  { id: 'filter5' },
  { id: 'filter6' },
  { id: 'filter7' },
  { id: 'filter8' },
  { id: 'filter9' },
  { id: 'filter9_plus' },
  { id: 'filter_b_and_w' },
  { id: 'filter_center_focus' },
  { id: 'filter_drama' },
  { id: 'filter_frames' },
  { id: 'filter_hdr' },
  { id: 'filter_list' },
  { id: 'filter_none' },
  { id: 'filter_tilt_shift' },
  { id: 'filter_vintage' },
  { id: 'find_in_page' },
  { id: 'find_replace' },
  { id: 'fingerprint' },
  { id: 'first_page' },
  { id: 'fitness_center' },
  { id: 'flag' },
  { id: 'flare' },
  { id: 'flash_auto' },
  { id: 'flash_off' },
  { id: 'flash_on' },
  { id: 'flight' },
  { id: 'flight_land' },
  { id: 'flight_takeoff' },
  { id: 'flip' },
  { id: 'flip_to_back' },
  { id: 'flip_to_front' },
  { id: 'folder' },
  { id: 'folder_open' },
  { id: 'folder_shared' },
  { id: 'folder_special' },
  { id: 'font_download' },
  { id: 'format_align_center' },
  { id: 'format_align_justify' },
  { id: 'format_align_left' },
  { id: 'format_align_right' },
  { id: 'format_bold' },
  { id: 'format_clear' },
  { id: 'format_color_fill' },
  { id: 'format_color_reset' },
  { id: 'format_color_text' },
  { id: 'format_indent_decrease' },
  { id: 'format_indent_increase' },
  { id: 'format_italic' },
  { id: 'format_line_spacing' },
  { id: 'format_list_bulleted' },
  { id: 'format_list_numbered' },
  { id: 'format_paint' },
  { id: 'format_quote' },
  { id: 'format_shapes' },
  { id: 'format_size' },
  { id: 'format_strikethrough' },
  { id: 'format_textdirection_l_to_r' },
  { id: 'format_textdirection_r_to_l' },
  { id: 'format_underlined' },
  { id: 'forum' },
  { id: 'forward' },
  { id: 'forward10' },
  { id: 'forward30' },
  { id: 'forward5' },
  { id: 'free_breakfast' },
  { id: 'fullscreen' },
  { id: 'fullscreen_exit' },
  { id: 'functions' },
  { id: 'gamepad' },
  { id: 'games' },
  { id: 'gavel' },
  { id: 'gesture' },
  { id: 'get_app' },
  { id: 'gif' },
  { id: 'golf_course' },
  { id: 'gps_fixed' },
  { id: 'gps_not_fixed' },
  { id: 'gps_off' },
  { id: 'grade' },
  { id: 'gradient' },
  { id: 'grain' },
  { id: 'graphic_eq' },
  { id: 'grid_off' },
  { id: 'grid_on' },
  { id: 'group' },
  { id: 'group_add' },
  { id: 'group_work' },
  { id: 'g_translate' },
  { id: 'hd' },
  { id: 'hdr_off' },
  { id: 'hdr_on' },
  { id: 'hdr_strong' },
  { id: 'hdr_weak' },
  { id: 'headset' },
  { id: 'headset_mic' },
  { id: 'healing' },
  { id: 'hearing' },
  { id: 'help' },
  { id: 'help_outline' },
  { id: 'highlight' },
  { id: 'highlight_off' },
  { id: 'high_quality' },
  { id: 'history' },
  { id: 'home' },
  { id: 'hotel' },
  { id: 'hot_tub' },
  { id: 'hourglass_empty' },
  { id: 'hourglass_full' },
  { id: 'http' },
  { id: 'https' },
  { id: 'image' },
  { id: 'image_aspect_ratio' },
  { id: 'important_devices' },
  { id: 'import_contacts' },
  { id: 'import_export' },
  { id: 'inbox' },
  { id: 'indeterminate_check_box' },
  { id: 'info' },
  { id: 'info_outline' },
  { id: 'input' },
  { id: 'insert_chart' },
  { id: 'insert_comment' },
  { id: 'insert_drive_file' },
  { id: 'insert_emoticon' },
  { id: 'insert_invitation' },
  { id: 'insert_link' },
  { id: 'insert_photo' },
  { id: 'invert_colors' },
  { id: 'invert_colors_off' },
  { id: 'iso' },
  { id: 'keyboard' },
  { id: 'keyboard_arrow_down' },
  { id: 'keyboard_arrow_left' },
  { id: 'keyboard_arrow_right' },
  { id: 'keyboard_arrow_up' },
  { id: 'keyboard_backspace' },
  { id: 'keyboard_capslock' },
  { id: 'keyboard_hide' },
  { id: 'keyboard_return' },
  { id: 'keyboard_tab' },
  { id: 'keyboard_voice' },
  { id: 'kitchen' },
  { id: 'label' },
  { id: 'label_outline' },
  { id: 'landscape' },
  { id: 'language' },
  { id: 'laptop' },
  { id: 'laptop_chromebook' },
  { id: 'laptop_mac' },
  { id: 'laptop_windows' },
  { id: 'last_page' },
  { id: 'launch' },
  { id: 'layers' },
  { id: 'layers_clear' },
  { id: 'leak_add' },
  { id: 'leak_remove' },
  { id: 'lens' },
  { id: 'library_add' },
  { id: 'library_books' },
  { id: 'library_music' },
  { id: 'lightbulb_outline' },
  { id: 'linear_scale' },
  { id: 'line_style' },
  { id: 'line_weight' },
  { id: 'link' },
  { id: 'linked_camera' },
  { id: 'list' },
  { id: 'live_help' },
  { id: 'live_tv' },
  { id: 'local_activity' },
  { id: 'local_airport' },
  { id: 'local_atm' },
  { id: 'local_bar' },
  { id: 'local_cafe' },
  { id: 'local_car_wash' },
  { id: 'local_convenience_store' },
  { id: 'local_dining' },
  { id: 'local_drink' },
  { id: 'local_florist' },
  { id: 'local_gas_station' },
  { id: 'local_grocery_store' },
  { id: 'local_hospital' },
  { id: 'local_hotel' },
  { id: 'local_laundry_service' },
  { id: 'local_library' },
  { id: 'local_mall' },
  { id: 'local_movies' },
  { id: 'local_offer' },
  { id: 'local_parking' },
  { id: 'local_pharmacy' },
  { id: 'local_phone' },
  { id: 'local_pizza' },
  { id: 'local_play' },
  { id: 'local_post_office' },
  { id: 'local_printshop' },
  { id: 'local_see' },
  { id: 'local_shipping' },
  { id: 'local_taxi' },
  { id: 'location_city' },
  { id: 'location_disabled' },
  { id: 'location_off' },
  { id: 'location_on' },
  { id: 'location_searching' },
  { id: 'lock' },
  { id: 'lock_open' },
  { id: 'lock_outline' },
  { id: 'looks' },
  { id: 'looks3' },
  { id: 'looks4' },
  { id: 'looks5' },
  { id: 'looks6' },
  { id: 'looks_one' },
  { id: 'looks_two' },
  { id: 'loop' },
  { id: 'loupe' },
  { id: 'low_priority' },
  { id: 'loyalty' },
  { id: 'mail' },
  { id: 'mail_outline' },
  { id: 'map' },
  { id: 'markunread' },
  { id: 'markunread_mailbox' },
  { id: 'memory' },
  { id: 'menu' },
  { id: 'merge_type' },
  { id: 'message' },
  { id: 'mic' },
  { id: 'mic_none' },
  { id: 'mic_off' },
  { id: 'mms' },
  { id: 'mode_comment' },
  { id: 'mode_edit' },
  { id: 'monetization_on' },
  { id: 'money_off' },
  { id: 'monochrome_photos' },
  { id: 'mood' },
  { id: 'mood_bad' },
  { id: 'more' },
  { id: 'more_horiz' },
  { id: 'more_vert' },
  { id: 'motorcycle' },
  { id: 'mouse' },
  { id: 'move_to_inbox' },
  { id: 'movie' },
  { id: 'movie_creation' },
  { id: 'movie_filter' },
  { id: 'multiline_chart' },
  { id: 'music_note' },
  { id: 'music_video' },
  { id: 'my_location' },
  { id: 'nature' },
  { id: 'nature_people' },
  { id: 'navigate_before' },
  { id: 'navigate_next' },
  { id: 'navigation' },
  { id: 'near_me' },
  { id: 'network_cell' },
  { id: 'network_check' },
  { id: 'network_locked' },
  { id: 'network_wifi' },
  { id: 'new_releases' },
  { id: 'next_week' },
  { id: 'nfc' },
  { id: 'no_encryption' },
  { id: 'no_sim' },
  { id: 'note' },
  { id: 'note_add' },
  { id: 'notifications' },
  { id: 'notifications_active' },
  { id: 'notifications_none' },
  { id: 'notifications_off' },
  { id: 'notifications_paused' },
  { id: 'not_interested' },
  { id: 'offline_pin' },
  { id: 'ondemand_video' },
  { id: 'opacity' },
  { id: 'open_in_browser' },
  { id: 'open_in_new' },
  { id: 'open_with' },
  { id: 'pages' },
  { id: 'pageview' },
  { id: 'palette' },
  { id: 'panorama' },
  { id: 'panorama_fish_eye' },
  { id: 'panorama_horizontal' },
  { id: 'panorama_vertical' },
  { id: 'panorama_wide_angle' },
  { id: 'pan_tool' },
  { id: 'party_mode' },
  { id: 'pause' },
  { id: 'pause_circle_filled' },
  { id: 'pause_circle_outline' },
  { id: 'payment' },
  { id: 'people' },
  { id: 'people_outline' },
  { id: 'perm_camera_mic' },
  { id: 'perm_contact_calendar' },
  { id: 'perm_data_setting' },
  { id: 'perm_device_information' },
  { id: 'perm_identity' },
  { id: 'perm_media' },
  { id: 'perm_phone_msg' },
  { id: 'perm_scan_wifi' },
  { id: 'person' },
  { id: 'person_add' },
  { id: 'personal_video' },
  { id: 'person_outline' },
  { id: 'person_pin' },
  { id: 'person_pin_circle' },
  { id: 'pets' },
  { id: 'phone' },
  { id: 'phone_android' },
  { id: 'phone_bluetooth_speaker' },
  { id: 'phone_forwarded' },
  { id: 'phone_in_talk' },
  { id: 'phone_iphone' },
  { id: 'phonelink' },
  { id: 'phonelink_erase' },
  { id: 'phonelink_lock' },
  { id: 'phonelink_off' },
  { id: 'phonelink_ring' },
  { id: 'phonelink_setup' },
  { id: 'phone_locked' },
  { id: 'phone_missed' },
  { id: 'phone_paused' },
  { id: 'photo' },
  { id: 'photo_album' },
  { id: 'photo_camera' },
  { id: 'photo_filter' },
  { id: 'photo_library' },
  { id: 'photo_size_select_actual' },
  { id: 'photo_size_select_large' },
  { id: 'photo_size_select_small' },
  { id: 'picture_as_pdf' },
  { id: 'picture_in_picture' },
  { id: 'picture_in_picture_alt' },
  { id: 'pie_chart' },
  { id: 'pie_chart_outlined' },
  { id: 'pin_drop' },
  { id: 'place' },
  { id: 'play_arrow' },
  { id: 'play_circle_filled' },
  { id: 'play_circle_outline' },
  { id: 'play_for_work' },
  { id: 'playlist_add' },
  { id: 'playlist_add_check' },
  { id: 'playlist_play' },
  { id: 'plus_one' },
  { id: 'poll' },
  { id: 'polymer' },
  { id: 'pool' },
  { id: 'portable_wifi_off' },
  { id: 'portrait' },
  { id: 'power' },
  { id: 'power_input' },
  { id: 'power_settings_new' },
  { id: 'pregnant_woman' },
  { id: 'present_to_all' },
  { id: 'print' },
  { id: 'priority_high' },
  { id: 'public' },
  { id: 'publish' },
  { id: 'query_builder' },
  { id: 'question_answer' },
  { id: 'queue' },
  { id: 'queue_music' },
  { id: 'queue_play_next' },
  { id: 'radio' },
  { id: 'radio_button_checked' },
  { id: 'radio_button_unchecked' },
  { id: 'rate_review' },
  { id: 'receipt' },
  { id: 'recent_actors' },
  { id: 'record_voice_over' },
  { id: 'redeem' },
  { id: 'redo' },
  { id: 'refresh' },
  { id: 'remove' },
  { id: 'remove_circle' },
  { id: 'remove_circle_outline' },
  { id: 'remove_from_queue' },
  { id: 'remove_red_eye' },
  { id: 'remove_shopping_cart' },
  { id: 'reorder' },
  { id: 'repeat' },
  { id: 'repeat_one' },
  { id: 'replay' },
  { id: 'replay10' },
  { id: 'replay30' },
  { id: 'replay5' },
  { id: 'reply' },
  { id: 'reply_all' },
  { id: 'report' },
  { id: 'report_problem' },
  { id: 'restaurant' },
  { id: 'restaurant_menu' },
  { id: 'restore' },
  { id: 'restore_page' },
  { id: 'ring_volume' },
  { id: 'room' },
  { id: 'room_service' },
  { id: 'rotate90_degrees_ccw' },
  { id: 'rotate_left' },
  { id: 'rotate_right' },
  { id: 'rounded_corner' },
  { id: 'router' },
  { id: 'rowing' },
  { id: 'rss_feed' },
  { id: 'rv_hookup' },
  { id: 'satellite' },
  { id: 'save' },
  { id: 'scanner' },
  { id: 'schedule' },
  { id: 'school' },
  { id: 'screen_lock_landscape' },
  { id: 'screen_lock_portrait' },
  { id: 'screen_lock_rotation' },
  { id: 'screen_rotation' },
  { id: 'screen_share' },
  { id: 'sd_card' },
  { id: 'sd_storage' },
  { id: 'search' },
  { id: 'security' },
  { id: 'select_all' },
  { id: 'send' },
  { id: 'sentiment_dissatisfied' },
  { id: 'sentiment_neutral' },
  { id: 'sentiment_satisfied' },
  { id: 'sentiment_very_dissatisfied' },
  { id: 'sentiment_very_satisfied' },
  { id: 'settings' },
  { id: 'settings_applications' },
  { id: 'settings_backup_restore' },
  { id: 'settings_bluetooth' },
  { id: 'settings_brightness' },
  { id: 'settings_cell' },
  { id: 'settings_ethernet' },
  { id: 'settings_input_antenna' },
  { id: 'settings_input_component' },
  { id: 'settings_input_composite' },
  { id: 'settings_input_hdmi' },
  { id: 'settings_input_svideo' },
  { id: 'settings_overscan' },
  { id: 'settings_phone' },
  { id: 'settings_power' },
  { id: 'settings_remote' },
  { id: 'settings_system_daydream' },
  { id: 'settings_voice' },
  { id: 'share' },
  { id: 'shop' },
  { id: 'shopping_basket' },
  { id: 'shopping_cart' },
  { id: 'shop_two' },
  { id: 'short_text' },
  { id: 'show_chart' },
  { id: 'shuffle' },
  { id: 'signal_cellular0_bar' },
  { id: 'signal_cellular1_bar' },
  { id: 'signal_cellular2_bar' },
  { id: 'signal_cellular3_bar' },
  { id: 'signal_cellular4_bar' },
  { id: 'signal_cellular_connected_no_internet0_bar' },
  { id: 'signal_cellular_connected_no_internet1_bar' },
  { id: 'signal_cellular_connected_no_internet2_bar' },
  { id: 'signal_cellular_connected_no_internet3_bar' },
  { id: 'signal_cellular_connected_no_internet4_bar' },
  { id: 'signal_cellular_no_sim' },
  { id: 'signal_cellular_null' },
  { id: 'signal_cellular_off' },
  { id: 'signal_wifi0_bar' },
  { id: 'signal_wifi1_bar' },
  { id: 'signal_wifi1_bar_lock' },
  { id: 'signal_wifi2_bar' },
  { id: 'signal_wifi2_bar_lock' },
  { id: 'signal_wifi3_bar' },
  { id: 'signal_wifi3_bar_lock' },
  { id: 'signal_wifi4_bar' },
  { id: 'signal_wifi4_bar_lock' },
  { id: 'signal_wifi_off' },
  { id: 'sim_card' },
  { id: 'sim_card_alert' },
  { id: 'skip_next' },
  { id: 'skip_previous' },
  { id: 'slideshow' },
  { id: 'slow_motion_video' },
  { id: 'smartphone' },
  { id: 'smoke_free' },
  { id: 'smoking_rooms' },
  { id: 'sms' },
  { id: 'sms_failed' },
  { id: 'snooze' },
  { id: 'sort' },
  { id: 'sort_by_alpha' },
  { id: 'spa' },
  { id: 'space_bar' },
  { id: 'speaker' },
  { id: 'speaker_group' },
  { id: 'speaker_notes' },
  { id: 'speaker_notes_off' },
  { id: 'speaker_phone' },
  { id: 'spellcheck' },
  { id: 'star' },
  { id: 'star_border' },
  { id: 'star_half' },
  { id: 'stars' },
  { id: 'stay_current_landscape' },
  { id: 'stay_current_portrait' },
  { id: 'stay_primary_landscape' },
  { id: 'stay_primary_portrait' },
  { id: 'stop' },
  { id: 'stop_screen_share' },
  { id: 'storage' },
  { id: 'store' },
  { id: 'store_mall_directory' },
  { id: 'straighten' },
  { id: 'streetview' },
  { id: 'strikethrough_s' },
  { id: 'style' },
  { id: 'subdirectory_arrow_left' },
  { id: 'subdirectory_arrow_right' },
  { id: 'subject' },
  { id: 'subscriptions' },
  { id: 'subtitles' },
  { id: 'subway' },
  { id: 'supervisor_account' },
  { id: 'surround_sound' },
  { id: 'swap_calls' },
  { id: 'swap_horiz' },
  { id: 'swap_vert' },
  { id: 'swap_vertical_circle' },
  { id: 'switch_camera' },
  { id: 'switch_video' },
  { id: 'sync' },
  { id: 'sync_disabled' },
  { id: 'sync_problem' },
  { id: 'system_update' },
  { id: 'system_update_alt' },
  { id: 'tab' },
  { id: 'tablet' },
  { id: 'tablet_android' },
  { id: 'tablet_mac' },
  { id: 'tab_unselected' },
  { id: 'tag_faces' },
  { id: 'tap_and_play' },
  { id: 'terrain' },
  { id: 'text_fields' },
  { id: 'text_format' },
  { id: 'textsms' },
  { id: 'texture' },
  { id: 'theaters' },
  { id: 'three_d_rotation' },
  { id: 'thumb_down' },
  { id: 'thumbs_up_down' },
  { id: 'thumb_up' },
  { id: 'timelapse' },
  { id: 'timeline' },
  { id: 'timer' },
  { id: 'timer10' },
  { id: 'timer3' },
  { id: 'timer_off' },
  { id: 'time_to_leave' },
  { id: 'title' },
  { id: 'toc' },
  { id: 'today' },
  { id: 'toll' },
  { id: 'tonality' },
  { id: 'touch_app' },
  { id: 'toys' },
  { id: 'track_changes' },
  { id: 'traffic' },
  { id: 'train' },
  { id: 'tram' },
  { id: 'transfer_within_a_station' },
  { id: 'transform' },
  { id: 'translate' },
  { id: 'trending_down' },
  { id: 'trending_flat' },
  { id: 'trending_up' },
  { id: 'tune' },
  { id: 'turned_in' },
  { id: 'turned_in_not' },
  { id: 'tv' },
  { id: 'unarchive' },
  { id: 'undo' },
  { id: 'unfold_less' },
  { id: 'unfold_more' },
  { id: 'update' },
  { id: 'usb' },
  { id: 'verified_user' },
  { id: 'vertical_align_bottom' },
  { id: 'vertical_align_center' },
  { id: 'vertical_align_top' },
  { id: 'vibration' },
  { id: 'video_call' },
  { id: 'videocam' },
  { id: 'videocam_off' },
  { id: 'videogame_asset' },
  { id: 'video_label' },
  { id: 'video_library' },
  { id: 'view_agenda' },
  { id: 'view_array' },
  { id: 'view_carousel' },
  { id: 'view_column' },
  { id: 'view_comfy' },
  { id: 'view_compact' },
  { id: 'view_day' },
  { id: 'view_headline' },
  { id: 'view_list' },
  { id: 'view_module' },
  { id: 'view_quilt' },
  { id: 'view_stream' },
  { id: 'view_week' },
  { id: 'vignette' },
  { id: 'visibility' },
  { id: 'visibility_off' },
  { id: 'voice_chat' },
  { id: 'voicemail' },
  { id: 'volume_down' },
  { id: 'volume_mute' },
  { id: 'volume_off' },
  { id: 'volume_up' },
  { id: 'vpn_key' },
  { id: 'vpn_lock' },
  { id: 'wallpaper' },
  { id: 'warning' },
  { id: 'watch' },
  { id: 'watch_later' },
  { id: 'wb_auto' },
  { id: 'wb_cloudy' },
  { id: 'wb_incandescent' },
  { id: 'wb_iridescent' },
  { id: 'wb_sunny' },
  { id: 'wc' },
  { id: 'web' },
  { id: 'web_asset' },
  { id: 'weekend' },
  { id: 'whatshot' },
  { id: 'widgets' },
  { id: 'wifi' },
  { id: 'wifi_lock' },
  { id: 'wifi_tethering' },
  { id: 'work' },
  { id: 'wrap_text' },
  { id: 'youtube_searched_for' },
  { id: 'zoom_in' },
  { id: 'zoom_out' },
  { id: 'zoom_out_map' },

];

export const renderIcon = (choice) => <Icon>{choice.id}</Icon>;

export default choices;
