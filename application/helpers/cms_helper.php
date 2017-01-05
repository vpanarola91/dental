 <?php

function pr($data, $is_die = null) {
    echo "<pre>";
    print_r($data);
    echo "</pre>";
    if (!empty($is_die)) {
        die();
    }
}

function qry($is_die = false) {
    $CI = & get_instance();
    echo $CI->db->last_query();
    if ($is_die == true) {
        die();
    }
}
 
 
function is_loggedin() {
    $CI = & get_instance();
    return $CI->session->userdata('loggedin');
}

function pagination_config() {

    $config['full_tag_open'] = '<div><ul class="pagination pagination-small pagination-centered">';
    $config['full_tag_close'] = '</ul></div>';
    $config['num_tag_open'] = '<li>';
    $config['num_tag_close'] = '</li>';
    
    $config['cur_tag_open'] = "<li class='disabled'><li class='active'><a href='#'>";
    $config['cur_tag_close'] = "<span class='sr-only'></span></a></li>";

    $config['next_tag_open'] = "<li>";
    $config['next_tagl_close'] = "</li>";

    $config['prev_tag_open'] = "<li>";
    $config['prev_tagl_close'] = "</li>";

    $config['first_tag_open'] = "<li>";
    $config['first_tagl_close'] = "</li>";
    
    $config['last_tag_open'] = "<li>";
    $config['last_tagl_close'] = "</li>";
    $config['num_links'] = "10";

    return $config;
}

 
 
/**
 * get_pages get pages based on perameter
 * @param  @type
 * @author HPA
 */
function get_pages($type) {
    $CI = & get_instance();
    $CI->load->model('CMS_model');
    if ($type == 'header') {
        $result = $CI->CMS_model->get_pages($type);
        if ($result) {
            $menu_array = array();
            foreach ($result as $key => $value) {
                if ($value['parent_id'] == 0 && $value['active'] == 1) {
                    $menu_array[$value['id']] = $value;
                }
            }
            foreach ($result as $key => $value) {
                if ($value['parent_id'] != 0) {
                    if (isset($menu_array[$value['parent_id']])) {
                        $menu_array[$value['parent_id']]['sub_menus'][] = $value;
                    }
                }
            }
            return $menu_array;
        }
    }

    if ($type == 'footer') {
        $result = $CI->CMS_model->get_pages($type);
        if ($result) {
            $menu_array = array();
            foreach ($result as $key => $value) {
                if ($value['parent_id'] == 0) {
                    $menu_array[$value['id']] = $value;
                }
            }
            foreach ($result as $key => $value) {
                if ($value['parent_id'] != 0) {
                    $menu_array[$value['parent_id']]['sub_menus'][] = $value;
                }
            }
            return $menu_array;
        }
    }
}