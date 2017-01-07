<link href="<?= ADMIN_PLUGINS; ?>datepicker/datepicker.min.css" rel="stylesheet">
<link href="<?= ADMIN_PLUGINS; ?>timepicker/bootstrap-timepicker.min.css" rel="stylesheet">
<link href="<?= ADMIN_CSS ?>jquery.tagsinput.css" rel="stylesheet">
<style>
    hr {
        margin: 10px 0px;
    }
    h4 {
        padding-left: 10px;
    }
</style>
<div class="container-fluid"> 

    <!-- Begin breadcrumb -->
    <ol class="breadcrumb default square rsaquo sm">
        <li><a href="<?= BASE_URL('admin/home'); ?>"><i class="fa fa-home"></i></a></li>
        <li class="active">Settings</li>
    </ol>
    <!-- End breadcrumb -->

    <div class="row">
        <div class="col-sm-12"> 
            <!-- Begin basic form elements -->
            <form id="frmconfig" method="post" action="<?= BASE_URL('admin/settings/save'); ?>">
                <div class="the-box">
                    <legend>Configuration Settings</legend>
                    <!-- ============ Error Message ================== -->
                    <?php if ($this->session->flashdata('success')): ?>
                        <div class="alert alert-success alert-bold-border square fade in alert-dismissable">
                            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                            <i class="alert-link">
                                <?= $this->session->flashdata('success'); ?>
                            </i> </div>
                    <?php endif; ?>
                    <!-- ============ Error Message ================== -->
                    <div class="row">
                        <div class="form-group">
                            <div class="col-sm-12 col-md-12 form"> 

                                <!-- ============================= -->
                                <div class="row">
                                    <div class="col-sm-6 form">
                                        <label> Site Name <span class="req-field">*</span> </label>
                                        <input type="text" name="site_name" value="<?= $this->Common->config('site_name') ?>" class="form-control" tabindex="1">
                                    </div>
                                    <div class="col-sm-6 form">
                                        <label> Sender Name <span class="req-field">*</span> </label>
                                        <input type="text" name="sender_name" value="<?= $this->Common->config('sender_name') ?>" class="form-control" tabindex="6">
                                    </div>
                                </div>
                                <!-- .row --> 
                                <!-- ============================= --> 

                                <!-- ============================= -->
                                <div class="row">
                                    <div class="col-sm-6 form">
                                        <label> Site Title <span class="req-field">*</span> </label>
                                        <input type="text" name="site_title" value="<?= $this->Common->config('site_title') ?>" class="form-control" tabindex="2">
                                    </div>
                                    <div class="col-sm-6 form">
                                        <label> Copy Right <span class="req-field">*</span> </label>
                                        <input type="text" name="copy_right" value="<?= $this->Common->config('copy_right') ?>" class="form-control" tabindex="7">
                                    </div>

                                    <!-- .col-sm-12 --> 
                                </div>
                                <!-- .row --> 

                                <!-- ============================= -->
                                <div class="row">

                                    <div class="col-sm-6 form">
                                        <label> Contact Email <span class="req-field">*</span> </label>
                                        <input type="email" name="contact_email" value="<?= $this->Common->config('contact_email') ?>" class="form-control" tabindex="3">

                                    </div>
                                    <div class="col-sm-6 form">
                                        <label> Record Per Page <span class="req-field">*</span> </label>
                                        <input type="text" name="record_per_page" value="<?= $this->Common->config('record_per_page') ?>" class="form-control NumbersOnly" tabindex="8">

                                    </div>

                                    <!-- .col-sm-12 --> 
                                </div>
                                <!-- .row --> 
                                <!-- ============================= --> 

                                <!-- ============================= -->
                                <div class="row">
                                    <div class="col-sm-12 form">
                                        <label> Site Description <span class="req-field">*</span> </label>
                                        <textarea name="site_description" rows="5" class="form-control" tabindex="4"><?= $this->Common->config('site_description') ?>
                                        </textarea>
                                    </div>
                                </div>    

                                <div class="row">
                                    <div class="col-sm-12 form">
                                        <label> Site Keyword <span class="req-field">*</span> </label>
                                        <textarea name="site_keywords" id="site_keywords" class="form-control" tabindex="5"><?= $this->Common->config('site_keywords') ?>
                                        </textarea>
                                    </div>

                                    <!-- .col-sm-12 --> 
                                </div>
                                <!-- .row --> 
                                <!-- ============================= --> 
                            </div>
                            <!-- .col-sm-12 .col-md-6 --> 

                        </div>
                        <!-- .form-group --> 


                    </div>
                    <!-- .row -->

                    <!-- ============ Social setting================== -->
                    <legend>Social Settings</legend>
                    <div class="row">
                        <div class="form-group">
                            <div class="col-sm-12 col-md-12 form"> 

                                <!-- ============================= -->
                                <div class="row">
                                    <div class="col-sm-6 form">
                                        <label> Facebook Link <span class="req-field">*</span> </label>
                                        <input type="text" name="facebook_link" value="<?= $this->Common->config('facebook_link') ?>" class="form-control" tabindex="9">
                                    </div>
                                    <div class="col-sm-6 form">
                                        <label> Twitter Link <span class="req-field">*</span> </label>
                                        <input type="text" name="twitter_link" value="<?= $this->Common->config('twitter_link') ?>" class="form-control" tabindex="10">
                                    </div>
                                </div>
                                <!-- .row --> 
                                <!-- ============================= --> 

                                <!-- ============================= -->
                                <div class="row">
                                    <div class="col-sm-6 form">
                                        <label> Google Plus Link <span class="req-field">*</span> </label>
                                        <input type="text" name="gplus_link" value="<?= $this->Common->config('gplus_link') ?>" class="form-control" tabindex="11">
                                    </div>
                                    <div class="col-sm-6 form">
                                        <label> YouTube <span class="req-field">*</span> </label>
                                        <input type="text" name="youtube_link" value="<?= $this->Common->config('youtube_link') ?>" class="form-control" tabindex="12">
                                    </div>

                                    <!-- .col-sm-12 --> 
                                </div>
                                <!-- .row --> 

                            </div>    
                        </div>    
                    </div>    
                    <!-- ============ Social setting================== -->
                    <div class="row">
                        <div class="form-group">
                            <div class="col-sm-6" style="margin-top:10px;">
                                <button type="submit" class="btn btn-info" value="Save" name="Save"  style="margin:0px 10px 5px 0px;"><i class="fa fa-edit"></i>Edit</button>
                                &nbsp;
                                <button type="reset" class="btn btn-danger"  style="margin:0px 10px 5px 0px;"><i class="fa fa-eraser"></i> Reset</button>
                                &nbsp;
                                <button type="button" class="btn btn-primary" onclick="javascript:window.history.back()"  style="margin:0px 10px 5px 0px;"> <i class="fa fa-arrow-left"></i> Back </button>
                            </div>
                        </div>
                    </div>
                    <!-- ============ Form Group ================== --> 
                </div>
            </form>
        </div>
    </div>
</div>
<!-- /.container-fluid --> 
<script src="<?= ADMIN_PLUGINS; ?>validator/jquery.validate.min.js"></script> 
<script src="<?= ADMIN_PLUGINS; ?>datepicker/bootstrap-datepicker.js"></script> 
<script src="<?= ADMIN_PLUGINS; ?>timepicker/bootstrap-timepicker.js"></script> 
<script src="<?= ADMIN_JS; ?>jquery.tagsinput.min.js"></script> 
<script type="text/javascript">

                                    jQuery('#site_keywords').tagsInput({width: 'auto'});

                                    $('.NumbersOnly').keyup(function () {
                                        this.value = this.value.replace(/[^0-9]/g, '');
                                    });

//===============================================================================
                                    $("#frmconfig").validate({
                                        highlight: function (element) {
                                            $(element).closest('.form').removeClass('has-success').addClass('has-error');
                                        },
                                        success: function (element) {
                                            $(element).closest('.form').removeClass('has-error').addClass('has-success');
                                            $(element).closest('.error').remove();
                                        },
                                        rules: {
                                            site_name: {
                                                required: true,
                                            },
                                            site_title: {
                                                required: true,
                                            },
                                            site_description: {
                                                required: true,
                                            },
                                            site_keywords: {
                                                required: true,
                                            },
                                            copy_right: {
                                                required: true,
                                            },
                                            sender_name: {
                                                required: true,
                                            },
                                            contact_email: {
                                                required: true,
                                            },
                                            record_per_page: {
                                                required: true,
                                            },
                                            facebook_link: {
                                                required: true,
                                                url: true,
                                            },
                                            twitter_link: {
                                                required: true,
                                                url: true,
                                            },
                                            gplus_link: {
                                                required: true,
                                                url: true,
                                            },
                                            youtube_link: {
                                                required: true,
                                                url: true,
                                            },

                                        },
                                        messages: {
                                            site_name: {
                                                required: "Please provide a Site Name"
                                            },
                                            site_title: {
                                                required: "Please provide a Site Title"
                                            },
                                            site_description: {
                                                required: "Please provide a Site Description"
                                            },
                                            site_keywords: {
                                                required: "Please provide a Site Keywords"
                                            },
                                            copy_right: {
                                                required: "Please provide a Copy Right"
                                            },
                                            sender_name: {
                                                required: "Please provide a Sender Name",
                                            },
                                            contact_email: {
                                                required: "Please provide a Contact Mail Id"
                                            },
                                            record_per_page: {
                                                required: "Please provide a How many Record Display Per page"
                                            },
                                            facebook_link: {
                                                required: "Please provide a Facebook Link",
                                                url: "Please Enter Valid URL",
                                            },
                                            twitter_link: {
                                                required: "Please provide a Twitter Link",
                                                url: "Please Enter Valid URL",
                                            },
                                            gplus_link: {
                                                required: "Please provide a Google Plus Link",
                                                url: "Please Enter Valid URL",
                                            },
                                            youtube_link: {
                                                required: "Please provide a You Tube Link",
                                                url: "Please Enter Valid URL",
                                            },
                                        }
                                    });
</script>