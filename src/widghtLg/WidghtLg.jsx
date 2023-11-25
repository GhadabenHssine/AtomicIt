
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
                            <th scope="col"></th>
                            <th scope="col">	فرنسي</th>
                            <th scope="col">برتغالي</th>
                            <th scope="col">	الإجمالي</th>
                            <th scope="col">	المجموع الكلى من بدايتنا 9/10/2022</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        <tr className="table-light">
                            <th scope="row">رسالتنا وصلت</th>
                            <td>13.582.153</td>
                            <td>318.970</td>
                            <td>274.730</td>
                            <td>13.582.153</td>
                        </tr>
                        <tr>
                            <th scope="row">عدد الذين تم تعريفهم بالإسلام</th>
                            <td>949</td>
                            <td>927	</td>
                            <td>1.876</td>
                            <td>57.611</td>
                        </tr>
                        <tr className="table-light">
                            <th scope="row">عدد الدخلين في الأسلام</th>
                            <td >269	</td>
                            <td>447</td>
                            <td>716</td>
                            <td>11.587</td>

                        </tr>
                        <tr>
                            <th scope="row">عدد مجموعات تعلم المسلم الجديد</th>
                            <td>20</td>
                            <td>12</td>
                            <td>32</td>
                            <td>241</td>
                        </tr>
                        <tr className="table-light">
                            <th scope="row">عدد الخرجين</th>
                            <td >126</td>
                            <td>280</td>
                            <td >406</td>
                            <td >6.522</td>

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