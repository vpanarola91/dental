<?php

class Admin_header_footer_model extends CI_Model {

    function __construct() {
        parent::__construct();
    }

    /**
     * @uses : this function is used to get result based on datatable in user list page
     * @param : @table 
     * @author : HPA
     */
    public function get_pages_result($table, $select = null, $type) {
        $columns = ['id', 'navigation_name', 'title'];
        $this->db->select($select, FALSE);
        $keyword = $this->input->get('search');
        $keyword = str_replace('"', '', $keyword);
        if (!empty($keyword['value'])) {
            $this->db->having('navigation_name LIKE "%' . $keyword['value'] . '%" OR title LIKE "%' . $keyword['value'] . '%"', NULL);
        }
        $this->db->join('pages' . ' p1', 'p1.id = p.parent_id', 'LEFT');
        $this->db->order_by($columns[$this->input->get('order')[0]['column']], $this->input->get('order')[0]['dir']);
        $this->db->limit($this->input->get('length'), $this->input->get('start'));
        $this->db->where('p.active', 1);
        $query = $this->db->get($table);
        if ($type == 'count') {
            return $query->num_rows();
        } else {
            return $query->result_array();
        }
    }

    /**
     * @uses : count rows of table
     * @return : number of rows
     * @author : HPA
     */
    public function rows_of_table($table, $condition = null) {
        $this->db->select('*');
        if ($condition != null)
            $this->db->where($condition);
        $query = $this->db->get($table);
        return $query->num_rows();
    }

    /**
     * @uses : This function is used get result from the table
     * @param : @table 
     * @author : HPA
     */
    public function get_result_header_footer($table, $condition = null, $select = null, $order_type) {
        if ($select == null)
            $this->db->select('*');
        else
            $this->db->select($select);
        if (!is_null($condition)) {
            $this->db->where($condition);
        }
        if ($order_type == 'footer_position') {
            $this->db->having('is_parent = 0');
        }

        $this->db->order_by($order_type, 'ASC');
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

    /**
     * @uses : Insert user record into table
     * @param : @table = table name, @array = array of insert
     * @return : insert_id else 0
     * @author : HPA
     */
    public function insert($table, $array) {
        if ($this->db->insert($table, $array)) {
            return $this->db->insert_id();
        } else {
            return 0;
        }
    }

    /**
     * Update batch - updates the multiple records
     * @param string $table - Name of the table
     * @param array $data - Data to be updated
     * @param string $field - Field to be used as condition
     */
    public function update_multiple($table, $data, $field) {
        $this->db->update_batch($table, $data, $field);
    }

}
