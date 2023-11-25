
import styles from "./home.module.css"

import imgHome from "../img/WhatsApp_Image_2023-11-24_at_10.31.33-removebg-preview (1).png"

const Home = () => {
    return (
        <div className={styles.home} id='home'>




            <div className={styles.parent}>
                <div>
                    <div className={styles.paragraphe}>
                        <p className={styles.title}>رسالتنا وصلت</p>
                        <div className={styles.parag}>
                            تحفيظ القرآن الكريم بمختلف الوسائل الممكنة، مع فهم المعاني والمقاصد وحسن الأداء وذلك باستعمال الطرق البيداغوجية والوسائل العصرية والوسائط كالإعلامية.
                            نشر القرآن وتوفير الظروف التي تسمح بذلك، كطبع المصاحف وإيجاد المكتبات وإقامة التربصات لتصحيح التلاوة وتوزيع المنح والمساعدات الوطنية والخارجية، تخصيص جوائز، تنشيطا لحفظة القرآن من الناشئين والكهول توزع عليهم فيما ينظم من مسابقات وتظاهرات ومهرجانات.
                            تمثيل الجمعيات القرآنية في الخارج.
                            تقديم الإرشاد والتوجيه إلى الجمعيات القرآنية.
                            توثيق الروابط بين حفاظ القرآن في الجمهورية التونسية والخارج.
                        </div>
                    </div>
                </div>
                <div className={styles.blocImg}>
                    <img src={imgHome} className={styles.imgHome} alt='' />
                </div>



            </div>

        </div>
    )
}

export default Home