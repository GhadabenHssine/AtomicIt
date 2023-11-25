import React from 'react'
import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className={styles.footer} id="footer">


            <div className={styles.items}>

                <i className="fa-brands fa-whatsapp"></i>
                <i className="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-youtube"></i>

            </div>
            <div>
                كل الحقوق محفوظة بواسطة منصة بلاغ 2023
            </div>

        </div>
    )
}

export default Footer