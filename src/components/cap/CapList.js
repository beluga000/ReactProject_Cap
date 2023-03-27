import {useState, useEffect} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

function CapList(){
    const pageChange=(page)=>{
        axios.get('http://localhost/cap/cap_list_react',{
            params:{
                page:page
            }
        }).then(response=>{
            console.log(response.data)
            setCapList(response.data)
        })
        axios.get('http://localhost/cap/cap_page_react',{
            params:{
                page:page
            }
        }).then(response=>{
            console.log(response.data)
            setCurpage(response.data.curpage)
            setTotalpage(response.data.totalpage)
            setStartpage(response.data.startpage)
            setEndpage(response.data.endpage)
        })
    }

    const [capList, setCapList] = useState([])
    const [curpage, setCurpage] = useState(1)
    const [totalpage, setTotalpage] = useState(0)
    const [startpage, setStartpage] = useState(0)
    const [endpage, setEndpage] = useState(0)
    useEffect(()=>{
        axios.get('http://localhost/cap/cap_list_react',{
            params:{
                page:curpage
            }
        }).then(response=>{
            console.log(response.data)
            setCapList(response.data)
        })
    },[])
    useEffect(()=>{
        axios.get('http://localhost/cap/cap_page_react',{
            params:{
                page:curpage
            }
        }).then(response=>{
            console.log(response.data)
            setCurpage(response.data.curpage)
            setTotalpage(response.data.totalpage)
            setStartpage(response.data.startpage)
            setEndpage(response.data.endpage)
        })
    },[])

    let html = capList.map((cap, index)=>
        <div className="col-md-4">
            <div className="card mb-4 product-wap rounded-0">
                <NavLink to={"/cap/cap_detail/"+cap.no}>
                <div className="card rounded-0">

                    <img className="card-img rounded-0 img-fluid" src={cap.poster}/>

                    <div
                        className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled">
                            <li><NavLink className="btn btn-success text-white" to="shop-single.html"><i
                                className="far fa-heart"></i></NavLink></li>
                            <li><NavLink className="btn btn-success text-white mt-2"
                                   to="shop-single.html"><i className="far fa-eye"></i></NavLink></li>
                            <li><NavLink className="btn btn-success text-white mt-2"
                                   to="shop-single.html"><i className="fas fa-cart-plus"></i></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                </NavLink>
                <div className="card-body">
                    <NavLink to={"/cap/cap_detail/"+cap.no} className="h3 text-decoration-none">{cap.koname}</NavLink>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                        <li>{cap.enname}</li>
                        <li className="pt-2">
                                            <span
                                                className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                            <span
                                className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                            <span
                                className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                            <span
                                className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                            <span
                                className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                        </li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1">
                        <li>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-muted fa fa-star"></i>
                            <i className="text-muted fa fa-star"></i>
                        </li>
                    </ul>
                    <p className="text-center mb-0">{cap.price}원</p>
                </div>
            </div>
        </div>
    )





    let row = []
    if(startpage>1){
        row.push(<li><a href="#" onClick={()=>pageChange(startpage-1)}>&laquo; Previous</a></li>)
    }
    for(let i=startpage;i<=endpage;i++){
        if(i==curpage){
            row.push(<li className={"current"}><strong>{i}</strong></li>)
        }else{
            row.push(<li><a href="#" onClick={()=>pageChange(i)}>{i}</a></li>)
        }
    }
    if(endpage<totalpage){
        row.push(<li><a href="#" onClick={()=>pageChange(endpage+1)}>Next &raquo;</a></li>)
    }
    return(
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="text-center custom-style1">
                           <span style={{"fontSize":"50px","fontWeight":"900px"}}>모자</span>

                            <p>1920년부터 시작된 모자에 대한 뉴에라의 노력은 멈추지 않습니다.<br/>
                                100년의 노하우와 기술력으로 탄생한 뉴에라의 다양한 실루엣별 제품들을 만나보세요.</p>
                        </div>

                    </div>
                    <div className="custom-style"></div>
                    <div className="row">
                        {html}
                    </div>
                    <div className="row">
                        <ul className="pagination pagination-lg justify-content-end">
                            {row}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CapList;