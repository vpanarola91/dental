<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Survey_model extends CI_Model {

	public function __construct(){
		parent::__construct();	
	}
	
	public function get_survey_count(){
		$res = $this->db->get('survey')->num_rows();
		return $res;
	}

	public function get_all_survey(){
		$this->db->select('id,id AS test_id,name,survey_desc,status,DATE_FORMAT(created_at,"%d %b %Y <br> %l:%i %p") AS created_at', false);
        
        $keyword = $this->input->get('search');
        $keyword = str_replace('"', '', $keyword);
        
        if (!empty($keyword['value'])) {
        	$this->db->having('name LIKE "%' . $keyword['value'] . '%" OR survey_desc LIKE "%' . $keyword['value'] . '%"', NULL);
        }
        	
        $this->db->limit($this->input->get('length'), $this->input->get('start'));
        $res_data = $this->db->get('survey,(SELECT @a:= 0) AS a')->result_array();
        return $res_data;
	}

}

/* End of file Survey_model.php */
/* Location: ./application/models/Survey_model.php */