<?php

class Admin_blogs_model extends CI_Model {

    function __construct() {
        parent::__construct();
    }

    /**
     * @uses : this function is used to get result based on datatable in blog list page
     * @param : @table 
     * @author : HPA
     */
    public function get_all_blogs() {        
        
        $this->db->select('id,blog_title,DATE_FORMAT(created_at,"%d %b %Y <br> %l:%i %p") AS created_date,status', false);
        $this->db->where('is_deleted !=', 1);
        
        $keyword = $this->input->get('search');
        $keyword = str_replace('"', '', $keyword);
        
        if (!empty($keyword['value'])) {
            $this->db->having('blog_title LIKE "%' . $keyword['value'] . '%"', NULL);
        }
        
        

        $this->db->limit($this->input->get('length'), $this->input->get('start'));
        $res_data = $this->db->get('blog,(SELECT @a:= 0) AS a')->result_array();
        return $res_data;
    }

    /**
     * @uses : this function is used to count rows of users based on datatable in user list page
     * @param : @table 
     * @author : HPA
     */
    public function get_blogs_count() {
        $this->db->where('is_deleted !=', 1);
        $res_data = $this->db->get('blog')->num_rows();
        return $res_data;
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
     * @uses : This function is used to update record
     * @param : @table, @user_id, @user_array = array of update  
     * @author : HPA
     */
    public function update_record($table, $condition, $user_array) {
        $this->db->where($condition);
        if ($this->db->update($table, $user_array)) {
            return 1;
        } else {
            return 0;
        }
    }



}

?>