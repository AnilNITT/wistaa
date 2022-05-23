import React from 'react'
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';
import Navbarone from '../User/Navbarone';
import NavbarTwo from '../User/NavbarTwo';

const DocumentList = () => {
    return (
        <main className="body-content">
             <Sidebar/>
            <div className="ms-content-wrapper">
            <div className="row">
               <Navbarone/>
               <NavbarTwo/>
               <div class="col-md-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb pl-0">
                            <li class="breadcrumb-item">
                                <a href="#"><i class="material-icons">home</i> Home</a>
                            </li>
                            <li class="breadcrumb-item active">Documents<a class="btn btn-primary" href="#" Style="float:right; margin-top:0px;" data-toggle="modal" data-target="#createdoc">Create New</a></li>
                        </ol>
                    </nav>
                    <div class="ms-panel">
                        <div>
                        <div class="section_box1_content2">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="row">
                                         <div class="col-sm-4">
                                    <input type="text" class="form-control" id="txtsrch" placeholder="Search by keyword"/>
                                    <div>
                                    <button type="button" class="btn btn-success search_btn" onclick="SearchPatients()" id="sbtn1" Style="margin-top: 1rem;">Search </button>
                                    <button type="button" class="btn view btn-success search_btn" onclick="SearchPatients()" id="sbtn1" Style="margin-top:1rem; background: rgb(221, 221, 221); border-color: rgb(221, 221, 221);"><i class="fa fa-filter" aria-hidden="true"></i> Reset Filter</button>
                                    <button type="button" class="btn view btn-success search_btn" onclick="SearchPatients()" id="sbtn1" Style="margin-top:1rem; background: rgb(221, 221, 221); border-color: rgb(221, 221, 221);">Reset Sorting </button>
                                    
                                    </div>
                                   </div>
                                  
                                   <div class="col-sm-3">
                                    <select class="form-control">
                                       <option>Search by category</option>
                                       <option>General</option>
                                       <option>Policies and procedures</option>
                                       <option>Employee handbook</option>
                                       <option>Contract </option>
                                       <option>Insurance documents</option>
                                    </select>
                                   </div>
                                   <div class="col-md-3">
                                       <a href="#" class="btn btn-success" data-toggle="modal" data-target="#addcate">+ Add Category</a>
                                   </div>
                             
                                    </div>
                                </div>
                              
                                
                            </div>
                        </div>
                    </div>
                        <div class="ms-panel-body">
                            <div class="table-responsive">
                                <h5 Style="color:#651f70">General</h5>
                                <table class="table table-striped thead-primary w-100" Style="border-top: 2px solid #651f70;">
                       
                                   <tbody>
                                <tr Style="border-bottom:1px solid #ddd">
                                   
                                    <td><div class="row">
                                        <div class="col-md-1">
                                            <img src="images/docicon.png" Style="max-width: 100%;"/>
                                        </div>
                                        <div class="col-md-3">
                                             Document1 <br/><span class="badge badge-success">02/08/2022</span>
                                        </div>
                                    </div></td>
                                   
                                   
                                    <td class="center" width="150">
                                       <div class="dropdown float-right">
                    <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="material-icons" Style="font-size: 24px;
    margin-top: 10px;">more_vert</i>
                    </a>
                  <ul class="dropdown-menu dropdown-menu-right">
                      <li class="ms-dropdown-list">
                        <a class="media p-2" href="#">
                          <div class="media-body">
                            <span><i class="fa fa-eye" aria-hidden="true"></i> View</span>
                          </div>
                        </a>
                       
                        <a class="media p-2" href="#" data-toggle="modal" data-target="#editdoc">
                          <div class="media-body">
                            <span><i class="fa fa-edit" aria-hidden="true"></i> Edit</span>
                          </div>
                        </a>
                        <a class="media p-2" href="#">
                          <div class="media-body">
                            <span><i class="fa fa-trash" aria-hidden="true"></i> Delete</span>
                          </div>
                        </a>
                        <a class="media p-2" href="#">
                          <div class="media-body">
                            <span><i class="fa fa-download" aria-hidden="true"></i> Download</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div> 
                                        
                                        {/* <!--<a href="#" class="btn view" Style="font-size:12px; padding:7px;"> <i class="fa fa-download"></i> Download</a>-->
                                        <!-- <a href="#" data-toggle="modal"  data-target="#editdoc" class="btn btn-primary" Style="font-size:12px; padding:7px;"><i class="fa fa-edit"></i>Edit</a>-->
                                        <!--  <a href="#" class="btn btn-danger" Style="font-size:12px; padding:7px;"> <i class="fa fa-trash"></i>Delete</a>--> */}
                                    </td>
                                </tr>
                                <tr>
                                   
                                   <td><div class="row">
                                        <div class="col-md-1">
                                             <img src="images/docicon.png" Style="max-width: 100%;"/>
                                        </div>
                                        <div class="col-md-3">
                                             Document1 <br/><span class="badge badge-success">03/08/2022</span>
                                        </div>
                                    </div></td>
                                   
                                   
                                    <td class="center" width="150">
                                            <div class="dropdown float-right">
                    <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="material-icons" Style="font-size: 24px;
    margin-top: 10px;">more_vert</i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li class="ms-dropdown-list">
                        <a class="media p-2" href="#">
                          <div class="media-body">
                            <span><i class="fa fa-eye" aria-hidden="true"></i> View</span>
                          </div>
                        </a>
                       
                        <a class="media p-2" href="#" data-toggle="modal" data-target="#editdoc">
                          <div class="media-body">
                            <span><i class="fa fa-edit" aria-hidden="true"></i> Edit</span>
                          </div>
                        </a>
                        <a class="media p-2" href="#">
                          <div class="media-body">
                            <span><i class="fa fa-trash" aria-hidden="true"></i> Delete</span>
                          </div>
                        </a>
                        <a class="media p-2" href="#">
                          <div class="media-body">
                            <span><i class="fa fa-download" aria-hidden="true"></i> Download</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div> 
                                    </td>
                                </tr>
                               
                               
                                </tbody>
                                </table>
                                
                                 <h5 Style="color:#651f70">Policies and procedures</h5>
                                 <table class="table table-striped thead-primary w-100" Style="border-top: 2px solid #651f70;">
                       
                                   <tbody>
                                <tr Style="border-bottom:1px solid #ddd">
                                   
                                    <td><div class="row">
                                        <div class="col-md-1">
                                             <img src="images/docicon.png" Style="max-width: 100%;"/>
                                        </div>
                                        <div class="col-md-3">
                                             Document1 <br/><span class="badge badge-success">01/08/2022</span>
                                        </div>
                                    </div></td>
                                   
                                   
                                   <td class="center" width="150">
                                            <div class="dropdown float-right">
                    <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="material-icons" Style="font-size: 24px;
    margin-top: 10px;">more_vert</i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li class="ms-dropdown-list">
                        <a class="media p-2" href="#">
                          <div class="media-body">
                            <span><i class="fa fa-eye" aria-hidden="true"></i> View</span>
                          </div>
                        </a>
                       
                        <a class="media p-2" href="#" data-toggle="modal" data-target="#editdoc">
                          <div class="media-body">
                            <span><i class="fa fa-edit" aria-hidden="true"></i> Edit</span>
                          </div>
                        </a>
                        <a class="media p-2" href="#">
                          <div class="media-body">
                            <span><i class="fa fa-trash" aria-hidden="true"></i> Delete</span>
                          </div>
                        </a>
                        <a class="media p-2" href="#">
                          <div class="media-body">
                            <span><i class="fa fa-download" aria-hidden="true"></i> Download</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div> 
                                    </td>
                                </tr>
                                
                                <tr Style="border-bottom:1px solid #ddd">
                                   
                                    <td><div class="row">
                                        <div class="col-md-1">
                                           <img src="images/docicon.png" Style="max-width: 100%;"/>
                                        </div>
                                        <div class="col-md-3">
                                             Document1 <br/><span class="badge badge-success">12/08/2022</span>
                                        </div>
                                    </div></td>
                                   
                                   
                                   <td class="center" width="150">
                                           <div class="dropdown float-right">
                    <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="material-icons" Style="font-size: 24px;
    margin-top: 10px;">more_vert</i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li class="ms-dropdown-list">
                        <a class="media p-2" href="#">
                          <div class="media-body">
                            <span><i class="fa fa-eye" aria-hidden="true"></i> View</span>
                          </div>
                        </a>
                       
                        <a class="media p-2" href="#" data-toggle="modal" data-target="#editdoc">
                          <div class="media-body">
                            <span><i class="fa fa-edit" aria-hidden="true"></i> Edit</span>
                          </div>
                        </a>
                        <a class="media p-2" href="#">
                          <div class="media-body">
                            <span><i class="fa fa-trash" aria-hidden="true"></i> Delete</span>
                          </div>
                        </a>
                        <a class="media p-2" href="#">
                          <div class="media-body">
                            <span><i class="fa fa-download" aria-hidden="true"></i> Download</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div> 
                                    </td>
                                </tr>
                               
                                </tbody>
                                </table>
                                
                                 <h5 Style="color:#651f70">Employee handbook</h5>
                                 <table class="table table-striped thead-primary w-100" Style="border-top: 2px solid #651f70;">
                       
                                   <tbody>
                                <tr>
                                   
                                   <td><div class="row">
                                        <div class="col-md-1">
                                             <img src="images/docicon.png" Style="max-width: 100%;"/>
                                        </div>
                                        <div class="col-md-3">
                                             Document1 <br/><span class="badge badge-success">01/08/2022</span>
                                        </div>
                                    </div></td>
                                   
                                   
                                   <td class="center" width="150">
                                           <div class="dropdown float-right">
                    <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="material-icons" Style="font-size: 24px;
    margin-top: 10px;">more_vert</i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li class="ms-dropdown-list">
                        <a class="media p-2" href="#">
                          <div class="media-body">
                            <span><i class="fa fa-eye" aria-hidden="true"></i> View</span>
                          </div>
                        </a>
                       
                        <a class="media p-2" href="#" data-toggle="modal" data-target="#editdoc">
                          <div class="media-body">
                            <span><i class="fa fa-edit" aria-hidden="true"></i> Edit</span>
                          </div>
                        </a>
                        <a class="media p-2" href="#">
                          <div class="media-body">
                            <span><i class="fa fa-trash" aria-hidden="true"></i> Delete</span>
                          </div>
                        </a>
                        <a class="media p-2" href="#">
                          <div class="media-body">
                            <span><i class="fa fa-download" aria-hidden="true"></i> Download</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div> 
                                    </td>
                                </tr>
                                
                               
                               
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div class="new_modals">
                <div class="modal fade none-border" id="createdoc" Style="display: none;" aria-hidden="true">

                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                               <h4 class="modal-title"><strong>Add Document</strong></h4>
                               <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                                <div class="modal_save">
                                    <button class="btn btn-success " type="button" onclick="SavePatients()">Save</button>
                                </div>

                               
                            </div>
                            <div class="row cal_m">
                                <div class="modal_contents">

                                    <div role="form">
                                        <div class="row">
                                            
                                            <div class="col-sm-12 col-lg-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Document Title<span class="man_fields1">*</span></label>
                                                     <input class="form-control" name="documenttitle" type="text" value=""/>
                                                </div>
                                            </div>
                                             <div class="col-sm-12 col-lg-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Folder<span class="man_fields1">*</span></label>
                                                     <select class="form-control">
                   <option>Select Folder</option>
                   <option>Users guide</option>
                   <option>care plan</option>
                   <option>Mar sheets</option>
                   <option>Body maps </option>
                   <option>Incidents reports</option>
                   <option>Visit log </option>
               </select>
                                                </div>
                                            </div>
                                            
                                            <div class="col-sm-12 col-lg-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Upload document<span class="man_fields1">*</span></label>
                                                     <input type="file" class="form-control" name="uploaddoc"/> 
                                                </div>
                                            </div>

                                            <div class="col-sm-12 col-lg-12">
                                                 <label for="exampleInputEmail1">Visible to non-admin </label>
                                                <div class="can-toggle">
  <input id="a" type="checkbox"/>
  <label for="a">
    <div class="can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
  </label>
</div>
                                            </div>

                                            <div class="col-sm-12 col-lg-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Upload date </label>
                                                    <input class="form-control" name="date" type="date"/>
                                                </div>
                                            </div>
                                            
                                        </div>
                                      

                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="new_modals">
                <div class="modal fade none-border" id="editdoc">

                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                               <h4 class="modal-title"><strong>Edit</strong></h4>
                               <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                                <div class="modal_save">
                                    <button class="btn btn-success " type="button" onclick="SavePatients()">Save</button>
                                </div>

                               
                            </div>
                            <div class="row cal_m">
                                <div class="modal_contents">

                                    <div role="form">
                                        <div class="row">
                                            
                                            <div class="col-sm-12 col-lg-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Document Title<span class="man_fields1">*</span></label>
                                                     <input class="form-control" name="documenttitle" type="text" value="Document1"/>
                                                </div>
                                            </div>
                                             <div class="col-sm-12 col-lg-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Folder<span class="man_fields1">*</span></label>
                                                      <select class="form-control">
                                          <option>Select category</option>
                                           <option>General</option>
                                       <option selected="">Policies and procedures</option>
                                       <option>Employee handbook</option>
                                       <option>Contract </option>
                                       <option>Insurance documents</option>
                                        </select>
                                                </div>
                                            </div>
                                            
                                            <div class="col-sm-12 col-lg-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Upload document<span class="man_fields1">*</span></label>
                                                     <input type="file" class="form-control" name="uploaddoc"/> 
                                                </div>
                                            </div>
                                             <div class="col-sm-12 col-lg-12">
                                                 <label for="exampleInputEmail1">Visible to non-admin </label>
                                                <div class="can-toggle">
  <input id="b" type="checkbox" checked=""/>
  <label for="b">
    <div class="can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
  </label>
</div>
                                            </div>
                                            <div class="col-sm-12 col-lg-12">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Upload date </label>
                                                    <input class="form-control" name="date" type="text" value="02/08/2022" readonly=""/>
                                                </div>
                                            </div>
                                            
                                        </div>
                                      

                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="new_modals">
                <div class="modal fade none-border" id="addcate">

                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                               <h4 class="modal-title"><strong>Add category</strong></h4>
                               <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                               

                               
                            </div>
                            <div class="row cal_m">
                                <div class="modal_contents">

                                    <div role="form">
                                        <div class="row">
                                            
                                            <div class="col-sm-12 col-lg-12" Style="padding-top:30px;">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Category name<span class="man_fields1">*</span></label>
                                                     <input class="form-control" name="category" type="text"/>
                                                </div>
                                            </div>
                                             <div class="col-sm-12 col-lg-12">
                                                 <button class="btn btn-success " type="button" onclick="SavePatients()">Add category</button>
                                            </div> <br/>
                                            
                                            
                                            
                                        </div>
                                      

                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </main>
    )
}

export default DocumentList
