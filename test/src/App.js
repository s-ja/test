import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data'


function App() {

  let [product, setProduct] = useState(data);
  let saled_price = product[0].price / product[0].sale_percent * 100;
  let [initial_count, setInital_count] = useState(1);
  let final_price = saled_price*initial_count

  return (
    <div className="App">
      <article className="product_container padding_16">
            <div className="product">
                <div className="product_img"><img src={process.env.PUBLIC_URL +'/product.png'} alt='래피젠 코로나 자가 검사 키트 2개입X1박스' className="product_img"/></div>
                {/* <h5 className="product_title"> 래피젠 코로나 자가 검사 키트<br/>2개입X1박스</h5> */}
                <h5 className="product_title">{product[0].title}</h5>
                <p className="product_price under_line padding_16">
                  <div className='salePercent'>
                    <span className='a11y'>{product[0].sale_percent}</span>
                    <span>88%</span>
                  </div>
                  <div class="price">
                    <div class="original_price">
                      <span className='a11y'>정상가</span>
                      <span>{product[0].price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</span>
                    </div>
                    <div class="sale_price">
                      <span className='a11y'>판매가</span>
                      <span>{saled_price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</span>
                    </div>
                  </div>
                </p>
                <p className='product_delivery under_line padding_16'>
                  <div class="delivery_fee">
                    <div>택배배송</div>
                    <div>{product[0].delivery.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</div>
                    <div>(주문시 결제)</div>
                  </div>
                  <div className='delivery_per'>
                    {product[0].delivery_per}개마다 부과
                  </div>
                </p>
                <p className='product_number under_line padding_16'>
                  <div className='number_wrapper'>
                    <button className='number_button'>-</button>
                    <div className='adjusted_number'>1</div>
                    <button className='number_button'>+</button>
                  </div>
                </p>
                <p className='product_final_price padding_16'>
                  <div className='mark_as_price'>
                    총 상품 금액
                    <button className='help_button'>
                      <img src={process.env.PUBLIC_URL +'/help_button.png'} alt='상품금액 배송비 안내 버튼'/>
                    </button>
                    </div>
                  <div className='number_and_price'>
                    <div className='final_number'>총 수량 {initial_count}개</div>
                    <div className='final_price'>{final_price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</div>
                  </div>
                </p>
                <p className='product_purchase'>
                  <button className='purchase_button'>
                    <img src={process.env.PUBLIC_URL +'/purchase_normal.png'} alt='구매하기 버튼'/>
                    구매하기
                  </button>
                </p>
            </div>
      </article>
    </div>
  );
}

export default App;
