
import styles from "./topbar.module.css"
import logo from "../img/WhatsApp_Image_2023-11-16_at_16.10.46__1_-removebg-preview.png"


const TopBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" id={styles.nav}>
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#footer">  تواصل معنا   </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#pie">عدد المسلمين</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#WidghtLg">التقرير الشهري</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#chart">الاحصائيات</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#home">رسالتنا وصلت</a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <img src={logo} alt="" className={styles.img} />
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default TopBar