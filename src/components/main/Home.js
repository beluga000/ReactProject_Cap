import {useState,useEffect,Fragment} from "react";
import Header from "./Header";
import axios from "axios";

function Home (){
    return(
        <Fragment>
            <div id="template-mo-zay-hero-carousel" class="carousel slide" data-bs-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" class="active"></li>
                    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
                    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={"https://newera5950.jpg3.kr/banner/23_authentic_pc.jpg"}/>
                    </div>
                    <div class="carousel-item">
                        <div class="container">
                            <div class="row p-5">
                                <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img class="img-fluid" src="./assets/img/banner_img_02.jpg" alt=""/>
                                </div>
                                <div class="col-lg-6 mb-0 d-flex align-items-center">
                                    <div class="text-align-left">
                                        <h1 class="h1">Proident occaecat</h1>
                                        <h3 class="h2">Aliquip ex ea commodo consequat</h3>
                                        <p>
                                            You are permitted to use this Zay CSS template for your commercial websites.
                                            You are <strong>not permitted</strong> to re-distribute the template ZIP file in any kind of template collection websites.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="container">
                            <div class="row p-5">
                                <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img class="img-fluid" src="./assets/img/banner_img_03.jpg" alt=""/>
                                </div>
                                <div class="col-lg-6 mb-0 d-flex align-items-center">
                                    <div class="text-align-left">
                                        <h1 class="h1">Repr in voluptate</h1>
                                        <h3 class="h2">Ullamco laboris nisi ut </h3>
                                        <p>
                                            We bring you 100% free CSS templates for your websites.
                                            If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
                    <i class="fas fa-chevron-left"></i>
                </a>
                <a class="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
                    <i class="fas fa-chevron-right"></i>
                </a>
            </div>


            <section class="container py-5">
                <div class="row text-center pt-3">
                    <div class="col-lg-6 m-auto">
                        <h1 class="h1">이달의 인기 제품</h1>
                        <p>
                            23 SS 시즌 새로운 제품과 함께 가장 많은 인기를 얻고 있는 다양한 제품들을 만나보세요.
                            온라인 한정 제품들도 함께 경험해보세요.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-4 p-5 mt-3">
                        <a href="#"><img src="https://www.neweracapkorea.com/shopimages/newerashop/003001001907.jpg?1679035994" class="rounded-circle img-fluid border"/></a>
                        <h5 class="text-center mt-3 mb-3">MLB US 플래그 LA 다저스 프리 커브드 사이즈캡 블루</h5>
                        <p class="text-center"><a class="btn btn-success">구매하러 가기</a></p>
                    </div>
                    <div class="col-12 col-md-4 p-5 mt-3">
                        <a href="#"><img src="http://newera5950.jpg3.kr/item/13448076_1.jpg" class="rounded-circle img-fluid border"/></a>
                        <h2 class="h5 text-center mt-3 mb-3">디스이즈네버댓 X MLB 뉴욕 양키스 언스트럭쳐 투톤 볼캡 다크 그린</h2>
                        <p class="text-center"><a class="btn btn-success">구매하러 가기</a></p>
                    </div>
                    <div class="col-12 col-md-4 p-5 mt-3">
                        <a href="#"><img src="https://www.neweracapkorea.com/shopimages/newerashop/060006000833.jpg?1675147998" class="rounded-circle img-fluid border"/></a>
                        <h2 class="h5 text-center mt-3 mb-3">MLB 핀치히터 시카고 화이트 삭스 볼캡 블랙</h2>
                        <p class="text-center"><a class="btn btn-success">구매하러 가기</a></p>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Home;