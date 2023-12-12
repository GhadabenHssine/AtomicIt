import React from 'react'
import styles from "./porcentage.module.css"
import parametre from "../img/WhatsApp_Image_2023-11-16_at_16.10.46__1_-removebg-preview.png"


const Porcentage = () => {
    return (
        <div className={styles.porcentage}>
            <div className={styles.partieBlue}>
                <div className={styles.blocPar}>
                    <div className={styles.partieone}>
                        <i className="fa-solid fa-earth-americas" id={styles.earth}></i>
                        أفاق العالم
                        <br />
                        <p className={styles.titlelogo}>AFAQ ALEALAM</p>
                    </div>
                    <div className={styles.partieTwo}>
                        <p className={styles.titleTwo}>المجموع الكلى من بدايتنا 9/10/2022</p>
                        <p className={styles.paragrapheOne}>
                            <span className={styles.suTitle}>  شهر  </span>
                            سبتمبر 2023 م

                        </p>
                        <p>
                            إذ ارتفع أداء نشاط التعدين والمحاجر بنحو 0.5%، كما حقق نشاط الصناعة التحويلية ونشاط إمدادات الكهرباء ا
                        </p>
                    </div>

                </div>
                <div>
                    <img src={parametre} alt="parametre" className={styles.parametre} />

                </div>
            </div>


            <div className={styles.blocTwo}>

                <div className={styles.cercleOne}>
                    <div className={styles.content}>
                        <p className={styles.numberPo}>13.582.153</p>
                        <p className={styles.paragraphePo}>رسالتنا وصلت</p>
                    </div>
                </div>

                <div className={styles.cercleTwo}>
                    <div className={styles.contenttwo}>
                        <p className={styles.numberPo}>57.611</p>
                        <p className={styles.paragraphePo}>عدد الذين تم تعريفهم بالإسلام</p>
                    </div>
                </div>
                <div className={styles.cercleThree}>
                    <div className={styles.contentthree}>
                        <p className={styles.numberPo}>11.587</p>
                        <p className={styles.paragraphePo}>عدد الدخلين في الأسلام</p>
                    </div>
                </div>

                <div className={styles.cercleFor}>
                    <div className={styles.contentFor}>
                        <p className={styles.numberPo}>241</p>
                        <p className={styles.paragraphePo}>عدد مجموعات تعلم المسلم الجديد</p>
                    </div>
                </div>
                <div className={styles.cercleSexe}>
                    <div className={styles.contentfive}>
                        <p className={styles.numberPo}>6.522</p>
                        <p className={styles.paragraphePo}>عدد الخرجين </p>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Porcentage