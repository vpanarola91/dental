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

function mail_config() {

    $configs = array(
        'protocol' => 'smtp',
        'smtp_host' => 'ssl://smtp.gmail.com',
        'smtp_port' => 465,
        'smtp_user' => 'demo.narola@gmail.com',
        'smtp_pass' => 'narola21',
        'transport' => 'Smtp',
        'charset' => 'utf-8',
        'newline' => "\r\n",
        'headerCharset' => 'iso-8859-1',
        'mailtype' => 'html'
    );

    return $configs;
}