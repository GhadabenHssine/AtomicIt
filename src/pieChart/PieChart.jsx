import React from "react";
import { Chart } from "react-google-charts";
import { Table } from 'react-bootstrap';
import styles from "./pieChart.module.css"

export const data = [
    ["Task", "Hours per Day"],
    ["أغسطس", 11],
    ["يوليو", 2],
    ["يونيو", 2],
    ["مايو", 2],
    ["إبريل", 7],
    ["مارس", 7],
    ["فبراير", 7],
    ["يناير", 7],
    ["ديسمبر", 7],
    ["نوفمبر", 7],
    ["أكتوبر", 7],
    ["سبتمبر", 7],

];

// Define the PieChart component
const PieChart = () => (
    <div className={styles.containerPie} id="pie">
        <div>
            <h3 className={styles.title}>المعلمين</h3>

            <Table striped bordered hover className={styles.con}>
                <thead>
                    <tr>


                        <th className={styles.th}>مصر </th>
                        <th className={styles.th}>تونس</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={styles.td}>2</td>
                        <td className={styles.td}>5</td>

                    </tr>



                </tbody>
            </Table>
        </div>

        <div>
            <Chart
                chartType="PieChart"
                data={data}

                width={"100%"}
                height={"400px"}
            />
        </div>


    </div>
);

// Export the PieChart component
export default PieChart;
