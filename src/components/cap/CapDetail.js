import {useState,useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router";

function CapDetail(props){
    let {no}=useParams();
    const [capDetail,setCapDetail]=useState({})
    useEffect(()=>{
        axios.get("http://localhost/cap/cap_detail_react",{
            params:{
                no:no
            }
        }).then(response=>{
            console.log(response.data)
            setCapDetail(response.data)
        })
    }, {})

    return(
        <section className="bg-light">
            <div className="container pb-5">
                <div className="row">
                    <div className="col-lg-5 mt-5">
                        <div className="card mb-3">
                            <img className="card-img img-fluid" src={capDetail.poster}
                                 alt="Card image cap" id="product-detail"/>
                        </div>
                        <div className="row">
                            <div className="col-1 align-self-center">
                                <a href="#multi-item-example" role="button" data-bs-slide="prev">
                                    <i className="text-dark fas fa-chevron-left"></i>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </div>
                            <div id="multi-item-example" className="col-10 carousel slide carousel-multi-item"
                                 data-bs-ride="carousel">
                                <div className="carousel-inner product-links-wap" role="listbox">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-4">
                                                <a href="#">
                                                    <img className="card-img img-fluid"
                                                         src={capDetail.poster1} alt="Product Image 1"/>
                                                </a>
                                            </div>
                                            <div className="col-4">
                                                <a href="#">
                                                    <img className="card-img img-fluid"
                                                         src={capDetail.poster2} alt="Product Image 2"/>
                                                </a>
                                            </div>
                                            <div className="col-4">
                                                <a href="#">
                                                    <img className="card-img img-fluid"
                                                         src={capDetail.poster3} alt="Product Image 3"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1 align-self-center">
                                <a href="#multi-item-example" role="button" data-bs-slide="next">
                                    <i className="text-dark fas fa-chevron-right"></i>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 mt-5">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="h2">{capDetail.koname}</h1>
                                <p className="h3 py-2">{capDetail.enname}</p>

                                <p className="h3 py-2" style={{"fontWeight":"20px"}}>{capDetail.price}</p>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <h6>브랜드:</h6>
                                    </li>
                                    <li className="list-inline-item">
                                        <p className="text-muted"><strong>NewEra</strong></p>
                                    </li>
                                </ul>

                                <h6>상품 설명:</h6>
                                <p>39THIRTY는 STRETCH CAP 모델로 신축성 있는 6면의 패널과 타원형으로 구부러져 있는 챙으로 구성되어 있습니다.<br/> 39THIRTY는 미국 스포츠 리그 선수용 모자의 Replica 모델로 많이 사용되고 있으며, 제품의 안쪽 자체 개발된 Sweat 밴드는 탁월한 흡수력과 편안한 착용감을 제공합니다.<br/> 남녀 모두 착용할 수 있는 XSmall 부터 XLarge사이즈까지 다양합니다. 대표적인 모델로는 'MLB 팀 클래식 볼캡' 있습니다.</p>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <h6>구매가능 여부 :</h6>
                                    </li>
                                    <li className="list-inline-item">
                                        <p className="text-muted"><strong>재고 보유중</strong></p>
                                    </li>
                                </ul>

                                <h6>상품정보:</h6>
                                <ul className="list-unstyled pb-3">
                                    <li>상품코드 : {capDetail.p_code}</li>
                                    <li>소재 : {capDetail.p_material}</li>
                                    <li>깊이 : {capDetail.p_depth}</li>
                                    <li>챙 길이 : {capDetail.p_length}</li>
                                </ul>


                                    <input type="hidden" name="product-title" value="Activewear"/>
                                        <div className="row">
                                            <div className="col-12 text-center">
                                                <ul className="list-inline pb-3">
                                                    <li className="list-inline-item text-right">
                                                        수량
                                                        <input type="hidden" name="product-quanity" id="product-quanity"
                                                               value="1"/>
                                                    </li>
                                                    <li className="list-inline-item"><span className="btn btn-success"
                                                                                           id="btn-minus">-</span></li>
                                                    <li className="list-inline-item"><span
                                                        className="badge bg-secondary" id="var-value">1</span></li>
                                                    <li className="list-inline-item"><span className="btn btn-success"
                                                                                           id="btn-plus">+</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row pb-3">
                                            <div className="col d-grid">
                                                <button type="submit" className="btn btn-success btn-lg" name="submit"
                                                        value="buy">구매하기
                                                </button>
                                            </div>
                                            <div className="col d-grid">
                                                <button type="submit" className="btn btn-success btn-lg" name="submit"
                                                        value="addtocard">장바구니
                                                </button>
                                            </div>
                                        </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default CapDetail;