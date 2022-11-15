import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useApi from '../../Hooks/useApi'
import CategoryItem from './CategoryItem'

const CategoryDetail = (props) => {
  console.log('detailprops', props)
  const params = useParams()
  console.log('params', params)
  const api = useApi()

  const [categoryDetail, setCategoryDetail] = useState(null)

  const productArr = []

  useEffect(() => {
    const queryData = {}
    queryData['productTaxons.taxon.code'] = params.categoryCode

    //api.get("shop/products?productTaxons.taxon.code="+params.categoryCode)

    api
      .get(`shop/products`, { params: queryData })
      .then((response) => {
        console.log('categorydetailRESPONSE', response)
        setCategoryDetail(response.data['hydra:member'])
      })
      .catch((err) => {
        console.log('categorydetailERR', err)
      })
  }, [])

  if (categoryDetail === null) {
    return <div>...loading...</div>
  }
  categoryDetail.map((item, index) => {
    productArr.push(
      <CategoryItem
        key={index}
        name={item.name}
        images={item.images}
        code={item.code}
      />,
    )
  })

  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
            <div id="cssmenu">
              <ul>
                <li className="has-sub">
                  <a href="#">CATEGORY</a>
                  <ul>
                    <li>
                      <a href="#">Smart Phones</a>
                    </li>
                    <li>
                      <a href="#">Cell Phones</a>
                    </li>
                    <li className="last">
                      <a href="#">Android Phones</a>
                    </li>
                  </ul>
                </li>
                <li className="has-sub">
                  <a href="#">Brand (07)</a>
                  <ul>
                    <li>
                      <label>
                        <input type="checkbox" />
                        <span className="checkbox-list">Apple</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" />
                        <span className="checkbox-list">Google</span>
                      </label>
                    </li>
                  </ul>
                </li>
                <li className="has-sub">
                  <a href="#">Price</a>
                  <ul>
                    <li>
                      <label>
                        <input type="checkbox" />
                        <span className="checkbox-list">500-1000</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" />
                        <span className="checkbox-list">1000-2000</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" />
                        <span className="checkbox-list">2000-5000</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" />
                        <span className="checkbox-list">5000-10000</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" />
                        <span className="checkbox-list">10000-1800</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" />
                        <span className="checkbox-list">18000-25000</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" />
                        <span className="checkbox-list">Above-25000</span>
                      </label>
                    </li>
                  </ul>
                </li>
                <li className="has-sub">
                  <a href="#">Screen Size</a>
                  <ul>
                    <li>
                      <label>
                        <input type="checkbox" />
                        <span className="checkbox-list">3 - 3.9 inches</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" />
                        <span className="checkbox-list">4 - 4.9 inches</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" />
                        <span className="checkbox-list">5 - 5.9 inches</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" />
                        <span className="checkbox-list">
                          6 inch &amp; above
                        </span>
                      </label>
                    </li>
                  </ul>
                </li>
                <li className="has-sub">
                  <a href="#">PROCESSOR CORES</a>
                  <ul>
                    <li>
                      <label>
                        <input type="checkbox" />
                        <span className="checkbox-list">Hexa Core</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" />
                        <span className="checkbox-list">Octa Core</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" />
                        <span className="checkbox-list">Quad Core</span>
                      </label>
                    </li>
                  </ul>
                </li>
                <li className="has-sub">
                  <a href="#">FEATURES</a>
                  <ul>
                    <li>
                      <label>
                        <input type="checkbox" />
                        <span className="checkbox-list">3G Support</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" />
                        <span className="checkbox-list">4G Support</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" />
                        <span className="checkbox-list">Duel Camera</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" />
                        <span className="checkbox-list">Expandable Memory</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" />
                        <span className="checkbox-list">FM Radio</span>
                      </label>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-8 col-xs-12">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb10 alignright">
                <form>
                  <div className="select-option form-group">
                    <select name="select" className="form-control">
                      <option value="">Select</option>
                      <option value="">Best Match</option>
                      <option value="">Low Price</option>
                      <option value="">High Price</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
            <div className="row">{productArr}</div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="st-pagination">
                  <ul className="pagination">
                    <li>
                      <a href="#" aria-label="previous">
                        <span aria-hidden="true">Previous</span>
                      </a>{' '}
                    </li>
                    <li className="active">
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      {' '}
                      <a href="#" aria-label="Next">
                        <span aria-hidden="true">Next</span>
                      </a>{' '}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryDetail
