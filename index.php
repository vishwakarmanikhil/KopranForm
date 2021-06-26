<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Kopran Limited</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="assets/vendors/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="assets/css/styles.css">
</head>

<body>

    <div class="container-fluid">
        <div class="nav-section">
            
        </div>
    </div>

    <section class="form-section">
        <div class="container">
            <div class="text-center">
                <h1>TDS and TCS Questionnaire</h1>
            </div>
            <form method="post" id="tds_tcs_form">
                <div class="form-group">
                    <div class="form-item">
                        <div class="row">
                            <div class="col-5">
                                <label for="">Enter your Organization name</label>
                            </div>
                            <div class="col-7">
                                <input type="text" class="form-control" name="user_organization_name">
                            </div>
                        </div>                       
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-item">
                        <div class="row">
                            <div class="col-5">
                                <label for="">Are You Vendor or Customer</label>
                            </div>
                            <div class="col-7">
                                <div class="form-check">                                  
                                  <label class="form-check-label" for="vc1">
                                    <input class="form-check-input" type="radio" name="user_type" id="vc1" value="vendor"> Vendor
                                  </label>
                                </div>
                                <div class="form-check">                                  
                                  <label class="form-check-label" for="vc2">
                                    <input class="form-check-input" type="radio" name="user_type" id="vc2" value="customer"> Customer
                                  </label>
                                </div>
                            </div>
                        </div>                       
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-item">
                        <div class="row">
                            <div class="col-5">
                                <label for="">Do You have Valid Pan</label>
                            </div>
                            <div class="col-7">
                                <div class="form-check">                                  
                                  <label class="form-check-label" for="show_pan">
                                    <input class="form-check-input" type="radio" name="user_valid_pan" id="show_pan" value="Yes"> Yes
                                  </label>
                                </div>
                                <div class="form-check">                                  
                                  <label class="form-check-label" for="hide_pan">
                                    <input class="form-check-input" type="radio" name="user_valid_pan" id="hide_pan" value="No"> No
                                  </label>
                                </div>
                            </div>
                        </div>                       
                    </div>
                </div>
                

                <div class="user_pan_upload_div">
                    <div class="form-group">
                        <div class="form-item">
                            <div class="row">
                                <div class="col-5">
                                    <label for="">Enter your PAN</label>
                                </div>
                                <div class="col-7">
                                    <input type="text" class="form-control" name="user_pan">
                                </div>
                            </div>                       
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="form-item">
                        <div class="row">
                            <div class="col-5">
                                <label for="">Is your turnover in FY 2020-21 is more than INR 10 Crore</label>
                            </div>
                            <div class="col-7">
                                <div class="form-check">                                  
                                  <label class="form-check-label" for="turnover_20_21">
                                    <input class="form-check-input" type="radio" name="user_20_21_turnover" id="turnover1_20_21" value="1"> Yes
                                  </label>
                                </div>
                                <div class="form-check">                                  
                                  <label class="form-check-label" for="turnover_20_21">
                                    <input class="form-check-input" type="radio" name="user_20_21_turnover" id="turnover0_20_21" value="0"> No
                                  </label>
                                </div>
                            </div>
                        </div>                       
                    </div>
                </div>

                <div class="form-group">
                    <div class="form-item">
                        <div class="row">
                            <div class="col-5">
                                <label for="">Have You Filed ROI for FY 2020-21</label>
                            </div>
                            <div class="col-7">
                                <div class="form-check">                                  
                                  <label class="form-check-label" for="show_ROIprevious">
                                    <input class="form-check-input" type="radio" name="ROI_20_21" id="show_ROI_current" value="1"> Yes
                                  </label>
                                </div>
                                <div class="form-check">                                  
                                  <label class="form-check-label" for="hide_ROIprevious">
                                    <input class="form-check-input" type="radio" name="ROI_20_21" id="hide_ROI_current" value="0"> No
                                  </label>
                                </div>
                            </div>
                        </div>                       
                    </div>
                </div>
                <div class="ROI_div_current">
                    <div class="form-group">
                        <div class="form-item">
                            <div class="row">
                                <div class="col-5">
                                    <label for="">Please mention ack number</label>
                                </div>
                                <div class="col-7">
                                    <input type="text" class="form-control" name="20_21_turnover_ack_number">
                                </div>
                            </div>                       
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="form-item">
                            <div class="row">
                                <div class="col-5">
                                    <label for="">Please attach proof</label>
                                </div>
                                <div class="col-7">
                                    <input type="file" class="form-control" name="20_21_turnover_file">
                                </div>
                            </div>                       
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="form-item">
                        <div class="row">
                            <div class="col-5">
                                <label for="">Is your turnover in FY 2019-20 is more than INR 10 Crore</label>
                            </div>
                            <div class="col-7">
                                <div class="form-check">                                  
                                  <label class="form-check-label" for="turnover_19_20">
                                    <input class="form-check-input" type="radio" name="user_19_20_turnover" id="turnover1_19_20" value="1"> Yes
                                  </label>
                                </div>
                                <div class="form-check">                                  
                                  <label class="form-check-label" for="turnover_19_20">
                                    <input class="form-check-input" type="radio" name="user_19_20_turnover" id="turnover0_19_20" value="0"> No
                                  </label>
                                </div>
                            </div>
                        </div>                       
                    </div>
                </div>

                <div class="form-group">
                    <div class="form-item">
                        <div class="row">
                            <div class="col-5">
                                <label for="">Have You Filed ROI for FY 2019-20</label>
                            </div>
                            <div class="col-7">
                                <div class="form-check">                                  
                                  <label class="form-check-label" for="show_ROIprevious">
                                    <input class="form-check-input" type="radio" name="ROI_19_20" id="show_ROI_previous" value="1"> Yes
                                  </label>
                                </div>
                                <div class="form-check">                                  
                                  <label class="form-check-label" for="hide_ROIprevious">
                                    <input class="form-check-input" type="radio" name="ROI_19_20" id="hide_ROI_previous" value="0"> No
                                  </label>
                                </div>
                            </div>
                        </div>                       
                    </div>
                </div>

                <div class="ROI_div_previous">
                    <div class="form-group">
                        <div class="form-item">
                            <div class="row">
                                <div class="col-5">
                                    <label for="">Please mention ack number</label>
                                </div>
                                <div class="col-7">
                                    <input type="text" class="form-control" name="19_20_turnover_ack_number">
                                </div>
                            </div>                       
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="form-item">
                            <div class="row">
                                <div class="col-5">
                                    <label for="">Please attach proof</label>
                                </div>
                                <div class="col-7">
                                    <input type="file" class="form-control" name="19_20_turnover_file">
                                </div>
                            </div>                       
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="form-item">
                        <div class="row">
                            <div class="col-5">
                                <label for="">Is Your TDS + TCS in FY 2020-21 > INR 50,000</label>
                            </div>
                            <div class="col-7">
                                <div class="form-check">                                  
                                  <label class="form-check-label" for="tds_tcs1_current">
                                    <input class="form-check-input" type="radio" name="check_tdstcs_20_21" id="tds_tcs1_current" value="1"> Yes
                                  </label>
                                </div>
                                <div class="form-check">                                  
                                  <label class="form-check-label" for="tds_tcs2_current">
                                    <input class="form-check-input" type="radio" name="check_tdstcs_20_21" id="tds_tcs2_current" value="0"> No
                                  </label>
                                </div>
                            </div>
                        </div>                       
                    </div>
                </div>

                <div class="form-group">
                    <div class="form-item">
                        <div class="row">
                            <div class="col-5">
                                <label for="">Is Your TDS + TCS in FY 2019-20 > INR 50,000</label>
                            </div>
                            <div class="col-7">
                                <div class="form-check">                                  
                                  <label class="form-check-label" for="tds_tcs1">
                                    <input class="form-check-input" type="radio" name="check_tdstcs_19_20" id="tds_tcs1_old" value="1"> Yes
                                  </label>
                                </div>
                                <div class="form-check">                                  
                                  <label class="form-check-label" for="tds_tcs2">
                                    <input class="form-check-input" type="radio" name="check_tdstcs_19_20" id="tds_tcs2_old" value="0"> No
                                  </label>
                                </div>
                            </div>
                        </div>                       
                    </div>
                </div><br><br><br>

                <h3>Contact Details</h3>

                <div class="form-group">
                    <div class="form-item">
                        <div class="row">
                            <div class="col-5">
                                <label for="">Name of the person filling the form</label>
                            </div>
                            <div class="col-7">
                                <input type="text" class="form-control" name="contact_user_name">
                            </div>
                        </div>                       
                    </div>
                </div>

                <div class="form-group">
                    <div class="form-item">
                        <div class="row">
                            <div class="col-5">
                                <label for="">Designation</label>
                            </div>
                            <div class="col-7">
                                <input type="text" class="form-control" name="contact_user_designation">
                            </div>
                        </div>                       
                    </div>
                </div>

                <div class="form-group">
                    <div class="form-item">
                        <div class="row">
                            <div class="col-5">
                                <label for="">Address</label>
                            </div>
                            <div class="col-7">
                                <input type="text" class="form-control" name="contact_user_address">
                            </div>
                        </div>                       
                    </div>
                </div>

                <div class="form-group">
                    <div class="form-item">
                        <div class="row">
                            <div class="col-5">
                                <label for="">City</label>
                            </div>
                            <div class="col-7">
                                <input type="text" class="form-control" name="contact_user_city">
                            </div>
                        </div>                       
                    </div>
                </div>

                <div class="form-group">
                    <div class="form-item">
                        <div class="row">
                            <div class="col-5">
                                <label for="">State</label>
                            </div>
                            <div class="col-7">
                                <input type="text" class="form-control" name="contact_user_state">
                            </div>
                        </div>                       
                    </div>
                </div>

                <div class="form-group">
                    <div class="form-item">
                        <div class="row">
                            <div class="col-5">
                                <label for="">Pincode</label>
                            </div>
                            <div class="col-7">
                                <input type="number" class="form-control" name="contact_user_pincode">
                            </div>
                        </div>                       
                    </div>
                </div>

                <div class="form-group">
                    <div class="form-item">
                        <div class="row">
                            <div class="col-5">
                                <label for="">Email</label>
                            </div>
                            <div class="col-7">
                                <input type="email" class="form-control" name="contact_user_email">
                            </div>
                        </div>                       
                    </div>
                </div>

                <div class="form-group">
                    <div class="form-item">
                        <div class="row">
                            <div class="col-5">
                                <label for="">Phone Number</label>
                            </div>
                            <div class="col-7">
                                <input type="number" class="form-control" name="contact_user_phone_number">
                            </div>
                        </div>                       
                    </div>
                </div>

                <div class="form-group">
                    <div class="form-item">
                        <div class="row">
                            <div class="form-check">
                              <label class="form-check-label" for="flexCheckDefault">
                                <input class="form-check-input" type="checkbox" value="" id="" name="accept_pp"> Yes ,I accept and hereby confirm that the above mentioned information furnished is true and to the best of my belief and knowledge.
                              </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>

            </form>
        </div>
    </section>


    <script type="text/javascript" src="assets/vendors/jquery/jquery.min.js"></script>
    <script type="text/javascript" src="assets/vendors/jquery/popper.js"></script>   
    <script type="text/javascript" src="assets/vendors/jquery/jquery.validate.js"></script>
    <script type="text/javascript" src="assets/vendors/jquery/additional-methods.min.js"></script>
    <script type="text/javascript" src="assets/vendors/bootstrap/js/bootstrap.min.js"></script>
    
    <!-- jQuery Custom Scroller CDN -->
    <script src="assets/js/main.js"></script>
</body>
</html>

