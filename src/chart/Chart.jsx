import React from 'react'
import styles from "./chart.module.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {



    const data = [
        { name: 'يناير', uv: 1309, },
        { name: 'فبراير', uv: 1041, },
        { name: 'مارس', uv: 1242, },
        { name: 'إبريل', uv: 945, },
        { name: 'مايو', uv: 981, },
        { name: 'يونيو ', uv: 1294, },
        { name: 'يوليو', uv: 1259, },
        { name: 'أغسطس ', uv: 950, },
        { name: 'سبتمبر', uv: 716, },
        { name: 'أكتوبر', uv: 224, },
        { name: 'نوفمبر', uv: 450, },
        { name: 'ديسمبر', uv: 1176, },



    ];
    return (
        <div className={styles.blChart}>


            <div className={styles.featured1} id='chart'>

                <div className={styles.featuredItem1}>
                    <div className={styles.featuredItem}>
                        <span className={styles.featuredMonyRate}><i id={styles.icon} className="fa-solid fa-language"></i>  </span>


                        <span></span>
                        <div className={styles.featuredMoneyContainer}>

                            <div className={styles.featuredMony}>
                                3
                            </div>
                            <div className={styles.featuredTitle1}>
                                اللغات
                            </div>
                        </div>
                    </div>






                </div>


                <div className={styles.featuredItem2}>
                    <div className={styles.featuredItem}>
                        <span className={styles.featuredMonyRate}>
                            <i id={styles.icon} className="fa-solid fa-language"></i>
                        </span>


                        <span></span>
                        <div className={styles.featuredMoneyContainer}>

                            <div className={styles.featuredMony}>
                                5
                            </div>
                            <div className={styles.featuredTitle1}>
                                الدعات
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.featuredItem3}>
                    <div className={styles.featuredItem}>
                        <span className={styles.featuredMonyRate}>
                            <i id={styles.icon} className="fa-solid fa-chalkboard-user"></i>
                        </span>


                        <span></span>
                        <div className={styles.featuredMoneyContainer}>

                            <div className={styles.featuredMony}>
                                5
                            </div>
                            <div className={styles.featuredTitle1}>
                                المعلمين
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.featuredItem4}>


                    <div className={styles.featuredItem}>
                        <span className={styles.featuredMonyRate}>
                            <i id={styles.icon} className="fa-solid fa-globe"></i>
                        </span>


                        <span></span>
                        <div className={styles.featuredMoneyContainer}>

                            <div className={styles.featuredMony}>
                                3
                            </div>
                            <div className={styles.featuredTitle1}>
                                الدول
                            </div>
                        </div>
                    </div>


                </div>

            </div>






            <div style={{ textAlign: 'right' }} className={styles.parent}>

                <div className={styles.ChartR}>


                    <ResponsiveContainer  >
                        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />

                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>

                    </ResponsiveContainer>

                </div>
                <div className={styles.bloc}>

                    <div className={styles.blocCon}>
                        <div className={styles.blocTitle}>اللغات المستهدفة</div>
                        <div className={styles.blocdes}>
                            <div className={styles.box1}>فرنسي : 2</div>
                            <div className={styles.box2}>برتغالي : 1</div>
                        </div>


                    </div>

                    <div className={styles.blocCon}>
                        <div className={styles.blocTitle}>اللغات المستهدفة</div>
                        <div className={styles.blocdes}>
                            <div className={styles.box1}>فرنسي : 2</div>
                            <div className={styles.box2}>برتغالي : 1</div>
                        </div>


                    </div>

                    <div className={styles.blocCon}>
                        <div className={styles.blocTitle}>اللغات المستهدفة</div>
                        <div className={styles.blocdes}>
                            <div className={styles.box1}>فرنسي : 2</div>
                            <div className={styles.box2}>برتغالي : 1</div>
                        </div>


                    </div>
                </div>
            </div>


        </div>
    )
}

export default Chart