<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Survey extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model(array('Survey_model'));
	}

	public function index(){        
        $data['subview'] = 'admin/survey/index';
        $this->load->view('admin/layouts/layout_main', $data);
	}

	public function add(){
		$data['subview'] = 'admin/survey/add';
        $this->load->view('admin/layouts/layout_main', $data);	
	}

	// v! AJAX call to get list of survey list
	public function list_survey(){

        $final['recordsTotal'] = $this->Survey_model->get_survey_count();
        $final['redraw'] = 1;                       
        $final['recordsFiltered'] = $final['recordsTotal'];
        $final['data'] = $this->Survey_model->get_all_survey();
        echo json_encode($final);
	}

}

/* End of file Survey.php */
/* Location: ./application/controllers/admin/Survey.php */