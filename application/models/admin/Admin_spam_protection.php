<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin_spam_protection extends CI_Model {

	public function __construct(){
		parent::__construct();
		$this->load->model('Users_model');
	}

	public function get_all_spams($spam_id=null){
		
		$keyword = $this->input->get('search');

		$this->db->select('spam_protection.id,spam_protection.report_about,spam_protection.report_about_2,spam_protection.report_about_txt,
							u1.email_id as user_email,u2.email_id as report_user_email,u2.id as report_user_id,u1.id as user_id');
		$this->db->join('users as u1','u1.id = spam_protection.user_id');
		$this->db->join('users as u2','u2.id = spam_protection.report_user_id');

		if(!empty($keyword['value'])){
			$this->db->or_like('u1.email_id',$keyword['value']);
			$this->db->or_like('u2.email_id',$keyword['value']);
		}		
		$this->db->order_by('`spam_protection`.`created_date`','DESC');
		$this->db->limit($this->input->get('length'), $this->input->get('start'));
		
		if($spam_id != null){
			$this->db->where('spam_protection.id',$spam_id);
			$ret_data = $this->db->get('spam_protection')->row_array();

			$total_report = $this->db->get_where('spam_protection',['report_user_id'=>$ret_data['report_user_id']])->num_rows();
			$ret_data['total_report']= $total_report;
		}else{
			$ret_data = $this->db->get('spam_protection')->result_array();
			if(!empty($ret_data)){
				$i=0;
				foreach($ret_data as $r_data){
					$total_report = $this->db->get_where('spam_protection',['report_user_id'=>$r_data['report_user_id']])->num_rows();
					$ret_data[$i]['total_report'] = $total_report;
					$i++;
				}
			}
		}		

		return $ret_data;
	}
	
	public function get_all_spams_count(){
		$keyword = $this->input->get('search');

		$this->db->select('spam_protection.id,spam_protection.report_about,spam_protection.report_about_2,spam_protection.report_about_txt,
							u1.email_id as user_email,u2.email_id as report_user_email');
		$this->db->join('users as u1','u1.id = spam_protection.user_id');
		$this->db->join('users as u2','u2.id = spam_protection.report_user_id');

		if(!empty($keyword)){
			$this->db->or_like('u1.email_id',$keyword['value']);
			$this->db->or_like('u2.email_id',$keyword['value']);
		}

		$this->db->order_by('`spam_protection`.`created_date`','DESC');
		$ret_data = $this->db->get('spam_protection')->num_rows();
		return $ret_data;	
	}

	public function detailed_user_data($user_id){			
		
		$u_data = $this->db->get_where('users',['id'=>$user_id])->row_array();
		$u_data['total_trip'] = $this->db->get_where('trip',['user_id'=>$user_id,'parent_trip_id'=>'0'])->num_rows();
		$u_data['total_spam_report'] = $this->db->get_where('spam_protection',['report_user_id'=>$user_id])->num_rows();
		$u_data['all_verification'] = $this->db->select('verification_type,is_approved')->get_where('verification',['user_id'=>$user_id])->result_array();
		$u_data['rating_data'] = get_rating_data($user_id);
		return $u_data;
	}

}

/* End of file Admin_spam_protection.php */
/* Location: ./application/models/admin/Admin_spam_protection.php */