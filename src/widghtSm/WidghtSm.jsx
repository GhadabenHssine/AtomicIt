import React from 'react'
import styles from "./widghtsm.module.css"
import iconHomme from "../img/images-removebg-preview.png"
import iconPh from "../img/2631844-200.png"
import iconOne from "../img/téléchargement (4).jpg"
import iconTwo from "../img/radio-quran-dh-lqran.jpg"
import iconTh from "../img/téléchargement (3).jpg"
import iconfor from "../img/IMGBN94954steg.jpg"
import iconfIVE from "../img/e599ec28ad9afcbc7eb5df83444a9f82.jpg"
const WidghtSm = () => {
    return (
        <div className={styles.WidghtSm}>

            <div className={styles.WidghtSmBlocOne}>

                <p className={styles.WidghtSmBlocOneTitle}>عدد المسلمين</p>

                <div className={styles.blocImg}>
                    <div className={styles.blocImgIcon}>
                        <img src={iconHomme} alt='' className={styles.imgIcon} />

                    </div>
                    <p className={styles.blocnum1}>  <span>المعلمين </span>  225</p>
                    <div className={styles.blocImgIcon}>
                        <img src={iconPh} alt='' className={styles.imgIcon} />
                    </div>

                    <p className={styles.blocnum2}> <span>الدعات </span> 225</p>
                </div>


                <p className={styles.titleblocT} >  <span className={styles.dot}>  . </span>العدد الإجمالي <span className={styles.titlebloc}>  500</span> </p>

                <p className={styles.titleblocTi}>عدد المعلمين لكل دولة </p>

                <div className={styles.boxs}>
                    <div className={styles.box1}>
                        <p className={styles.box1Title}>مصر</p>
                    </div>
                    <div className={styles.box2}>
                        <p className={styles.box1Title}>2</p>
                    </div>
                    <div className={styles.box3}>
                        <p className={styles.box1Title}>تونس</p>
                    </div>
                    <div className={styles.box4}>
                        <p className={styles.box1Title}>5</p>
                    </div>
                    <div className={styles.box5}>
                        <p className={styles.box1Title}>الجزائر</p>
                    </div>
                    <div className={styles.box6}>
                        <p className={styles.box1Title}>5</p>
                    </div>
                    <div className={styles.box7}>
                        <p className={styles.box1Title}>المغرب</p>
                    </div>
                    <div className={styles.box8}>
                        <p className={styles.box1Title}>7</p>
                    </div>
                    <div className={styles.box9}>
                        <p className={styles.box1Title}>ليبيا</p>
                    </div>
                    <div className={styles.box10}>
                        <p className={styles.box1Title}>6</p>
                    </div>
                </div>
            </div>

            <div className={styles.WidghtSmBlocTwo}>

                <div className={styles.titlebloc1} >
                    الجهات التي تدعمها
                </div>

                <div>
                    <img src={iconOne} alt="" className={styles.icon} />
                    <img src={iconTwo} alt="" className={styles.icon} />
                    <img src={iconTh} alt="" className={styles.icon} />
                    <img src={iconfor} alt="" className={styles.icon} />
                    <img src={iconfIVE} alt="" className={styles.icon} />
                    <img src={iconTh} alt="" className={styles.icon} />
                    <img src={iconfor} alt="" className={styles.icon} />
                    <img src={iconfIVE} alt="" className={styles.icon} />

                </div>


            </div>



        </div >
    )
}

export default WidghtSm