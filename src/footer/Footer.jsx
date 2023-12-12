import React from 'react'
import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className={styles.footer} id="footer">


            <div className={styles.items}>

                <i className="fa-brands fa-whatsapp" id={styles.iconFooter}></i>
                <i className="fa-brands fa-twitter" id={styles.iconFooter}></i>
                <i class="fa-brands fa-facebook" id={styles.iconFooter}></i>
                <i class="fa-brands fa-youtube" id={styles.iconFooter}></i>

            </div>
            <div className={styles.titleFooter}>
                كل الحقوق محفوظة بواسطة منصة بلاغ 2023
            </div>

        </div>
    )
}

export default Footer