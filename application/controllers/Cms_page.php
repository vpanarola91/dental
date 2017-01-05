<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Cms_page extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $result = $this->load->model(['CMS_model', 'Users_model']);
    }

    /**
     * index function
     * @uses load CMS page based on page slug
     * @author HPA
     * */
    public function index($page_slug) {             
        $session_data = $this->session->userdata('user');
        $data['user_data'] = $this->Users_model->check_if_user_exist(['id' => $session_data['id']], false, true);
        $get_result = $this->CMS_model->get_result('pages', ' url =' . $this->db->escape($page_slug));

        if ($get_result) {
            
            $data['title'] = 'Drope';
            $data['page_data'] = $get_result[0];
            
            $data['page_title'] = $get_result[0]['title'];
            $data['meta_description'] = $get_result[0]['meta_description'];
            $data['meta_title'] = $get_result[0]['meta_title'];
            $data['meta_keyword'] = $get_result[0]['meta_keyword'];
            
            $data['subview'] = 'user/CMS/index';
            $this->load->view('layouts/layout_home', $data);
        } else {
            show_404();
        }
    }

}
