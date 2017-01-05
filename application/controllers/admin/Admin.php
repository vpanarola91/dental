<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends MY_Controller {

    public function __construct() {
        parent::__construct();        
        $this->load->model(['Users_model']);
        $this->load->library(['encryption', 'upload']);
    }

    public function user_list() {
        $session_data = $this->session->userdata('admin');
        $data['user_data'] = $this->Users_model->check_if_user_exist(['id' => $session_data['id'], 'role_id' => 1], false, true);
        if (empty($data['user_data'])) {
            redirect('admin/login');
        }
        $data['subview'] = 'admin/admin/user_list';
        $this->load->view('admin/layouts/layout_main', $data);
    }

}
