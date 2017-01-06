<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Blogs extends MY_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model(['admin/Admin_blogs_model']);
        $this->load->library(['encryption', 'upload']);
    }

    /**
     * Function load view of blog list.
     */
    public function index() {
       
        $data['subview'] = 'admin/blogs/index';
        $this->load->view('admin/layouts/layout_main', $data);
    }

    /**
     * Function is used to get result based on datatable in blog list page
     */
    public function list_blog() {
       
        $final['recordsTotal'] = $this->Admin_blogs_model->get_blogs_count();
        $final['redraw'] = 1;
        $final['recordsFiltered'] = $final['recordsTotal'];
        $final['data'] = $this->Admin_blogs_model->get_all_blogs();
        echo json_encode($final);
        

    }

    /**
     * Function is used to perform action (Delete,Block,Unblock)
     */
    public function action($action, $blog_id) {

        $where = 'id = ' . $this->db->escape($blog_id);
        $check_blog = $this->Admin_blogs_model->get_result('blog', $where);
        if ($check_blog) {
            if ($action == 'delete') {
                $update_array = array(
                    'is_deleted' => 1
                );
                $this->session->set_flashdata('success', 'Blogs successfully deleted!');
            } elseif ($action == 'block') {
                $update_array = array(
                    'is_blocked' => 1
                );
                $this->session->set_flashdata('success', 'Blogs successfully blocked!');
            } else {
                $update_array = array(
                    'is_blocked' => 0
                );
                $this->session->set_flashdata('success', 'Blogs successfully unblocked!');
            }
            $this->Admin_blogs_model->update_record('blog', $where, $update_array);
        } else {
            $this->session->set_flashdata('error', 'Invalid request. Please try again!');
        }
        redirect(site_url('admin/blogs'));
    }

    /**
     *  Load view for Edit blog 
     * */
    public function edit() {
        
        $blog_id = $this->uri->segment(4);
        if (is_numeric($blog_id)) {
            $where = 'id = ' . $this->db->escape($blog_id);
            $check_blog = $this->Admin_blogs_model->get_result('blog', $where);
            if ($check_blog) {
                $data['record'] = $check_blog[0];
                $data['title'] = 'Admin edit blog';
                $data['heading'] = 'Edit blog';                
            } else {
                show_404();
            }
        }
        if ($this->input->post()) {
            $this->form_validation->set_rules('blog_title', 'blog title', 'trim|required');
            $this->form_validation->set_rules('blog_description', 'blog description', 'trim|required');            
           
            if ($this->form_validation->run() == FALSE) {
                $data['subview'] = 'admin/blogs/manage';
                $this->load->view('admin/layouts/layout_main', $data);
            } else {
                //--------------- Upload Image Max 2 MB-----------
                $avtar['msg']='';
                $path = "uploads/blogs/";
                /**
                * Upload Image 
                * Param1 : Location
                * Param2 : HTML File ControlName
                * Param3 : Extension (image,pdf,excel,doc)
                * Param4 : Size Limit (In. Byte) (Ex. 2*1024*1024) 
                * Param5 : Old File Name  
                * */
                $avtar = $this->filestorage->FileInsert($path, 'img_path', 'image', 2097152,$this->input->post('Himg_path'));
                //----------------------------------------
                if ($avtar['status'] == 0) {
                     $this->session->set_flashdata('error', $avtar['msg']);
                }
                else{
                    unset($_POST['Himg_path']);
                    $_POST['img_path']=$avtar['msg'];
                    $update_array = $this->input->post(null);
                    $result=$this->Admin_blogs_model->update_record('blog', $where, $update_array);
                    if($result){
                        $this->session->set_flashdata('success', 'Blog successfully updated!');
                    }
                    else{
                        $this->session->set_flashdata('error', 'Error Into Update Blog!');
                    } 
                }               
                redirect('admin/blogs');
            }
        }
        $data['subview'] = 'admin/blogs/manage';
        $this->load->view('admin/layouts/layout_main', $data);
    }

     /**
     * Load view for Add blog 
     * */

    public function add() {
        
         $data['title'] = 'Admin add blog';
         $data['heading'] = 'Add blog';
        if ($this->input->post()) {
            $this->form_validation->set_rules('blog_title', 'blog title', 'trim|required');
            $this->form_validation->set_rules('blog_description', 'blog description', 'trim|required');            
           
            if ($this->form_validation->run() == FALSE) {
                $data['subview'] = 'admin/blogs/manage';
                $this->load->view('admin/layouts/layout_main', $data);
            } else {
                
                //--------------- Upload Image Max 2 MB-----------
                $avtar['msg']='';
                $path = "uploads/blogs/";
                /**
                * Upload Image
                * Param1 : Location
                * Param2 : HTML File ControlName
                * Param3 : Extension (image,pdf,excel,doc)
                * Param4 : Size Limit (In. Byte) (Ex. 2*1024*1024)  
                * */
                $avtar = $this->filestorage->FileInsert($path, 'img_path', 'image', 2097152);
                //----------------------------------------
                if ($avtar['status'] == 0) {
                     $this->session->set_flashdata('error', $avtar['msg']);
                }
                else{
                    $_POST['created_at']=date("Y-m-d H:i:s a");
                    $_POST['img_path']=$avtar['msg'];
                    unset($_POST['Himg_path']);
                    $insert_array = $this->input->post(null);
                    $result=$this->Admin_blogs_model->insert_record('blog',$insert_array);
                    if($result){
                        $this->session->set_flashdata('success', 'Blog successfully Inserted!');
                    }
                    else{
                        $this->session->set_flashdata('error', 'Error Into Insert Blog!');
                    }       
                }
                redirect('admin/blogs');
            }
        }
        $data['subview'] = 'admin/blogs/manage';
        $this->load->view('admin/layouts/layout_main', $data);
    }


    public function check_blog_title_exists($id = 0){
        if (array_key_exists('blog_title', $_POST)) {
            if ($this->Admin_blogs_model->CheckExist($this->input->post('blog_title'), $id) > 0)
                echo json_encode(FALSE);
            else
                echo json_encode(TRUE);
        }
    }

}
