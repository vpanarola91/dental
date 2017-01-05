<?php

class CMS_model extends CI_Model {

    function __construct() {
        parent::__construct();
    }

    /**
     * @uses : This function is used get result from the table
     * @param : @table 
     * @author : HPA
     */
    public function get_result($table, $condition = null) {
        $this->db->select('*');
        if (!is_null($condition)) {
            $this->db->where($condition);
        }
        $query = $this->db->get($table);
        return $query->result_array();
    }

    /**
     * @uses : This function is used get pages from the table based on perameter
     * @param : @type 
     * @author : HPA
     */
    public function get_pages($type) {
        $language = $this->session->userdata('language');
        if ($language == 'english') {
            $this->db->select('navigation_name, id, url, parent_id, active, (SELECT count(*) FROM pages WHERE parent_id = p.id) AS is_parent');
        } else {
            $this->db->select('de_navigation_name as navigation_name, id, url, parent_id, active, (SELECT count(*) FROM pages WHERE parent_id = p.id) AS is_parent');
        }
        if ($type == 'header') {
            $this->db->where('show_in_header = 1');
            $this->db->order_by('header_position', 'ASC');
        }
        if ($type == 'footer') {
            $this->db->where('show_in_footer = 1');
            $this->db->order_by('footer_position', 'ASC');
            $this->db->having('is_parent = 0');
        }
        $this->db->where('active', 1);
        $query = $this->db->get('pages p');
        return $query->result_array();
    }

}
