<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Header_footer_control extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model(['admin/admin_header_footer_model', 'Users_model']);
    }

    /**
     * @uses : Load view of pages list
     * @author : HPA
     * */
    public function index() {
        $session_data = $this->session->userdata('admin');
        $data['user_data'] = $this->Users_model->check_if_user_exist(['id' => $session_data['id'], 'role_id' => 1], false, true);
        if (empty($data['user_data'])) {
            redirect('admin/login');
        }        
        $data['title'] = 'DROPE - Admin control';
        $data['subview'] = 'admin/control/index';
        $this->load->view('admin/layouts/layout_main', $data);
    }

    /**
     * @uses : Load header and footer links based on page load
     * @author : HPA
     * */
    public function get_header_footer() {
        if ($this->input->post('type') == 'header') {
            $result = $this->admin_header_footer_model->get_result_header_footer('pages', 'show_in_header = 1 AND parent_id = 0 AND active = 1', 'id , navigation_name', 'header_position');
        } else {
            $result = $this->admin_header_footer_model->get_result_header_footer('pages' . ' p', 'show_in_footer = 1 AND active = 1', 'id, navigation_name, (SELECT count(*) FROM ' . 'pages' . ' WHERE parent_id = p.id) AS is_parent', 'footer_position');
        }
        echo json_encode($result);
    }

    /**
     * @uses : this function is used to get result based on datatable in page list page
     * @author : HPA
     * */
    public function list_pages() {
        $final['recordsTotal'] = $this->admin_header_footer_model->rows_of_table('pages', 'active=1');
        $keyword = $this->input->get('search');
        $select = 'p.id, @a:=@a+1 AS test_id, p.navigation_name, p.title, p.active, p.created AS created_date, p.show_in_footer, p.show_in_header, p1.navigation_name AS parent_name, (SELECT count(*) FROM ' . 'pages' . ' WHERE parent_id = p.id) AS is_parent';
        $final['redraw'] = 1;
        $final['recordsFiltered'] = $final['recordsTotal'];
        $final['data'] = $this->admin_header_footer_model->get_pages_result('pages' . ' p,' . '(SELECT @a:= 0) AS a', $select, 'result');
        echo json_encode($final);
    }

    /**
     * @uses : this function is used to changes status based on show in header and footer
     * @author : HPA
     * */
    public function change_data_status() {
        $condition = ' id = ' . $this->input->post('id');
        $user_array = array($this->input->post('type') => $this->input->post('value'));
        $this->admin_header_footer_model->update_record('pages', $condition, $user_array);
        echo 'success';
        exit;
    }

    /**
     * @uses : this function is used to store arrangement of header and footer
     * @author : HPA
     * */
    public function save_arrangement() {
        $data = array();
        if ($this->input->post('type') == 'header') {
            $column = 'header_position';
        } else {
            $column = 'footer_position';
        }
        foreach ($this->input->post('data') as $key => $value) {
            $data[$key][$column] = $key + 1;
            $data[$key]['id'] = $value;
        }
//        pr($data, 1);
        $this->admin_header_footer_model->update_multiple('pages', $data, 'id');
        echo 'success';
        exit;
    }

}
