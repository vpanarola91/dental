<div class="page-header page-header-default">
    <div class="page-header-content">
        <div class="page-title">
            <h4><i class="icon-user"></i> <span class="text-semibold"></span></h4>
        </div>
    </div>
    <div class="breadcrumb-line">
        <ul class="breadcrumb">
            <li><a href="<?php echo site_url('admin/home'); ?>"><i class="icon-home2 position-left"></i> Home</a></li>
            <li><a href="<?php echo site_url('admin/users'); ?>"><i class="icon-users4 position-left"></i> Users</a></li>
            <li class="active"></li>
        </ul>
    </div>
</div>
<?php
    if ($this->session->flashdata('success')) {
?>
        <div class="content pt0">
            <div class="alert alert-success">
                <a class="close" data-dismiss="alert">X</a>
                <strong><?= $this->session->flashdata('success') ?></strong>
            </div>
        </div>
    <?php
        $this->session->set_flashdata('success', false);
        } else if ($this->session->flashdata('error')) {
    ?>
        <div class="content pt0">
            <div class="alert alert-danger">
                <a class="close" data-dismiss="alert">X</a>
                <strong><?= $this->session->flashdata('error') ?></strong>
            </div>
        </div>
<?php
        $this->session->set_flashdata('error', false);
    } else {
        echo validation_errors();
    }
?>

<div class="content">
    <div class="row">
        <div class="col-md-12">
            <form class="form-horizontal form-validate" action="" id="user_info" method="POST">
                <div class="panel panel-flat">
                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-lg-3 control-label">First Name:</label>
                            <div class="col-lg-3">
                                <input type="text" name="fname" id="fname" placeholder="Enter first name" class="form-control" >
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-lg-3 control-label">Last Name:</label>
                            <div class="col-lg-3">
                                <input type="text" name="lname" id="lname" placeholder="Enter last name" class="form-control" >
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-lg-3 control-label">Email:</label>
                            <div class="col-lg-3">
                                <input type="text" name="email_id" id="email_id" placeholder="Enter Email" class="form-control" >
                            </div>
                        </div>    

                      


                        <div class="text-right">
                            <button class="btn btn-success" type="submit">Save <i class="icon-arrow-right14 position-right"></i></button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

<script type="text/javascript">

    function delete_coinfo(){
        bootbox.alert('Are you sure?');
    }

</script>