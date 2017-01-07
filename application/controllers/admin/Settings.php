<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class settings extends MY_Controller 
{
	function __construct()
	{
		parent::__construct();
	}		
    //===============================================================
	function index()
	{
		$data['subview'] = 'admin/settings/index';
        $this->load->view('admin/layouts/layout_main', $data);
	}
	//===============================================================
	function save()
	{
		$post_data = $this->input->post();
		foreach($post_data as $k=>$v)
		{
			if($v!='Save')
			$this->db->set('val',$v)->where('key',$k)->update('config');
		}
		$this->session->set_flashdata('success','Settings Saved Successfully.');
		redirect('admin/settings');
	}
	
}
?>