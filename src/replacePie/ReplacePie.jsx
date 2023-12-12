import React from 'react'
import styles from "./replace.module.css"

import imgCh from "../img/images-removebg-preview (1).png"

const ReplacePie = () => {
    return (
        <div className={styles.table} id="pie">
            <img src={imgCh} alt="" className={styles.tableImage} />
            <div className={styles.blocTable}>
                <table className="table" >
                    <thead>

                        <tr >
                            <th colspan="5" style={{ backgroundColor: "#434194" }}>

                                <p className={styles.title}>   معدل  النمو السنوي للتعريف بالإسلام
                                </p>
                            </th >
                        </tr>


                        <tr >
                            <th style={{ backgroundColor: "#00b2e1", color: "white" }} scope="col">الشهر</th>
                            <th style={{ backgroundColor: "#00b2e1", color: "white" }} scope="col">2020 م</th>
                            <th style={{ backgroundColor: "#00b2e1", color: "white" }} scope="col">2021 م</th>
                            <th style={{ backgroundColor: "#00b2e1", color: "white" }} scope="col">2022 م</th>
                            <th style={{ backgroundColor: "#00b2e1", color: "white" }} scope="col">2023 م</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <th scope="row" style={{ backgroundColor: "  #d4d2e0", color: "#6f7886" }}>يناير</th>
                            <td>2</td>
                            <td>2</td>
                            <td>3</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ backgroundColor: "  #d4d2e0", color: "#6f7886" }} >يناير</th>
                            <td>9</td>
                            <td>11</td>

                            <td>15</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ backgroundColor: "  #d4d2e0", color: "#6f7886" }}>مارس</th>
                            <td >18</td>

                            <td >18</td>
                            <td>29</td>
                            <td>35</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ backgroundColor: "  #d4d2e0", color: "#6f7886" }}>إبريل</th>
                            <td >32</td>
                            <td >35</td>
                            <td>48</td>
                            <td>56</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ backgroundColor: "  #d4d2e0", color: "#6f7886" }}>مايو</th>
                            <td >56</td>
                            <td >59</td>
                            <td>72</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ backgroundColor: "  #d4d2e0", color: "#6f7886" }}>يونيو</th>
                            <td >90</td>
                            <td >96</td>
                            <td>102</td>
                            <td>159</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ backgroundColor: "  #d4d2e0", color: "#6f7886" }}>يوليو</th>
                            <td >159</td>
                            <td >189</td>
                            <td>202</td>
                            <td>309</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ backgroundColor: "  #d4d2e0", color: "#6f7886" }}>أغسطس</th>
                            <td >309</td>
                            <td >389</td>
                            <td>441</td>
                            <td>512</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ backgroundColor: "  #d4d2e0", color: "#6f7886" }}>سبتمبر</th>
                            <td >512</td>
                            <td >652</td>
                            <td>789</td>
                            <td>954</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ backgroundColor: "  #d4d2e0", color: "#6f7886" }}>أكتوبر </th>
                            <td >954</td>
                            <td >1054</td>
                            <td>1096</td>
                            <td>1285</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ backgroundColor: "  #d4d2e0", color: "#6f7886" }}>نوفمبر</th>
                            <td >1285</td>
                            <td >1302</td>
                            <td>1485</td>
                            <td>1536</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ backgroundColor: "  #d4d2e0", color: "#6f7886" }}>ديسمبر</th>
                            <td >1536</td>
                            <td >1616</td>
                            <td>1689</td>
                            <td>1987</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ReplacePie