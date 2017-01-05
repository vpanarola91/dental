<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Pages extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model(array('Users_model','admin/admin_pages_model', 'admin/Admin_users_model'));
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
        $data['title'] = 'Drope - Admin pages';
        $data['subview'] = 'admin/pages/index';
        $this->load->view('admin/layouts/layout_main', $data);
    }

    /**
     * @uses : this function is used to get result based on datatable in page list page
     * @author : HPA
     * */
    public function list_pages() {
        $final['recordsTotal'] = $this->admin_pages_model->rows_of_table('pages');
        $keyword = $this->input->get('search');
        $keyword = str_replace('"', ' ', $keyword);
        $select = 'id, id AS test_id, navigation_name, title, active, created AS created_date';
        $final['redraw'] = 1;
        $final['recordsFiltered'] = $final['recordsTotal'];
        $final['data'] = $this->admin_pages_model->get_pages_result('pages' . ',' . '(SELECT @a:= 0) AS a', $select, 'result');
        echo json_encode($final);
    }

    /**
     * @uses : Load view of pages list
     * @author : HPA
     * */
    public function edit() {
        $session_data = $this->session->userdata('admin');
        $data['user_data'] = $this->Users_model->check_if_user_exist(['id' => $session_data['id'], 'role_id' => 1], false, true);
        if (empty($data['user_data'])) {
            redirect('admin/login');
        }        
        $id = $this->uri->segment(4);
        if ($id != '') {
            $data['title'] = 'Drope - Admin edit page';
            $data['heading'] = 'Edit page';
            $result = $this->admin_pages_model->get_result('pages', ' id = ' . $id);
            if (isset($result)) {
                $data['page_data'] = $result[0];
            } else {
                show_404();
            }
        } else {
            $data['title'] = 'Drope - Admin add page';
        }
        $data['pages'] = $this->admin_pages_model->get_result('pages', 'parent_id = 0');
        $this->form_validation->set_rules('navigation_name', 'navigation name', 'trim|required');
        $this->form_validation->set_rules('title', 'title', 'trim|required');
        $this->form_validation->set_rules('description', 'description', 'trim|required');
        $this->form_validation->set_rules('meta_title', 'SEO meta title', 'trim|required');
        $this->form_validation->set_rules('meta_keyword', 'SEO meta keyword', 'trim|required');
        $this->form_validation->set_rules('meta_description', 'SEO meta description', 'trim|required');
        $this->form_validation->set_rules('de_navigation_name', 'German navigation name', 'trim|required');
        $this->form_validation->set_rules('de_title', 'German title', 'trim|required');
        $this->form_validation->set_rules('de_description', 'German description', 'trim|required');
        $this->form_validation->set_rules('de_meta_title', 'German SEO meta title', 'trim|required');
        $this->form_validation->set_rules('de_meta_keyword', 'German SEO meta keyword', 'trim|required');
        $this->form_validation->set_rules('de_meta_description', 'German SEO meta description', 'trim|required');
        if ($this->form_validation->run() == FALSE) {
            $this->form_validation->set_error_delimiters('<div class="alert alert-error alert-danger"><a class="close" data-dismiss="alert">X</a><strong>', '</strong></div>');
        } else {
            if (!empty($_FILES['banner_image']['name'])) {
                $image_name = $this->upload_image('banner_image', 'uploads/banners');
            }
            if (!isset($data['error'])) {
                $update_array = $this->input->post(null);
                if (isset($image_name)) {
                    if (is_array($image_name) && array_key_exists('errors', $image_name)) {
                        $this->session->set_flashdata('error', $image_name['errors']);
                        redirect('admin/pages/add');
                    } else {
                        $update_array['banner_image'] = $image_name;
                    }
                }
                if ($id != '') {
                    if ($data['page_data']['banner_image'] != '') {
                        unlink('uploads/banners/eng' . $data['page_data']['banner_image']);
                    }
                    $update_array['url'] = $this->slug_page($update_array['navigation_name'], 'pages', $id);
                    $update_array['modified'] = date('Y-m-d H:i:s');
                    $this->session->set_flashdata('success', 'Page successfully updated!');
                    $this->admin_pages_model->update_record('pages', 'id = ' . $id, $update_array);
                    $this->admin_pages_model->update_record('pages', 'id = ' . $update_array['parent_id'], array('footer_position' => 0));
                } else {
                    $update_array['url'] = $this->slug_page($update_array['navigation_name'], 'pages');
                    pr($update_array);
//                    $this->admin_pages_model->insert('pages', $update_array);
//                    $this->admin_pages_model->update_record('pages', 'id = ' . $update_array['parent_id'], array('footer_position' => 0));
//                    $this->session->set_flashdata('success', 'Page successfully added!');
                }
                redirect(site_url('admin/pages'));
            }
        }
        $data['subview'] = 'admin/pages/manage';
        $this->load->view('admin/layouts/layout_main', $data);
    }

    /**
     * @uses : this function is used to apply action of page
     * @author : HPA
     * */
    public function action($action, $user_id) {

        $where = 'id = ' . $this->db->escape($user_id);
        $check_page = $this->admin_pages_model->get_result('pages', $where);
        if ($check_page) {
            if ($action == 'delete') {
                $val = 2;
                $this->session->set_flashdata('success', 'Page successfully deleted!');
            } else {
                $val = 1;
                $this->session->set_flashdata('success', 'Page successfully activated!');
            }
            $update_array = array(
                'active' => $val
            );
            $this->admin_pages_model->update_record('pages', $where, $update_array);
        } else {
            $this->session->set_flashdata('error', 'Invalid request. Please try again!');
        }
        redirect(site_url('admin/pages'));
    }

    function upload_image($image_name, $image_path) {
        $CI = & get_instance();
        $extension = explode('/', $_FILES[$image_name]['type']);
        $randname = uniqid() . time() . '.' . $extension[1];
        $config = array('upload_path' => $image_path,
            'allowed_types' => "png|jpg|jpeg|gif",
            'max_size' => "700KB",
            // 'max_height'      => "768",
            // 'max_width'       => "1024" ,
            'file_name' => $randname
        );
        #Load the upload library
        $CI->load->library('upload');
        $CI->upload->initialize($config);
        if ($CI->upload->do_upload($image_name)) {
            $img_data = $CI->upload->data();
            $imgname = $img_data['file_name'];
        } else {
            $imgname = array('errors' => $CI->upload->display_errors());
        }
        return $imgname;
    }

    /**
     * Generate slug_page
     * @author HPA
     * @param string $text - Text from which slug to be generated
     * @param string $table - Name of the table to check slug is exist or not
     * @param int $id - Id of the table to not check for the slug in that id (Used in Edit)
     * @return string slug 
     */
    function slug_page($text, $table = '', $id = NULL) {
        $ci = & get_instance();
        $ci->load->model('users_model');

        // replace non letter or digits by -
        $text = preg_replace('~[^\\pL\d]+~u', '-', $text);

        // trim
        $text = trim($text, '-');

        // transliterate
        $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);

        // lowercase
        $text = strtolower($text);

        // remove unwanted characters
        $text = preg_replace('~[^-\w\?&]+~', '', $text);

        if (empty($text)) {
            return 'n-a';
        }
        if ($table != '') {
            //--- when text with table name then check generated slug is already exist or not
            for ($i = 0; $i < 1; $i++) {
                if ($id != NULL) {
                    $where = 'url = ' . $ci->db->escape($text) . ' AND id != ' . $id;
                } else {
                    $where = 'url = ' . $ci->db->escape($text);
                }
                $result = $ci->Admin_users_model->get_result($table, $where);
                if (sizeof($result) > 0) {
                    $explode_slug = explode("-", $text);
                    $last_char = $explode_slug[count($explode_slug) - 1];
                    if (is_numeric($last_char)) {
                        $last_char++;
                        unset($explode_slug[count($explode_slug) - 1]);
                        $text = implode($explode_slug, "-");
                        $text.="-" . $last_char;
                    } else {
                        $text.="-1";
                    }
                    $i--;
                } else {
                    return $text;
                }
            }
        } else {
            return $text;
        }
    }

}
