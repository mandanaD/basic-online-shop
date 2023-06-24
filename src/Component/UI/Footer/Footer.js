import "./Footer.css"
import {Facebook, Instagram, Twitter} from "react-feather";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="Footer-container">
                <div className="row">
                    <div className="footer-col">
                        <h4>اطلاعات </h4>
                        <ul>
                            <li><p>درباره ما</p></li>
                            <li><p>همکاری با ما</p></li>
                            <li><p>تماس با ما</p></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>خدمات مشتریان</h4>
                        <ul>
                            <li><p>پاسخ به پرسش‌های متداول</p></li>
                            <li><p>رویه‌های بازگرداندن کالا</p></li>
                            <li><p>روش های پرداخت</p></li>
                            <li><p>حریم خصوصی</p></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>خرید</h4>
                        <ul>
                            <li><p>شومیز</p></li>
                            <li><p>کفش</p></li>
                            <li><p>کت</p></li>
                            <li><p>تاپ</p></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>ما را دنبال کنید</h4>
                        <div className="social-links">
                            <p>
                                <Instagram />
                            </p>
                            <p>
                                <Twitter/>
                            </p>
                            <p>
                                <Facebook/>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div id={'LastPart'}>
                <div>
                    کليه حقوق اين سايت متعلق به فروشگاه اینترنتی آنایس می‌باشد.
                </div>
                <div>
                    2023 © Copyright
                </div>
            </div>
        </footer>
    );
}

export default Footer;