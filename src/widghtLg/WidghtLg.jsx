
import styles from "./widghtLg.module.css"

import { Table } from 'react-bootstrap';
import cal from "../img/calender.png"


const WidghtLg = () => {
    return (
        <div className={styles.WidghtLg} id="WidghtLg">


            <div className={styles.container}>
                <table className="table" id={styles.table}>
                    <thead>
                        <tr>
                            <th scope="col" style={{ backgroundColor: "#00b2e1", color: "white", textAlign: "center" }}></th>
                            <th scope="col" style={{ backgroundColor: "#00b2e1", color: "white", textAlign: "center" }}>	فرنسي</th>
                            <th scope="col" style={{ backgroundColor: "#00b2e1", color: "white", textAlign: "center" }}>برتغالي</th>
                            <th scope="col" style={{ backgroundColor: "#00b2e1", color: "white", textAlign: "center" }}>	الإجمالي</th>
                            <th scope="col" style={{ backgroundColor: "#00b2e1", color: "white", textAlign: "center" }}>	المجموع الكلى من بدايتنا 9/10/2022</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        <tr className="table-light">
                            <th scope="row" style={{ backgroundColor: "  #d4d2e0", color: "#6f7886" }}>رسالتنا وصلت</th>
                            <td style={{ backgroundColor: "#fff" }}>13.582.153</td>
                            <td style={{ backgroundColor: "#fff" }}>318.970</td>
                            <td style={{ backgroundColor: "#fff" }}>274.730</td>
                            <td style={{ backgroundColor: "#fff" }}>13.582.153</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ backgroundColor: "  #d4d2e0", color: "#6f7886" }}>عدد الذين تم تعريفهم بالإسلام</th>
                            <td>949</td>
                            <td>927	</td>
                            <td>1.876</td>
                            <td>57.611</td>
                        </tr>
                        <tr className="table-light">
                            <th scope="row" style={{ backgroundColor: "  #d4d2e0", color: "#6f7886" }}>عدد الدخلين في الأسلام</th>
                            <td style={{ backgroundColor: "#fff" }}>269	</td>
                            <td style={{ backgroundColor: "#fff" }}>447</td>
                            <td style={{ backgroundColor: "#fff" }}>716</td>
                            <td style={{ backgroundColor: "#fff" }}>11.587</td>

                        </tr>
                        <tr>
                            <th scope="row" style={{ backgroundColor: "  #d4d2e0", color: "#6f7886" }}>عدد مجموعات تعلم المسلم الجديد</th>
                            <td>20</td>
                            <td>12</td>
                            <td>32</td>
                            <td>241</td>
                        </tr>
                        <tr className="table-light">
                            <th scope="row" style={{ backgroundColor: "  #d4d2e0", color: "#6f7886" }}>عدد الخرجين</th>
                            <td style={{ backgroundColor: "#fff" }} >126</td>
                            <td style={{ backgroundColor: "#fff" }}>280</td>
                            <td style={{ backgroundColor: "#fff" }}>406</td>
                            <td style={{ backgroundColor: "#fff" }} >6.522</td>

                        </tr>
                    </tbody>
                </table>


                <div className={styles.blocCalender}>
                    <img src={cal} alt="" className={styles.calen} />
                    <p className={styles.titleCale}>التقرير الشهري<br /> لشهر  سبتمبر 2023</p>

                </div>

            </div>

        </div>
    )
}

export default WidghtLg