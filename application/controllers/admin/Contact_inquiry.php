<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Contact_inquiry extends MY_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model(['admin/Admin_contact_inquiry_model']);
        $this->load->library(['encryption', 'upload']);
    }

    /**
     * Function load view of Contact Inquiry list.
     */
    public function index() {

        $data['subview'] = 'admin/contact_inquiry/index';
        $this->load->view('admin/layouts/layout_main', $data);
    }

    /**
     * Function is used to get result based on datatable in Contact Inquiry list page
     */
    public function list_inquiry() {

        $final['recordsTotal'] = $this->Admin_contact_inquiry_model->get_inquiry_count();
        $final['redraw'] = 1;
        $final['recordsFiltered'] = $final['recordsTotal'];
        $final['data'] = $this->Admin_contact_inquiry_model->get_all_inquiry();
        echo json_encode($final);
        

    }

    /**
     * Function is used to perform action (Delete,Block,Unblock)
     */
    public function action($action, $inquiry_id) {

        $where = 'id = ' . $this->db->escape($inquiry_id);
        $check_inquiry = $this->Admin_contact_inquiry_model->get_result('contact_inquiry', $where);
        if ($check_inquiry) {
            if ($action == 'delete') {
                $update_array = array(
                    'is_deleted' => 1
                    );
                $this->session->set_flashdata('success', 'Contact Inquiry successfully deleted!');
            }
            $this->Admin_contact_inquiry_model->update_record('contact_inquiry', $where, $update_array);
        } else {
            $this->session->set_flashdata('error', 'Invalid request. Please try again!');
        }
        redirect(site_url('admin/contact_inquiry'));
    }

    

}
